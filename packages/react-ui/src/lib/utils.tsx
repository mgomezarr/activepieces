import { Type } from "@sinclair/typebox";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { FormatRegistry } from '@sinclair/typebox'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export enum ValidationFormats {
  EMAIL = 'email',
}

let globalFormatsAdded: boolean = false;

if (!globalFormatsAdded) {
  const EMAIL_REGEX: string = "^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$";
  FormatRegistry.Set(ValidationFormats.EMAIL, (value) => EMAIL_REGEX.match(value) !== null);
  globalFormatsAdded = true;
}


export const formatUtils = {
  formatDate(date: Date) {
    return Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).format(date);
  },
  formatDuration(durationMs: number | undefined, short?: boolean): string {
    if (durationMs === undefined) {
      return '-';
    }
    if (durationMs < 1000) {
      return short ? `${durationMs} ms` : `${durationMs} milliseconds`;
    }
    const seconds = Math.floor(durationMs / 1000);
    const minutes = Math.floor(seconds / 60);

    if (seconds < 60) {
      return short ? `${seconds} s` : `${seconds} seconds`;
    }

    if (minutes > 0) {
      const remainingSeconds = seconds % 60;
      return short
        ? `${minutes} min ${remainingSeconds > 0 ? `${remainingSeconds} s` : ''}`
        : `${minutes} minutes${remainingSeconds > 0 ? ` ${remainingSeconds} seconds` : ''}`;
    }

    return short ? `${seconds} s` : `${seconds} seconds`;
  }
}
