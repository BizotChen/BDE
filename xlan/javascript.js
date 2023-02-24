Blockly.Arduino.mmshield_init = function(block) {
  Blockly.Arduino.definitions_['mmshield_init'] = '#include "XLAN_MMShield.h"\nXLAN_MMShield mm = XLAN_MMShield();\n';
  Blockly.Arduino.setups_['mmshield_init'] = 'mm.Init();\n';

  var code = '';
  return code;
};

Blockly.Arduino.mmshield_rotate = function(block) {
  var dropdown_channel = block.getFieldValue('channel');
  var dropdown_dir = block.getFieldValue('dir');
  var number_pwm = block.getFieldValue('pwm');

  var code = 'mm.RotateMotor(' + dropdown_channel + ', ' + dropdown_dir + ', ' + number_pwm + ');\n';
  return code;
};

Blockly.Arduino.mmshield_stop = function(block) {
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

  var code = 'mm.ReadPWM(' + dropdown_channel + ');\n';
  return code;
};