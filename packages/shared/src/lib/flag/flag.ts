import { BaseModel } from '../common/base-model'
import { ApId } from '../common/id-generator'

export type FlagId = ApId

export type Flag = {
    value: unknown
} & BaseModel<FlagId>

export enum ApEnvironment {
    PRODUCTION = 'prod',
    DEVELOPMENT = 'dev',
    TESTING = 'test',
}

export enum ApEdition {
    COMMUNITY = 'ce',
    ENTERPRISE = 'ee',
    CLOUD = 'cloud',
}

export enum ApFlagId {
    BILLING_ENABLED = 'BILLING_ENABLED',
    CLOUD_AUTH_ENABLED = 'CLOUD_AUTH_ENABLED',
    COPILOT_ENABLED = 'COPILOT_ENABLED',
    CURRENT_VERSION = 'CURRENT_VERSION',
    EDITION = 'EDITION',
    EMAIL_AUTH_ENABLED = 'EMAIL_AUTH_ENABLED',
    ENVIRONMENT = 'ENVIRONMENT',
    FRONTEND_URL = 'FRONTEND_URL',
    LATEST_VERSION = 'LATEST_VERSION',
    OWN_AUTH2_ENABLED = 'OWN_AUTH2_ENABLED',
    PLATFORM_CREATED = 'PLATFORM_CREATED',
    PRIVACY_POLICY_URL = 'PRIVACY_POLICY_URL',
    PIECES_SYNC_MODE = 'PIECES_SYNC_MODE',
    PRIVATE_PIECES_ENABLED = 'PRIVATE_PIECES_ENABLED',
    PROJECT_MEMBERS_ENABLED = 'PROJECT_MEMBERS_ENABLED',
    SANDBOX_RUN_TIME_SECONDS = 'SANDBOX_RUN_TIME_SECONDS',
    SHOW_ACTIVITY_LOG = 'SHOW_ACTIVITY_LOG',
    SHOW_BILLING = 'SHOW_BILLING',
    SHOW_BLOG_GUIDE = 'SHOW_BLOG_GUIDE',
    INSTALL_PROJECT_PIECES_ENABLED = 'INSTALL_PROJECT_PIECES_ENABLED',
    MANAGE_PROJECT_PIECES_ENABLED = 'MANAGE_PROJECT_PIECES_ENABLED',
    SHOW_COMMUNITY = 'SHOW_COMMUNITY',
    SHOW_COPILOT = 'SHOW_COPILOT',
    SHOW_DOCS = 'SHOW_DOCS',
    SHOW_GIT_SYNC = 'SHOW_GIT_SYNC',
    SHOW_PLATFORM_DEMO = 'SHOW_PLATFORM_DEMO',
    SHOW_POWERED_BY_AP = 'SHOW_POWERED_BY_AP',
    SHOW_SIGN_UP_LINK = 'SHOW_SIGN_UP_LINK',
    SIGN_UP_ENABLED = 'SIGN_UP_ENABLED',
    SUPPORTED_APP_WEBHOOKS = 'SUPPORTED_APP_WEBHOOKS',
    TELEMETRY_ENABLED = 'TELEMETRY_ENABLED',
    TEMPLATES_PROJECT_ID = 'TEMPLATES_PROJECT_ID',
    TERMS_OF_SERVICE_URL = 'TERMS_OF_SERVICE_URL',
    THEME = 'THEME',
    THIRD_PARTY_AUTH_PROVIDER_REDIRECT_URL = 'THIRD_PARTY_AUTH_PROVIDER_REDIRECT_URL',
    THIRD_PARTY_AUTH_PROVIDERS_TO_SHOW_MAP = 'THIRD_PARTY_AUTH_PROVIDERS_TO_SHOW_MAP',
    USER_CREATED = 'USER_CREATED',
    WEBHOOK_URL_PREFIX = 'WEBHOOK_URL_PREFIX',
}
