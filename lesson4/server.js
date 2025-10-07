const http = require("http")
const WebSocket = require("ws")
const fetch = require("node-fetch")
const { copyFileSync } = require("fs")
const server = http.createServer()
const wss = new WebSocket.Server({ server })
const URL =
  "https://api.thingspeak.com/channels/3103082/feeds.json?api_key=5XEVX47I73XH8W1X"
let lastId = 0
let message = ""
async function pollThingSpeak() {
  const response = await fetch(URL)
  const data = await response.json()
  last = data.channel.last_entry_id
  //const feed = data.feeds[0]
  const feed = data.feeds.find((feed) => feed.entry_id === last)
  console.log(data.channel.last_entry_id)
  if (feed && parseInt(data.channel.last_entry_id) > lastId) {
    lastId = parseInt(data.channel.last_entry_id)

    console.log("new")

    const message = JSON.stringify({
      type: "update",
      temperature: feed.field1,
      humidity: feed.field2,
      time: feed.created_at,
    })
    console.log(message)
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message)
      }
    })
  } else {
    console.log("Nonew", lastId)
    message = "None"
  }
}
setInterval(pollThingSpeak, 4000)
pollThingSpeak()
wss.on("connection", (ws) => {
  ws.send(JSON.stringify({ type: "info", message: "Connected to server!" }))
})

server.listen(8080)
