import type { ColumnType } from 'kysely'
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
    ? ColumnType<S, I | undefined, U>
    : ColumnType<T, T | undefined, T>
export type Timestamp = ColumnType<Date, Date | string, Date | string>

export const NumberStatus = {
    ACTIVE: 'ACTIVE',
    INVALID: 'INVALID',
    INACTIVE: 'INACTIVE',
} as const
export type NumberStatus = (typeof NumberStatus)[keyof typeof NumberStatus]
export const PersonaStatus = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
    BLACKLISTED: 'BLACKLISTED',
    UNSUBSCRIBED: 'UNSUBSCRIBED',
} as const
export type PersonaStatus = (typeof PersonaStatus)[keyof typeof PersonaStatus]
export const Source = {
    BROADCAST: 'BROADCAST',
    INVITE_LINK: 'INVITE_LINK',
    STAFF_IMPORT: 'STAFF_IMPORT',
    ADMIN_IMPORT: 'ADMIN_IMPORT',
} as const
export type Source = (typeof Source)[keyof typeof Source]
export const BroadcastRecipientSource = {
    CSV: 'CSV',
    LIST: 'LIST',
    CLUSTER: 'CLUSTER',
    REGISTRATIONS: 'REGISTRATIONS',
} as const
export type BroadcastRecipientSource = (typeof BroadcastRecipientSource)[keyof typeof BroadcastRecipientSource]
export const BroadcastTargetStatus = {
    SENT: 'SENT',
    FAILED: 'FAILED',
    UNSENT: 'UNSENT',
} as const
export type BroadcastTargetStatus = (typeof BroadcastTargetStatus)[keyof typeof BroadcastTargetStatus]
export const ConciergeTrainingStatus = {
    FAILED: 'FAILED',
    TRAINED: 'TRAINED',
    TRAINING: 'TRAINING',
} as const
export type ConciergeTrainingStatus = (typeof ConciergeTrainingStatus)[keyof typeof ConciergeTrainingStatus]
export const ConciergeType = {
    LINK: 'LINK',
    OBJECT: 'OBJECT',
    DOCUMENT: 'DOCUMENT',
} as const
export type ConciergeType = (typeof ConciergeType)[keyof typeof ConciergeType]
export const DPFileStatus = {
    READY: 'READY',
    RUNNING: 'RUNNING',
} as const
export type DPFileStatus = (typeof DPFileStatus)[keyof typeof DPFileStatus]
export const EmailStatus = {
    SENT: 'SENT',
    OPENED: 'OPENED',
    FAILED: 'FAILED',
    BOUNCED: 'BOUNCED',
    DELIVERED: 'DELIVERED',
    COMPLAINED: 'COMPLAINED',
} as const
export type EmailStatus = (typeof EmailStatus)[keyof typeof EmailStatus]
export const GBBAMType = {
    BUYER: 'BUYER',
    SELLER: 'SELLER',
} as const
export type GBBAMType = (typeof GBBAMType)[keyof typeof GBBAMType]
export const GBBMeetingStatus = {
    ONGOING: 'ONGOING',
    REPLACED: 'REPLACED',
    SCHEDULED: 'SCHEDULED',
    COMPLETED: 'COMPLETED',
    CANCELLED: 'CANCELLED',
    RESCHEDULED: 'RESCHEDULED',
} as const
export type GBBMeetingStatus = (typeof GBBMeetingStatus)[keyof typeof GBBMeetingStatus]
export const GBBMeetingType = {
    SCHEDULED: 'SCHEDULED',
    IMPROMPTU: 'IMPROMPTU',
    WISHLISTED: 'WISHLISTED',
} as const
export type GBBMeetingType = (typeof GBBMeetingType)[keyof typeof GBBMeetingType]
export const GBBMeetingUpdateSource = {
    QR_SCANNER: 'QR_SCANNER',
    AM_DASHBOARD: 'AM_DASHBOARD',
} as const
export type GBBMeetingUpdateSource = (typeof GBBMeetingUpdateSource)[keyof typeof GBBMeetingUpdateSource]
export const ICModule = {
    BASE: 'BASE',
    NOVA: 'NOVA',
    CONCIERGE: 'CONCIERGE',
    NETWORKING: 'NETWORKING',
} as const
export type ICModule = (typeof ICModule)[keyof typeof ICModule]
export const LoginStatus = {
    FAILED: 'FAILED',
    SUCCESSFUL: 'SUCCESSFUL',
} as const
export type LoginStatus = (typeof LoginStatus)[keyof typeof LoginStatus]
export const MixpanelEventStatus = {
    PENDING: 'PENDING',
    PROCESSED: 'PROCESSED',
    PROCESSING: 'PROCESSING',
} as const
export type MixpanelEventStatus = (typeof MixpanelEventStatus)[keyof typeof MixpanelEventStatus]
export const WhatsAppFlowCategory = {
    OTHER: 'OTHER',
    SURVEY: 'SURVEY',
    SIGN_UP: 'SIGN_UP',
    SIGN_IN: 'SIGN_IN',
    CONTACT_US: 'CONTACT_US',
    LEAD_GENERATION: 'LEAD_GENERATION',
    CUSTOMER_SUPPORT: 'CUSTOMER_SUPPORT',
    APPOINTMENT_BOOKING: 'APPOINTMENT_BOOKING',
} as const
export type WhatsAppFlowCategory = (typeof WhatsAppFlowCategory)[keyof typeof WhatsAppFlowCategory]
export const WhatsAppFlowStatus = {
    DRAFT: 'DRAFT',
    BLOCKED: 'BLOCKED',
    PUBLISHED: 'PUBLISHED',
    THROTTLED: 'THROTTLED',
    DEPRECATED: 'DEPRECATED',
} as const
export type WhatsAppFlowStatus = (typeof WhatsAppFlowStatus)[keyof typeof WhatsAppFlowStatus]
export const WhatsAppTemplateCategory = {
    UTILITY: 'UTILITY',
    MARKETING: 'MARKETING',
    AUTHENTICATION: 'AUTHENTICATION',
} as const
export type WhatsAppTemplateCategory = (typeof WhatsAppTemplateCategory)[keyof typeof WhatsAppTemplateCategory]
export const WhatsAppTemplateParameterFormat = {
    NAMED: 'NAMED',
    POSITIONAL: 'POSITIONAL',
} as const
export type WhatsAppTemplateParameterFormat = (typeof WhatsAppTemplateParameterFormat)[keyof typeof WhatsAppTemplateParameterFormat]
export const WhatsAppTemplateStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED',
} as const
export type WhatsAppTemplateStatus = (typeof WhatsAppTemplateStatus)[keyof typeof WhatsAppTemplateStatus]
export const DeploymentAPIKeyPurpose = {
    DEPLOYMENT: 'DEPLOYMENT',
} as const
export type DeploymentAPIKeyPurpose = (typeof DeploymentAPIKeyPurpose)[keyof typeof DeploymentAPIKeyPurpose]
export const DeploymentWhatsAppTemplatePurpose = {
    ENTRY_QR: 'ENTRY_QR',
    ZONE_REPORT: 'ZONE_REPORT',
    ZONE_SCANNER: 'ZONE_SCANNER',
} as const
export type DeploymentWhatsAppTemplatePurpose = (typeof DeploymentWhatsAppTemplatePurpose)[keyof typeof DeploymentWhatsAppTemplatePurpose]
export const RegistrationKeyDataType = {
    LINK: 'LINK',
    TIME: 'TIME',
    PHONE: 'PHONE',
    STRING: 'STRING',
    BOOLEAN: 'BOOLEAN',
    CHIP_DARK: 'CHIP_DARK',
    CHECKED_IN: 'CHECKED_IN',
} as const
export type RegistrationKeyDataType = (typeof RegistrationKeyDataType)[keyof typeof RegistrationKeyDataType]
export const RegistrationPostScanPageKeyDataType = {
    LINK: 'LINK',
    TIME: 'TIME',
    PHONE: 'PHONE',
    STRING: 'STRING',
    BOOLEAN: 'BOOLEAN',
} as const
export type RegistrationPostScanPageKeyDataType = (typeof RegistrationPostScanPageKeyDataType)[keyof typeof RegistrationPostScanPageKeyDataType]
export type AuthLog = {
    status: LoginStatus;
    id: string;
    createdAt: Generated<Timestamp>;
    reason: string | null;
    ipAddress: string;
    username: string;
    coordinates: string;
    location: string;
    timezone: string;
    vercelDeployment: string;
}
export type Broadcast = {
    id: string;
    created: Generated<Timestamp>;
    updated: Generated<Timestamp>;
    status: Generated<string>;
    template: string | null;
    content: Generated<string>;
    links: Generated<string>;
    identifiers: Generated<string>;
    staffUsername: string | null;
    labelId: Generated<string>;
    adminUsername: string | null;
    mediaInfo: Generated<string>;
    buttonValues: Generated<string>;
    completionTime: Timestamp | null;
    csvUploadId: string | null;
    duration: number | null;
    interval: number | null;
    isMultiMedia: Generated<boolean>;
    isMultiVariable: Generated<boolean>;
    longForm: Generated<boolean>;
    nextRetry: Timestamp | null;
    schemaMapping: Generated<unknown>;
    startTime: Timestamp | null;
    recipientId: string | null;
    variables: Generated<unknown>;
    name: string | null;
    eval: Generated<unknown>;
    metaLanguageCode: string | null;
    metaParameterFormat: WhatsAppTemplateParameterFormat | null;
    templateCategory: WhatsAppTemplateCategory | null;
    templateComponents: Generated<unknown>;
    resources: Generated<unknown>;
    surveyId: string | null;
    mixpanelEventStatus: Generated<MixpanelEventStatus>;
}
export type BroadcastDeploymentMap = {
    id: string;
    deploymentId: string;
    broadcastId: string;
    created: Generated<Timestamp>;
}
export type BroadcastRecipient = {
    id: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
    source: BroadcastRecipientSource;
    csvId: string | null;
    phones: Generated<unknown>;
    clusterId: string | null;
    deploymentId: string | null;
}
export type BroadcastTarget = {
    id: string;
    broadcastId: string;
    data: Generated<unknown>;
    status: Generated<BroadcastTargetStatus>;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
    interactionId: string | null;
}
export type CADeploymentMap = {
    id: string;
    adminId: string;
    deploymentId: string;
    created: Generated<Timestamp>;
}
export type Cluster = {
    id: string;
    name: string;
    score: string;
    labelId: string;
    access: string;
    created: Generated<Timestamp>;
    updated: Generated<Timestamp>;
}
export type ClusterAccess = {
    id: string;
    fromClusterId: string;
    toClusterId: string;
    created: Generated<Timestamp>;
}
export type ClusterAdmin = {
    id: string;
    phone: string;
    created: Generated<Timestamp>;
    updated: Generated<Timestamp>;
    display_name: string;
    mixpanel_analytics: string | null;
    feature_flags: Generated<string>;
    invitee_approved_template: string | null;
    event_key: string | null;
    api_key: string | null;
    businessAddress: string | null;
    businessEmail: string | null;
    businessName: string | null;
    businessType: string | null;
    country: string | null;
    industry: string | null;
    teamSize: string | null;
    website: string | null;
}
export type ClusterConfig = {
    id: string;
    name: string;
    created: Generated<Timestamp>;
    updated: Generated<Timestamp>;
    clusterId: string;
    menu_id: string | null;
    recoLimit: Generated<number>;
    keywords: Generated<string>;
    showMicroDashboard: Generated<boolean>;
    showBotFeedback: Generated<boolean>;
    demographicsFields: Generated<string>;
    inactiveRecommendations: Generated<boolean>;
    activeClusterFencing: Generated<boolean>;
    enableBioUpdation: Generated<boolean>;
    accuracy: Generated<number>;
    recommendAlreadyConnected: Generated<boolean>;
    recommendAlreadyRecommended: Generated<boolean>;
    recommendPendingConnections: Generated<boolean>;
    recommendRecommendationRejected: Generated<boolean>;
    recommendRequestRejected: Generated<boolean>;
    recommendationsToSend: Generated<number>;
    incomingConnectionLimit: Generated<number>;
    resetCron: Generated<string>;
    tags: string | null;
    includeRequestorBio: Generated<boolean>;
    includeResponderKeywords: Generated<boolean>;
    noRecommendationMessage: Generated<string>;
    recoLimitExhaustMessage: Generated<string>;
    networking: Generated<boolean>;
    conciergeFlow: Generated<boolean>;
    showSettings: Generated<boolean>;
    showShareMyCalendar: Generated<boolean>;
    discovery: Generated<boolean>;
    discoveryTemplate: string | null;
}
export type ClusterCopy = {
    id: string;
    created: Generated<Timestamp>;
    updated: Generated<Timestamp>;
    flowId: string;
    frameId: string;
    content: string;
}
export type ClusterDeploymentMap = {
    id: string;
    cluster_id: string;
    deployment_id: string;
    created: Generated<Timestamp>;
}
export type ClusterMemberMap = {
    id: string;
    cluster_id: string;
    interaction_id: string;
    created: Generated<Timestamp>;
    memberId: string;
}
export type ClusterSynonym = {
    id: string;
    created: Generated<Timestamp>;
    word: string;
    synonym: string;
    flowId: string;
}
export type Cohorts = {
    id: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
    name: string;
    description: string;
    sql: string;
    requirements: string;
}
export type CombotPayload = {
    id: string;
    createdAt: Generated<Timestamp>;
    processed: Generated<boolean>;
    queueId: string;
    status: string;
    whatsappId: string | null;
    failureReason: string | null;
    attempts: Generated<number>;
    lastAttemptAt: Timestamp | null;
}
export type corporate_connections_registered = {
    phone: string;
}
export type Credentials = {
    id: string;
    username: string;
    password: string;
    authorization: string;
    disabled: Generated<boolean>;
    created: Generated<Timestamp>;
    updated: Generated<Timestamp>;
}
export type CustomMenu = {
    id: string;
    created: Generated<Timestamp>;
    updated: Generated<Timestamp>;
    buttonName: string;
    menuItems: Generated<unknown>;
    showAttendeeList: boolean | null;
}
export type DataPlusFiles = {
    id: string;
    createdAt: Generated<Timestamp>;
    staffUsername: string;
    snapshotId: string;
    linkedinField: string;
    status: Generated<DPFileStatus>;
    fileName: string;
    name: string;
}
export type DataPlusRecords = {
    id: string;
    fileId: string;
    rawJson: Generated<unknown>;
    linkedinProfile: Generated<unknown>;
}
export type Deployment = {
    id: string;
    config: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
    title: Generated<string>;
    logoUrl: string | null;
    mapUrl: string | null;
    place: string | null;
    time: string | null;
    type: Generated<string>;
}
export type DeploymentAPIKey = {
    id: string;
    createdAt: Generated<Timestamp>;
    generatedAt: Generated<Timestamp>;
    expiresAt: Timestamp | null;
    apiKey: string;
    purpose: DeploymentAPIKeyPurpose;
    comments: string | null;
    deploymentId: string;
}
export type DeploymentConcierge = {
    id: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
    deploymentId: string;
    content: string | null;
    title: string;
    parentId: string | null;
    source: ConciergeType;
    type: ConciergeType;
    hash: string | null;
    adminId: string | null;
    staffUsername: string | null;
    status: Generated<ConciergeTrainingStatus>;
}
export type DeploymentConfig = {
    id: string;
    deploymentId: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
    defaultUserType: Generated<string>;
    themeColor: Generated<string>;
    sendAllCount: Generated<number>;
    sendAllLimit: Generated<number>;
    onboardingFinished: Generated<boolean>;
    onboardingMeetingLink: string | null;
    onboardingMeetingTime: Timestamp | null;
    novaEBadge: Generated<boolean>;
    scanPageHandlebars: string | null;
    conciergeEnabled: Generated<boolean>;
    conciergeFineTunes: Generated<unknown>;
    conciergeResponseGuidelines: Generated<unknown>;
    allowPartnerScanDelete: Generated<boolean>;
    allowPartnerScanDownload: Generated<boolean>;
    isApprovalRequired: Generated<boolean>;
}
export type DeploymentDate = {
    id: string;
    deploymentId: string;
    date: Timestamp;
}
export type DeploymentEmail = {
    id: string;
    name: string;
    description: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
    handlebars: string;
    deploymentId: string;
    userType: string | null;
    subject: Generated<string>;
    fromEmail: Generated<string>;
}
export type DeploymentWhatsAppTemplate = {
    id: string;
    deploymentId: string;
    labelId: string;
    templateId: string;
    variables: Generated<unknown>;
    purpose: DeploymentWhatsAppTemplatePurpose;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
}
export type DiscoveryData = {
    id: string;
    createdAt: Generated<Timestamp>;
    data: Generated<unknown>;
    fileId: string;
}
export type DiscoveryFile = {
    id: string;
    createdAt: Generated<Timestamp>;
    clusterId: string;
    fileName: string;
    sizeString: string;
    staffUsername: string | null;
}
export type Email = {
    id: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
    fromEmail: string;
    fromName: string;
    template: string;
    deploymentId: string | null;
}
export type EmailRecipient = {
    id: string;
    emailId: string;
    recipientEmail: string;
    subject: string;
    variables: Generated<string>;
    status: Generated<EmailStatus>;
    sentAt: Generated<Timestamp>;
    deliveredAt: Timestamp | null;
    openedAt: Timestamp | null;
    messageId: string | null;
}
export type EmailTemplate = {
    id: string;
    name: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
    handlebars: string;
}
export type GBBAM = {
    id: string;
    createdAt: Generated<Timestamp>;
    name: string;
    type: GBBAMType;
    arbitrary: Generated<unknown>;
    deploymentId: string;
}
export type GBBCompanyInfo = {
    id: string;
    createdAt: Generated<Timestamp>;
    name: string;
    arbitrary: Generated<unknown>;
    comments: string | null;
    deploymentId: string;
}
export type GBBConfig = {
    id: string;
    deploymentId: string;
    companyInfoListKeys: Generated<unknown>;
    buyerListKeys: Generated<unknown>;
    sellerListKeys: Generated<unknown>;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
    scannerPageListKeys: Generated<unknown>;
}
export type GBBEmptyMeeting = {
    id: string;
    comments: string | null;
    deploymentId: string;
    companyId: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
    order: Generated<number>;
}
export type GBBMeeting = {
    id: string;
    createdAt: Generated<Timestamp>;
    status: GBBMeetingStatus;
    type: GBBMeetingType;
    tableId: string | null;
    lastUpdatedAt: Timestamp | null;
    lastUpdatedBy: GBBMeetingUpdateSource | null;
    lastUpdatedByAMId: string | null;
    previousStatus: GBBMeetingStatus | null;
    comments: string | null;
    order: Generated<number>;
    arbitrary: Generated<unknown>;
    deploymentId: string;
    meetingTime: Timestamp | null;
    nextMeetingsInBlocks: Generated<number | null>;
}
export type GBBMeetingParticipantMap = {
    id: string;
    createdAt: Generated<Timestamp>;
    userId: string;
    meetingId: string;
}
export type GbbPersonalizedAgenda = {
    id: string;
    createdAt: Generated<Timestamp>;
    arbitrary: Generated<unknown>;
}
export type GBBTable = {
    id: string;
    createdAt: Generated<Timestamp>;
    name: string | null;
    arbitrary: Generated<unknown>;
    deploymentId: string;
}
export type GBBUser = {
    id: string;
    createdAt: Generated<Timestamp>;
    registeredUserId: string;
    amId: string;
    companyId: string;
    comments: string | null;
}
export type GBBUserCompanyMap = {
    id: string;
    createdAt: Generated<Timestamp>;
    userId: string;
    companyId: string;
}
export type global_intelligence = {
    id: string;
    created: Generated<Timestamp>;
    code: string;
    responses: string;
    input: string;
}
export type GroupCheckInCondition = {
    id: string;
    deploymentId: string;
    enabled: Generated<boolean>;
    conditionKey: string;
    conditionValue: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
}
export type IntentClassification = {
    id: string;
    example: string;
    intent: string;
    createdAt: Generated<Timestamp>;
    module: Generated<ICModule>;
}
export type Interaction = {
    id: string;
    whatsappId: string | null;
    memberId: string;
    threadId: string | null;
    text: string;
    status: string;
    category: string | null;
    type: string | null;
    created: Generated<Timestamp>;
    updated: Generated<Timestamp>;
    identifier: string | null;
    broadcastId: string | null;
    failureReason: string | null;
    personaId: string | null;
    variables: unknown | null;
}
export type journey = {
    id: string;
    created: Generated<Timestamp>;
    updated: Generated<Timestamp>;
    display_name: string;
    enabled: Generated<boolean>;
    conditions: Generated<string>;
    member_limit: number | null;
    randomizer: Generated<boolean>;
}
export type journey_action = {
    id: string;
    created: Generated<Timestamp>;
    journey_id: string;
    code: string;
    parameters: Generated<string>;
}
export type journey_ledger = {
    id: string;
    created: Generated<Timestamp>;
    journey_id: string;
    updated: Generated<Timestamp>;
    status: Generated<string>;
    schedule_id: string;
}
export type journey_schedule = {
    id: string;
    created: Generated<Timestamp>;
    journey_id: string;
    type: Generated<string>;
    absolute: string | null;
    relative_minutes: number | null;
    relative_function: string | null;
}
export type journey_segment_cluster = {
    id: string;
    created: Generated<Timestamp>;
    journey_id: string;
    cluster_id: string;
}
export type journey_segment_label = {
    id: string;
    created: Generated<Timestamp>;
    journey_id: string;
    label_id: string;
}
export type journey_segment_member = {
    id: string;
    created: Generated<Timestamp>;
    journey_id: string;
    member_id: string;
}
export type Keyword = {
    id: string;
    createdAt: Generated<Timestamp>;
    personaId: string;
    keywords: string;
    clusterId: string;
}
export type Label = {
    id: string;
    created: Generated<Timestamp>;
    updated: Generated<Timestamp>;
    displayName: string;
    phone: string;
    endpoint: string;
    credentials: string | null;
    authLogic: string;
    namespace: string;
    apiType: Generated<string>;
    enabled: Generated<boolean>;
    website: string | null;
    whatsappAccountId: string;
    baseTemplates: Generated<unknown>;
    inviteCodeRegretMessage: Generated<string>;
}
export type LabelDeploymentMap = {
    id: string;
    deploymentId: string;
    labelId: string;
    created: Generated<Timestamp>;
}
export type LeadScannerKey = {
    id: string;
    deploymentId: string;
    keyName: string;
    name: string;
    icon: string;
    break: Generated<boolean>;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
}
export type Member = {
    id: string;
    phone: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
    status: NumberStatus;
    source: Source;
}
export type MemberConnection = {
    id: string;
    created: Generated<Timestamp>;
    updated: Generated<Timestamp>;
    status: string;
    requestorId: string;
    responderId: string;
    contextMessage: string | null;
    failureReason: string | null;
    requestorPersonaId: string | null;
    responderPersonaId: string | null;
    requestorClusterId: string | null;
    responderClusterId: string | null;
}
export type MemberConnectionChangelog = {
    id: string;
    memberConnectionId: string;
    fromStatus: string;
    toStatus: string;
    created: Generated<Timestamp>;
}
export type MessageDeliveryPayload = {
    id: string;
    createdAt: Generated<Timestamp>;
    processed: Generated<boolean>;
    failureReason: string | null;
    status: string;
    whatsappId: string;
    attempts: Generated<number>;
    lastAttemptAt: Timestamp | null;
}
export type Notification = {
    id: string;
    created: Generated<Timestamp>;
    updated: Generated<Timestamp>;
    title: string;
    message: string;
    link: string | null;
    isRead: Generated<boolean>;
    adminId: string | null;
}
export type one_percent_registered = {
    phone: string;
}
export type Persona = {
    id: string;
    name: string | null;
    memberId: string;
    biography: string | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
    tokens: string | null;
    linkedin: string | null;
    website: string | null;
    labelId: string;
    status: PersonaStatus;
    source: Source;
    intervened: Generated<boolean>;
    calendly: string | null;
    outdatedSearchVector: Generated<boolean>;
    conciergeIntroduction: Generated<boolean>;
}
export type raw_data_info = {
    id: string;
    created: Generated<Timestamp>;
    updated: Generated<Timestamp>;
    admin_id: string;
    cluster_id: string;
    file_name: string;
    record_count: number;
    status: string;
}
export type RegisteredUser = {
    id: string;
    phone: string | null;
    name: string | null;
    email: string | null;
    meta_data: Generated<unknown>;
    created: Generated<Timestamp>;
    updated: Generated<Timestamp>;
    user_type: string | null;
    registration_status: Generated<string>;
    tally_id: string | null;
    linkedin: string | null;
    extra: Generated<string>;
    checked_in: Generated<boolean | null>;
    memberId: string | null;
    personaId: string | null;
    deleted: Generated<boolean | null>;
    vendorId: string | null;
    scanCondition: Generated<unknown>;
    offlineId: string | null;
    deploymentId: string | null;
}
export type RegistrationBadgeCardKey = {
    id: string;
    deploymentId: string;
    keyName: string;
    name: string;
    icon: string;
    break: Generated<boolean>;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
}
export type RegistrationPostScanPageKey = {
    id: string;
    deploymentId: string;
    keyName: string;
    dataType: RegistrationPostScanPageKeyDataType;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
}
export type RegistrationTableKey = {
    id: string;
    deploymentId: string;
    keyName: string;
    dataType: RegistrationKeyDataType;
    isSortable: Generated<boolean>;
    width: Generated<number>;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
}
export type RegistrationTallyMapping = {
    id: string;
    deploymentId: string;
    questionId: string;
    keyName: string;
    order: Generated<number>;
    separator: string | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
}
export type ScanLog = {
    id: string;
    registered_user_id: string | null;
    created: Generated<Timestamp>;
    updated: Generated<Timestamp>;
    zone: Generated<string>;
    zoneId: string | null;
    notes: string | null;
    rating: Generated<string>;
    scannedAt: Generated<Timestamp | null>;
}
export type Staff = {
    username: string;
    email: string;
    created: Generated<Timestamp>;
    updated: Generated<Timestamp>;
    display_name: string;
    memberId: string;
}
export type Survey = {
    id: string;
    createdAt: Generated<Timestamp>;
    title: string;
    columnNameMapping: Generated<unknown>;
    responseTemplate: string | null;
    presentationConfig: Generated<unknown>;
}
export type SurveyBroadcastMap = {
    id: string;
    createdAt: Generated<Timestamp>;
    surveyId: string;
    broadcastId: string;
}
export type SurveyDeploymentMap = {
    id: string;
    createdAt: Generated<Timestamp>;
    surveyId: string;
    deploymentId: string;
}
export type SurveyResponse = {
    id: string;
    createdAt: Generated<Timestamp>;
    responseJson: Generated<unknown>;
    name: string | null;
    whatsappId: string;
    surveyId: string;
    personaId: string;
}
export type Synonym = {
    id: string;
    created: Generated<Timestamp>;
    word: string;
    synonym: string;
}
export type Template = {
    name: string;
    created: Generated<Timestamp>;
    displayName: string;
    header: string | null;
    category: string;
    content: string;
    link: string | null;
    variables: Generated<string>;
    buttonKeys: Generated<string>;
    buttonValues: Generated<string>;
    mediaType: Generated<string>;
    staffUsername: string;
}
export type WhatsAppFlow = {
    id: string;
    name: string;
    labelId: string;
    status: WhatsAppFlowStatus;
    flowJson: Generated<unknown>;
    flowId: string;
    categories: Generated<WhatsAppFlowCategory[]>;
    lastSyncAt: Generated<Timestamp>;
    updatedAt: Timestamp;
}
export type WhatsAppTemplate = {
    id: string;
    name: string;
    labelId: string;
    createdAt: Generated<Timestamp>;
    category: WhatsAppTemplateCategory;
    components: Generated<unknown>;
    metaTemplateId: string;
    metaLanguageCode: string;
    metaParameterFormat: WhatsAppTemplateParameterFormat;
    metaSubCategory: string;
    status: WhatsAppTemplateStatus;
    lastMetaSyncAt: Generated<Timestamp>;
    eval: Generated<unknown>;
}
export type ZoneGroup = {
    id: string;
    name: string;
    subGroupId: string | null;
    deploymentId: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
}
export type ZoneUser = {
    id: string;
    name: string;
    phone: string | null;
    deploymentId: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
    showDetailsInScanner: Generated<boolean>;
    zoneGroupId: string | null;
    scanDuplicate: Generated<boolean>;
}
export type DB = {
    AuthLog: AuthLog;
    Broadcast: Broadcast;
    BroadcastDeploymentMap: BroadcastDeploymentMap;
    BroadcastRecipient: BroadcastRecipient;
    BroadcastTarget: BroadcastTarget;
    CADeploymentMap: CADeploymentMap;
    Cluster: Cluster;
    ClusterAccess: ClusterAccess;
    ClusterAdmin: ClusterAdmin;
    ClusterConfig: ClusterConfig;
    ClusterCopy: ClusterCopy;
    ClusterDeploymentMap: ClusterDeploymentMap;
    ClusterMemberMap: ClusterMemberMap;
    ClusterSynonym: ClusterSynonym;
    Cohorts: Cohorts;
    CombotPayload: CombotPayload;
    corporate_connections_registered: corporate_connections_registered;
    Credentials: Credentials;
    CustomMenu: CustomMenu;
    DataPlusFiles: DataPlusFiles;
    DataPlusRecords: DataPlusRecords;
    Deployment: Deployment;
    DeploymentAPIKey: DeploymentAPIKey;
    DeploymentConcierge: DeploymentConcierge;
    DeploymentConfig: DeploymentConfig;
    DeploymentDate: DeploymentDate;
    DeploymentEmail: DeploymentEmail;
    DeploymentWhatsAppTemplate: DeploymentWhatsAppTemplate;
    DiscoveryData: DiscoveryData;
    DiscoveryFile: DiscoveryFile;
    Email: Email;
    EmailRecipient: EmailRecipient;
    EmailTemplate: EmailTemplate;
    GBBAM: GBBAM;
    GBBCompanyInfo: GBBCompanyInfo;
    GBBConfig: GBBConfig;
    GBBEmptyMeeting: GBBEmptyMeeting;
    GBBMeeting: GBBMeeting;
    GBBMeetingParticipantMap: GBBMeetingParticipantMap;
    GbbPersonalizedAgenda: GbbPersonalizedAgenda;
    GBBTable: GBBTable;
    GBBUser: GBBUser;
    GBBUserCompanyMap: GBBUserCompanyMap;
    global_intelligence: global_intelligence;
    GroupCheckInCondition: GroupCheckInCondition;
    IntentClassification: IntentClassification;
    Interaction: Interaction;
    journey: journey;
    journey_action: journey_action;
    journey_ledger: journey_ledger;
    journey_schedule: journey_schedule;
    journey_segment_cluster: journey_segment_cluster;
    journey_segment_label: journey_segment_label;
    journey_segment_member: journey_segment_member;
    Keyword: Keyword;
    Label: Label;
    LabelDeploymentMap: LabelDeploymentMap;
    LeadScannerKey: LeadScannerKey;
    Member: Member;
    MemberConnection: MemberConnection;
    MemberConnectionChangelog: MemberConnectionChangelog;
    MessageDeliveryPayload: MessageDeliveryPayload;
    Notification: Notification;
    one_percent_registered: one_percent_registered;
    Persona: Persona;
    raw_data_info: raw_data_info;
    RegisteredUser: RegisteredUser;
    RegistrationBadgeCardKey: RegistrationBadgeCardKey;
    RegistrationPostScanPageKey: RegistrationPostScanPageKey;
    RegistrationTableKey: RegistrationTableKey;
    RegistrationTallyMapping: RegistrationTallyMapping;
    ScanLog: ScanLog;
    Staff: Staff;
    Survey: Survey;
    SurveyBroadcastMap: SurveyBroadcastMap;
    SurveyDeploymentMap: SurveyDeploymentMap;
    SurveyResponse: SurveyResponse;
    Synonym: Synonym;
    Template: Template;
    WhatsAppFlow: WhatsAppFlow;
    WhatsAppTemplate: WhatsAppTemplate;
    ZoneGroup: ZoneGroup;
    ZoneUser: ZoneUser;
}
