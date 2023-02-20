Blockly.Blocks['sayhello'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("HelloWorld");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }