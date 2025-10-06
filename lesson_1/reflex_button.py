import machine
import utime
import urandom

led = machine.Pin(15,machine.Pin.OUT)
button = machine.Pin(14, machine.Pin.IN, machine.Pin.PULL_DOWN)

timer = 0

def button_handler(pin):
    button.irq(handler= None)
    reactionTime = utime.ticks_diff(utime.ticks_ms(),timer)
    print("reaction time " + str(reactionTime))

led.value(1)
utime.sleep(urandom.uniform(5,10))
led.value(0)
    
timer = utime.ticks_ms()

button.irq(trigger=machine.Pin.IRQ_RISING, handler= button_handler)