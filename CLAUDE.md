# CLAUDE.md

Standing rules for Claude Code in this repository.

## Workflow rules

1. **Start of every session:** run `git pull` before doing anything else.

2. **After completing any edit the user requests:** immediately publish without
   asking for confirmation — the user has durably authorized this.
   - `git add -A`
   - `git commit -m "<short descriptive message>"`
   - `git push`

   > **Heads up:** a push auto-deploys live to production (americangage.com via
   > Vercel). Every pushed commit goes public immediately. Make each edit
   > complete and self-contained before publishing.

3. **If a push fails with a lock error** (`.git/index.lock`): first confirm no
   other git process is actually running, then delete `.git\index.lock` and
   retry the push. (Deleting the lock while a real git operation is in progress
   can corrupt the index — only remove it if it's stale.)
