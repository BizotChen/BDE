Blockly.Blocks.mmshield_init = {
  init: function() {
    this.appendDummyInput()
        .appendField("Initial MMShield as motor mode");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.mmshield_move = {
  init: function() {
    this.appendDummyInput()
        .appendField("Rotate motor")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "channel")
        .appendField(new Blockly.FieldDropdown([["forward","FORWARD"], ["reverse","REVERSE"]]), "dir")
        .appendField("at speed")
        .appendField(new Blockly.FieldNumber(2048, 0, 4096), "speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};