Blockly.Arduino.xlan_serial_init = function(block) {
  var dropdown_baud = block.getFieldValue('baud');
  Blockly.Arduino.setups_['xlan_serial_init'] = 'Serial.begin(' + dropdown_baud + ');';

  var code = '';
  return code;
};

Blockly.Arduino.xlan_serial_print = function(block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'Serial.print(String(' + value_text + '));\n';
  return code;
};

Blockly.Arduino.xlan_serial_println = function(block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'Serial.println(String(' + value_text + '));\n';
  return code;
};

Blockly.Arduino.mmshield_init = function(block) {
  Blockly.Arduino.definitions_['mmshield_init'] = '#include "XLAN_MMShield.h"\nXLAN_MMShield mm = XLAN_MMShield();';
  Blockly.Arduino.setups_['mmshield_init'] = 'mm.Init();';

  var code = '';
  return code;
};

Blockly.Arduino.mmshield_motor_rotate = function(block) {
  var dropdown_channel = block.getFieldValue('channel');
  var dropdown_dir = block.getFieldValue('dir');
  var number_pwm = block.getFieldValue('pwm');

  var code = 'mm.RotateMotor(' + dropdown_channel + ', ' + dropdown_dir + ', ' + number_pwm + ');\n';
  return code;
};

Blockly.Arduino.mmshield_motor_stop = function(block) {
  var dropdown_channel = block.getFieldValue('channel');

  var code = 'mm.StopMotor(' + dropdown_channel + ');\n';
  return code;
};

Blockly.Arduino.mmshield_servo_write = function(block) {
  var number_pwm = block.getFieldValue('pwm');
  var dropdown_channel = block.getFieldValue('channel');

  var code = 'mm.WritePWM(' + dropdown_channel + ', ' + number_pwm + ');\n';
  return code;
};

Blockly.Arduino.mmshield_oled_flip = function(block) {
  var code = 'display.flipScreenVertically();\n';
  return code;
};

Blockly.Arduino.mmshield_oled_mirror = function(block) {
  var code = 'display.mirrorScreen();\n';
  return code;
};

Blockly.Arduino.mmshield_oled_reset = function(block) {
  var code = 'display.resetOrientation();\n';
  return code;
};

Blockly.Arduino.mmshield_oled_clear = function(block) {
  var code = 'display.clear();\n';
  return code;
};

Blockly.Arduino.mmshield_oled_init = function(block) {
  Blockly.Arduino.definitions_['mmshield_oled_init'] = '#include "SSD1306Wire.h"\nSSD1306Wire display(0x3c, I2C_SDA, I2C_SCL);';
  Blockly.Arduino.setups_['mmshield_oled_init'] = 'display.init();';

  var code = '';
  return code;
};

Blockly.Arduino.mmshield_oled_set_fontsize = function(block) {
  var dropdown_fontsize = block.getFieldValue('fontsize');

  var code = 'display.setFont(' + dropdown_fontsize + ');\n';
  return code;
};

Blockly.Arduino.mmshield_oled_show_msg = function(block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC);
  var number_x = block.getFieldValue('x');
  var number_y = block.getFieldValue('y');

  var code = 'display.drawString(' + number_x + ', ' + number_y + ', String(' + value_text + '));\ndisplay.display();\n';
  return code;
};

Blockly.Arduino.mmshield_oled_set_align = function(block) {
  var dropdown_align = block.getFieldValue('align');

  var code = 'display.setTextAlignment(' + dropdown_align + ');\n';
  return code;
};

Blockly.Arduino.mmshield_oled_display = function(block) {
  var dropdown_switch = block.getFieldValue('switch');

  var code = 'if (' + dropdown_switch + ' == 1)\ndisplay.displayOn();\nelse\ndisplay.displayOff();\n';
  return code;
};

Blockly.Arduino.mmshield_oled_brightness = function(block) {
  var number_brightness = block.getFieldValue('brightness');

  var code = 'display.setBrightness(' + number_brightness + ');\n';
  return code;
};

Blockly.Arduino.mmshield_oled_contrast = function(block) {
  var number_contrast = block.getFieldValue('contrast');

  var code = 'display.setContrast(' + number_contrast + ');\n';
  return code;
};