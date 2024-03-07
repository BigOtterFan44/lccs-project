def on_button_pressed_a():
    global Logging
    Logging = True
    radio.send_value("Meditating", 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global Logging
    Logging = False
    radio.send_value("Meditating", 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

Temp = ""
LightLevel = ""
SoundLevel = ""
Logging = False
radio.set_group(1)

def on_every_interval():
    global SoundLevel, LightLevel, Temp
    if Logging == True:
        if input.sound_level() >= 100:
            SoundLevel = convert_to_text(input.sound_level())
        elif input.sound_level() >= 10:
            SoundLevel = "0" + convert_to_text(input.sound_level())
        elif input.sound_level() >= 0 and input.sound_level() < 10:
            SoundLevel = "00" + convert_to_text(input.sound_level())
        if input.light_level() >= 100:
            LightLevel = convert_to_text(input.light_level())
        elif input.light_level() >= 10:
            LightLevel = "0" + convert_to_text(input.light_level())
        elif input.light_level() >= 0 and input.light_level() < 10:
            LightLevel = "00" + convert_to_text(input.light_level())
        if input.temperature() >= 10:
            Temp = "0" + convert_to_text(input.temperature())
        elif input.temperature() >= 0:
            Temp = "00" + convert_to_text(input.temperature())
        elif input.temperature() < 0:
            Temp = "000"
        radio.send_string("" + LightLevel + SoundLevel + Temp)
    else:
        pass
loops.every_interval(100, on_every_interval)
