## @trata/ts-client-sdk@1.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @trata/ts-client-sdk@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://api.trata.ai*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ActionAgentLinkApi* | [**createActionAgentLinkV1**](docs/ActionAgentLinkApi.md#createactionagentlinkv1) | **POST** /v1/actions/{action_id}/ai-agents/{agent_id}/link | Create a Link Between an Action and an Agent
*ActionAgentLinkApi* | [**deleteActionAgentLinkV1**](docs/ActionAgentLinkApi.md#deleteactionagentlinkv1) | **DELETE** /v1/actions/{action_id}/ai-agents/{agent_id}/link | Delete a Link Between an Action and an Agent
*ActionAgentLinkApi* | [**listActionsOfAgentV1**](docs/ActionAgentLinkApi.md#listactionsofagentv1) | **GET** /v1/ai-agents/{agent_id}/actions | List All Actions Linked to a Specific Agent
*ActionsApi* | [**createActionV1**](docs/ActionsApi.md#createactionv1) | **POST** /v1/actions | Create a New Action
*ActionsApi* | [**deleteActionV1**](docs/ActionsApi.md#deleteactionv1) | **DELETE** /v1/actions/{action_id} | Delete a Specific Action by ID
*ActionsApi* | [**getActionV1**](docs/ActionsApi.md#getactionv1) | **GET** /v1/actions/{action_id} | Get a Specific Action by ID
*ActionsApi* | [**listActionsV1**](docs/ActionsApi.md#listactionsv1) | **GET** /v1/actions | List All Actions
*ActionsApi* | [**updateActionV1**](docs/ActionsApi.md#updateactionv1) | **PUT** /v1/actions/{action_id} | Update a Specific Action by ID
*AgentsApi* | [**createAIAgentV1**](docs/AgentsApi.md#createaiagentv1) | **POST** /v1/ai-agents | Create a New AI Agent
*AgentsApi* | [**deleteAIAgentV1**](docs/AgentsApi.md#deleteaiagentv1) | **DELETE** /v1/ai-agents/{agent_id} | Delete a Specific AI Agent by ID
*AgentsApi* | [**getAIAgentV1**](docs/AgentsApi.md#getaiagentv1) | **GET** /v1/ai-agents/{agent_id} | Get a Specific AI Agent by ID
*AgentsApi* | [**listAIAgentsV1**](docs/AgentsApi.md#listaiagentsv1) | **GET** /v1/ai-agents | List All AI Agents
*AgentsApi* | [**updateAIAgentV1**](docs/AgentsApi.md#updateaiagentv1) | **PUT** /v1/ai-agents/{agent_id} | Update a Specific AI Agent by ID
*AnalyticsApi* | [**getMetricsV1MetricsPost**](docs/AnalyticsApi.md#getmetricsv1metricspost) | **POST** /v1/metrics | Get Metrics
*AnalyticsApi* | [**getOverallStatsV1StatsGet**](docs/AnalyticsApi.md#getoverallstatsv1statsget) | **GET** /v1/stats | Get Aggregated Stats
*AnalyticsApi* | [**getUserAnalyticsV1**](docs/AnalyticsApi.md#getuseranalyticsv1) | **POST** /v1/sparr/analytics/users | Get User Analytics
*AnalyticsApi* | [**getUserPerformanceSummaryV1**](docs/AnalyticsApi.md#getuserperformancesummaryv1) | **POST** /v1/sparr/analytics/users/performance-summary | Get User Performance Summary
*ApiKeyApi* | [**createApiKeyV1**](docs/ApiKeyApi.md#createapikeyv1) | **POST** /v1/api-keys | Create Api Key
*ApiKeyApi* | [**deleteApiKeyV1**](docs/ApiKeyApi.md#deleteapikeyv1) | **DELETE** /v1/api-keys/{key_id} | Delete Api Key
*ApiKeyApi* | [**getCallKeyV1**](docs/ApiKeyApi.md#getcallkeyv1) | **GET** /v1/api-keys/call-key | Get Call Key
*ApiKeyApi* | [**listApiKeysV1**](docs/ApiKeyApi.md#listapikeysv1) | **GET** /v1/api-keys | List Api Keys
*BillingApi* | [**createCheckoutSessionForBillableProductV1**](docs/BillingApi.md#createcheckoutsessionforbillableproductv1) | **POST** /v1/subscription/billable-products/{billable_product_id}/checkout | Create Checkout Session For Billable Product
*BillingApi* | [**getCustomerSessionSecretV1**](docs/BillingApi.md#getcustomersessionsecretv1) | **GET** /v1/subscription/customer-session-secret | Get Customer Session Secret
*BillingApi* | [**getSubscriptionBillableProductsV1**](docs/BillingApi.md#getsubscriptionbillableproductsv1) | **GET** /v1/subscription/billable-products | Get Subscription Billable Products
*BillingApi* | [**getSubscriptionPortalV1**](docs/BillingApi.md#getsubscriptionportalv1) | **GET** /v1/subscription/portal | Get Subscription Portal
*BillingApi* | [**getSubscriptionV1**](docs/BillingApi.md#getsubscriptionv1) | **GET** /v1/subscription | Get Subscription
*ConnectApi* | [**connectOauthV1**](docs/ConnectApi.md#connectoauthv1) | **POST** /v1/sparr/connect/telephony/oauth | Telephonyoauthconnect
*ConversationProspectLinkApi* | [**createConversationProspectLinkV1**](docs/ConversationProspectLinkApi.md#createconversationprospectlinkv1) | **POST** /v1/conversations/{conversation_id}/prospects/{prospect_id}/links | Create a link between a conversation and a prospect
*ConversationProspectLinkApi* | [**deleteConversationProspectLinkV1**](docs/ConversationProspectLinkApi.md#deleteconversationprospectlinkv1) | **DELETE** /v1/conversations/{conversation_id}/prospects/{prospect_id}/links | Delete a link between a conversation and a prospect
*ConversationProspectLinkApi* | [**listConversationsOfProspectsV1**](docs/ConversationProspectLinkApi.md#listconversationsofprospectsv1) | **GET** /v1/prospects/{prospect_id}/conversations | List all conversations linked to a specific prospect
*ConversationsApi* | [**addFeedbackV1**](docs/ConversationsApi.md#addfeedbackv1) | **POST** /v1/conversations/{conversation_id}/feedback | Add Feedback to a Specific Conversation
*ConversationsApi* | [**createConversationV1**](docs/ConversationsApi.md#createconversationv1) | **POST** /v1/conversations | Create a New Conversation
*ConversationsApi* | [**deleteConversationV1**](docs/ConversationsApi.md#deleteconversationv1) | **DELETE** /v1/conversations/{conversation_id} | Delete a Specific Conversation by ID
*ConversationsApi* | [**getConversationV1**](docs/ConversationsApi.md#getconversationv1) | **GET** /v1/conversations/{conversation_id} | Get a Specific Conversation by ID
*ConversationsApi* | [**listConversationsV1**](docs/ConversationsApi.md#listconversationsv1) | **GET** /v1/conversations | List All Conversations
*ConversationsApi* | [**updateConversationV1**](docs/ConversationsApi.md#updateconversationv1) | **PUT** /v1/conversations/{conversation_id} | Update a Specific Conversation by ID
*DataPlaneApi* | [**createConnection**](docs/DataPlaneApi.md#createconnection) | **POST** /v1/connections | Create Connection
*DataPlaneApi* | [**getPlivoAudioStreamXml**](docs/DataPlaneApi.md#getplivoaudiostreamxml) | **GET** /v1/connections/{connection_id}/plivo-audio-stream-xml | Get Audio Stream XML For Plivo
*DataPlaneApi* | [**listConnections**](docs/DataPlaneApi.md#listconnections) | **GET** /v1/connections | Listconnections
*FilesApi* | [**deleteFileV1**](docs/FilesApi.md#deletefilev1) | **DELETE** /v1/files | Delete Files
*FilesApi* | [**uploadAudioFileV1**](docs/FilesApi.md#uploadaudiofilev1) | **POST** /v1/audio-files | Upload Audio Files
*FilesApi* | [**uploadFileV1**](docs/FilesApi.md#uploadfilev1) | **POST** /v1/files | Upload Files
*HealthApi* | [**statusStatusGet**](docs/HealthApi.md#statusstatusget) | **GET** /status | Heart Beat Status Of Trata Backend
*HealthApi* | [**statusWorkflowsStatusGet**](docs/HealthApi.md#statusworkflowsstatusget) | **GET** /workflows/status | Heart Beat Status Of Workflow Service
*HiveApi* | [**createHiveV1**](docs/HiveApi.md#createhivev1) | **POST** /v1/hives | Create a New Hive
*HiveApi* | [**deleteHiveV1**](docs/HiveApi.md#deletehivev1) | **DELETE** /v1/hives/{hive_id} | Delete a Specific Hive by ID
*HiveApi* | [**getHiveV1**](docs/HiveApi.md#gethivev1) | **GET** /v1/hives/{hive_id} | Get a Specific Hive by ID
*HiveApi* | [**listHivesV1**](docs/HiveApi.md#listhivesv1) | **GET** /v1/hives | List All Hives
*HiveApi* | [**updateHiveV1**](docs/HiveApi.md#updatehivev1) | **PUT** /v1/hives/{hive_id} | Update a Specific Hive by ID
*HiveAgentLinkApi* | [**createHiveAgentLinkV1**](docs/HiveAgentLinkApi.md#createhiveagentlinkv1) | **POST** /v1/hives/{hive_id}/ai-agents/{agent_id}/link | Create a Link Between a Hive and an Agent
*HiveAgentLinkApi* | [**deleteHiveAgentLinkV1**](docs/HiveAgentLinkApi.md#deletehiveagentlinkv1) | **DELETE** /v1/hives/{hive_id}/ai-agents/{agent_id}/link | Delete a Link Between a Hive and an Agent
*HiveAgentLinkApi* | [**listAgentsOfHiveV1**](docs/HiveAgentLinkApi.md#listagentsofhivev1) | **GET** /v1/hives/{hive_id}/ai-agents | List All Agents Linked to a Specific Hive
*HiveAgentLinkApi* | [**listHivesOfAgentV1**](docs/HiveAgentLinkApi.md#listhivesofagentv1) | **GET** /v1/ai-agents/{agent_id}/hives | List All Hives Linked to a Specific Agent
*InternalApi* | [**acceptInviteV1**](docs/InternalApi.md#acceptinvitev1) | **POST** /v1/invites/accept | Acceptinvite
*InternalApi* | [**createOrganizationV1**](docs/InternalApi.md#createorganizationv1) | **POST** /v1/organizations | Createorganization
*InternalApi* | [**createUserV1**](docs/InternalApi.md#createuserv1) | **POST** /v1/users | Createuser
*InternalApi* | [**deleteOrganizationV1**](docs/InternalApi.md#deleteorganizationv1) | **DELETE** /v1/organizations | Deleteorganization
*InternalApi* | [**deleteUserV1**](docs/InternalApi.md#deleteuserv1) | **DELETE** /v1/users/{user_id} | Deleteuser
*InternalApi* | [**getCustomerCreditsV1**](docs/InternalApi.md#getcustomercreditsv1) | **GET** /v1/customers/credits | Get Customer Credits
*InternalApi* | [**getCustomerPricingV1**](docs/InternalApi.md#getcustomerpricingv1) | **GET** /v1/customers/pricing | Get Customer Pricing
*InternalApi* | [**getOrganizationBrandingV1**](docs/InternalApi.md#getorganizationbrandingv1) | **GET** /v1/organizations/branding | Getorganizationbranding
*InternalApi* | [**getOrganizationV1**](docs/InternalApi.md#getorganizationv1) | **GET** /v1/organizations | Getorganization
*InternalApi* | [**getUserByIdV1**](docs/InternalApi.md#getuserbyidv1) | **GET** /v1/users/{user_id} | Getuserbyid
*InternalApi* | [**listInvitesV1**](docs/InternalApi.md#listinvitesv1) | **GET** /v1/invites | Listinvites
*InternalApi* | [**listUsersV1**](docs/InternalApi.md#listusersv1) | **GET** /v1/users | Listusers
*InternalApi* | [**sendInviteV1**](docs/InternalApi.md#sendinvitev1) | **POST** /v1/invites | Inviteusers
*InternalApi* | [**updateOrganizationV1**](docs/InternalApi.md#updateorganizationv1) | **PUT** /v1/organizations/{org_id} | Updateorganization
*InternalApi* | [**updateUserV1**](docs/InternalApi.md#updateuserv1) | **PUT** /v1/users/{user_id} | Updateuser
*ProductsApi* | [**createProductV1**](docs/ProductsApi.md#createproductv1) | **POST** /v1/products | Create a New Product
*ProductsApi* | [**deleteProductV1**](docs/ProductsApi.md#deleteproductv1) | **DELETE** /v1/products/{product_id} | Delete a Specific Product by ID
*ProductsApi* | [**getProductV1**](docs/ProductsApi.md#getproductv1) | **GET** /v1/products/{product_id} | Get a Specific Product by ID
*ProductsApi* | [**listAgentsOfProductV1**](docs/ProductsApi.md#listagentsofproductv1) | **GET** /v1/products/{product_id}/agents | List All Agents Linked to a Specific Product
*ProductsApi* | [**listProductsV1**](docs/ProductsApi.md#listproductsv1) | **GET** /v1/products | List All Products
*ProductsApi* | [**updateProductV1**](docs/ProductsApi.md#updateproductv1) | **PUT** /v1/products/{product_id} | Update a Specific Product by ID
*ProspectsApi* | [**createProspectV1**](docs/ProspectsApi.md#createprospectv1) | **POST** /v1/prospects | Create a New Prospect
*ProspectsApi* | [**deleteProspectV1**](docs/ProspectsApi.md#deleteprospectv1) | **DELETE** /v1/prospects/{prospect_id} | Delete a Specific Prospect by ID
*ProspectsApi* | [**getProspectV1**](docs/ProspectsApi.md#getprospectv1) | **GET** /v1/prospects/{prospect_id} | Get a Specific Prospect by ID
*ProspectsApi* | [**listProspectsV1**](docs/ProspectsApi.md#listprospectsv1) | **GET** /v1/prospects | List All Prospects
*ProspectsApi* | [**updateProspectV1**](docs/ProspectsApi.md#updateprospectv1) | **PUT** /v1/prospects/{prospect_id} | Update a Specific Prospect by ID
*ResellerCourseAssignmentsApi* | [**changeResellerCourseAssignmentsV1**](docs/ResellerCourseAssignmentsApi.md#changeresellercourseassignmentsv1) | **PUT** /v1/resellers/course-assignments | Change Reseller Course Assignments
*ResellerCourseAssignmentsApi* | [**getAssignedCoursesByCustomerV1**](docs/ResellerCourseAssignmentsApi.md#getassignedcoursesbycustomerv1) | **GET** /v1/resellers/customers/{customer_org_id}/courses | Get Assigned Courses By Customer V1
*ResellerCourseAssignmentsApi* | [**getCustomersByAssignedCourseV1**](docs/ResellerCourseAssignmentsApi.md#getcustomersbyassignedcoursev1) | **GET** /v1/resellers/courses/{course_id}/customers | Get Customers By Assigned Course V1
*ResellerCustomerApi* | [**createCustomerOrganizationV1**](docs/ResellerCustomerApi.md#createcustomerorganizationv1) | **POST** /v1/resellers/customers | Create Customer V1
*ResellerCustomerApi* | [**deleteResellerCustomerV1**](docs/ResellerCustomerApi.md#deleteresellercustomerv1) | **DELETE** /v1/resellers/customers/{customer_org_id} | Delete Customer V1
*ResellerCustomerApi* | [**getCustomerBasicCredentialsV1**](docs/ResellerCustomerApi.md#getcustomerbasiccredentialsv1) | **GET** /v1/resellers/customers/{customer_org_id}/basic_credentials | Get Customer Basic Credentials V1
*ResellerCustomerApi* | [**getCustomerCredentialsV1**](docs/ResellerCustomerApi.md#getcustomercredentialsv1) | **GET** /v1/resellers/customers/{customer_org_id}/credentials | Get Customer Credentials V1
*ResellerCustomerApi* | [**getResellerCustomerByIdV1**](docs/ResellerCustomerApi.md#getresellercustomerbyidv1) | **GET** /v1/resellers/customers/{customer_org_id} | Get Reseller Customer By Id V1
*ResellerCustomerApi* | [**listResellerCustomersV1**](docs/ResellerCustomerApi.md#listresellercustomersv1) | **GET** /v1/resellers/customers | List Reseller Customers V1
*ResellerCustomerApi* | [**updateCustomerOrganizationV1**](docs/ResellerCustomerApi.md#updatecustomerorganizationv1) | **PUT** /v1/resellers/customers/{customer_org_id} | Update Customer V1
*ResellerCustomerAuditLogsApi* | [**getResellerCustomerAuditLogsV1ResellersCustomersCustomerOrgIdAuditLogsGet**](docs/ResellerCustomerAuditLogsApi.md#getresellercustomerauditlogsv1resellerscustomerscustomerorgidauditlogsget) | **GET** /v1/resellers/customers/{customer_org_id}/audit-logs | Get Reseller Customer Audit Logs
*ResellerCustomerCheckoutApi* | [**createCheckoutSessionForResellerCustomerV1**](docs/ResellerCustomerCheckoutApi.md#createcheckoutsessionforresellercustomerv1) | **POST** /v1/resellers/customers/{customer_org_id}/pricing/{price_id}/checkout | Create Checkout Session For Reseller Customer
*ResellerCustomerDefaultPricingApi* | [**getCustomerDefaultPricingV1**](docs/ResellerCustomerDefaultPricingApi.md#getcustomerdefaultpricingv1) | **GET** /v1/resellers/customers/pricing/default | Get Customer Default Pricing V1
*ResellerCustomerDefaultPricingApi* | [**updateCustomerDefaultPricingV1**](docs/ResellerCustomerDefaultPricingApi.md#updatecustomerdefaultpricingv1) | **PUT** /v1/resellers/customers/pricing/default/{price_id} | Update Customer Default Pricing V1
*ResellerCustomerPortalApi* | [**createCustomerPortalForResellerCustomerV1**](docs/ResellerCustomerPortalApi.md#createcustomerportalforresellercustomerv1) | **POST** /v1/resellers/customers/{customer_org_id}/portal | Create Customer Portal For Reseller Customer
*ResellerCustomerPricingApi* | [**createCustomerPricingV1**](docs/ResellerCustomerPricingApi.md#createcustomerpricingv1) | **POST** /v1/resellers/customers/{customer_org_id}/pricing | Create Customer Pricing V1
*ResellerCustomerPricingApi* | [**getResellerCustomerCreditsV1**](docs/ResellerCustomerPricingApi.md#getresellercustomercreditsv1) | **GET** /v1/resellers/customers/{customer_org_id}/credits | Get Reseller Customer Credits V1
*ResellerCustomerPricingApi* | [**getResellerCustomerPricingV1**](docs/ResellerCustomerPricingApi.md#getresellercustomerpricingv1) | **GET** /v1/resellers/customers/{customer_org_id}/pricing | Get Reseller Customer Pricing V1
*ResellerCustomerPricingApi* | [**updateCustomerPricingV1**](docs/ResellerCustomerPricingApi.md#updatecustomerpricingv1) | **PUT** /v1/resellers/customers/{customer_org_id}/pricing/{price_id} | Update Customer Pricing V1
*ResellerCustomerUserApi* | [**deleteResellerCustomerUserV1**](docs/ResellerCustomerUserApi.md#deleteresellercustomeruserv1) | **DELETE** /v1/resellers/customers/{customer_org_id}/users/{user_id} | Delete Reseller Customer User V1
*ResellerCustomerUserApi* | [**getResellerCustomerUserAndInvitesV1**](docs/ResellerCustomerUserApi.md#getresellercustomeruserandinvitesv1) | **GET** /v1/resellers/customers/{customer_org_id}/users_and_invites | Get Reseller Customer User And Invites V1
*ResellerCustomerUserApi* | [**getResellerCustomerUserByIdV1**](docs/ResellerCustomerUserApi.md#getresellercustomeruserbyidv1) | **GET** /v1/resellers/customers/{customer_org_id}/users/{user_id} | Get Reseller Customer User By Id V1
*ResellerCustomerUserApi* | [**listCustomerInvitesV1**](docs/ResellerCustomerUserApi.md#listcustomerinvitesv1) | **GET** /v1/resellers/customers/{customer_org_id}/invites | List Customer Invites V1
*ResellerCustomerUserApi* | [**listResellerCustomerUsersV1**](docs/ResellerCustomerUserApi.md#listresellercustomerusersv1) | **GET** /v1/resellers/customers/{customer_org_id}/users | List Reseller Customer Users V1
*ResellerCustomerUserApi* | [**revokeCustomerInviteV1**](docs/ResellerCustomerUserApi.md#revokecustomerinvitev1) | **DELETE** /v1/resellers/customers/{customer_org_id}/invites/{email} | Revoke Customer Invite V1
*ResellerCustomerUserApi* | [**sendCustomerUserInviteV1**](docs/ResellerCustomerUserApi.md#sendcustomeruserinvitev1) | **POST** /v1/resellers/customers/{customer_org_id}/invites | Invite Customer Users V1
*ResellerCustomerUserApi* | [**updateResellerCustomerUserV1**](docs/ResellerCustomerUserApi.md#updateresellercustomeruserv1) | **PUT** /v1/resellers/customers/{customer_org_id}/users/{user_id} | Update Reseller Customer User V1
*ResellerFilesApi* | [**deleteResellerFilesV1**](docs/ResellerFilesApi.md#deleteresellerfilesv1) | **DELETE** /v1/resellers/files | Delete Files
*ResellerFilesApi* | [**uploadResellerFilesV1**](docs/ResellerFilesApi.md#uploadresellerfilesv1) | **POST** /v1/resellers/files | Upload Files
*ResellerMetricsApi* | [**getResellerMetricsV1**](docs/ResellerMetricsApi.md#getresellermetricsv1) | **POST** /v1/resellers/metrics | Get Reseller Metrics
*ResellerOrganizationApi* | [**createResellerOrganizationV1**](docs/ResellerOrganizationApi.md#createresellerorganizationv1) | **POST** /v1/resellers/organizations | Create Reseller Organization V1
*ResellerOrganizationApi* | [**deleteResellerOrganizationV1**](docs/ResellerOrganizationApi.md#deleteresellerorganizationv1) | **DELETE** /v1/resellers/organizations | Delete Reseller Organization V1
*ResellerOrganizationApi* | [**getResellerOrganizationV1**](docs/ResellerOrganizationApi.md#getresellerorganizationv1) | **GET** /v1/resellers/organizations | Get Reseller Organization V1
*ResellerOrganizationApi* | [**updateResellerOrganizationV1**](docs/ResellerOrganizationApi.md#updateresellerorganizationv1) | **PUT** /v1/resellers/organizations | Update Reseller Organization V1
*ResellerPricingApi* | [**addStripeAccountLinkToResellerOrgV1**](docs/ResellerPricingApi.md#addstripeaccountlinktoresellerorgv1) | **POST** /v1/resellers/stripe-account/link | Add Stripe Account Link To Reseller Org
*ResellerPricingApi* | [**createStripeAccountLinkV1**](docs/ResellerPricingApi.md#createstripeaccountlinkv1) | **GET** /v1/resellers/stripe-account/connect-link | Create Stripe Account Link
*ResellerPricingApi* | [**getStripeAccountDetailsV1**](docs/ResellerPricingApi.md#getstripeaccountdetailsv1) | **GET** /v1/resellers/stripe-account | Get Stripe Account Details
*ResellerPricingApi* | [**stripeDisconnectV1**](docs/ResellerPricingApi.md#stripedisconnectv1) | **DELETE** /v1/resellers/stripe-account | Revoke Stripe Connection
*ResellerSettingsApi* | [**addResellerSettingsV1**](docs/ResellerSettingsApi.md#addresellersettingsv1) | **POST** /v1/resellers/settings | Organization Settings V1
*ResellerSettingsApi* | [**getOrganizationSettingsV1**](docs/ResellerSettingsApi.md#getorganizationsettingsv1) | **GET** /v1/resellers/settings | Get Organization Settings V1
*ResellerSettingsApi* | [**updateResellerSettingsV1**](docs/ResellerSettingsApi.md#updateresellersettingsv1) | **PUT** /v1/resellers/settings | Organization Settings Update V1
*ResellerUserApi* | [**acceptResellerUserInviteV1**](docs/ResellerUserApi.md#acceptreselleruserinvitev1) | **POST** /v1/resellers/invites/accept | Accept Invite V1
*ResellerUserApi* | [**deleteResellerUserV1**](docs/ResellerUserApi.md#deletereselleruserv1) | **DELETE** /v1/resellers/users/{user_id} | Delete Reseller User V1
*ResellerUserApi* | [**getResellerUserByIdV1**](docs/ResellerUserApi.md#getreselleruserbyidv1) | **GET** /v1/resellers/users/{user_id} | Get Reseller User By Id V1
*ResellerUserApi* | [**listResellerUserInvitesV1**](docs/ResellerUserApi.md#listreselleruserinvitesv1) | **GET** /v1/resellers/invites | List Reseller User Invites V1
*ResellerUserApi* | [**listResellerUsersV1**](docs/ResellerUserApi.md#listresellerusersv1) | **GET** /v1/resellers/users | List Reseller Users V1
*ResellerUserApi* | [**sendResellerUserInviteV1**](docs/ResellerUserApi.md#sendreselleruserinvitev1) | **POST** /v1/resellers/invites | Invite Users V1
*ResellerUserApi* | [**updateResellerUserV1**](docs/ResellerUserApi.md#updatereselleruserv1) | **PUT** /v1/resellers/users/{user_id} | Update Reseller User V1
*SparrApi* | [**addModuleAttemptV1**](docs/SparrApi.md#addmoduleattemptv1) | **POST** /v1/sparr/courses/modules/{module_id}/attempts | Add Module Attempt
*SparrApi* | [**assignCourseV1**](docs/SparrApi.md#assigncoursev1) | **POST** /v1/sparr/courses/{course_id}/assign/{user_id} | Assign Course
*SparrApi* | [**attachTagV1SparrEntityTagsEntityTypeEntityIdTagsPost**](docs/SparrApi.md#attachtagv1sparrentitytagsentitytypeentityidtagspost) | **POST** /v1/sparr/entity-tags/{entity_type}/{entity_id}/tags | Attach Tag
*SparrApi* | [**createCheckoutSessionForPriceV1**](docs/SparrApi.md#createcheckoutsessionforpricev1) | **POST** /v1/sparr/pricing/{price_id}/checkout | Create Checkout Session For Price
*SparrApi* | [**createCourseV1**](docs/SparrApi.md#createcoursev1) | **POST** /v1/sparr/courses | Create Course
*SparrApi* | [**createCustomerPortalV1**](docs/SparrApi.md#createcustomerportalv1) | **POST** /v1/sparr/customers/portal | Create Customer Portal
*SparrApi* | [**createFeedbackCommentV1**](docs/SparrApi.md#createfeedbackcommentv1) | **POST** /v1/sparr/feedback-comments | Create Feedback Comment
*SparrApi* | [**createFeedbackV1**](docs/SparrApi.md#createfeedbackv1) | **POST** /v1/sparr/feedbacks | Create Feedback
*SparrApi* | [**createGoalsV1**](docs/SparrApi.md#creategoalsv1) | **POST** /v1/sparr/goals | Create Goals
*SparrApi* | [**createPersonaV1**](docs/SparrApi.md#createpersonav1) | **POST** /v1/sparr/personas | Create Persona
*SparrApi* | [**createPostCallEvaluationParamsV1**](docs/SparrApi.md#createpostcallevaluationparamsv1) | **POST** /v1/sparr/evaluators | Create Evaluator
*SparrApi* | [**createScenarioV1**](docs/SparrApi.md#createscenariov1) | **POST** /v1/sparr/scenarios | Create Scenario
*SparrApi* | [**createTrackerV1**](docs/SparrApi.md#createtrackerv1) | **POST** /v1/sparr/trackers | Create Tracker
*SparrApi* | [**deleteCourseV1**](docs/SparrApi.md#deletecoursev1) | **DELETE** /v1/sparr/courses/{course_id} | Delete Course
*SparrApi* | [**deleteEvaluatorV1**](docs/SparrApi.md#deleteevaluatorv1) | **DELETE** /v1/sparr/evaluators/{params_id} | Delete Evaluator
*SparrApi* | [**deleteFeedbackCommentV1**](docs/SparrApi.md#deletefeedbackcommentv1) | **DELETE** /v1/sparr/feedback-comments/{feedback_comment_id} | Delete Feedback Comment
*SparrApi* | [**deleteFeedbackV1**](docs/SparrApi.md#deletefeedbackv1) | **DELETE** /v1/sparr/feedbacks/{feedback_id} | Delete Feedback
*SparrApi* | [**deleteFileV1**](docs/SparrApi.md#deletefilev1) | **DELETE** /v1/sparr/files/{file_id} | Delete File
*SparrApi* | [**deleteGoalsV1**](docs/SparrApi.md#deletegoalsv1) | **DELETE** /v1/sparr/goals/{goals_id} | Delete Goals
*SparrApi* | [**deletePersonaV1**](docs/SparrApi.md#deletepersonav1) | **DELETE** /v1/sparr/personas/{persona_id} | Delete Persona
*SparrApi* | [**deleteScenarioV1**](docs/SparrApi.md#deletescenariov1) | **DELETE** /v1/sparr/scenarios/{scenario_id} | Delete Scenario
*SparrApi* | [**deleteTrackerV1**](docs/SparrApi.md#deletetrackerv1) | **DELETE** /v1/sparr/trackers/{tracker_id} | Delete Tracker
*SparrApi* | [**detachTagV1SparrEntityTagsEntityTypeEntityIdTagsTagNameDelete**](docs/SparrApi.md#detachtagv1sparrentitytagsentitytypeentityidtagstagnamedelete) | **DELETE** /v1/sparr/entity-tags/{entity_type}/{entity_id}/tags/{tag_name} | Detach Tag
*SparrApi* | [**evaluateFeedbackV1**](docs/SparrApi.md#evaluatefeedbackv1) | **POST** /v1/sparr/evaluate-feedback | Evaluate Feedback V1
*SparrApi* | [**generateEvaluatorV1**](docs/SparrApi.md#generateevaluatorv1) | **POST** /v1/sparr/evaluators/generate | Generate Evaluator
*SparrApi* | [**generateFeedbackV1**](docs/SparrApi.md#generatefeedbackv1) | **POST** /v1/sparr/feedbacks/generate_feedback | Generate Feedback
*SparrApi* | [**getCourseV1**](docs/SparrApi.md#getcoursev1) | **GET** /v1/sparr/courses/{course_id} | Get Course
*SparrApi* | [**getCreditsV1**](docs/SparrApi.md#getcreditsv1) | **GET** /v1/sparr/credits | Get Credits V1
*SparrApi* | [**getEntitiesByTagV1SparrEntityTagsEntityTypeByTagTagNameGet**](docs/SparrApi.md#getentitiesbytagv1sparrentitytagsentitytypebytagtagnameget) | **GET** /v1/sparr/entity-tags/{entity_type}/by-tag/{tag_name} | Get Entities By Tag
*SparrApi* | [**getEntityTagsV1SparrEntityTagsEntityTypeEntityIdTagsGet**](docs/SparrApi.md#getentitytagsv1sparrentitytagsentitytypeentityidtagsget) | **GET** /v1/sparr/entity-tags/{entity_type}/{entity_id}/tags | Get Entity Tags
*SparrApi* | [**getEvaluatorV1**](docs/SparrApi.md#getevaluatorv1) | **GET** /v1/sparr/evaluators/{params_id} | Get Evaluator By Id
*SparrApi* | [**getFeedbackCommentV1**](docs/SparrApi.md#getfeedbackcommentv1) | **GET** /v1/sparr/feedback-comments/{feedback_comment_id} | Get Feedback Comment By Id
*SparrApi* | [**getFeedbackV1**](docs/SparrApi.md#getfeedbackv1) | **GET** /v1/sparr/feedbacks/{feedback_id} | Get Feedback
*SparrApi* | [**getFileV1**](docs/SparrApi.md#getfilev1) | **GET** /v1/sparr/files/{file_id} | Get File
*SparrApi* | [**getGoalsV1**](docs/SparrApi.md#getgoalsv1) | **GET** /v1/sparr/goals/{goals_id} | Get Goals By Id
*SparrApi* | [**getMetricsV1**](docs/SparrApi.md#getmetricsv1) | **POST** /v1/sparr/feedbacks/metrics | Get Metrics
*SparrApi* | [**getPersonaV1**](docs/SparrApi.md#getpersonav1) | **GET** /v1/sparr/personas/{persona_id} | Get Persona
*SparrApi* | [**getPricingV1**](docs/SparrApi.md#getpricingv1) | **GET** /v1/sparr/pricing | Get Pricing V1
*SparrApi* | [**getScenarioV1**](docs/SparrApi.md#getscenariov1) | **GET** /v1/sparr/scenarios/{scenario_id} | Get Scenario
*SparrApi* | [**getTrackerV1**](docs/SparrApi.md#gettrackerv1) | **GET** /v1/sparr/trackers/{tracker_id} | Get Tracker By Id
*SparrApi* | [**getUserStatsV1**](docs/SparrApi.md#getuserstatsv1) | **GET** /v1/sparr/user_stats/{user_id} | Get User Stats
*SparrApi* | [**importLinkedinPersonaV1**](docs/SparrApi.md#importlinkedinpersonav1) | **POST** /v1/sparr/personas/import-linkedin | Import Linkedin Persona
*SparrApi* | [**initializeWorkspaceV1**](docs/SparrApi.md#initializeworkspacev1) | **POST** /v1/sparr/initialize-workspace | Initialize Workspace V1
*SparrApi* | [**listCoursesV1**](docs/SparrApi.md#listcoursesv1) | **GET** /v1/sparr/courses | Get Courses
*SparrApi* | [**listEvaluatorV1**](docs/SparrApi.md#listevaluatorv1) | **GET** /v1/sparr/evaluators | Get Evaluator
*SparrApi* | [**listFeedbackCommentsV1**](docs/SparrApi.md#listfeedbackcommentsv1) | **GET** /v1/sparr/feedback-comments | List Feedback Comments
*SparrApi* | [**listFeedbacksV1**](docs/SparrApi.md#listfeedbacksv1) | **GET** /v1/sparr/feedbacks | Get Feedbacks
*SparrApi* | [**listGoalsV1**](docs/SparrApi.md#listgoalsv1) | **GET** /v1/sparr/goals | Get Goals
*SparrApi* | [**listPersonasV1**](docs/SparrApi.md#listpersonasv1) | **GET** /v1/sparr/personas | Get Personas
*SparrApi* | [**listScenariosV1**](docs/SparrApi.md#listscenariosv1) | **GET** /v1/sparr/scenarios | Get Scenarios
*SparrApi* | [**listTrackerV1**](docs/SparrApi.md#listtrackerv1) | **GET** /v1/sparr/trackers | Get Trackers
*SparrApi* | [**listUserAssignmentsV1**](docs/SparrApi.md#listuserassignmentsv1) | **GET** /v1/sparr/courses/users/{user_id}/assignments | Get User Assignments
*SparrApi* | [**listUserCourseAttemptsV1**](docs/SparrApi.md#listusercourseattemptsv1) | **GET** /v1/sparr/courses/{course_id}/attempts/users/{user_id} | Get User Course Attempts
*SparrApi* | [**listUserModuleAttemptsV1**](docs/SparrApi.md#listusermoduleattemptsv1) | **GET** /v1/sparr/courses/modules/{module_id}/attempts/{user_id} | Get User Module Attempts
*SparrApi* | [**revokeCourseV1**](docs/SparrApi.md#revokecoursev1) | **DELETE** /v1/sparr/courses/{course_id}/assign/{user_id} | Revoke Course
*SparrApi* | [**searchGoalsV1**](docs/SparrApi.md#searchgoalsv1) | **GET** /v1/sparr/goals/search | Search Goals
*SparrApi* | [**searchPersonasV1**](docs/SparrApi.md#searchpersonasv1) | **GET** /v1/sparr/personas/search | Search Personas
*SparrApi* | [**searchScenariosV1**](docs/SparrApi.md#searchscenariosv1) | **GET** /v1/sparr/scenarios/search | Search Scenarios
*SparrApi* | [**searchTrackerV1**](docs/SparrApi.md#searchtrackerv1) | **GET** /v1/sparr/trackers/search | Search Tracker
*SparrApi* | [**statusSparrStatusGet**](docs/SparrApi.md#statussparrstatusget) | **GET** /sparr/status | Heart Beat Status Of Sparr Service
*SparrApi* | [**updateCourseCompletionStatusV1**](docs/SparrApi.md#updatecoursecompletionstatusv1) | **PUT** /v1/sparr/courses/{course_id}/assign/{user_id}/status | Update Course Completion Status
*SparrApi* | [**updateCourseV1**](docs/SparrApi.md#updatecoursev1) | **PUT** /v1/sparr/courses/{course_id} | Update Course
*SparrApi* | [**updateEvaluatorV1**](docs/SparrApi.md#updateevaluatorv1) | **PUT** /v1/sparr/evaluators/{params_id} | Update Evaluator
*SparrApi* | [**updateFeedbackCommentV1**](docs/SparrApi.md#updatefeedbackcommentv1) | **PUT** /v1/sparr/feedback-comments/{feedback_comment_id} | Update Feedback Comment
*SparrApi* | [**updateFeedbackV1**](docs/SparrApi.md#updatefeedbackv1) | **PUT** /v1/sparr/feedbacks/{feedback_id} | Update Feedback
*SparrApi* | [**updateGoalsV1**](docs/SparrApi.md#updategoalsv1) | **PUT** /v1/sparr/goals/{goals_id} | Update Goals
*SparrApi* | [**updatePersonaV1**](docs/SparrApi.md#updatepersonav1) | **PUT** /v1/sparr/personas/{persona_id} | Update Persona
*SparrApi* | [**updateScenarioV1**](docs/SparrApi.md#updatescenariov1) | **PUT** /v1/sparr/scenarios/{scenario_id} | Update Scenario
*SparrApi* | [**updateTrackerV1**](docs/SparrApi.md#updatetrackerv1) | **PUT** /v1/sparr/trackers/{tracker_id} | Update Tracker
*SparrApi* | [**uploadFilesV1**](docs/SparrApi.md#uploadfilesv1) | **POST** /v1/sparr/files/upload | Upload Files
*SparrResellerApi* | [**createCourseResellerV1**](docs/SparrResellerApi.md#createcourseresellerv1) | **POST** /v1/resellers/sparr/courses/ | Create Course
*SparrResellerApi* | [**createEvaluatorResellerV1**](docs/SparrResellerApi.md#createevaluatorresellerv1) | **POST** /v1/resellers/sparr/evaluators/ | Create Evaluator
*SparrResellerApi* | [**createGoalsResellerV1**](docs/SparrResellerApi.md#creategoalsresellerv1) | **POST** /v1/resellers/sparr/goals/ | Create Goals
*SparrResellerApi* | [**createPersonaResellerV1**](docs/SparrResellerApi.md#createpersonaresellerv1) | **POST** /v1/resellers/sparr/personas/ | Create Persona
*SparrResellerApi* | [**createScenarioResellerV1**](docs/SparrResellerApi.md#createscenarioresellerv1) | **POST** /v1/resellers/sparr/scenarios/ | Create Scenario
*SparrResellerApi* | [**createTrackerResellerV1**](docs/SparrResellerApi.md#createtrackerresellerv1) | **POST** /v1/resellers/sparr/trackers/ | Create Tracker
*SparrResellerApi* | [**deleteCourseResellerV1**](docs/SparrResellerApi.md#deletecourseresellerv1) | **DELETE** /v1/resellers/sparr/courses/{course_id} | Delete Course
*SparrResellerApi* | [**deleteEvaluatorResellerV1**](docs/SparrResellerApi.md#deleteevaluatorresellerv1) | **DELETE** /v1/resellers/sparr/evaluators/{params_id} | Delete Evaluator
*SparrResellerApi* | [**deleteGoalsResellerV1**](docs/SparrResellerApi.md#deletegoalsresellerv1) | **DELETE** /v1/resellers/sparr/goals/{goals_id} | Delete Goals
*SparrResellerApi* | [**deletePersonaResellerV1**](docs/SparrResellerApi.md#deletepersonaresellerv1) | **DELETE** /v1/resellers/sparr/personas/{persona_id} | Delete Persona
*SparrResellerApi* | [**deleteScenarioResellerV1**](docs/SparrResellerApi.md#deletescenarioresellerv1) | **DELETE** /v1/resellers/sparr/scenarios/{scenario_id} | Delete Scenario
*SparrResellerApi* | [**deleteTrackerResellerV1**](docs/SparrResellerApi.md#deletetrackerresellerv1) | **DELETE** /v1/resellers/sparr/trackers/{tracker_id} | Delete Tracker
*SparrResellerApi* | [**generateEvaluatorResellerV1**](docs/SparrResellerApi.md#generateevaluatorresellerv1) | **POST** /v1/resellers/sparr/evaluators/generate | Generate Evaluator
*SparrResellerApi* | [**getCourseResellerV1**](docs/SparrResellerApi.md#getcourseresellerv1) | **GET** /v1/resellers/sparr/courses/{course_id} | Get Course
*SparrResellerApi* | [**getEvaluatorResellerV1**](docs/SparrResellerApi.md#getevaluatorresellerv1) | **GET** /v1/resellers/sparr/evaluators/{params_id} | Get Evaluator By Id
*SparrResellerApi* | [**getGoalsResellerV1**](docs/SparrResellerApi.md#getgoalsresellerv1) | **GET** /v1/resellers/sparr/goals/{goals_id} | Get Goals By Id
*SparrResellerApi* | [**getPersonaResellerV1**](docs/SparrResellerApi.md#getpersonaresellerv1) | **GET** /v1/resellers/sparr/personas/{persona_id} | Get Persona
*SparrResellerApi* | [**getScenarioResellerV1**](docs/SparrResellerApi.md#getscenarioresellerv1) | **GET** /v1/resellers/sparr/scenarios/{scenario_id} | Get Scenario
*SparrResellerApi* | [**getTrackerResellerV1**](docs/SparrResellerApi.md#gettrackerresellerv1) | **GET** /v1/resellers/sparr/trackers/{tracker_id} | Get Tracker By Id
*SparrResellerApi* | [**importLinkedinPersonaResellerV1**](docs/SparrResellerApi.md#importlinkedinpersonaresellerv1) | **POST** /v1/resellers/sparr/personas/import-linkedin | Import Linkedin Persona
*SparrResellerApi* | [**listCoursesResellerV1**](docs/SparrResellerApi.md#listcoursesresellerv1) | **GET** /v1/resellers/sparr/courses | Get Courses
*SparrResellerApi* | [**listEvaluatorResellerV1**](docs/SparrResellerApi.md#listevaluatorresellerv1) | **GET** /v1/resellers/sparr/evaluators/ | Get Evaluator
*SparrResellerApi* | [**listGoalsResellerV1**](docs/SparrResellerApi.md#listgoalsresellerv1) | **GET** /v1/resellers/sparr/goals/ | Get Goals
*SparrResellerApi* | [**listPersonasResellerV1**](docs/SparrResellerApi.md#listpersonasresellerv1) | **GET** /v1/resellers/sparr/personas/ | Get Personas
*SparrResellerApi* | [**listScenariosResellerV1**](docs/SparrResellerApi.md#listscenariosresellerv1) | **GET** /v1/resellers/sparr/scenarios/ | Get Scenarios
*SparrResellerApi* | [**listTrackerResellerV1**](docs/SparrResellerApi.md#listtrackerresellerv1) | **GET** /v1/resellers/sparr/trackers/ | Get Trackers
*SparrResellerApi* | [**searchGoalsResellerV1**](docs/SparrResellerApi.md#searchgoalsresellerv1) | **GET** /v1/resellers/sparr/goals/search | Search Goals
*SparrResellerApi* | [**searchPersonasResellerV1**](docs/SparrResellerApi.md#searchpersonasresellerv1) | **GET** /v1/resellers/sparr/personas/search | Search Personas
*SparrResellerApi* | [**searchScenariosResellerV1**](docs/SparrResellerApi.md#searchscenariosresellerv1) | **GET** /v1/resellers/sparr/scenarios/search | Search Scenarios
*SparrResellerApi* | [**searchTrackerResellerV1**](docs/SparrResellerApi.md#searchtrackerresellerv1) | **GET** /v1/resellers/sparr/trackers/search | Search Tracker
*SparrResellerApi* | [**updateCourseResellerV1**](docs/SparrResellerApi.md#updatecourseresellerv1) | **PUT** /v1/resellers/sparr/courses/{course_id} | Update Course
*SparrResellerApi* | [**updateEvaluatorResellerV1**](docs/SparrResellerApi.md#updateevaluatorresellerv1) | **PUT** /v1/resellers/sparr/evaluators/{params_id} | Update Evaluator
*SparrResellerApi* | [**updateGoalsResellerV1**](docs/SparrResellerApi.md#updategoalsresellerv1) | **PUT** /v1/resellers/sparr/goals/{goals_id} | Update Goals
*SparrResellerApi* | [**updatePersonaResellerV1**](docs/SparrResellerApi.md#updatepersonaresellerv1) | **PUT** /v1/resellers/sparr/personas/{persona_id} | Update Persona
*SparrResellerApi* | [**updateScenarioResellerV1**](docs/SparrResellerApi.md#updatescenarioresellerv1) | **PUT** /v1/resellers/sparr/scenarios/{scenario_id} | Update Scenario
*SparrResellerApi* | [**updateTrackerResellerV1**](docs/SparrResellerApi.md#updatetrackerresellerv1) | **PUT** /v1/resellers/sparr/trackers/{tracker_id} | Update Tracker
*SparringApi* | [**createVirtualProspectV1SparrVirtualProspectsPost**](docs/SparringApi.md#createvirtualprospectv1sparrvirtualprospectspost) | **POST** /v1/sparr/virtual-prospects | Create Virtual Prospect
*SparringApi* | [**deleteVirtualProspectV1SparrVirtualProspectsProspectIdDelete**](docs/SparringApi.md#deletevirtualprospectv1sparrvirtualprospectsprospectiddelete) | **DELETE** /v1/sparr/virtual-prospects/{prospect_id} | Delete Virtual Prospect
*SparringApi* | [**getSparringStatsV1SparrSparringStatsGet**](docs/SparringApi.md#getsparringstatsv1sparrsparringstatsget) | **GET** /v1/sparr/sparring-stats | Get Sparring Stats
*SparringApi* | [**getVirtualProspectByAgentIdV1SparrAgentAgentIdVirtualProspectGet**](docs/SparringApi.md#getvirtualprospectbyagentidv1sparragentagentidvirtualprospectget) | **GET** /v1/sparr/agent/{agent_id}/virtual-prospect | Get Virtual Prospect by Agent ID
*SparringApi* | [**getVirtualProspectV1SparrVirtualProspectsProspectIdGet**](docs/SparringApi.md#getvirtualprospectv1sparrvirtualprospectsprospectidget) | **GET** /v1/sparr/virtual-prospects/{prospect_id} | Get Virtual Prospect
*SparringApi* | [**linkVirtualProspectToAgentV1SparrVirtualProspectsProspectIdAgentAgentIdLinkPost**](docs/SparringApi.md#linkvirtualprospecttoagentv1sparrvirtualprospectsprospectidagentagentidlinkpost) | **POST** /v1/sparr/virtual-prospects/{prospect_id}/agent/{agent_id}/link | Link Virtual Prospect to Agent
*SparringApi* | [**listVirtualProspectsV1SparrVirtualProspectsGet**](docs/SparringApi.md#listvirtualprospectsv1sparrvirtualprospectsget) | **GET** /v1/sparr/virtual-prospects | List Virtual Prospects
*SparringApi* | [**updateVirtualProspectV1SparrVirtualProspectsProspectIdPut**](docs/SparringApi.md#updatevirtualprospectv1sparrvirtualprospectsprospectidput) | **PUT** /v1/sparr/virtual-prospects/{prospect_id} | Update Virtual Prospect
*TelephonyApi* | [**getAgentPhonesV1**](docs/TelephonyApi.md#getagentphonesv1) | **GET** /v1/ai-agents/{agent_id}/phones | Get Agent Phones
*TelephonyApi* | [**linkPhoneToAgentV1**](docs/TelephonyApi.md#linkphonetoagentv1) | **POST** /v1/telephony/phones/{phone_id}/ai-agents/{agent_id}/link | Link Phone To Agent
*TelephonyApi* | [**listAvailablePhonesV1**](docs/TelephonyApi.md#listavailablephonesv1) | **GET** /v1/telephony/countries/{country_code}/available-phones | List Available Phones
*TelephonyApi* | [**listPurchasedPhonesV1**](docs/TelephonyApi.md#listpurchasedphonesv1) | **GET** /v1/telephony/phones | List Purchased Phones
*TelephonyApi* | [**listSupportedCountriesV1**](docs/TelephonyApi.md#listsupportedcountriesv1) | **GET** /v1/telephony/countries | List Supported Countries
*TelephonyApi* | [**purchasePhoneV1**](docs/TelephonyApi.md#purchasephonev1) | **POST** /v1/telephony/phones | Purchase Phone
*TelephonyApi* | [**releasePhoneV1**](docs/TelephonyApi.md#releasephonev1) | **DELETE** /v1/telephony/phones/{phone_id} | Release Phone
*TelephonyApi* | [**unlinkPhoneFromAgentV1**](docs/TelephonyApi.md#unlinkphonefromagentv1) | **DELETE** /v1/telephony/phones/{phone_id}/ai-agents/{agent_id}/link | Unlink Phone From Agent
*UIApi* | [**listActionTemplatesV1**](docs/UIApi.md#listactiontemplatesv1) | **GET** /v1/ui/action-templates | List Action Templates
*UIApi* | [**listProductsDetailedV1**](docs/UIApi.md#listproductsdetailedv1) | **GET** /v1/ui/products | List Products
*UIApi* | [**listPromptTemplatesV1**](docs/UIApi.md#listprompttemplatesv1) | **GET** /v1/ui/prompt-templates | List Prompt Templates
*UIApi* | [**listRoleTemplatesV1**](docs/UIApi.md#listroletemplatesv1) | **GET** /v1/ui/role-templates | List Role Templates
*VoiceModelsApi* | [**listSparrVoiceModelsV1**](docs/VoiceModelsApi.md#listsparrvoicemodelsv1) | **GET** /v1/sparr-voice-models | Get List Of Voices Available For Sparr
*VoiceModelsApi* | [**listVoiceModelsV1**](docs/VoiceModelsApi.md#listvoicemodelsv1) | **GET** /v1/voice-models | Get List Of Voices Available For Conversations
*WorkflowsApi* | [**createWorkflowV1WorkflowsPost**](docs/WorkflowsApi.md#createworkflowv1workflowspost) | **POST** /v1/workflows | Create Workflow
*WorkflowsApi* | [**deleteWorkflowV1WorkflowsWorkflowIdDelete**](docs/WorkflowsApi.md#deleteworkflowv1workflowsworkflowiddelete) | **DELETE** /v1/workflows/{workflow_id} | Delete Workflow
*WorkflowsApi* | [**readWorkflowV1WorkflowsWorkflowIdGet**](docs/WorkflowsApi.md#readworkflowv1workflowsworkflowidget) | **GET** /v1/workflows/{workflow_id} | Read Workflow
*WorkflowsApi* | [**readWorkflowsV1WorkflowsGet**](docs/WorkflowsApi.md#readworkflowsv1workflowsget) | **GET** /v1/workflows | Read Workflows
*WorkflowsApi* | [**triggerWorkflowStepV1WorkflowsWorkflowIdStepStepIdTriggerPost**](docs/WorkflowsApi.md#triggerworkflowstepv1workflowsworkflowidstepstepidtriggerpost) | **POST** /v1/workflows/{workflow_id}/step/{step_id}/trigger | Trigger Workflow Step
*WorkflowsApi* | [**updateWorkflowV1WorkflowsWorkflowIdPut**](docs/WorkflowsApi.md#updateworkflowv1workflowsworkflowidput) | **PUT** /v1/workflows/{workflow_id} | Update Workflow
*WorkflowsApi* | [**uploadFileV1WorkflowsWorkflowIdFilePost**](docs/WorkflowsApi.md#uploadfilev1workflowsworkflowidfilepost) | **POST** /v1/workflows/{workflow_id}/file | Upload File
*WorkflowsApiHubspotApi* | [**handleHubspotWebhookV1WorkflowsApiHubspotWebhookPost**](docs/WorkflowsApiHubspotApi.md#handlehubspotwebhookv1workflowsapihubspotwebhookpost) | **POST** /v1/workflows/api/hubspot/webhook | Handle Hubspot Webhook
*WorkflowsAppsApi* | [**createAppV1WorkflowsAppsPost**](docs/WorkflowsAppsApi.md#createappv1workflowsappspost) | **POST** /v1/workflows/apps | Create App
*WorkflowsAppsApi* | [**deleteAppV1WorkflowsAppsAppIdDelete**](docs/WorkflowsAppsApi.md#deleteappv1workflowsappsappiddelete) | **DELETE** /v1/workflows/apps/{app_id} | Delete App
*WorkflowsAppsApi* | [**getConnectionsByAppIdV1WorkflowsAppsAppIdVersionsVersionConnectionsGet**](docs/WorkflowsAppsApi.md#getconnectionsbyappidv1workflowsappsappidversionsversionconnectionsget) | **GET** /v1/workflows/apps/{app_id}/versions/{version}/connections | Get Connections By App Id
*WorkflowsAppsApi* | [**readAppV1WorkflowsAppsAppIdGet**](docs/WorkflowsAppsApi.md#readappv1workflowsappsappidget) | **GET** /v1/workflows/apps/{app_id} | Read App
*WorkflowsAppsApi* | [**readAppsV1WorkflowsAppsGet**](docs/WorkflowsAppsApi.md#readappsv1workflowsappsget) | **GET** /v1/workflows/apps | Read Apps
*WorkflowsAppsApi* | [**updateAppV1WorkflowsAppsAppIdPut**](docs/WorkflowsAppsApi.md#updateappv1workflowsappsappidput) | **PUT** /v1/workflows/apps/{app_id} | Update App
*WorkflowsConnectionsApi* | [**createConnectionV1WorkflowsConnectionsPost**](docs/WorkflowsConnectionsApi.md#createconnectionv1workflowsconnectionspost) | **POST** /v1/workflows/connections | Create Connection
*WorkflowsConnectionsApi* | [**deleteConnectionV1WorkflowsConnectionsConnectionIdDelete**](docs/WorkflowsConnectionsApi.md#deleteconnectionv1workflowsconnectionsconnectioniddelete) | **DELETE** /v1/workflows/connections/{connection_id} | Delete Connection
*WorkflowsConnectionsApi* | [**readConnectionV1WorkflowsConnectionsConnectionIdGet**](docs/WorkflowsConnectionsApi.md#readconnectionv1workflowsconnectionsconnectionidget) | **GET** /v1/workflows/connections/{connection_id} | Read Connection
*WorkflowsConnectionsApi* | [**readConnectionsV1WorkflowsConnectionsGet**](docs/WorkflowsConnectionsApi.md#readconnectionsv1workflowsconnectionsget) | **GET** /v1/workflows/connections | Read Connections
*WorkflowsConnectionsApi* | [**updateConnectionV1WorkflowsConnectionsConnectionIdPut**](docs/WorkflowsConnectionsApi.md#updateconnectionv1workflowsconnectionsconnectionidput) | **PUT** /v1/workflows/connections/{connection_id} | Update Connection
*WorkflowsExecutionsApi* | [**executeWorkflowV1WorkflowsExecutionsWorkflowIdExecutePost**](docs/WorkflowsExecutionsApi.md#executeworkflowv1workflowsexecutionsworkflowidexecutepost) | **POST** /v1/workflows/executions/{workflow_id}/execute | Execute Workflow
*WorkflowsExecutionsApi* | [**getWorkflowStatusV1WorkflowsExecutionsWorkflowIdRunsRunIdGet**](docs/WorkflowsExecutionsApi.md#getworkflowstatusv1workflowsexecutionsworkflowidrunsrunidget) | **GET** /v1/workflows/executions/{workflow_id}/runs/{run_id} | Get Workflow Status
*WorkflowsExecutionsApi* | [**listWorkflowRunsV1WorkflowsExecutionsWorkflowIdRunsGet**](docs/WorkflowsExecutionsApi.md#listworkflowrunsv1workflowsexecutionsworkflowidrunsget) | **GET** /v1/workflows/executions/{workflow_id}/runs | List Workflow Runs
*WorkflowsExecutionsApi* | [**triggerWorkflowV1WorkflowsExecutionsWorkflowIdTriggerPost**](docs/WorkflowsExecutionsApi.md#triggerworkflowv1workflowsexecutionsworkflowidtriggerpost) | **POST** /v1/workflows/executions/{workflow_id}/trigger | Trigger Workflow
*WorkflowsSubWorkflowsApi* | [**getSubWorkflowsV1WorkflowsStepsSubWorkflowsPost**](docs/WorkflowsSubWorkflowsApi.md#getsubworkflowsv1workflowsstepssubworkflowspost) | **POST** /v1/workflows/steps/sub_workflows | Get Sub Workflows


### Documentation For Models

 - [AIAgentInput](docs/AIAgentInput.md)
 - [AIAgentOutput](docs/AIAgentOutput.md)
 - [Accent](docs/Accent.md)
 - [AcceptInviteRequest](docs/AcceptInviteRequest.md)
 - [ActionInput](docs/ActionInput.md)
 - [ActionInvocationTrigger](docs/ActionInvocationTrigger.md)
 - [ActionOutput](docs/ActionOutput.md)
 - [Adaptability](docs/Adaptability.md)
 - [Adaptability1](docs/Adaptability1.md)
 - [Adaptability2](docs/Adaptability2.md)
 - [AddressInput](docs/AddressInput.md)
 - [AddressOutput](docs/AddressOutput.md)
 - [AgentConfig](docs/AgentConfig.md)
 - [AgenticWorkflowActionEndpoint](docs/AgenticWorkflowActionEndpoint.md)
 - [AgenticWorkflowAdkModelsWorkflowAppEnum](docs/AgenticWorkflowAdkModelsWorkflowAppEnum.md)
 - [AgenticWorkflowDbModelsConnection](docs/AgenticWorkflowDbModelsConnection.md)
 - [AgenticWorkflowModelsBaseBaseResponse](docs/AgenticWorkflowModelsBaseBaseResponse.md)
 - [AgentsInner](docs/AgentsInner.md)
 - [AggregationFormulaInput](docs/AggregationFormulaInput.md)
 - [AggregationFormulaOutput](docs/AggregationFormulaOutput.md)
 - [AggregationPeriod](docs/AggregationPeriod.md)
 - [Aiwhatcanbeimproved](docs/Aiwhatcanbeimproved.md)
 - [Aiwhatwentwell](docs/Aiwhatwentwell.md)
 - [AnalyticsModelInput](docs/AnalyticsModelInput.md)
 - [AnalyticsModelInputWeightedScoresValue](docs/AnalyticsModelInputWeightedScoresValue.md)
 - [AnalyticsModelOutput](docs/AnalyticsModelOutput.md)
 - [AnalyticsRequest](docs/AnalyticsRequest.md)
 - [AnalyticsResponse](docs/AnalyticsResponse.md)
 - [ApiKeyAuth](docs/ApiKeyAuth.md)
 - [ApiKeyCredentials](docs/ApiKeyCredentials.md)
 - [ApiKeyRequest](docs/ApiKeyRequest.md)
 - [App](docs/App.md)
 - [AppAction](docs/AppAction.md)
 - [AppActionEntity](docs/AppActionEntity.md)
 - [AppActionType](docs/AppActionType.md)
 - [AppEntity](docs/AppEntity.md)
 - [AppEnumInput](docs/AppEnumInput.md)
 - [AppEnumOutput](docs/AppEnumOutput.md)
 - [AppResponse](docs/AppResponse.md)
 - [AuditLog](docs/AuditLog.md)
 - [AuthInner](docs/AuthInner.md)
 - [AuthRole](docs/AuthRole.md)
 - [AvailablePhoneNumber](docs/AvailablePhoneNumber.md)
 - [BaseResponseInput](docs/BaseResponseInput.md)
 - [BasicAuth](docs/BasicAuth.md)
 - [BasicAuthCredentials](docs/BasicAuthCredentials.md)
 - [BasicCredentials](docs/BasicCredentials.md)
 - [BatchMetricsRequestsInput](docs/BatchMetricsRequestsInput.md)
 - [BatchMetricsResponseInput](docs/BatchMetricsResponseInput.md)
 - [BodyCreateCustomerOrganizationV1](docs/BodyCreateCustomerOrganizationV1.md)
 - [BodyCreateOrganizationV1](docs/BodyCreateOrganizationV1.md)
 - [BodyCreateResellerOrganizationV1](docs/BodyCreateResellerOrganizationV1.md)
 - [CallRecording](docs/CallRecording.md)
 - [CallSentiment](docs/CallSentiment.md)
 - [CallType](docs/CallType.md)
 - [ChangeAssignmentOperation](docs/ChangeAssignmentOperation.md)
 - [ChangeAssignmentRequest](docs/ChangeAssignmentRequest.md)
 - [CoachAnalyticsModel](docs/CoachAnalyticsModel.md)
 - [CombinedEvaluatorResponse](docs/CombinedEvaluatorResponse.md)
 - [Comment](docs/Comment.md)
 - [CommunicationStyle](docs/CommunicationStyle.md)
 - [CommunicationStyle1](docs/CommunicationStyle1.md)
 - [Condition](docs/Condition.md)
 - [ConnectionCore](docs/ConnectionCore.md)
 - [ConnectionOutput](docs/ConnectionOutput.md)
 - [ConnectionSource](docs/ConnectionSource.md)
 - [ConversationAnalyticsModelInput](docs/ConversationAnalyticsModelInput.md)
 - [ConversationEndEvent](docs/ConversationEndEvent.md)
 - [ConversationEndEventPayload](docs/ConversationEndEventPayload.md)
 - [ConversationEvaluation](docs/ConversationEvaluation.md)
 - [ConversationEvaluationData](docs/ConversationEvaluationData.md)
 - [ConversationEvaluationMetric](docs/ConversationEvaluationMetric.md)
 - [ConversationEvaluationMetrics](docs/ConversationEvaluationMetrics.md)
 - [ConversationFeedback](docs/ConversationFeedback.md)
 - [ConversationInput](docs/ConversationInput.md)
 - [ConversationOutput](docs/ConversationOutput.md)
 - [ConversationSourceType](docs/ConversationSourceType.md)
 - [ConversationStartEvent](docs/ConversationStartEvent.md)
 - [ConversationStartEventPayload](docs/ConversationStartEventPayload.md)
 - [ConversationStatsModel](docs/ConversationStatsModel.md)
 - [CountryInfo](docs/CountryInfo.md)
 - [Course](docs/Course.md)
 - [CourseAssignmentStatus](docs/CourseAssignmentStatus.md)
 - [CourseCompletionStatus](docs/CourseCompletionStatus.md)
 - [CourseCore](docs/CourseCore.md)
 - [CourseRequest](docs/CourseRequest.md)
 - [CourseResponse](docs/CourseResponse.md)
 - [CourseUpdateRequest](docs/CourseUpdateRequest.md)
 - [CourseWithAssignmentStatus](docs/CourseWithAssignmentStatus.md)
 - [Courses](docs/Courses.md)
 - [CreateScenarioRequest](docs/CreateScenarioRequest.md)
 - [Credentials](docs/Credentials.md)
 - [Credit](docs/Credit.md)
 - [CreditTypeEnum](docs/CreditTypeEnum.md)
 - [CustomerBranding](docs/CustomerBranding.md)
 - [Customers](docs/Customers.md)
 - [DecisionMakingStyle](docs/DecisionMakingStyle.md)
 - [DecisionMakingStyle1](docs/DecisionMakingStyle1.md)
 - [DialogLine](docs/DialogLine.md)
 - [DialogWordWithTimestamp](docs/DialogWordWithTimestamp.md)
 - [EmbeddingsModelConfig](docs/EmbeddingsModelConfig.md)
 - [Endpoint](docs/Endpoint.md)
 - [EngagementLevel](docs/EngagementLevel.md)
 - [EngagementLevel1](docs/EngagementLevel1.md)
 - [EntityTag](docs/EntityTag.md)
 - [EvaluationInput](docs/EvaluationInput.md)
 - [EvaluationOutput](docs/EvaluationOutput.md)
 - [Evaluator](docs/Evaluator.md)
 - [EvaluatorCore](docs/EvaluatorCore.md)
 - [EvaluatorRequest](docs/EvaluatorRequest.md)
 - [EvaluatorResponse](docs/EvaluatorResponse.md)
 - [Excitementlevel](docs/Excitementlevel.md)
 - [ExternalReference](docs/ExternalReference.md)
 - [ExternalServiceProviderInput](docs/ExternalServiceProviderInput.md)
 - [ExternalServiceProviderOutput](docs/ExternalServiceProviderOutput.md)
 - [FamiliarityLevel](docs/FamiliarityLevel.md)
 - [Feedback](docs/Feedback.md)
 - [FeedbackCommentCore](docs/FeedbackCommentCore.md)
 - [FeedbackCommentInput](docs/FeedbackCommentInput.md)
 - [FeedbackCommentThreadInput](docs/FeedbackCommentThreadInput.md)
 - [FeedbackCommentThreadOutput](docs/FeedbackCommentThreadOutput.md)
 - [FeedbackCore](docs/FeedbackCore.md)
 - [FeedbackProps](docs/FeedbackProps.md)
 - [Files](docs/Files.md)
 - [FillerWords](docs/FillerWords.md)
 - [FillersConfig](docs/FillersConfig.md)
 - [FilterOperator](docs/FilterOperator.md)
 - [FlexibleGenerationRequest](docs/FlexibleGenerationRequest.md)
 - [FrustrationTolerance](docs/FrustrationTolerance.md)
 - [FrustrationTolerance1](docs/FrustrationTolerance1.md)
 - [GenerateFeedbackRequest](docs/GenerateFeedbackRequest.md)
 - [GoalAnalyticsModelInput](docs/GoalAnalyticsModelInput.md)
 - [GoalAnalyticsModelOutput](docs/GoalAnalyticsModelOutput.md)
 - [GoalCategoryResponseInput](docs/GoalCategoryResponseInput.md)
 - [GoalCategoryResponseOutput](docs/GoalCategoryResponseOutput.md)
 - [GoalCoreInput](docs/GoalCoreInput.md)
 - [GoalCoreOutput](docs/GoalCoreOutput.md)
 - [GoalEvaluationResultInput](docs/GoalEvaluationResultInput.md)
 - [GoalEvaluationResultOutput](docs/GoalEvaluationResultOutput.md)
 - [GoalInput](docs/GoalInput.md)
 - [GoalsSearchResponse](docs/GoalsSearchResponse.md)
 - [GuestInput](docs/GuestInput.md)
 - [GuestOutput](docs/GuestOutput.md)
 - [HTTPValidationError](docs/HTTPValidationError.md)
 - [Hive](docs/Hive.md)
 - [HiveContentInput](docs/HiveContentInput.md)
 - [HiveContentOutput](docs/HiveContentOutput.md)
 - [HiveStorageConfig](docs/HiveStorageConfig.md)
 - [HiveType](docs/HiveType.md)
 - [HttpActionEndpoint](docs/HttpActionEndpoint.md)
 - [Humanwhatcanbeimproved](docs/Humanwhatcanbeimproved.md)
 - [Humanwhatwentwell](docs/Humanwhatwentwell.md)
 - [IntelligenceProvider](docs/IntelligenceProvider.md)
 - [IntelligenceProviderConfig](docs/IntelligenceProviderConfig.md)
 - [InteractionTone](docs/InteractionTone.md)
 - [InternalActionEndpoint](docs/InternalActionEndpoint.md)
 - [Language](docs/Language.md)
 - [LanguageAccentCombo](docs/LanguageAccentCombo.md)
 - [LiveFeedbackProps](docs/LiveFeedbackProps.md)
 - [LocationInner](docs/LocationInner.md)
 - [LongestMonologue](docs/LongestMonologue.md)
 - [MetricDataPoint](docs/MetricDataPoint.md)
 - [MetricFilter](docs/MetricFilter.md)
 - [MetricNameInput](docs/MetricNameInput.md)
 - [MetricRequest](docs/MetricRequest.md)
 - [MetricResponseDataPointInput](docs/MetricResponseDataPointInput.md)
 - [MetricsRequestInput](docs/MetricsRequestInput.md)
 - [MetricsResponseInput](docs/MetricsResponseInput.md)
 - [Mission](docs/Mission.md)
 - [ModelFile](docs/ModelFile.md)
 - [Module](docs/Module.md)
 - [ModuleAnalytics](docs/ModuleAnalytics.md)
 - [ModuleAttemptStatus](docs/ModuleAttemptStatus.md)
 - [ModuleCore](docs/ModuleCore.md)
 - [ModuleUpdateRequest](docs/ModuleUpdateRequest.md)
 - [NegotiationStyle](docs/NegotiationStyle.md)
 - [NegotiationStyle1](docs/NegotiationStyle1.md)
 - [NextStepResolver](docs/NextStepResolver.md)
 - [NoAuth](docs/NoAuth.md)
 - [NoAuthCredentials](docs/NoAuthCredentials.md)
 - [NumberPurchaseRequest](docs/NumberPurchaseRequest.md)
 - [OAuth](docs/OAuth.md)
 - [OAuthCredentials](docs/OAuthCredentials.md)
 - [Objection](docs/Objection.md)
 - [OrgUsersPriceCredits](docs/OrgUsersPriceCredits.md)
 - [OrgWithCourseAssignment](docs/OrgWithCourseAssignment.md)
 - [OrgWithUsers](docs/OrgWithUsers.md)
 - [OrganizationInitializationStatus](docs/OrganizationInitializationStatus.md)
 - [OrganizationInput](docs/OrganizationInput.md)
 - [OrganizationOutput](docs/OrganizationOutput.md)
 - [OrganizationSettings](docs/OrganizationSettings.md)
 - [PatienceLevel](docs/PatienceLevel.md)
 - [PatienceLevel1](docs/PatienceLevel1.md)
 - [Persona](docs/Persona.md)
 - [PersonaAttributesAndTraits](docs/PersonaAttributesAndTraits.md)
 - [PersonaCore](docs/PersonaCore.md)
 - [PersonaSearchResponse](docs/PersonaSearchResponse.md)
 - [PreferredTone](docs/PreferredTone.md)
 - [PreferredTone1](docs/PreferredTone1.md)
 - [Price](docs/Price.md)
 - [PriceInterval](docs/PriceInterval.md)
 - [PriceItem](docs/PriceItem.md)
 - [PricingRequest](docs/PricingRequest.md)
 - [ProductInput](docs/ProductInput.md)
 - [ProductOutput](docs/ProductOutput.md)
 - [ProductWithAgents](docs/ProductWithAgents.md)
 - [PromptTemplate](docs/PromptTemplate.md)
 - [ProspectInput](docs/ProspectInput.md)
 - [ProspectOutput](docs/ProspectOutput.md)
 - [ProspectStatus](docs/ProspectStatus.md)
 - [ResellerBatchMetricsRequests](docs/ResellerBatchMetricsRequests.md)
 - [ResellerPaymentAccountDetails](docs/ResellerPaymentAccountDetails.md)
 - [ResponseGetorganizationbrandingv1](docs/ResponseGetorganizationbrandingv1.md)
 - [Role](docs/Role.md)
 - [RoleTemplate](docs/RoleTemplate.md)
 - [RubricLevel](docs/RubricLevel.md)
 - [RubricScore](docs/RubricScore.md)
 - [Rudenesslevel](docs/Rudenesslevel.md)
 - [Scenario](docs/Scenario.md)
 - [ScenarioResponse](docs/ScenarioResponse.md)
 - [ScenarioSearchResponse](docs/ScenarioSearchResponse.md)
 - [Sequence](docs/Sequence.md)
 - [SortOrder](docs/SortOrder.md)
 - [SparrAdaptability](docs/SparrAdaptability.md)
 - [SparrCommunicationStyle](docs/SparrCommunicationStyle.md)
 - [SparrDbModelsFeedbackComment](docs/SparrDbModelsFeedbackComment.md)
 - [SparrDbModelsGoal](docs/SparrDbModelsGoal.md)
 - [SparrDecisionMakingStyle](docs/SparrDecisionMakingStyle.md)
 - [SparrDemeanorInput](docs/SparrDemeanorInput.md)
 - [SparrDemeanorOutput](docs/SparrDemeanorOutput.md)
 - [SparrDialogLine](docs/SparrDialogLine.md)
 - [SparrDialogLineWithSentiment](docs/SparrDialogLineWithSentiment.md)
 - [SparrDialogLineWithTimestamp](docs/SparrDialogLineWithTimestamp.md)
 - [SparrEngagementLevel](docs/SparrEngagementLevel.md)
 - [SparrExcitementLevel](docs/SparrExcitementLevel.md)
 - [SparrFeedbackProps](docs/SparrFeedbackProps.md)
 - [SparrFrustrationTolerance](docs/SparrFrustrationTolerance.md)
 - [SparrInitializeWorkspacePayload](docs/SparrInitializeWorkspacePayload.md)
 - [SparrInteractionTone](docs/SparrInteractionTone.md)
 - [SparrLanguageAccentCombo](docs/SparrLanguageAccentCombo.md)
 - [SparrModelsAnalyticsAggregationFormula](docs/SparrModelsAnalyticsAggregationFormula.md)
 - [SparrModelsAnalyticsBatchMetricsRequests](docs/SparrModelsAnalyticsBatchMetricsRequests.md)
 - [SparrModelsAnalyticsBatchMetricsResponse](docs/SparrModelsAnalyticsBatchMetricsResponse.md)
 - [SparrModelsAnalyticsConversationAnalyticsModel](docs/SparrModelsAnalyticsConversationAnalyticsModel.md)
 - [SparrModelsAnalyticsMetricName](docs/SparrModelsAnalyticsMetricName.md)
 - [SparrModelsAnalyticsMetricResponseDataPoint](docs/SparrModelsAnalyticsMetricResponseDataPoint.md)
 - [SparrModelsAnalyticsMetricsRequest](docs/SparrModelsAnalyticsMetricsRequest.md)
 - [SparrModelsAnalyticsMetricsResponse](docs/SparrModelsAnalyticsMetricsResponse.md)
 - [SparrModelsBaseBaseResponse](docs/SparrModelsBaseBaseResponse.md)
 - [SparrModelsFeedbackFeedbackComment](docs/SparrModelsFeedbackFeedbackComment.md)
 - [SparrModelsScenarioGoal](docs/SparrModelsScenarioGoal.md)
 - [SparrNegotiationStyle](docs/SparrNegotiationStyle.md)
 - [SparrPatienceLevel](docs/SparrPatienceLevel.md)
 - [SparrPersonaAttributesAndTraits](docs/SparrPersonaAttributesAndTraits.md)
 - [SparrRudenessLevel](docs/SparrRudenessLevel.md)
 - [SparrStatsData](docs/SparrStatsData.md)
 - [SparrStatsResponse](docs/SparrStatsResponse.md)
 - [SparrVoiceAccent](docs/SparrVoiceAccent.md)
 - [SparrVoiceInput](docs/SparrVoiceInput.md)
 - [SparrVoiceLanguage](docs/SparrVoiceLanguage.md)
 - [SparrVoiceOutput](docs/SparrVoiceOutput.md)
 - [SparrWorkDetails](docs/SparrWorkDetails.md)
 - [Sparrv1EvaluateFeedbackRequest](docs/Sparrv1EvaluateFeedbackRequest.md)
 - [StatsData](docs/StatsData.md)
 - [StatsResponse](docs/StatsResponse.md)
 - [Status](docs/Status.md)
 - [Step](docs/Step.md)
 - [Subscription](docs/Subscription.md)
 - [SubscriptionInfo](docs/SubscriptionInfo.md)
 - [SynthesizerConfig](docs/SynthesizerConfig.md)
 - [SystemMetricsInput](docs/SystemMetricsInput.md)
 - [SystemMetricsOutput](docs/SystemMetricsOutput.md)
 - [TagCreate](docs/TagCreate.md)
 - [TaxDetailsInput](docs/TaxDetailsInput.md)
 - [TaxDetailsOutput](docs/TaxDetailsOutput.md)
 - [TelephoneNumber](docs/TelephoneNumber.md)
 - [TelephonyApp](docs/TelephonyApp.md)
 - [TelephonyConnectRequest](docs/TelephonyConnectRequest.md)
 - [TelephonyConnectResponse](docs/TelephonyConnectResponse.md)
 - [TimestampRange](docs/TimestampRange.md)
 - [Tracker](docs/Tracker.md)
 - [TrackerAnalyticsModel](docs/TrackerAnalyticsModel.md)
 - [TrackerCore](docs/TrackerCore.md)
 - [TrackerSearchResponse](docs/TrackerSearchResponse.md)
 - [TrackingCategory](docs/TrackingCategory.md)
 - [Transcriber](docs/Transcriber.md)
 - [TranscriberConfig](docs/TranscriberConfig.md)
 - [UiNodeType](docs/UiNodeType.md)
 - [UpdateResellerOrganizationRequest](docs/UpdateResellerOrganizationRequest.md)
 - [UpdateUserRequest](docs/UpdateUserRequest.md)
 - [UploadFileResponse](docs/UploadFileResponse.md)
 - [User](docs/User.md)
 - [UserApiKeyLink](docs/UserApiKeyLink.md)
 - [UserCourseAssignment](docs/UserCourseAssignment.md)
 - [UserCourseAssignmentAnalyticsResponse](docs/UserCourseAssignmentAnalyticsResponse.md)
 - [UserData](docs/UserData.md)
 - [UserModuleAttempt](docs/UserModuleAttempt.md)
 - [UserModuleAttemptCore](docs/UserModuleAttemptCore.md)
 - [UserModuleAttemptResponse](docs/UserModuleAttemptResponse.md)
 - [UserPayload](docs/UserPayload.md)
 - [UserPerformanceSummary](docs/UserPerformanceSummary.md)
 - [UserPerformanceSummaryRequest](docs/UserPerformanceSummaryRequest.md)
 - [UserPerformanceSummaryResponse](docs/UserPerformanceSummaryResponse.md)
 - [UserRecentActivity](docs/UserRecentActivity.md)
 - [UserStats](docs/UserStats.md)
 - [UserStatsItem](docs/UserStatsItem.md)
 - [ValidationError](docs/ValidationError.md)
 - [Value](docs/Value.md)
 - [ValueAnyOfInner](docs/ValueAnyOfInner.md)
 - [VirtualProspectAIAgentLink](docs/VirtualProspectAIAgentLink.md)
 - [VirtualProspectInput](docs/VirtualProspectInput.md)
 - [VirtualProspectOutput](docs/VirtualProspectOutput.md)
 - [VirtualProspectTypeEnum](docs/VirtualProspectTypeEnum.md)
 - [VoiceInput](docs/VoiceInput.md)
 - [VoiceModel](docs/VoiceModel.md)
 - [VoiceOutput](docs/VoiceOutput.md)
 - [Workflow](docs/Workflow.md)
 - [WorkflowActivityInfo](docs/WorkflowActivityInfo.md)
 - [WorkflowContext](docs/WorkflowContext.md)
 - [WorkflowCore](docs/WorkflowCore.md)
 - [WorkflowExecution](docs/WorkflowExecution.md)
 - [WorkflowStepInput](docs/WorkflowStepInput.md)
 - [WorkflowStepOutput](docs/WorkflowStepOutput.md)
 - [WorkflowStepTriggerRequest](docs/WorkflowStepTriggerRequest.md)
 - [WorkflowStepTriggerResponse](docs/WorkflowStepTriggerResponse.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="HTTPBearer"></a>
### HTTPBearer

- **Type**: Bearer authentication

