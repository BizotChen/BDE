Blockly.Arduino.xlan_serial_init = function(block) {
  var dropdown_baud = block.getFieldValue('baud');
  Blockly.Arduino.setups_['xlan_serial_init'] = 'Serial.begin(' + dropdown_baud + ');';
  var code = '';

  return code;
};

Blockly.Arduino.xlan_serial_print = function(block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC||"");
  var code = 'Serial.print(String(' + value_text + '));\n';

  return code;
};

Blockly.Arduino.xlan_serial_println = function(block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC||"");
  var code = 'Serial.println(String(' + value_text + '));\n';

  return code;
};

Blockly.Arduino.xlan_serial_while_loop = function(block) {
  var statement = Blockly.Arduino.statementToCode(this, "STATEMENT");
  var code = 'while (Serial.available()) {\n' + statement + '\n}\n';

  return code;
};

Blockly.Arduino.xlan_serial_read_a_char = function(block) {
  var variable_name = Blockly.Arduino.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var code = variable_name + ' = Serial.read();\n';

  return code;
};

Blockly.Arduino.xlan_serial_read_an_inline_string = function(block) {
  var variable_name = Blockly.Arduino.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var code = variable_name + ' = Serial.readStringUntil(\'\\n\');\n' + variable_name + '.replace(\'\\r\', \'\');\n';

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
  var value_text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC||"");
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

//I2S Media Input
Blockly.Arduino.i2s_media_input_device_init = function(block) {
  var number_sck = block.getFieldValue('sck');
  var number_ws = block.getFieldValue('ws');
  var number_sd = block.getFieldValue('sd');
  Blockly.Arduino.definitions_.define_i2sMic_include = "#include <driver/i2s.h>\n#include \"SPIFFS.h\"\n#include <SD.h>";
  Blockly.Arduino.definitions_.define_i2sMic_invoke = '#define I2S_MIC_PORT I2S_NUM_1\n#define RECORD_TIME (recTime)\n#define MIC_SAMPLE_RATE     (16000)\n#define MIC_SAMPLE_BITS     (16)\n#define MIC_READ_LEN        (3 * 1024)\n#define MIC_CHANNEL_NUM     (1)\n#define FLASH_RECORD_SIZE   (MIC_CHANNEL_NUM * MIC_SAMPLE_RATE * MIC_SAMPLE_BITS / 8 * RECORD_TIME)\n\nconst int headerSize = 44;\nint recTime = 5;\nFile wavFile;';
  Blockly.Arduino.definitions_.define_SD_CS_invoke = 'int CS_PIN = SS;';
  Blockly.Arduino.definitions_.define_i2sMic_event = 'void i2sMicInit() {\n  i2s_config_t i2s_config = {\n    .mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_RX),\n    .sample_rate = MIC_SAMPLE_RATE,\n    .bits_per_sample = i2s_bits_per_sample_t(MIC_SAMPLE_BITS),\n    .channel_format = I2S_CHANNEL_FMT_ONLY_LEFT,\n    .communication_format = i2s_comm_format_t(I2S_COMM_FORMAT_I2S | I2S_COMM_FORMAT_I2S_MSB),\n    .intr_alloc_flags = 0,\n    .dma_buf_count = 64,\n    .dma_buf_len = 1024,\n    .use_apll = 1\n  };\n  i2s_driver_install(I2S_MIC_PORT, &i2s_config, 0, NULL);\n  const i2s_pin_config_t pin_config = {\n    .bck_io_num = " + number_sck + ",\n    .ws_io_num = " + number_ws + ",\n    .data_out_num = -1,\n    .data_in_num = " + number_sd + "\n  };\n  i2s_set_pin(I2S_MIC_PORT, &pin_config);\n}\n';
  var code = '';

  return code;
}

Blockly.Arduino.i2s_media_input_device_start = function(block) {
  var code = 'i2sMicInit();\n';

  return code;
}

Blockly.Arduino.i2s_media_input_device_stop = function(block) {
  var code = 'i2s_driver_uninstall(I2S_MIC_PORT);\n';

  return code;
}

//I2S Media Output
Blockly.Arduino.i2s_media_output_device_init = function(block) {
  var number_bclk = block.getFieldValue('bclk');
  var number_lrc = block.getFieldValue('lrc');
  var number_din = block.getFieldValue('din');
  Blockly.Arduino.definitions_.define_SPIFFS_include = '#include "SPIFFS.h"';
  Blockly.Arduino.definitions_.define_ESP8266Audio_include = '#include "AudioFileSourceSPIFFS.h"\n#include "AudioFileSourceSD.h"\n#include "AudioFileSourceHTTPStream.h"\n#include "AudioFileSourceBuffer.h"\n#include "AudioOutputI2S.h"\n#include "AudioGeneratorMP3.h"\n#include "AudioGeneratorWAV.h"\n#include "AudioFileSourceID3.h"\n';
  Blockly.Arduino.definitions_.define_SD_CS_invoke = 'int CS_PIN = SS;';
  Blockly.Arduino.definitions_.define_ESP8266Audio_variable_invoke = 'bool ttsDone = true;\nbool httpDone = true;\nbool mp3Done = true;\nfloat gainValue = 1.0;\nString dacPlayType;\nString voiceFileExt = "";\nString mp3FileName;\nString ttsContent;\nString httpLink;\nAudioFileSourceSD *i2sSdFile;\nAudioFileSourceSPIFFS *i2sSPIFFSfile;\nAudioGeneratorMP3 *i2sMp3;\nAudioGeneratorWAV *i2sWav;\nAudioFileSourceHTTPStream *i2sFile = new AudioFileSourceHTTPStream();\nAudioFileSourceBuffer *i2sBuff;\nAudioOutputI2S *i2sOut;\nAudioFileSourceID3 *i2sID3;\n';
  Blockly.Arduino.definitions_.define_urlencode_event = "String URLEncode(const char* msg)\n{\n  const char *hex = \"0123456789abcdef\";\n  String encodedMsg = \"\";\n\n  while (*msg!='\\0') {\n      if(('a' <= *msg && *msg <= 'z')\n              || ('A' <= *msg && *msg <= 'Z')\n              || ('0' <= *msg && *msg <= '9')) {\n          encodedMsg += *msg;\n      } else {\n          encodedMsg += '%';\n          encodedMsg += hex[*msg >> 4];\n          encodedMsg += hex[*msg & 15];\n      }\n      msg++;\n  }\n\n  return encodedMsg;\n}\n";
  Blockly.Arduino.definitions_.define_ESP8266Audio_function_invoke_i2sMediaLoop_event = 'bool i2sMediaLoop()\n{\n  bool isRunning = false;\n  bool looping = false;\n  String playType = "mp3";\n\n  if (dacPlayType=="MP3") {\n    if (voiceFileExt=="wav")\n      playType = "wav";\n  }\n  isRunning = ((playType=="mp3")?i2sMp3->isRunning():i2sWav->isRunning());\n  if (isRunning) {\n    looping=((playType=="mp3")?i2sMp3->loop():i2sWav->loop());\n    if (!looping) {\n      if (playType=="mp3")\n        i2sMp3->stop();\n      else\n        i2sWav->stop();\n      mp3Done=true;\n      ttsDone=true;\n      httpDone=true;\n      isRunning=false;\n    }\n  }\n\n  return isRunning;\n}\n';
  Blockly.Arduino.definitions_.define_ESP8266Audio_function_invoke_TTS_event = 'void textToSpeech(String myTalk,String tl)\n{\n  myTalk = URLEncode(myTalk.c_str());\n  ttsDone = false;\n  httpDone = true;\n  mp3Done = true;\n  dacPlayType = "TTS";\n  ttsContent = myTalk;\n  myTalk = "http://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl="+tl+"&q="+myTalk;\n\n  saveTTStoFile(myTalk,"/TTS/tts.mp3",2);\n  getVoiceFromFile("/TTS/tts.mp3",2);\n}\n';
  Blockly.Arduino.definitions_.define_ESP8266Audio_function_invoke_saveTTStoFile_event = 'void saveTTStoFile(String myLink,String fileName,byte sdType)\n{\n  File myTTSFile;\n  myLink.replace(" ","%20");\n  if(fileName.indexOf("/")!=0)\n    fileName="/"+fileName;\n  if (sdType==1) {\n    if(!SD.begin(CS_PIN)) {\n      return;\n    }\n    String path=fileName.substring(1,fileName.lastIndexOf("/"));\n    String mySubStr="/";\n    while(path.indexOf("/")>-1) {\n      mySubStr+=path.substring(0,path.indexOf("/"));\n      if(!SD.exists( mySubStr.c_str()))\n        SD.mkdir(mySubStr.c_str());\n      mySubStr+="/";\n      path= path.substring(path.indexOf("/")+1);\n    }\n    if (path!="") {\n      mySubStr+=path;\n      if(!SD.exists( mySubStr.c_str()))\n        SD.mkdir(mySubStr.c_str());\n    }\n    myTTSFile = SD.open(fileName, "w");\n    if (!myTTSFile) {\n      return;\n    }\n  } else if (sdType==2) {\n    if(!SPIFFS.begin(true)) {\n      return;\n    }\n    myTTSFile = SPIFFS.open(fileName, "w");\n    if (!myTTSFile) {\n      return;\n    }\n  }\n  HTTPClient http;\n  http.begin(myLink);\n  int httpCode = http.GET();\n  if (httpCode == HTTP_CODE_OK) {\n      http.writeToStream(&myTTSFile);\n  }\n  myTTSFile.close();\n  http.end();\n}\n';
  Blockly.Arduino.definitions_.define_ESP8266Audio_function_invoke_radio_event = 'void playWebRadio(String myStationURL)\n{\n  httpDone = true;\n  mp3Done = true;\n  ttsDone = true;\n  dacPlayType = "radio";\n\n  i2sFile->open(myStationURL.c_str());\n  if (i2sBuff!=NULL)\n    i2sBuff->close();\n  i2sBuff = new AudioFileSourceBuffer(i2sFile, 2048);\n  i2sMp3->begin(i2sBuff, i2sOut);\n}\n';
  Blockly.Arduino.definitions_.define_ESP8266Audio_function_invoke_httpMp3_event = 'void playHttpMP3(String myStationURL)\n{\n  mp3Done = true;\n  ttsDone = true;\n  httpDone = false;\n  dacPlayType = "HTTPMP3";\n  httpLink = myStationURL;\n\n  myStationURL.replace("www.dropbox","dl.dropboxusercontent");\n  myStationURL.replace("?dl=0","");\n  i2sFile->open(myStationURL.c_str());\n  if (i2sBuff!=NULL)\n    i2sBuff->close();\n  i2sBuff = new AudioFileSourceBuffer(i2sFile, 2048);\n  i2sMp3->begin(i2sBuff, i2sOut);\n}\n';
  Blockly.Arduino.definitions_.define_ESP8266Audio_function_invoke_file_event = 'void getVoiceFromFile(String myFileName,byte sdType)\n{\n  voiceFileExt = "";\n\n  if (myFileName.length()<4)\n    return;\n  String extendName = myFileName.substring(myFileName.length()-3);\n  extendName.toLowerCase();\n  if ((extendName!="wav") && (extendName!="mp3"))\n    return;\n  voiceFileExt = extendName;\n  httpDone = true;\n  ttsDone = true;\n  mp3Done = false;\n  dacPlayType = "MP3";\n  if(myFileName.indexOf("/")!=0)\n    myFileName="/"+myFileName;\n  if (sdType==1){\n    SD.begin(CS_PIN);\n    i2sSdFile = new AudioFileSourceSD(String(myFileName).c_str());\n    if (extendName=="mp3"){\n      if (i2sBuff!=NULL)\n        i2sBuff->close();\n      i2sBuff = new AudioFileSourceBuffer(i2sSdFile, 2048);\n    } else {\n      if (i2sID3!=NULL)\n        i2sID3->close();\n      i2sID3 = new AudioFileSourceID3(i2sSdFile);\n    }\n    mp3FileName=myFileName;\n  }\n  else {\n    if (myFileName=="/TTS/tts.mp3"){\n      ttsDone = false;\n      mp3Done = true;\n      dacPlayType = "TTS";\n    } else {\n      mp3FileName = myFileName;\n    }\n    SPIFFS.begin();\n    i2sSPIFFSfile = new AudioFileSourceSPIFFS(String(myFileName).c_str());\n    if (extendName=="mp3"){\n      if (i2sBuff!=NULL)\n        i2sBuff->close();\n      i2sBuff = new AudioFileSourceBuffer(i2sSPIFFSfile, 2048);\n    } else {\n      if (i2sID3!=NULL)\n        i2sID3->close();\n      i2sID3 = new AudioFileSourceID3(i2sSPIFFSfile);\n    }\n  }\n  if (extendName=="mp3")\n    i2sMp3->begin(i2sBuff, i2sOut);\n  else if (extendName=="wav")\n    i2sWav->begin(i2sID3, i2sOut);\n}\n';
  Blockly.Arduino.definitions_.define_DAC_stop_event = 'void dacStop() {\n  bool isRunning = false;\n  String playType = "mp3";\n\n  if (dacPlayType=="MP3") {\n    if (voiceFileExt=="wav")\n      playType = "wav";\n  }\n  if (playType=="mp3") {\n    if (i2sMp3->isRunning()) {\n      i2sMp3->stop();\n      i2sBuff->close();\n    }\n  } else {\n    if (i2sWav->isRunning()) {\n      i2sWav->stop();\n      i2sID3->close();\n    }\n  }\n  httpDone = true;\n  mp3Done = true;\n  ttsDone = true;\n  dacPlayType = "";\n  httpLink = "";\n  mp3FileName = "";\n  ttsContent = "";\n  voiceFileExt = "";\n}\n';
  Blockly.Arduino.dac.ESP8266Audio = "yes";
  var code = 'i2sMp3 = new AudioGeneratorMP3();\ni2sWav = new AudioGeneratorWAV();\ni2sOut = new AudioOutputI2S();\ni2sOut->SetPinout(' + number_bclk + ',' + number_lrc + ',' + number_din + ');\ni2sOut->SetGain(gainValue);\n';

  return code;
}

Blockly.Arduino.i2s_media_play_web_radio = function(block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC||"");
  var code = 'playWebRadio(' + value_text + ');\n';

  return code;
}

Blockly.Arduino.i2s_media_web_radio_url = function(block) {
  var value_text = '\"' + block.getFieldValue("WEB_RADIO_URL") + '\"';

  return [value_text, Blockly.Arduino.ORDER_ATOMIC]
}

Blockly.Arduino.i2s_media_loop = function(block) {
  return 'i2sMediaLoop();\n';
}

Blockly.Arduino.i2s_media_google_tts = function(block) {
  var value_text = Blockly.Arduino.valueToCode(block, "TEXT", Blockly.Arduino.ORDER_ATOMIC||"");
  var dropdown_lang = block.getFieldValue('lang');

  return 'textToSpeech(' + value_text + ', \"' + dropdown_lang + '");\n';
}

