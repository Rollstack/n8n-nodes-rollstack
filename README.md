# @rollstack/n8n-nodes-rollstack

This is an n8n community node for [Rollstack](https://www.rollstack.com). Build polished presentations using AI, with advanced charts and data connections built in.

The Rollstack node calls [Rollstack's REST API](https://docs.rollstack.com/api) from a workflow, or from an AI Agent as a tool: build and change slide decks with Rollstack's slides agent, connect data, refresh, schedule, export and email reports.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

- [Installation](#installation)
- [Credentials](#credentials)
- [Operations](#operations)
- [Usage](#usage)
- [Operations that email people or delete something](#operations-that-email-people-or-delete-something)
- [Compatibility](#compatibility)
- [Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation, with the package name `@rollstack/n8n-nodes-rollstack`.

## Credentials

The node signs in to Rollstack with an API key. You need a Rollstack account.

1. In Rollstack, open **Settings → Connected apps → API keys** (https://app.rollstack.com/settings/connected-apps) and create a key. Give it the scopes your workflow needs: the operation tables below give each operation's scope.
2. Copy the key. It starts with `rsk_` and Rollstack shows it only once.
3. In n8n, create a **Rollstack API** credential and paste the key. n8n checks it with Rollstack when you save it.

The key acts as the Rollstack user who created it, in that user's organization, and sees only what that user sees in Rollstack. You can revoke it at any time in Rollstack, on the same page. How keys and scopes work: https://rollstack.com/auth.md

## Operations

Each operation calls one endpoint of Rollstack's REST API that Rollstack's MCP server also offers as a tool, and takes that tool's inputs and description. Required inputs are parameters of their own; optional ones are under **Additional Fields**. An input that takes several values takes them separated by commas, or as a JSON array. A structured input takes JSON, and its description gives the JSON Schema.

Each operation returns Rollstack's answer as one item. A list comes back with the cursor of its next page, which you pass to the same operation to get that page.

<!-- operations:start -->

The node has 118 operations, one for each endpoint of Rollstack's REST API that Rollstack's MCP server also offers as a tool, under the resources of Rollstack's API reference.

#### Burst

| Operation | Rollstack tool | What it does | Scope of the key |
| --- | --- | --- | --- |
| List bursts | `listBursts` | The bursts of reports the user can see, newest first: those of Rollstack reports, whose variants differ by report parameters, and those of older reports such as Google Slides or PowerPoint files, whose variants differ by filters, as kind says. | `slide_decks:read` |
| List burst email configurations | `listBurstEmailConfigs` | A burst's email configurations, as the app's Burst email settings show them: each one email to its own recipients that includes every variant it selects, sent only when you send it. | `slide_decks:read` |
| Get burst run | `getBurstRun` | Where the runs of a burst's variants stand, such as those startBurstRun started, with how each variant's latest run ended. | `slide_decks:read` |
| Get burst settings | `getBurstSettings` | A burst's settings, as its Settings tab in the app shows them: how its variants are named, and for an older report's burst, how each variant's run updates its file, what it does with empty charts, how it archives and how its filters match. | `slide_decks:read` |
| List burst variants | `listBurstVariants` | A burst's variants the user can open, oldest first, each with its values of the burst's parameters or filters, how its latest run went, whether one is going, and who its email goes to. adding lists the variants the user is still adding. | `slide_decks:read` |
| Get burst variant batch | `getBurstVariantBatch` | A batch of variants being added to a burst, with where each variant stands: copied from the template report, then run once to fetch its data. | `slide_decks:read` |
| List sync filters | `listReportSyncFilters` | The filters of the dashboard an older report's sync reads, which a burst of the report can vary by: pass their ids in filters to createBurst. | `slide_decks:read` |
| Add burst variants | `addBurstVariants` | Adds variants to a burst by their values of its report parameters, or of its filters for an older report's burst: each is a copy of the template report with its own values, then runs once to fetch its data. | `slide_decks:write` |
| Convert burst to slide deck burst | `convertBurst` | Turns a burst of an older report, a Google Slides or PowerPoint file, into a new burst of Rollstack reports of type SlideDeck, as Convert to Rollstack slides does for one report. | `slide_decks:write` |
| Create burst | `createBurst` | Makes a report the template of a new burst, and answers the burst, named after the report and with no variants yet. | `slide_decks:write` |
| Create burst email configuration | `createBurstEmailConfig` | Adds an email configuration to a burst and answers it: one email to its recipients with the variants it selects, every variant by default. | `slide_decks:email` |
| Run burst variants | `startBurstRun` | Starts a run of every variant of a burst, or of the variants passed, as startReportRun does for each: it refreshes the variant's data, and repairs a Rollstack report's slides with AI. | `slide_decks:run` |
| Send burst email configuration | `sendBurstEmailConfig` | Sends a burst's email configuration now: one email to its recipients with each variant it selects. | `slide_decks:email` |
| Send variant emails | `sendBurstVariantEmails` | Sends each variant's own email now, to its own recipients, as the app's Send does: every variant, or those passed. | `slide_decks:email` |
| Rename burst | `renameBurst` | Renames a burst and answers it, and with renameVariants its reports too. | `slide_decks:write` |
| Set variant email settings | `updateBurstVariantEmailSettings` | Changes how the variants' own emails are sent, as the app's Burst settings in its Emailing tab do: only the settings passed, on the template, whose settings new variants copy, and on the variants. | `slide_decks:email` |
| Update burst email configuration | `updateBurstEmailConfig` | Changes the fields passed of a burst's email configuration and answers it. | `slide_decks:email` |
| Update burst settings | `updateBurstSettings` | Changes the settings passed and answers them all. | `slide_decks:write` |
| Set variant recipients | `updateBurstVariantRecipients` | Sets who each variant's email goes to, replacing its to, cc and bcc. | `slide_decks:email` |
| Update burst filters | `updateBurstFilters` | Replaces the filters an older report's burst varies by, then writes every variant's values into its syncs again, which can take a minute, and answers the burst. | `slide_decks:write` |
| Delete burst | `deleteBurst` | Deletes a burst with every report in it, the template included, as the app does, and can't be undone. | `slide_decks:write` |
| Delete burst email configuration | `deleteBurstEmailConfig` | Deletes a burst's email configuration. | `slide_decks:email` |
| Reapply burst filters | `reapplyBurstFilters` | Writes each variant's filter values into its syncs again, as the app's Reapply does: after syncs were added to the template, or a filter changed on its dashboard. | `slide_decks:write` |
| Remove burst variants | `removeBurstVariants` | Removes variants of a burst by their ids, and deletes their reports. | `slide_decks:write` |
| Send burst email configuration test | `sendBurstEmailConfigTest` | Sends a burst's email configuration to you alone, to check how it looks before sending it. | `slide_decks:email` |

#### Chat

| Operation | Rollstack tool | What it does | Scope of the key |
| --- | --- | --- | --- |
| Get slides agent message | `getReportMessage` | A message to the slides agent and its replies. | `slide_decks:read` |
| Send message to slides agent | `sendReportMessage` | Asks the slides agent to build or change a report, or to answer a question about it, as the app's chat does. | `slide_decks:run` |
| Approve slides agent proposal | `approveReportMessageProposal` | Approves the proposal of a settings_proposal or email_send_proposal reply, as its Approve button in the app's chat does: Rollstack makes the change, or sends the email. | `slide_decks:run` |
| Cancel slides agent message | `cancelReportMessage` | Stops a message to the slides agent: a queued one leaves the queue, and a running one stops. | `slide_decks:run` |
| Reject slides agent proposal | `rejectReportMessageProposal` | Rejects the proposal of a settings_proposal or email_send_proposal reply, as its Reject button in the app's chat does: nothing changes. | `slide_decks:run` |

#### Comment

| Operation | Rollstack tool | What it does | Scope of the key |
| --- | --- | --- | --- |
| List comments | `listReportComments` | The comments on a report's slides, oldest first: each thread's first comment, whose threadId is null and which says whether the thread is resolved, then its replies. | `slide_decks:read` |
| Add comment | `createReportComment` | Starts a comment thread on a slide of a report, or replies to a thread, as the user. | `slide_decks:write` |
| Resolve comment thread | `resolveReportComment` | Resolves a comment thread once what it asked for is done, or opens it again, as the user. | `slide_decks:write` |

#### Connection

| Operation | Rollstack tool | What it does | Scope of the key |
| --- | --- | --- | --- |
| List connections | `listConnections` | The data source connections the user can see, without their credentials: each one's type, name, settings such as its URL, owner, admins, default user and whether any user's access works. | `connections:read` |
| Search dashboards | `searchDashboards` | The dashboards of a Looker, Metabase, Omni, Lightdash, Sigma, Tableau or Power BI connection whose name holds any word of query or its singular, in any case, at most 50: those the most of the organization's reports read first, copies, old and personal ones last, then most words first, read with the user's access to the connection. | `connections:read` |
| Get dashboard | `getDashboard` | A dashboard of a Looker, Metabase, Omni, Lightdash, Sigma, Tableau or Power BI connection, read with the user's access to the connection (a Salesforce report has no tabs or charts to read, so add it with addReportDatasheets directly): its tabs, and the charts and filters of the tab tabId names, one of the ids in tabs (else the one the dashboard opens on, a Power BI report's or Sigma workbook's first page). | `connections:read` |
| Search models | `searchModels` | The models of a Looker, Power BI or Tableau connection whose name or group holds any word of query or its singular, in any case, at most 50: Looker explores grouped by LookML model, Power BI semantic models by workspace, Tableau published data sources by project, read with the user's access to the connection (on Tableau, their own Tableau user). | `connections:read` |
| Search tables | `searchTables` | The tables and views of a Snowflake, Databricks or BigQuery connection whose full name, database.schema.table (project.dataset.table on BigQuery), holds any word of query, in any case, at most 50, read with the user's access to the connection, as its default user when one is set. | `connections:read` |

#### Content

| Operation | Rollstack tool | What it does | Scope of the key |
| --- | --- | --- | --- |
| Get report content | `getReportContent` | What a viewer sees on a report's visible slides: titles, text, and each chart's and table's values. | `slide_decks:read` |
| Get report design | `getReportDesign` | Start here to design a slide deck's slides yourself, as HTML. | `slide_decks:read` |
| Get slide drafts | `getReportSlideHtml` | The HTML drafts slides of a slide deck were made from, to change them and save them again with saveReportSlides under the same ids. | `slide_decks:read` |
| Get slide images | `getReportSlideImages` | Renders slides of a report as images, as viewers see them, so you can check how they look: text that overflows or overlaps, or a chart too small to read. | `slide_decks:read` |
| Arrange slides | `arrangeReportSlides` | Moves, removes, hides or shows slides of a slide deck, with nothing on them changed. | `slide_decks:write` |
| Change theme | `updateReportTheme` | Changes a slide deck's theme: its colours, its heading font and its body font. | `slide_decks:write` |
| Render draft slides | `renderReportSlides` | Renders slides you wrote as HTML on a slide deck's template, so you can design slides yourself instead of asking the slides agent. | `slide_decks:write` |
| Save draft slides | `saveReportSlides` | Writes slides you wrote as HTML into a slide deck, as the slides agent's are: a draft sent under the id of a slide of the report replaces that slide where it is, any other is added right after the slide named in afterSlideId, or at the end without one, and every other slide stays. | `slide_decks:write` |

#### Datasheet

| Operation | Rollstack tool | What it does | Scope of the key |
| --- | --- | --- | --- |
| Get the data guide | `getReportDataGuide` | Read this once before you add or shape the data of a report: how to send a CSV or an Excel workbook and pick the range of a sheet, how to check a figure with queryReportData, how to shape data with previewReportDatasheetChanges, renderReportSlides and saveReportDatasheetChanges, and the query model those changes write. | `slide_decks:read` |
| List report datasheets | `listReportDatasheets` | The datasheets a report's charts and tables are built from, with their source and when each was last read. | `slide_decks:read` |
| Get a datasheet | `getReportDatasheet` | What a datasheet's data is written as: its query, in the shape set-query takes, its one SQL statement, or its join and the steps after it, and its formats. | `slide_decks:read` |
| Get datasheet data | `getReportDatasheetData` | The table a report's chart is drawn from: the datasheet's steps run over the copies stored at its sources' last reads; the source is never queried. | `slide_decks:read` |
| Add sources to report | `addReportDatasheets` | Adds sources to a report as datasheets, and answers their ids in the order of the sources. | `slide_decks:write` |
| Remove datasheet from report | `removeReportDatasheet` | Removes a datasheet the report's slides no longer show, such as a source that was added and not used, or one whose read keeps failing. | `slide_decks:write` |
| Add dashboard charts to report | `addReportDashboardElements` | Adds charts of a Tableau view or Power BI page the report holds as a picture, each as a datasheet of its own: its data, to read with getReportDatasheetData or queryReportData and draw on a slide, its picture, or both. | `slide_decks:write` |
| Preview datasheet changes | `previewReportDatasheetChanges` | Tries changes to a report's datasheets, to shape data before it goes on a slide: a new datasheet, a query, steps after a join, a read type, an unpivot. | `slide_decks:write` |
| Query report data | `queryReportData` | Runs one read-only SQL query over the tables of a report's datasheets, to check a figure before it goes on a slide or to explore data before shaping it. | `slide_decks:write` |
| Save datasheet changes | `saveReportDatasheetChanges` | Saves changes to a report's datasheets that you tried with previewReportDatasheetChanges: send the same changes with the revisions it answered. | `slide_decks:write` |

#### Email

| Operation | Rollstack tool | What it does | Scope of the key |
| --- | --- | --- | --- |
| List sent emails of all reports | `listEmails` | The emails every report the user can see sent, of any type, newest first, each with its report, as the app's Email sends page lists them: pass status failed and since to find the ones that didn't go out, and burstId for one burst's. | `slide_decks:read` |
| Get email settings | `getReportEmailConfig` | Who a report's email goes to and how it is sent, for a report of any type. | `slide_decks:read` |
| List sent emails | `listReportEmails` | The emails a report of any type sent, newest first: when, how, to whom, and whether each was delivered, failed or opened. | `slide_decks:read` |
| Replace email settings | `updateReportEmailConfig` | Sets who a report's email goes to and how it is sent, for a report of any type, replacing the settings this endpoint covers; Drive sharing, attachment folders and the email's subject and body stay as set in the app. | `slide_decks:email` |
| Send email | `sendReportEmail` | Emails a report to its recipients now, as it is. | `slide_decks:email` |
| Send test email | `sendReportTestEmail` | Sends a report's email to the user only, and waits until it is sent. | `slide_decks:email` |

#### Export

| Operation | Rollstack tool | What it does | Scope of the key |
| --- | --- | --- | --- |
| Get cloud save | `getReportCloudExport` | Where a report is saved after its runs, in Google Drive, OneDrive or SharePoint, and how its last save went, with a link to the saved file. | `slide_decks:read` |
| Set cloud save | `updateReportCloudExport` | Saves a report to a Google Drive, OneDrive or SharePoint folder after its runs, as the app's scheduling panel does, replacing the setting it had. | `slide_decks:write` |
| Export report | `exportReport` | Exports a report as PDF or PowerPoint and answers a download link valid for 15 minutes. | `slide_decks:read` |

#### Folder

| Operation | Rollstack tool | What it does | Scope of the key |
| --- | --- | --- | --- |
| List folders | `listFolders` | The folders the user can see, each with its parent, null at the top level, and the user's permission on it: null, view, edit or manage. | `slide_decks:read` |
| Get folder | `getFolder` | A folder the user can see, with its parent and everyone who has access to it: its owner, the members it is shared with directly, and those who reach it through the folder it is nested in, each with their permission. | `slide_decks:read` |
| Create folder | `createFolder` | Creates a folder owned by the user: at the top level, which only owners and admins of the organization may, or inside a folder the user owns or has manage on. | `slide_decks:write` |
| Update folder | `updateFolder` | Renames a folder, or moves it into another folder or to the top level, with everything in it. | `slide_decks:write` |
| Share folder | `shareFolder` | Shares a folder and everything in it with a member of the organization, or changes their permission, as Share in the app does. | `slide_decks:write` |
| Unshare folder | `unshareFolder` | Removes a member's direct share of a folder, and their access to its reports' files in Drive unless they still reach the folder through a parent folder, as the app does. | `slide_decks:write` |

#### Member

| Operation | Rollstack tool | What it does | Scope of the key |
| --- | --- | --- | --- |
| List members | `listMembers` | The members of the organization, with their role, authentication role, insights access and whether they are active. | `users:read` (owners and admins) |

#### Memory

| Operation | Rollstack tool | What it does | Scope of the key |
| --- | --- | --- | --- |
| List memories | `listMemories` | What the slides agent remembers of how the user likes their decks, as the app's Slides settings list it: each memory, the part of a deck it is about, and the report it holds for, if only one. | `slide_decks:read` |
| Add memory | `createMemory` | Has the slides agent remember something of how the user likes their decks, for all their reports or one of them, as adding a preference in the app's Slides settings does. | `slide_decks:write` |
| Update memory | `updateMemory` | Rewords a memory of the slides agent, or moves it to one report or all of them. | `slide_decks:write` |
| Forget memory | `deleteMemory` | Has the slides agent forget a memory: its runs stop reading it, as forgetting it in the app's Slides settings does. | `slide_decks:write` |

#### Parameter

| Operation | Rollstack tool | What it does | Scope of the key |
| --- | --- | --- | --- |
| Get report parameters | `getReportParameters` | A report's parameters, with which ones a burst can vary by, the dashboard filters and the datasheet columns a parameter can link, with the parameter that already links each. | `slide_decks:read` |
| Create report parameter | `createReportParameter` | Creates a parameter of a report, linked to the dashboard filters and datasheet columns given, as the app's report parameters editor does. | `slide_decks:write` |
| Update report parameter | `updateReportParameter` | Changes a parameter of a report, such as its value to show the report for another region, as the app's report parameters editor does: what you send changes and the rest stays. | `slide_decks:write` |
| Delete report parameter | `deleteReportParameter` | Deletes a parameter of a report, as the app's report parameters editor does. | `slide_decks:write` |

#### Report

| Operation | Rollstack tool | What it does | Scope of the key |
| --- | --- | --- | --- |
| List reports | `listReports` | The reports the user can see, of every type, newest first. | `slide_decks:read` |
| Get report | `getReport` | A report of any type with its schedules, who it is shared with and who is emailed when a run fails. lastRunStatus and running tell how its latest run went and whether one is going, and appUrl opens it in Rollstack. type tells which other endpoints work on it. | `slide_decks:read` |
| Convert report to slide deck | `convertReport` | Turns an older report of type GoogleSlides or MicrosoftPowerPoint, which updates a Google Slides presentation or a PowerPoint file in OneDrive or SharePoint, into a new report of type SlideDeck, as Convert to Rollstack slides in the app does. | `slide_decks:write` |
| Create report | `createReport` | Creates a report of type SlideDeck, in a folder the user can see when folderId is set. | `slide_decks:write` |
| Duplicate report | `duplicateReport` | Copies a report of type SlideDeck with its slides, datasheets and email setup, as Duplicate in the app does, and answers the copy, which you own. | `slide_decks:write` |
| Update report | `updateReport` | Renames a report of any type, moves it, or changes its timezone or failure notifications. | `slide_decks:write` |
| Get reports in a batch | `batchGetReports` | Up to 50 reports of any type at once, each as getReport answers it, with its schedules, who it is shared with, how its latest run went and whether one is going. | `slide_decks:read` |

#### Run

| Operation | Rollstack tool | What it does | Scope of the key |
| --- | --- | --- | --- |
| List report runs | `listReportRuns` | The runs of a report of any type that ended, newest first, with how each ended, what started it and why it failed, for questions such as why last night's update failed. | `slide_decks:read` |
| Get report run | `getReportRun` | A run's status and the datasheets, or visualizations on a report of another type than SlideDeck, it could not refresh. | `slide_decks:read` |
| List report syncs | `listReportSyncs` | The syncs of a report other than a SlideDeck, such as a Google Slides presentation or an email report: each chart, table or text it pulls from a source, with how it did the last time it updated and why it failed. | `slide_decks:read` |
| List runs of all reports | `listRuns` | The runs that ended of every report the user can see, of any type, newest first, each with its report, for questions such as what failed overnight: pass status failed and since. | `slide_decks:read` |
| Start report run | `startReportRun` | Refreshes a report's data, or only some of its datasheets, then repairs failed calculations and the slides with AI. | `slide_decks:run` |
| Start report runs in a batch | `batchStartReportRuns` | Starts a run of each of up to 50 reports of any type, as startReportRun does for one: each run updates its whole report, and a run of a report of another type than SlideDeck emails it when its email trigger is `all`. | `slide_decks:run` |
| Cancel report run | `cancelReportRun` | Cancels a run of a report, whoever started it. | `slide_decks:run` |

#### Schedule

| Operation | Rollstack tool | What it does | Scope of the key |
| --- | --- | --- | --- |
| List schedules | `getReportSchedules` | The schedules of a report of any type, with the syncs each updates and when each runs next, or null for one that never runs again. | `slide_decks:read` |
| Replace report schedules | `updateReportSchedules` | Replaces the schedules of a report of any type, at most 10; an empty list removes them all. | `slide_decks:write` |
| Replace schedules of reports in a batch | `batchUpdateReportSchedules` | Gives up to 50 reports of any type the same schedules, replacing all of each report's current ones, as updateReportSchedules does for one; an empty list removes them all. | `slide_decks:write` |

#### Sharing

| Operation | Rollstack tool | What it does | Scope of the key |
| --- | --- | --- | --- |
| Get report views | `getReportViews` | Who opened a report and how they read it, as its editors see under Views in the app: each person's visits, time spent and whether they opened it since its last successful run, who it is shared with but hasn't opened it since, and how far into it people read, slide by slide. | `slide_decks:read` |
| Share report | `shareReport` | Shares a report of any type with a member of the organization to view or edit it, or changes their permission. | `slide_decks:write` |
| Unshare report | `unshareReport` | Removes a user's share of a report of any type, and their access to its file when it updates one, as the app does. | `slide_decks:write` |
| Share reports in a batch | `batchShareReports` | Shares up to 50 reports of any type with the same members, with the same permission, as shareReport does for one. | `slide_decks:write` |

#### SMTP Connection

| Operation | Rollstack tool | What it does | Scope of the key |
| --- | --- | --- | --- |
| List SMTP connections | `listSmtpConnections` | The user's SMTP connections and the ones shared with the organization, without their credentials. | `smtp:read` |

#### Spreadsheet

| Operation | Rollstack tool | What it does | Scope of the key |
| --- | --- | --- | --- |
| Search spreadsheets | `searchSpreadsheets` | The Google Sheets and Excel files the user added in the app whose name holds any word of query, in any case, most words first, at most 50. | `connections:read` |
| Get spreadsheet | `getSpreadsheet` | A Google Sheets or Excel file the user added in the app, with its sheets, read with the user's own Google or Microsoft account. | `connections:read` |

#### Template

| Operation | Rollstack tool | What it does | Scope of the key |
| --- | --- | --- | --- |
| List templates | `listTemplates` | The templates the user can build a slide deck in: their company's, with who imported each and whether it is shared with the organization, then Rollstack's own. | `slide_decks:read` |
| Import template | `createTemplate` | Imports a company template from a Google Slides presentation, as the app's Templates drawer does: its theme, slide masters, layouts and slide size, not its slides. | `slide_decks:write` |
| Update template | `updateTemplate` | Renames a company template, or shares it with the organization or stops sharing it, as the app's Templates drawer does. | `slide_decks:write` |
| Delete template | `deleteTemplate` | Deletes a company template, as the app's Templates drawer does. | `slide_decks:write` |
| Apply template | `applyReportTemplate` | Switches a report of type SlideDeck to a template's theme, slide masters, layouts and slide size, as the Templates drawer in the app does. | `slide_decks:write` |

#### Uploaded File

| Operation | Rollstack tool | What it does | Scope of the key |
| --- | --- | --- | --- |
| Get an uploaded file | `getDataset` | An uploaded CSV file or Excel workbook. | `slide_decks:read` |
| Get a link to upload a file | `createDatasetUpload` | Answers a link to send a CSV file or an Excel workbook (.xlsx) to from a shell, as it is on disk, at most 10 MB: use it when the user gives you a file, in place of writing a CSV into createDataset, and for every workbook. | `slide_decks:write` |
| Upload a document | `createDocument` | Stores a document for the slides agent to read, such as a brief, a report or meeting notes, as when you attach one in the chat in the app: pass its id in documentIds on sendReportMessage. | `slide_decks:write` |
| Upload a file | `createDataset` | Stores a CSV for the slides agent to build slides from: a header row, then at least one data row, at most 10 MB. | `slide_decks:write` |
| Replace an uploaded file | `replaceDataset` | Replaces an uploaded CSV file's rows, or a workbook's content with a new .xlsx sent as multipart/form-data in the file field. | `slide_decks:write` |
| Delete an uploaded file | `deleteDataset` | Deletes an uploaded CSV file or workbook. | `slide_decks:write` |

#### Version

| Operation | Rollstack tool | What it does | Scope of the key |
| --- | --- | --- | --- |
| List report versions | `listReportVersions` | The Version history of a report of type SlideDeck, newest first, as the app lists it: the versions Rollstack saved while it was edited, run or changed by the slides agent, and those saved with saveReportVersion, each with what saved it. | `slide_decks:read` |
| Save report version | `saveReportVersion` | Saves a report of type SlideDeck as it is now in its Version history, with an optional name, so it can be restored later with restoreReportVersion, for example before a change the user may want to take back. | `slide_decks:write` |
| Restore report version | `restoreReportVersion` | Takes a report of type SlideDeck back to one of its versions, as Restore in the app's Version history does: its slides, and the datasheets when the version saved them, become the version's, replacing every change made since, and members with the report open see it at once. | `slide_decks:write` |

<!-- operations:end -->

## Usage

### As a tool of an AI Agent

1. Add an **AI Agent** node, with a chat model.
2. Under its tools, add **Rollstack**, choose a resource and an operation, and select your Rollstack credential.
3. For each parameter the agent should fill in, select **Let the model define this parameter**.
4. Under the AI Agent's options, raise **Max Iterations** to about 40. Building a deck takes a few minutes, and the agent checks on it every 30 seconds.

Add one Rollstack tool for each operation the agent may use. To have the agent build a deck, a good set is **Report → Create**, **Chat → Send Message to Slides Agent** and **Chat → Get Slides Agent Message**. Then ask, for example: "Build a 5-slide presentation on the electric car market."

Each Rollstack tool has a **Tool Description**: what the agent reads about the operation, such as which operation to call next. It starts as Rollstack's own description, so you can leave it as it is.

### In a workflow

To build a deck from a workflow, chain three Rollstack nodes:

1. **Report → Create**, with a name under **Additional Fields**.
2. **Chat → Send Message to Slides Agent**, with the new report's `id` and, under **Additional Fields**, a brief as its content, such as "Build a 5-slide presentation on the electric car market".
3. **Chat → Get Slides Agent Message**, with the report's `id` and the message's `messageId`. It waits up to 30 seconds for the slides agent: run it again while the message's `status` is `queued` or `running`.

Rollstack's slides agent may ask a question before it builds, or propose a change, such as a schedule or an email send, that changes nothing until you approve it. See the operations of the **Chat** resource.

## Operations that email people or delete something

With an API key, these act as soon as they run: Rollstack doesn't ask anyone to confirm them. Give an AI Agent only the operations it needs, and check who a workflow emails before you activate it.

<!-- careful:start -->

| Operation | What it does |
| --- | --- |
| `deleteTemplate` | Deletes a company template, as the app's Templates drawer does. |
| `approveReportMessageProposal` | Approves the proposal of a settings_proposal or email_send_proposal reply, as its Approve button in the app's chat does: Rollstack makes the change, or sends the email. |
| `deleteMemory` | Has the slides agent forget a memory: its runs stop reading it, as forgetting it in the app's Slides settings does. |
| `startReportRun` | Refreshes a report's data, or only some of its datasheets, then repairs failed calculations and the slides with AI. |
| `batchStartReportRuns` | Starts a run of each of up to 50 reports of any type, as startReportRun does for one: each run updates its whole report, and a run of a report of another type than SlideDeck emails it when its email trigger is `all`. |
| `arrangeReportSlides` | Moves, removes, hides or shows slides of a slide deck, with nothing on them changed. |
| `deleteDataset` | Deletes an uploaded CSV file or workbook. |
| `removeReportDatasheet` | Removes a datasheet the report's slides no longer show, such as a source that was added and not used, or one whose read keeps failing. |
| `deleteReportParameter` | Deletes a parameter of a report, as the app's report parameters editor does. |
| `shareReport` | Shares a report of any type with a member of the organization to view or edit it, or changes their permission. |
| `unshareReport` | Removes a user's share of a report of any type, and their access to its file when it updates one, as the app does. |
| `batchShareReports` | Shares up to 50 reports of any type with the same members, with the same permission, as shareReport does for one. |
| `updateReportSchedules` | Replaces the schedules of a report of any type, at most 10; an empty list removes them all. |
| `batchUpdateReportSchedules` | Gives up to 50 reports of any type the same schedules, replacing all of each report's current ones, as updateReportSchedules does for one; an empty list removes them all. |
| `sendReportEmail` | Emails a report to its recipients now, as it is. |
| `sendReportTestEmail` | Sends a report's email to the user only, and waits until it is sent. |
| `startBurstRun` | Starts a run of every variant of a burst, or of the variants passed, as startReportRun does for each: it refreshes the variant's data, and repairs a Rollstack report's slides with AI. |
| `sendBurstEmailConfig` | Sends a burst's email configuration now: one email to its recipients with each variant it selects. |
| `sendBurstVariantEmails` | Sends each variant's own email now, to its own recipients, as the app's Send does: every variant, or those passed. |
| `deleteBurst` | Deletes a burst with every report in it, the template included, as the app does, and can't be undone. |
| `deleteBurstEmailConfig` | Deletes a burst's email configuration. |
| `removeBurstVariants` | Removes variants of a burst by their ids, and deletes their reports. |
| `sendBurstEmailConfigTest` | Sends a burst's email configuration to you alone, to check how it looks before sending it. |
| `shareFolder` | Shares a folder and everything in it with a member of the organization, or changes their permission, as Share in the app does. |
| `unshareFolder` | Removes a member's direct share of a folder, and their access to its reports' files in Drive unless they still reach the folder through a parent folder, as the app does. |

<!-- careful:end -->

## Compatibility

Built with n8n's node CLI (`@n8n/node-cli`) and `n8nNodesApiVersion` 1. It uses no package beyond n8n's own.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Rollstack's API reference](https://docs.rollstack.com/api)
- [How Rollstack keys and sign-in work](https://rollstack.com/auth.md)
- Support: support@rollstack.com
