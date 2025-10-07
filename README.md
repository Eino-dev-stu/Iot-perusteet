## LESSON1 Embedded programming using Raspberry Pi Pico in wokwi.com
#### 1. Shows the humidity and temperatures at 2 second intervals [weather code](https://github.com/Eino-dev-stu/Iot-perusteet/blob/main/lesson_1/weather.py)
<img src="https://github.com/Eino-dev-stu/Iot-perusteet/blob/main/pictures/Screenshot%202025-10-07%20030009.png" alt="screenshot" width="40%" height="40%">

#### 2. Button that turns lights on and off [Light code](https://github.com/Eino-dev-stu/Iot-perusteet/blob/main/lesson_1/two_lights.py)
<img src="https://github.com/Eino-dev-stu/Iot-perusteet/blob/main/pictures/Screenshot%202025-10-07%20025851.png" alt="screenshot" width="40%" height="40%">

#### 3. Three lights turn on one after another. Button turns on only red light.[three light code](https://github.com/Eino-dev-stu/Iot-perusteet/blob/main/lesson_1/street_lights.py)
<img src="https://github.com/Eino-dev-stu/Iot-perusteet/blob/main/pictures/Screenshot%202025-10-07%20030059.png" alt="screenshot" width="40%" height="40%">

#### 4. Counts how fast button is pressed after light turns off. [reflex button code](https://github.com/Eino-dev-stu/Iot-perusteet/blob/main/lesson_1/reflex_button.py)
<img src="https://github.com/Eino-dev-stu/Iot-perusteet/blob/main/pictures/Screenshot%202025-10-07%20030210.png" alt="screenshot" width="40%" height="40%">

## LESSON2 
#### screen says hellothere [screen code](https://github.com/Eino-dev-stu/Iot-perusteet/blob/main/lesson_2/screen.py)
<img src="https://github.com/Eino-dev-stu/Iot-perusteet/blob/main/pictures/screen.png" alt="screen" width=40% height=40%>

#### server.js [code](https://github.com/Eino-dev-stu/Iot-perusteet/blob/main/lesson_2/server.js)

## LESSON3
#### server2.js [code](https://github.com/Eino-dev-stu/Iot-perusteet/blob/main/lesson_3/server2.js)


## LESSON4  
### Iot-pipeline Wokwi -> thingspeak -> server -> dashborad
## 1 [Wokwi weather sensor](https://wokwi.com/projects/444134148581645313)
Sensor that sends humidity and temperature data to thingspeak using api
## 2 [code for getting data from thingspeak](https://github.com/Eino-dev-stu/Iot-perusteet/blob/main/lesson4/get_data2.js)
####  ThingSpeak API
- **API Endpoint**: `https://api.thingspeak.com/channels/3103082/feeds.json?api_key=5XEVX47I73XH8W1X`
- **Data Format**: JSON  array containing entries like:
  ```json
  {
    "created_at": "2025-10-07T09:44:24Z",
    "entry_id": 1,
    "field1": "37.5",
    "field2": "85.5"
  }
## 3 [server.js code](https://github.com/Eino-dev-stu/Iot-perusteet/blob/main/lesson4/server.js)
  Server runs on port 8080 and polls thingspeak api every 4 seconds for updates in weather data sent by sensor. 
  When update is noticed websocket is used to send the new to the dashboard.  It appears as a text not in the graph.

## 4 Dashboard [code](https://github.com/Eino-dev-stu/Iot-perusteet/blob/main/lesson4/data_page.html)   
  Frontend dashboard show line graph of data and updates to data at bottom of the page. If Sensor and poll server are both running.

 
