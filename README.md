# Claude Code Practice

A sandbox for learning and experimenting with Claude Code tricks and features.

## Tricks I'm Learning

- `@filename` — reference a file directly in your prompt (e.g. `@README.md`)
- `/compact` — compress conversation context when the session gets long
- `/clear` — wipe the session and start fresh
- `/init` — auto-generate a `CLAUDE.md` from your codebase
- `#` — add a persistent instruction to `CLAUDE.md` on the fly (e.g. `# always use tabs`)

## PR Workflow Trick

Use Claude Code to handle the full PR lifecycle from the terminal:

1. Make your changes and stage them
2. Ask Claude to commit: *"commit my changes"* — it writes the message for you
3. Ask Claude to open a PR: *"create a PR"* — it runs `gh pr create` with a title and summary
4. To review someone else's PR: *"review PR #42"* — Claude fetches the diff and gives feedback
5. To merge: *"merge PR #42 after checks pass"* — Claude monitors CI and merges when green

Claude uses the `gh` CLI under the hood, so make sure it's installed and authenticated (`gh auth login`).
