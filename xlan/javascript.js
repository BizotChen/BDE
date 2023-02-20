Blockly.JavaScript['blinkled'] = function(block) {
  var value_pin = block.getFieldValue('value_pin');
  var code = 'digitalWrite(%1, LOW);\ndelay(1000);\ndigitalWrite(%1, HIGH);\ndelay(1000);\n'.replace('%1',value_pin).replace('%1',value_pin);
  return code;
};

Blockly.JavaScript['initled'] = function(block) {
  var value_pin = block.getFieldValue('value_pin');
  Blockly.Arduino.setups_['init_led_setup'] = 'pinMode(%1, OUTPUT);\n'.replace('%1', value_pin);
};
