Blockly.Arduino['blink'] = function(block) {
  //Blockly.Arduino.definitions_['name'] = '//definitions_';
  //Blockly.Arduino.setups_['name'] = '//setups_';
  //Blockly.Arduino.setups_bottom_['name'] = '//setups_bottom_';
  //Blockly.Arduino.functions_['name'] = 'String blockly() {\n  return "Hello World";\n}';

  var value_pin = block.getFieldValue('value_pin');
  var code = 'digitalWrite(%1, LOW);\ndelay(1000);\ndigitalWrite(%1, HIGH);\ndelay(1000);\n'.replace('%1',value_pin).replace('%1',value_pin);
  return code;
};