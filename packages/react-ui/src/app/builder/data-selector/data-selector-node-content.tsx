import { ChevronDown, ChevronUp } from 'lucide-react';

import { flowHelper } from '@activepieces/shared';

import { useApRipple } from '../../../components/theme-provider';
import { Button } from '../../../components/ui/button';
import { PieceIcon } from '../../../features/pieces/components/piece-icon';
import { piecesHooks } from '../../../features/pieces/lib/pieces-hook';
import { useBuilderStateContext } from '../builder-hooks';

import { MentionTreeNode } from './data-selector-utils';

const ToggleIcon = ({ expanded }: { expanded: boolean }) => {
  const toggleIconSize = 15;
  return expanded ? (
    <ChevronUp height={toggleIconSize} width={toggleIconSize}></ChevronUp>
  ) : (
    <ChevronDown height={toggleIconSize} width={toggleIconSize}></ChevronDown>
  );
};

type DataSelectorNodeContentProps = {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
  depth: number;
  node: MentionTreeNode;
};
const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    if (event.target) {
      (event.target as HTMLDivElement).click();
    }
  }
};

const DataSelectorNodeContent = ({
  node,
  expanded,
  setExpanded,
  depth,
}: DataSelectorNodeContentProps) => {
  const flowVersion = useBuilderStateContext((state) => state.flowVersion);
  const insertMention = useBuilderStateContext((state) => state.insertMention);

  const [ripple, rippleEvent] = useApRipple();
  const step = !node.data.isSlice
    ? flowHelper.getStep(flowVersion, node.data.propertyPath)
    : undefined;
  const stepMetadata = step
    ? piecesHooks.useStepMetadata({ step }).data
    : undefined;

  const showInsertButton =
    !node.data.isSlice &&
    !(
      node.children &&
      node.children.length > 0 &&
      node.children[0].data.isTestStepNode
    );
  const showNodeValue = !node.children && !!node.data.value;

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyPress}
      ref={ripple}
      onClick={(e) => {
        rippleEvent(e);
        if (node.children && node.children.length > 0) {
          setExpanded(!expanded);
        } else if (insertMention) {
          insertMention(node.data.propertyPath);
        }
      }}
      className="w-full p-ripple select-none focus:outline-none hover:bg-accent focus:bg-accent focus:bg-opacity-75 hover:bg-opacity-75 cursor-pointer group"
    >
      <div className="flex-grow flex items-center  gap-2 min-h-[48px] pr-3 select-none">
        <div
          style={{
            minWidth: `${depth * 25 + (depth === 0 ? 0 : 25) + 18}px`,
          }}
        ></div>
        {stepMetadata && (
          <div className="flex-shrink-0">
            <PieceIcon
              displayName={stepMetadata.displayName}
              logoUrl={stepMetadata.logoUrl}
              showTooltip={false}
              circle={false}
              border={false}
              size="sm"
            ></PieceIcon>
          </div>
        )}
        <div className="flex-shrink-0"> {node.data.displayName}</div>

        {showNodeValue && (
          <>
            <div className="flex-shrink-0">:</div>
            <div className="flex-1  text-primary truncate ">
              {`${node.data.value}`}
            </div>
          </>
        )}

        <div className="ml-auto flex flex-shrink-0 gap-2 items-center">
          {showInsertButton && (
            <Button
              className="z-50 hover:opacity-100 opacity-0 group-hover:opacity-100 focus:opacity-100"
              variant="basic"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                if (insertMention) {
                  insertMention(node.data.propertyPath);
                }
              }}
            >
              Insert
            </Button>
          )}
          {node.children && node.children.length > 0 && (
            <div className="flex-shrink-0  pr-5">
              <ToggleIcon expanded={expanded}></ToggleIcon>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
DataSelectorNodeContent.displayName = 'DataSelectorNodeContent';
export { DataSelectorNodeContent };
