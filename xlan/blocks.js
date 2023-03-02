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

Blockly.Blocks.mmshield_motor_rotate = {
  init: function() {
    this.appendDummyInput()
        .appendField("Rotate motor")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "channel")
        .appendField(new Blockly.FieldDropdown([["forward","FORWARD"], ["reverse","REVERSE"]]), "dir")
        .appendField("at pwm")
        .appendField(new Blockly.FieldNumber(2048, 0, 4095), "pwm");
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
        .appendField("Write pwm value")
        .appendField(new Blockly.FieldNumber(375, 150, 600), "pwm")
        .appendField("to servo")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"]]), "channel");
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
        .appendField("at (")
        .appendField(new Blockly.FieldNumber(0, 0, 127), "x")
        .appendField(",")
        .appendField(new Blockly.FieldNumber(0, 0, 63), "y")
        .appendField(")");
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
        .appendField("Set OLED brightness")
        .appendField(new Blockly.FieldNumber(128, 0, 255), "brightness");
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
        .appendField("Set OLED contrast")
        .appendField(new Blockly.FieldNumber(128, 0, 255), "contrast");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
