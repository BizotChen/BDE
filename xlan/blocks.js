//Serial-------------------------------------------------------------
Blockly.Blocks.xlan_serial_init = {
  init: function() {
    this.appendDummyInput()
        .appendField("Initial Serial in baud")
        .appendField(new Blockly.FieldDropdown([["4800","4800"], ["9600","9600"], ["19200","19200"], ["38400","38400"], ["57600","57600"], ["115200","115200"]]), "baud");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.xlan_serial_print = {
  init: function() {
    this.appendDummyInput()
        .appendField("Print a string");
    this.appendValueInput("TEXT")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("to Serial");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.xlan_serial_println = {
  init: function() {
    this.appendDummyInput()
        .appendField("Print an inline string");
    this.appendValueInput("TEXT")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("to Serial");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.xlan_serial_while_loop = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read data from Serial");
    this.appendStatementInput("STATEMENT")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.xlan_serial_read_a_char = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read a char to the variable")
        .appendField(new Blockly.FieldVariable("chrBuffer"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.xlan_serial_read_an_inline_string = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read an inline string to the variable")
        .appendField(new Blockly.FieldVariable("strBuffer"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Line---------------------------------------------------------------
Blockly.Blocks.xlan_set_line_token = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set a LINE token");
    this.appendValueInput("TEXT")
        .setCheck("String");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.xlan_send_line_msg = {
  init: function() {
    this.appendDummyInput()
        .appendField("Send a LINE message");
    this.appendValueInput("TEXT")
        .setCheck("String");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.xlan_send_line_msg_with_image = {
  init: function() {
    this.appendDummyInput()
        .appendField("Send a LINE message");
    this.appendValueInput("TEXT")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("with image");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//BLE----------------------------------------------------------------
Blockly.Blocks.xlan_ble_serial_init = {
  init: function() {
    this.appendDummyInput()
        .appendField("Initial BLE Serial with name");
    this.appendValueInput("TEXT")
        .setCheck("String");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(110);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.xlan_ble_serial_while_loop = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read data from BLE Serial");
    this.appendStatementInput("STATEMENT")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(110);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.xlan_ble_serial_read_a_char = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read a char to the variable")
        .appendField(new Blockly.FieldVariable("chrCmd"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(110);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Camera-------------------------------------------------------------
Blockly.Blocks.xlan_camera_init = {
  init: function() {
    this.appendDummyInput()
        .appendField("Initial a camera with resolution")
        .appendField(new Blockly.FieldDropdown([["UXGA(1600x1200)","FRAMESIZE_UXGA"], ["SXGA(1280x1024)","FRAMESIZE_SXGA"], ["XGA(1024x768)","FRAMESIZE_XGA"], ["SVGA(800x600)","FRAMESIZE_SVGA"], ["VGA(640x480)","FRAMESIZE_VGA"], ["CIF(400x296)","FRAMESIZE_CIF"], ["QVGA(320x240)","FRAMESIZE_QVGA"]]), "resolution");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.xlan_camera_brightness = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set the brightness of camera")
        .appendField(new Blockly.FieldDropdown([["-2","-2"], ["0","0"], ["2","2"]]), "brightness");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.xlan_camera_special_effect = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set the special effect of camera")
        .appendField(new Blockly.FieldDropdown([["No Effect","0"], ["Negative","1"], ["Grayscale","2"], ["Red Tint","3"], ["Green Tint","4"], ["Blue Tint","5"], ["Sepia","6"]]), "sp_effect");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.xlan_camera_wb_mode = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set the white balance mode of camera")
        .appendField(new Blockly.FieldDropdown([["Auto","0"], ["Sunny","1"], ["Cloudy","2"], ["Office","3"], ["Home","4"]]), "wb_mode");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.xlan_camera_v_flip = {
  init: function() {
    this.appendDummyInput()
        .appendField("Vertical flip the camera")
        .appendField(new Blockly.FieldDropdown([["Disabled","0"], ["Enabled","1"]]), "v_flip");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.xlan_camera_h_mirror = {
  init: function() {
    this.appendDummyInput()
        .appendField("Horizontal mirror the camera")
        .appendField(new Blockly.FieldDropdown([["Disabled","0"], ["Enabled","1"]]), "h_mirror");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.xlan_camera_capture_images = {
  init: function() {
    this.appendDummyInput()
        .appendField("Capture images");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//MMShield32---------------------------------------------------------
Blockly.Blocks.mmshield_init = {
  init: function() {
    this.appendDummyInput()
        .appendField("Initial MMShield");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Motor--------------------------------------------------------------
Blockly.Blocks.mmshield_motor_rotate = {
  init: function() {
    this.appendDummyInput()
        .appendField("Rotate motor")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "channel")
        .appendField(new Blockly.FieldDropdown([["FORWARD","FORWARD"], ["REVERSE","REVERSE"]]), "dir")
        .appendField("at pwm (0~4095)");
    this.appendValueInput("pwm")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.mmshield_motor_stop = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop motor")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "channel");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.mmshield_servo_write = {
  init: function() {
    this.appendDummyInput()
        .appendField("Write pwm value (0~4095)");
    this.appendValueInput("pwm")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("to servo")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"]]), "channel");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//OLED---------------------------------------------------------------
Blockly.Blocks.mmshield_oled_init = {
  init: function() {
    this.appendDummyInput()
        .appendField("Initial OLED display");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.mmshield_oled_flip = {
  init: function() {
    this.appendDummyInput()
        .appendField("Flip OLED display vertically");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.mmshield_oled_set_align = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set string to align ")
        .appendField(new Blockly.FieldDropdown([["left","TEXT_ALIGN_LEFT"], ["center","TEXT_ALIGN_CENTER"], ["right","TEXT_ALIGN_RIGHT"]]), "align");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.mmshield_oled_set_fontsize = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set font size")
        .appendField(new Blockly.FieldDropdown([["10","ArialMT_Plain_10"], ["16","ArialMT_Plain_16"], ["24","ArialMT_Plain_24"]]), "fontsize");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.mmshield_oled_show_msg = {
  init: function() {
    this.appendDummyInput()
        .appendField("Display a string");
    this.appendValueInput("TEXT")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("at (");
    this.appendValueInput("x")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("y")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.mmshield_oled_clear = {
  init: function() {
    this.appendDummyInput()
        .appendField("Clear OLED display");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.mmshield_oled_mirror = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mirror OLED display");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.mmshield_oled_reset = {
  init: function() {
    this.appendDummyInput()
        .appendField("Reset OLED orientation");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.mmshield_oled_display = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn")
        .appendField(new Blockly.FieldDropdown([["on","1"], ["off","0"]]), "switch")
        .appendField("OLED display");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.mmshield_oled_brightness = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set OLED brightness (0~255)");
    this.appendValueInput("brightness")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.mmshield_oled_contrast = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set OLED contrast (0~255)");
    this.appendValueInput("contrast")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//I2S Media Input----------------------------------------------------
Blockly.Blocks.i2s_media_input_device_init = {
  init: function() {
    this.appendDummyInput()
        .appendField("Init I2S media input device in SCK pin")
        .appendField(new Blockly.FieldTextInput("2"), "sck")
        .appendField(", WS pin")
        .appendField(new Blockly.FieldTextInput("15"), "ws")
        .appendField(", SD pin")
        .appendField(new Blockly.FieldTextInput("14"), "sd");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.i2s_media_input_device_start = {
  init: function() {
    this.appendDummyInput()
        .appendField("Start I2S media input device");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.i2s_media_input_device_stop = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop I2S media input device");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.i2s_media_azure_stt = {
  init: function() {
    this.appendDummyInput()
        .appendField("Recognize voice to text")
        .appendField(new Blockly.FieldDropdown([["without","false"], ["with","true"]]), "punctuation")
        .appendField("punctuation in");
    this.appendValueInput("time")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("sec(s) via Azure STT with Key");
    this.appendValueInput("key")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("in language")
        .appendField(new Blockly.FieldDropdown([["TW","zh-TW"], ["US","en-US"], ["UK","en-GB"], ["Japan","ja-JP"], ["Korea","ko-KR"], ["Frence","fr-FR"], ["German","de-DE"], ["Thailand","th-TH"], ["Vietnum","vi-VN"]]), "lang");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.i2s_media_azure_stt_result = {
  init: function() {
    this.appendDummyInput()
        .appendField("Recognition result");
    this.setOutput(true, "String");
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//I2S Media Output---------------------------------------------------
Blockly.Blocks.i2s_media_output_device_init = {
  init: function() {
    this.appendDummyInput()
        .appendField("Init I2S media output device in LRC pin")
        .appendField(new Blockly.FieldTextInput("16"), "lrc")
        .appendField(", BCLK pin")
        .appendField(new Blockly.FieldTextInput("12"), "bclk")
        .appendField(", DIN pin")
        .appendField(new Blockly.FieldTextInput("13"), "din");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.i2s_media_play_web_radio = {
  init: function() {
    this.appendDummyInput()
        .appendField("Listen to");
    this.appendValueInput("TEXT")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("via I2S media output device");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.i2s_media_web_radio_url = {
  init: function() {
    this.appendDummyInput()
        .appendField("the web radio")
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.WEB_RADIO_URL), "WEB_RADIO_URL");
    this.setOutput(true, "String");
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.i2s_media_loop = {
  init: function() {
    this.appendDummyInput()
        .appendField("I2S media loop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.i2s_media_google_tts = {
  init: function() {
    this.appendDummyInput()
        .appendField("Say");
    this.appendValueInput("TEXT")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("via Google TTS in language")
        .appendField(new Blockly.FieldDropdown([["TW","zh-TW"], ["US","en-US"], ["UK","en-GB"], ["Japan","ja-JP"], ["Korea","ko-KR"], ["Frence","fr-FR"], ["German","de-DE"], ["Thailand","th-TH"], ["Vietnum","vi-VN"]]), "lang");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//MotorDriverV5------------------------------------------------------
Blockly.Blocks.motordriver_init = {
  init: function() {
    this.appendDummyInput()
        .appendField("MotorDriverV5 Initialization");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.motordriver_set_io_freq = {
  init: function() {
    this.appendDummyInput()
        .appendField("Setup IO ports output frequency (1~1600)");
    this.appendValueInput("freq")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.motordriver_set_io_port = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set IO port")
        .appendField(new Blockly.FieldDropdown([["S1","0"], ["S2","1"], ["S3","14"], ["S4","15"], ["S5","3"], ["S6","6"], ["S7","9"], ["S8","12"]]), "gpio")
        .appendField("to")
        .appendField(new Blockly.FieldDropdown([["HIGH","HIGH"], ["LOW","LOW"]]), "voltage");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.motordriver_set_output_pwm_value = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set output PWM value (0~4095)");
    this.appendValueInput("pwm")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("of IO port")
        .appendField(new Blockly.FieldDropdown([["S1","0"], ["S2","1"], ["S3","14"], ["S4","15"], ["S5","3"], ["S6","6"], ["S7","9"], ["S8","12"]]), "gpio");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.motordriver_mixed_rgb_led_color = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mixed RGB LED color in PWM (0~255) red");
    this.appendValueInput("red")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(", green");
    this.appendValueInput("green")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(", blue");
    this.appendValueInput("blue")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.motordriver_play_note = {
  init: function() {
    this.appendDummyInput()
        .appendField("Play note")
        .appendField(new Blockly.FieldDropdown([["C2","note_C2"], ["D2","note_D2"], ["E2","note_E2"], ["F2","note_F2"], ["G2","note_G2"], ["A2","note_A2"], ["B2","note_B2"], ["C3","note_C3"], ["D3","note_D3"], ["E3","note_E3"], ["F3","note_F3"], ["G3","note_G3"], ["A3","note_A3"], ["B3","note_B3"], ["C4","note_C4"], ["D4","note_D4"], ["E4","note_E4"], ["F4","note_F4"], ["G4","note_G4"], ["A4","note_A4"], ["B4","note_B4"], ["C5","note_C5"], ["D5","note_D5"], ["E5","note_E5"], ["F5","note_F5"], ["G5","note_G5"], ["A5","note_A5"], ["B5","note_B5"], ["C6","note_C6"], ["D6","note_D6"], ["E6","note_E6"], ["F6","note_F6"], ["G6","note_G6"], ["A6","note_A6"], ["B6","note_B6"], ["C7","note_C7"], ["D7","note_D7"], ["E7","note_E7"], ["F7","note_F7"], ["G7","note_G7"], ["A7","note_A7"], ["B7","note_B7"], ["C8","note_C8"]]), "note")
        .appendField("in");
    this.appendValueInput("n_duration")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("millis with interval");
    this.appendValueInput("s_duration")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("millis");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Motor--------------------------------------------------------------
Blockly.Blocks.motordriver_attach_motor = {
  init: function() {
    this.appendDummyInput()
        .appendField("Attach DC motor")
        .appendField(new Blockly.FieldDropdown([["M1","1"], ["M2","2"], ["M3","3"], ["M4","4"]]), "gpio");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(250);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.motordriver_motor_rotate = {
  init: function() {
    this.appendDummyInput()
        .appendField("DC motor")
        .appendField(new Blockly.FieldDropdown([["M1","1"], ["M2","2"], ["M3","3"], ["M4","4"]]), "gpio")
        .appendField("rotates")
        .appendField(new Blockly.FieldDropdown([["FORWARD","FORWARD"], ["BACKWARD","BACKWARD"]]), "direction")
        .appendField("at speed (0~255)");
    this.appendValueInput("speed")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(250);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.motordriver_stop_motor = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop DC motor")
        .appendField(new Blockly.FieldDropdown([["M1","1"], ["M2","2"], ["M3","3"], ["M4","4"]]), "gpio");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(250);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.motordriver_attach_servo = {
  init: function() {
    this.appendDummyInput()
        .appendField("Attach servo")
        .appendField(new Blockly.FieldDropdown([["S1","1"], ["S2","2"], ["S3","3"], ["S4","4"], ["S5","7"], ["S6","8"], ["S7","5"], ["S8","6"]]), "gpio");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.motordriver_servo_rotate = {
  init: function() {
    this.appendDummyInput()
        .appendField("Servo")
        .appendField(new Blockly.FieldDropdown([["S1","1"], ["S2","2"], ["S3","3"], ["S4","4"], ["S5","7"], ["S6","8"], ["S7","5"], ["S8","6"]]), "gpio")
        .appendField("rotates to");
    this.appendValueInput("degree")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("degree (0~180)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//PS2----------------------------------------------------------------
Blockly.Blocks.motordriver_init_ps2_receiver = {
  init: function() {
    this.appendDummyInput()
        .appendField("Initial wireless receiver of PS2 gamepad");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.motordriver_ps2_button_pressed = {
  init: function() {
    this.appendDummyInput()
        .appendField("the PS2 gamepad button")
        .appendField(new Blockly.FieldDropdown([["Up","PSB_PAD_UP"], ["Down","PSB_PAD_DOWN"], ["Left","PSB_PAD_LEFT"], ["Right","PSB_PAD_RIGHT"], ["Triangle","PSB_TRIANGLE"], ["Cross","PSB_CROSS"], ["Square","PSB_SQUARE"], ["Circle","PSB_CIRCLE"], ["R1","PSB_R1"], ["R2","PSB_R2"], ["R3","PSB_R3"], ["L1","PSB_L1"], ["L2","PSB_L2"], ["L3","PSB_L3"]]), "button")
        .appendField("is pressed?");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.motordriver_ps2_button_hold = {
  init: function() {
    this.appendDummyInput()
        .appendField("the PS2 gamepad button")
        .appendField(new Blockly.FieldDropdown([["Up","PSB_PAD_UP"], ["Down","PSB_PAD_DOWN"], ["Left","PSB_PAD_LEFT"], ["Right","PSB_PAD_RIGHT"], ["Triangle","PSB_TRIANGLE"], ["Cross","PSB_CROSS"], ["Square","PSB_SQUARE"], ["Circle","PSB_CIRCLE"], ["R1","PSB_R1"], ["R2","PSB_R2"], ["R3","PSB_R3"], ["L1","PSB_L1"], ["L2","PSB_L2"], ["L3","PSB_L3"]]), "button")
        .appendField("is hold?");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.motordriver_ps2_left_js_x = {
  init: function() {
    this.appendDummyInput()
        .appendField("x value of PS2 gamepad left joystick");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.motordriver_ps2_left_js_y = {
  init: function() {
    this.appendDummyInput()
        .appendField("y value of PS2 gamepad left joystick");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.motordriver_ps2_right_js_x = {
  init: function() {
    this.appendDummyInput()
        .appendField("x value of PS2 gamepad right joystick");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.motordriver_ps2_right_js_y = {
  init: function() {
    this.appendDummyInput()
        .appendField("y value of PS2 gamepad right joystick");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Digital I/O--------------------------------------------------------
Blockly.Blocks.xlan_init_a_button = {
  init: function() {
    this.appendDummyInput()
        .appendField("Initial a button with pin");
    this.appendValueInput("pin")
        .setCheck("Number");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.xlan_init_two_buttons = {
  init: function() {
    this.appendDummyInput()
        .appendField("Initial two buttons with pins");
    this.appendValueInput("pin1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("pin2")
        .setCheck("Number");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.xlan_button_pressed = {
  init: function() {
    this.appendDummyInput()
        .appendField("the button connected with pin");
    this.appendValueInput("pin")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("is pressed?");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};