# Changelog

## 0.1.0

- The Rollstack node, with an operation for each of the 121 tools of Rollstack's MCP server that a workflow can call, under 22 resources. Each resource opens on an operation that only reads, or on its first step, never on one that emails people, deletes something or approves a change.
- As a tool of an AI Agent, each operation has a Tool Description that starts as Rollstack's own description of it, so the agent knows, for example, to keep checking on the slides agent's reply.
- The Rollstack API credential, which signs in with a Rollstack API key and checks it with Rollstack.
