const url =
  "https://api.thingspeak.com/channels/3103082/feeds.json?api_key=5XEVX47I73XH8W1X"

https: fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const feeds = data.feeds
    const tempData = feeds.map((feed) => ({
      time: feed.created_at,
      temp: parseFloat(feed.field1),
      id: feed.entry_id,
    }))
    document.getElementById("output").textContent = JSON.stringify(tempData)
  })
