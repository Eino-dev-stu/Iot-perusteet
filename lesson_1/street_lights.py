import machine 
import utime
red_led = machine.Pin(15, machine.Pin.OUT)
yel_led = machine.Pin(14, machine.Pin.OUT) 
green_led = machine.Pin(13, machine.Pin.OUT) 
button = machine.Pin(3, machine.Pin.IN, machine.Pin.PULL_UP)
buzzer = machine.Pin(0, machine.Pin.OUT )
while True:
  
    if button.value() == 0:
        red_led.value(1)
        for i in range(10):

            buzzer.value(1)
            utime.sleep(0.2)
            buzzer.value(0)
            utime.sleep(0.2)
        
        red_led.value(0)
        
    green_led.value(1)
    utime.sleep(2)
    green_led.value(0)
    yel_led.value(1)
    utime.sleep(2)
    green_led.value(0)
    yel_led.value(0)
    red_led.value(1)
    utime.sleep(2)
    red_led.value(0)
    yel_led.value(1)
    green_led.value(0)
    utime.sleep(2)
    yel_led.value(0)