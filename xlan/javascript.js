Blockly.Arduino.mmshield_init = function(block) {
  Blockly.Arduino.definitions_['mmshield_init'] = '#include "XLAN_MMShield.h"\nXLAN_MMShield mm = XLAN_MMShield();\n';
  Blockly.Arduino.setups_['mmshield_init'] = 'mm.Init();\n';

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

Blockly.Arduino.mmshield_servo_read = function(block) {
  var dropdown_channel = block.getFieldValue('channel');

  var code = 'mm.ReadPWM(' + dropdown_channel + ')\n';
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
  Blockly.Arduino.definitions_['mmshield_oled_init'] = '#include "SSD1306Wire.h"\nSSD1306Wire display(0x3c, I2C_SDA, I2C_SCL);\n';
  Blockly.Arduino.setups_['mmshield_oled_init'] = 'display.init();\n';

  var code = '';
  return code;
};

Blockly.Arduino.mmshield_oled_set_fontsize = function(block) {
  var dropdown_fontsize = block.getFieldValue('fontsize');

  var code = 'display.setFont(' + dropdown_fontsize + ');\n';
  return code;
};

Blockly.Arduino.mmshield_oled_show_msg = function(block) {
  var text_msg = block.getFieldValue('msg');
  var number_x = block.getFieldValue('x');
  var number_y = block.getFieldValue('y');

  var code = 'display.drawString(' + x + ', ' + y + ', \"' + msg + '\");\ndisplay.display();\n';
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

Blockly.Arduino.mmshield_oled_contrast = function(block) {
  var number_contrast = block.getFieldValue('contrast');

  var code = 'display.setContrast(' + number_contrast + ');\n';
  return code;
};

Blockly.Arduino.mmshield_oled_brightness = function(block) {
  var number_brightness = block.getFieldValue('brightness');

  var code = 'display.setBrightness(' + number_brightness + ');\n';
  return code;
};