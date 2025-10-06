import machine
import time
import dht

sensor = dht.DHT22(machine.Pin(1))

while True:
    try:
        sensor.measure()
        temperature = sensor.temperature()
        humidity = sensor.humidity()

        print("temperature: {:.1f}".format(temperature))
        print("huimdity: {:.1f}".format(humidity))
    except OSError as e:
        print("sensor errot", e)
    time.sleep(2)