# Changelog

## 0.2.1

- No change to the node. Published again so n8n's Creator Portal can run its verification pre-check on a new version.

## 0.2.0

- The node now calls Rollstack's REST API rather than its MCP server, as n8n requires of verified community nodes. Each operation is one request to the endpoint its tool calls, with the same parameters.
- With an API key, operations that email people or delete something now run at once. Over the MCP server, Rollstack asked the user to confirm them first.
- Left out, since only Rollstack's MCP server has them: Show report and Show templates, which open views in other clients, and Submit feedback. The node has 118 operations under 21 resources.
- Slide images are JPEG files, named after the operation, and each slide in the answer names its binary property.

## 0.1.0

- The Rollstack node, with an operation for each of the 121 tools of Rollstack's MCP server that a workflow can call, under 22 resources. Each resource opens on an operation that only reads, or on its first step, never on one that emails people, deletes something or approves a change.
- As a tool of an AI Agent, each operation has a Tool Description that starts as Rollstack's own description of it, so the agent knows, for example, to keep checking on the slides agent's reply.
- The Rollstack API credential, which signs in with a Rollstack API key and checks it with Rollstack.
