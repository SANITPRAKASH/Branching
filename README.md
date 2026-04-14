# Buggy Logger App — Git Practice

A simple Express logger API with **5 intentional bugs** to find and fix.
Use this project to practice: creating branches, fixing bugs, pushing, and opening pull requests.

---

## Setup

```bash
npm install
node app.js
```

---

## The 5 Bugs

| # | File    | Line | Bug Description                             |
|---|---------|------|---------------------------------------------|
| 1 | app.js  | 6    | PORT might cause confusion (minor)          |
| 2 | app.js  | 11   | GET route is `/log` instead of `/logs`      |
| 3 | app.js  | 22   | No validation → crashes if message missing  |
| 4 | app.js  | 33   | `parseInt` missing → ID never matches       |
| 5 | app.js  | 42   | DELETE sends no response → client hangs     |

---

## Git Workflow to Practice

### Step 1 — Set up the repo
```bash
git init
git add .
git commit -m "initial commit: buggy logger app"
```

### Step 2 — Push to GitHub (your account)
```bash
git remote add origin https://github.com/YOUR_USERNAME/buggy-logger-app.git
git branch -M main
git push -u origin main
```

### Step 3 — Create a branch for your fix
```bash
git checkout -b fix/logger-bugs
```

### Step 4 — Fix the bugs in app.js, then commit
```bash
git add app.js
git commit -m "fix: resolve 5 bugs in logger API"
```

### Step 5 — Push the branch
```bash
git push origin fix/logger-bugs
```

### Step 6 — Open a Pull Request
Go to GitHub → your repo → you'll see a banner:
**"fix/logger-bugs had recent pushes — Compare & pull request"**
Click it, add a description, and open the PR!

---

## Test the API (after fixes)

```bash
# Add a log
curl -X POST http://localhost:3001/logs \
  -H "Content-Type: application/json" \
  -d '{"message": "server started", "level": "info"}'

# Get all logs
curl http://localhost:3001/logs

# Get log by ID
curl http://localhost:3001/logs/1

# Clear logs
curl -X DELETE http://localhost:3001/logs
```
