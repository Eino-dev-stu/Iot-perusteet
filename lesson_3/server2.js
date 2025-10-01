const express = require("express")
const sqlite3 = require("sqlite3")
const app = express()
const port = 3000
app.use(express.json())
const db = new sqlite3.Database("./testData.db", (err) => {
  if (err) return console.error(err.message)
  console.log("conection ready")
})
db.run(
  "CREATE TABLE IF NOT EXISTS users( id INTEGER PRIMARY KEY AUTOINCREMENT, nam TEXT NOT NULL, message TEXT NOT NULL)"
)
app.get("/api/sensor", (req, res) => {
  res.json({ temperature: 22.5, humidity: 55, status: "OK" })
})
app.get("/api/users", (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message })
    res.json(rows)
  })
})
app.post("/api/users", (req, res) => {
  const { nam, message } = req.body
  db.run(
    "INSERT INTO users (name, message) VALUES (?, ?)",
    [nam, message],
    function (err) {
      if (err) return res.status(400).json({ error: err.message })
      res.status(201).json({ id: this.lastID, nam, message })
    }
  )
  res.json({ result: "in the post point" })
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
