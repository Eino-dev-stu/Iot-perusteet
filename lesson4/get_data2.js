async function fetchTempData() {
  const url =
    "https://api.thingspeak.com/channels/3103082/feeds.json?api_key=5XEVX47I73XH8W1X"
  const res = await fetch(url)
  const data = await res.json()
  const feeds = data.feeds

  const chartData = [["Time", "Temperature", "humidity"]]
  feeds.forEach((feed) => {
    chartData.push([
      feed.created_at,
      parseFloat(feed.field1),
      parseFloat(feed.field2),
    ])
  })

  return chartData
}

window.fetchTempData = fetchTempData
