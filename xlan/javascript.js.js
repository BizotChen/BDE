Blockly.Arduino.mmshield_init = function(block) {
  Blockly.Arduino.definitions_['mmshield_init'] = '#include "XLAN_MMShield.h"\nXLAN_MMShield mm = XLAN_MMShield();\n';
  Blockly.Arduino.setups_['mmshield_init'] = 'mm.Init();\n';

  var code = '';
  return code;
};

Blockly.Arduino.mmshield_move = function(block) {
  var dropdown_channel = block.getFieldValue('channel');
  var dropdown_dir = block.getFieldValue('dir');
  var number_speed = block.getFieldValue('speed');

  var code = 'mm.RotateMotor(' + dropdown_channel + ', ' + dropdown_dir + ', ' + number_speed + ');\n';
  return code;
};