Blockly.Arduino.initled = function(block) {
  var ddl_pin = block.getFieldValue('pin');
  Blockly.Arduino.setups_['pinmode_' + ddl_pin] = 'pinMode(' + ddl_pin + ', OUTPUT);\n';
  var code = '';
  return code;
};

Blockly.Arduino.blinkled = function(block) {
  var ddl_pin = block.getFieldValue('pin');
  var code = 'digitalWrite(' + ddl_pin + ', LOW);\ndelay(1000);\ndigitalWrite(' + ddl_pin + ', HIGH);\ndelay(1000);\n';
  return code;
};