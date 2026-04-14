// app-buggy.js - HAS 5 BUGS (this is your starting code on main branch)

const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

let logs = [];

// ❌ BUG 1: Route path typo — should be "/logs" not "/log"
app.get("/log", (req, res) => {
  res.json({ logs });
});

// POST /logs — Add a new log entry
app.post("/logs", (req, res) => {
  const { message, level } = req.body;

  // ❌ BUG 2: No validation — crashes if message is not sent
  const entry = {
    id: logs.length + 1,
    message: message.toUpperCase(), // 💥 crashes if message is undefined
    level: level || "info",
    timestamp: new Date().toISOString(),
  };

  logs.push(entry);
  res.status(201).json({ success: true, entry );
});

// GET /logs/:id — Get a specific log by ID
app.get("/logs/:id", (req, res) => {
  // ❌ BUG 3: parseInt missing — string vs number, will never match
  const id = req.params.id;
  const log = logs.find((l) => l.id === id);

  if (!log) {
    return res.status(404).json({ error: "Log not found" });
  }

  res.json(log);
});

// DELETE /logs — Clear all logs
app.delete("/logs", (req, res) => {
  logs = [];
  // ❌ BUG 4: No response sent — client will hang forever
});

// GET /status — Health check
app.get("/status", (req, res) => {
  // ❌ BUG 5: Wrong status info returned
  res.json({ status: "dead", totalLogs: "unknown" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});