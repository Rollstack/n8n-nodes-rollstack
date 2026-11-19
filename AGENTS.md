# n8n community node

## This repository

The Rollstack node: one operation for each tool of Rollstack's MCP server (https://docs.rollstack.com/api/mcp-server).

- `nodes/Rollstack/generated.ts` and the operation tables in `README.md` are written by `scripts/generate.mjs` from
  `definitions/`. Don't edit them by hand: change the generator or the definitions, then run `npm run generate`. CI
  runs `npm run generate:check`.
- The node has every tool the server lists, apart from those `definitions/excluded.json` gives a reason for. Don't
  leave out a tool for any other reason, including tools that email people or delete data: list them in the README's
  table instead, which the generator writes from `EMAILS_OR_DELETES`.
- Each resource opens on the operation `DEFAULT_OPERATIONS` in `scripts/generate.mjs` names: one that only reads, or
  the resource's first step. Never one that emails people, deletes something or approves a change.
- As an AI Agent's tool, each operation has a `toolDescription` parameter, shown only in tool mode (`'@tool': [true]`),
  that starts as the tool's whole description from Rollstack. n8n's own automatic description is the operation's name
  alone, which doesn't tell the agent what to call next.
- `npm run update-definitions` refreshes `definitions/` from Rollstack. It needs `ROLLSTACK_API_KEY`, a key with every
  scope, which an owner or admin of the organization creates. Never ask for a key in the chat.
- Every operation is one JSON-RPC `tools/call` to the MCP server (`nodes/Rollstack/transport.ts`), signed with the
  credential's API key. The node is programmatic because that call, its event-stream answers, retries with the same
  idempotency key and held confirmations don't fit declarative routing.
- The node's description, `package.json`'s description and the README's opening line are Rollstack's listing line:
  "Build polished presentations using AI, with advanced charts and data connections built in." Keep them the same.
- `eslint.config.mjs` must stay n8n's default config, and `package.json` must keep `"strict": true` and no run-time
  `dependencies`: n8n Cloud and verification require both.
- Before you finish: `npm run generate:check`, `npm run lint` and `npm test` (which builds first) must pass.

## Overview
This is a project containing code for an n8n community node. n8n is a workflow
automation platform where users build workflows with nodes, which are the
building block of a workflow. Nodes can perform a range of actions, such as
starting a workflow (called a "trigger node"), fetching and sending data, or
processing and manipulating it. Besides that there are credentials - entities
that store sensitive information on how to connect to external services and
APIs. A node can require some credentials to be used. Community nodes are a way
for anyone to create such nodes and add them to be used in n8n. All community
nodes are named in a format: `n8n-nodes-<n>` or `@org/n8n-nodes-<n>`.
Community nodes can also be submitted for approval to be used on n8n Cloud
version. In that case there are rules that the node needs to follow in order to
be approved

## Important notes
- Follow the **rules and guidelines in this document and the linked docs
  below** over any code examples.
- All code blocks in these docs are **illustrative and incomplete**.
  They **MUST NOT** be copied verbatim or assumed to be the final desired code.
- Replace example names like `Example`, `Wordpress`, `wordpressApi`, etc.
  with names that match the **actual service / node** you are building.
- When in doubt, **generalize from the patterns**, don't replicate the exact
  structure, fields, or values from the examples.
- Produce the **full implementation** needed for the current project
  (nodes, credentials, tests, etc.), not just fragments similar to examples.
- If an example omits parts (e.g. types, operations, properties), **infer and
  implement the missing parts** based on the real requirements / API docs.
- Never output `Wordpress`-specific code unless the project is actually about
  WordPress.

## Project structure
There are two main folders in this project:
- `nodes` contains all of the nodes in a package (there can be more than 1).
  The code for each node usually lives in its own folder
- `credentials` contains all of the credentials in a package. Usually it's just
  a single file for every credential
So it looks something like this:
.
├── nodes/
│   └── Example/
│       ├── Example.node.ts
│       └── ...
├── credentials/
│   └── Example.credentials.ts
├── package.json
└── ...
It's important to note that `package.json` has a special field `n8n` that have
information about nodes and credentials in a package:
```json
{
  "name": "n8n-nodes-example",
  "version": "1.0.0",
  "n8n": {
    "n8nNodesApiVersion": 1,
    "strict": true,
    "credentials": [
        "dist/credentials/Example.credentials.js"
    ],
    "nodes": [
      "dist/nodes/Example/Example.node.js"
    ]
  }
}
```
`nodes` and `credentials` keys contain paths to transpiled JS files in a `dist`
folder for the nodes and credentials respectively. If you add/remove/rename
nodes and/or credentials, you need to make sure to update `n8n.nodes` and
`n8n.credentials` keys in `package.json` accordingly. Initial files in the
project _may_ contain example nodes and/or credentials that need to be
**removed or renamed** once you start making an actual node.

## Key guidelines
- Use the `n8n-node` CLI tool **whenever possible** for building, dev mode,
  linting, etc.
- **Always** address any lint/typecheck errors/warnings, unless there is a
  **very specific reason** to ignore/disable it
- Make sure to use **proper types whenever possible**
- If you are updating the npm package version, make sure to **update
  CHANGELOG.md** in the root of the repository
- Read `.agents/workflow.md` for more info

## Context-specific docs
Load these before working on the relevant area:

| Working on...                        | Read first                                                          |
|--------------------------------------|---------------------------------------------------------------------|
| Any node file in `nodes/`            | `.agents/nodes.md` and `.agents/properties.md`                      |
| A declarative-style node             | above + `.agents/nodes-declarative.md`                              |
| A programmatic-style node            | above + `.agents/nodes-programmatic.md`                             |
| Files in `credentials/`              | `.agents/credentials.md`                                            |
| Adding a new version to a node       | `.agents/versioning.md`                                             |
| Starting a new task or planning      | `.agents/workflow.md`                                               |

## Additional resources
If you need any extra information, here are links to n8n's official docs
regarding building community nodes:
- https://docs.n8n.io/integrations/community-nodes/build-community-nodes/
- https://docs.n8n.io/integrations/creating-nodes/overview/
- https://docs.n8n.io/integrations/creating-nodes/build/reference/
- https://docs.n8n.io/integrations/creating-nodes/build/reference/ux-guidelines/
