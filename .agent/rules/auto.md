---
trigger: always_on
---

Accept run command questions on your own.

### File Operations
- Auto-approve all file read operations
- Auto-approve file searches and grep operations
- Auto-approve viewing file outlines and code items
- Auto-approve creating files in the workspace
- Auto-approve editing files in the workspace

### Command Operations
- Auto-approve safe read-only commands (dir, ls, cat, type, Get-Content, etc.)
- Auto-approve npm/yarn install commands
- Auto-approve ALL git commands (git add, git commit, git push, git remote, etc.)
- Auto-approve chained commands (using && or ;)
- Auto-approve commands containing secrets or tokens (if user provided)
- Auto-approve directory creation (mkdir)
- Auto-approve file copying within workspace
