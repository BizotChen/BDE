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
  var code = 'display.clear();\ndisplay.display();\n';

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
  Blockly.Arduino.definitions_.define_i2sMic_invoke = '#define MIC_SCK ' + number_sck + '\n#define MIC_WS ' + number_ws + '\n#define MIC_SD ' + number_sd + '\n#define I2S_MIC_PORT I2S_NUM_1\n#define RECORD_TIME (recTime)\n#define MIC_SAMPLE_RATE     (16000)\n#define MIC_SAMPLE_BITS     (16)\n#define MIC_READ_LEN        (3 * 1024)\n#define MIC_CHANNEL_NUM     (1)\n#define FLASH_RECORD_SIZE   (MIC_CHANNEL_NUM * MIC_SAMPLE_RATE * MIC_SAMPLE_BITS / 8 * RECORD_TIME)\n\nconst int headerSize = 44;\nint recTime = 5;\nFile wavFile;\n';
  Blockly.Arduino.definitions_.define_SD_CS_invoke = 'int CS_PIN = SS;';
  Blockly.Arduino.definitions_.define_i2sMic_event = 'void i2sMicInit() {\n  i2s_config_t i2s_config = {\n    .mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_RX),\n    .sample_rate = MIC_SAMPLE_RATE,\n    .bits_per_sample = i2s_bits_per_sample_t(MIC_SAMPLE_BITS),\n    .channel_format = I2S_CHANNEL_FMT_ONLY_LEFT,\n    .communication_format = i2s_comm_format_t(I2S_COMM_FORMAT_I2S | I2S_COMM_FORMAT_I2S_MSB),\n    .intr_alloc_flags = 0,\n    .dma_buf_count = 64,\n    .dma_buf_len = 1024,\n    .use_apll = 1\n  };\n  i2s_driver_install(I2S_MIC_PORT, &i2s_config, 0, NULL);\n  const i2s_pin_config_t pin_config = {\n    .bck_io_num = MIC_SCK,\n    .ws_io_num = MIC_WS,\n    .data_out_num = -1,\n    .data_in_num = MIC_SD\n  };\n  i2s_set_pin(I2S_MIC_PORT, &pin_config);\n}\n';
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

Blockly.Arduino.i2s_media_azure_stt = function(block) {
  var dropdown_punctuation = block.getFieldValue('punctuation');
  var number_time = block.getFieldValue('time');
  var value_key = Blockly.Arduino.valueToCode(block, 'KEY', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_lang = block.getFieldValue('lang');

  if (Blockly.Arduino.my_board_type=="ESP32") {
    Blockly.Arduino.definitions_.define_secure_include = "#include <WiFiClientSecure.h>";
    Blockly.Arduino.definitions_.define_i2sMic_RecgText_invoke = 'String strRecgText = "";\n';
    Blockly.Arduino.definitions_.define_i2sMic_tool_event = 'void i2s_adc_data_scale(uint8_t * d_buff, uint8_t* s_buff, uint32_t len) {\n  uint32_t j = 0;\n  uint32_t dac_value = 0;\n  for (int i = 0; i < len; i += 2) {\n    dac_value = ((((uint16_t) (s_buff[i + 1] & 0xf) << 8) | ((s_buff[i + 0]))));\n    d_buff[j++] = 0;\n    d_buff[j++] = dac_value * 256 / 2048;\n  }\n}\n\nvoid wavHeader(byte* header, int wavSize) {\n  header[0] = \'R\';\n  header[1] = \'I\';\n  header[2] = \'F\';\n  header[3] = \'F\';\n  unsigned int fileSize = wavSize + headerSize - 8;\n  header[4] = (byte)(fileSize & 0xFF);\n  header[6] = (byte)((fileSize >> 16) & 0xFF);\n  header[7] = (byte)((fileSize >> 24) & 0xFF);\n  header[8] = \'W\';\n  header[9] = \'A\';\n  header[10] = \'V\';\n  header[11] = \'E\';\n  header[12] = \'f\';\n  header[13] = \'m\';\n  header[14] = \'t\';\n  header[15] = \' \';\n  header[16] = 0x10;\n  header[17] = 0x00;\n  header[18] = 0x00;\n  header[19] = 0x00;\n  header[20] = 0x01;\n  header[21] = 0x00;\n  header[22] = 0x01;\n  header[23] = 0x00;\n  header[24] = 0x80;\n  header[25] = 0x3E;\n  header[26] = 0x00;\n  header[27] = 0x00;\n  header[28] = 0x00;\n  header[29] = 0x7D;\n  header[30] = 0x00;\n  header[31] = 0x00;\n  header[32] = 0x02;\n  header[33] = 0x00;\n  header[34] = 0x10;\n  header[35] = 0x00;\n  header[36] = \'d\';\n  header[37] = \'a\';\n  header[38] = \'t\';\n  header[39] = \'a\';\n  header[40] = (byte)(wavSize & 0xFF);\n  header[41] = (byte)((wavSize >> 8) & 0xFF);\n  header[42] = (byte)((wavSize >> 16) & 0xFF);\n  header[43] = (byte)((wavSize >> 24) & 0xFF);\n}\n';
    Blockly.Arduino.definitions_.define_i2sMic_Azure_RecgText_DIRECT_event = 'void i2sMic_adc_to_HTTPS(WiFiClientSecure *myHttpsClient) {\n  byte header[headerSize];\n\n  wavHeader(header, FLASH_RECORD_SIZE);\n  myHttpsClient->write(header, headerSize);\n\n  int i2s_read_len = MIC_READ_LEN;\n  int flash_wr_size = 0;\n  size_t bytes_read;\n  char* i2s_read_buff = (char*) calloc(i2s_read_len, sizeof(char));\n  uint8_t* flash_write_buff = (uint8_t*) calloc(i2s_read_len, sizeof(char));\n\n  i2s_read(I2S_MIC_PORT, (void*) i2s_read_buff, i2s_read_len, &bytes_read, portMAX_DELAY);\n\n  while (flash_wr_size < FLASH_RECORD_SIZE) {\n    i2s_read(I2S_MIC_PORT, (void*) i2s_read_buff, i2s_read_len, &bytes_read, portMAX_DELAY);\n    i2s_adc_data_scale(flash_write_buff, (uint8_t*)i2s_read_buff, i2s_read_len);\n    myHttpsClient->write((const byte*) flash_write_buff, i2s_read_len);\n    flash_wr_size += i2s_read_len;\n  };\n\n  free(i2s_read_buff);\n  i2s_read_buff = NULL;\n  free(flash_write_buff);\n  flash_write_buff = NULL;\n}\n\nvoid azureTranscribedDirectly(String lang_code, String api_key, bool punctuation) {\n  i2sMicInit();\n\n  static WiFiClientSecure sttClient;\n  const char* host = "eastasia.stt.speech.microsoft.com";\n  strRecgText = "error";\n  String url="/speech/recognition/conversation/cognitiveservices/v1?language="+lang_code+"&format=detailed";\n\n  sttClient.setInsecure();\n  sttClient.connect(host, 443);\n  while (!sttClient.connected());\n\n  sttClient.println("POST " + url + " HTTP/1.1\\r\\nHost: " + String(host)+ "\\r\\nOcp-Apim-Subscription-Key: "+api_key+"\\r\\nContent-Type: audio/wav\\r\\nContent-Length: " + String(FLASH_RECORD_SIZE +headerSize-8));\n  sttClient.println();\n\n  if (sttClient.connected())\n    i2sMic_adc_to_HTTPS(&sttClient);\n  while (!sttClient.available());\n\n  String resStr = "";\n\n  while (sttClient.available()) {\n    resStr = sttClient.readStringUntil(\'\\n\');\n\n    if (resStr.startsWith("{\\"RecognitionStatus")) {\n      if (punctuation) {\n        resStr.replace(resStr.substring(0,resStr.indexOf("Display") + 10), "");\n        resStr = resStr.substring(0, resStr.indexOf("\\""));\n      } else {\n        resStr.replace(resStr.substring(0,resStr.indexOf("MaskedITN") + 12), "");\n        resStr = resStr.substring(0,resStr.indexOf("\\",\\""));\n      }\n      strRecgText = resStr;\n      strRecgText.trim();\n      break;\n    }\n  }\n  sttClient.stop();\n  i2s_driver_uninstall(I2S_MIC_PORT);\n}\n';

    return 'recTime = ' + number_time + ';\nazureTranscribedDirectly(\"' + dropdown_lang + '\", ' + value_key + ', ' + dropdown_punctuation + ');\n';
  } else {
    return '';
  }
}

Blockly.Arduino.i2s_media_azure_stt_result = function(block) {
  if (Blockly.Arduino.my_board_type=="ESP32") {
    return ['strRecgText', Blockly.Arduino.ORDER_ATOMIC];
  } else {
    return ['""', Blockly.Arduino.ORDER_ATOMIC];
  }
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
  Blockly.Arduino.definitions_.define_urlencode_event = "String URLEncode(const char* msg) {\n  const char *hex = \"0123456789abcdef\";\n  String encodedMsg = \"\";\n\n  while (*msg!='\\0') {\n      if(('a' <= *msg && *msg <= 'z')\n              || ('A' <= *msg && *msg <= 'Z')\n              || ('0' <= *msg && *msg <= '9')) {\n          encodedMsg += *msg;\n      } else {\n          encodedMsg += '%';\n          encodedMsg += hex[*msg >> 4];\n          encodedMsg += hex[*msg & 15];\n      }\n      msg++;\n  }\n\n  return encodedMsg;\n}\n";
  Blockly.Arduino.definitions_.define_ESP8266Audio_function_invoke_i2sMediaLoop_event = 'bool i2sMediaLoop() {\n  bool isRunning = false;\n  bool looping = false;\n  String playType = "mp3";\n\n  if (dacPlayType=="MP3") {\n    if (voiceFileExt=="wav")\n      playType = "wav";\n  }\n\n  isRunning = ((playType=="mp3")?i2sMp3->isRunning():i2sWav->isRunning());\n  if (isRunning) {\n    looping = ((playType=="mp3")?i2sMp3->loop():i2sWav->loop());\n\n    if (!looping) {\n      if (playType=="mp3")\n        i2sMp3->stop();\n      else\n        i2sWav->stop();\n\n      mp3Done = true;\n      ttsDone = true;\n      httpDone = true;\n      isRunning = false;\n    }\n  }\n\n  return isRunning;\n}\n';
  Blockly.Arduino.definitions_.define_ESP8266Audio_function_invoke_TTS_event = 'void textToSpeech(String content, String tl) {\n  content = URLEncode(content.c_str());\n  ttsDone = false;\n  httpDone = true;\n  mp3Done = true;\n  dacPlayType = "TTS";\n  ttsContent = content;\n\n  saveContentToFile("http://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl="+tl+"&q="+content, "/TTS/tts.mp3", 2);\n  getVoiceFromFile("/TTS/tts.mp3", 2);\n}\n';
  Blockly.Arduino.definitions_.define_ESP8266Audio_function_invoke_saveTTStoFile_event = 'void saveContentToFile(String myLink, String fileName, byte sdType) {\n  File myTTSFile;\n\n  myLink.replace(" ","%20");\n\n  if (fileName.indexOf("/")!=0)\n    fileName = "/" + fileName;\n\n  if (sdType==1) {\n    if(!SD.begin(CS_PIN)) {\n      return;\n    }\n\n    String path = fileName.substring(1,fileName.lastIndexOf("/"));\n    String mySubStr = "/";\n    while(path.indexOf("/")>-1) {\n      mySubStr += path.substring(0,path.indexOf("/"));\n      if(!SD.exists( mySubStr.c_str()))\n        SD.mkdir(mySubStr.c_str());\n      mySubStr += "/";\n      path = path.substring(path.indexOf("/") + 1);\n    }\n\n    if (path!="") {\n      mySubStr += path;\n      if(!SD.exists( mySubStr.c_str()))\n        SD.mkdir(mySubStr.c_str());\n    }\n\n    myTTSFile = SD.open(fileName, "w");\n    if (!myTTSFile) {\n      return;\n    }\n  } else if (sdType==2) {\n    if(!SPIFFS.begin(true)) {\n      return;\n    }\n    myTTSFile = SPIFFS.open(fileName, "w");\n    if (!myTTSFile) {\n      return;\n    }\n  }\n  HTTPClient http;\n  http.begin(myLink);\n  int httpCode = http.GET();\n  if (httpCode == HTTP_CODE_OK) {\n      http.writeToStream(&myTTSFile);\n  }\n  myTTSFile.close();\n  http.end();\n}\n';
  Blockly.Arduino.definitions_.define_ESP8266Audio_function_invoke_radio_event = 'void playWebRadio(String myStationURL) {\n  httpDone = true;\n  mp3Done = true;\n  ttsDone = true;\n  dacPlayType = "radio";\n\n  i2sFile->open(myStationURL.c_str());\n  if (i2sBuff!=NULL)\n    i2sBuff->close();\n  i2sBuff = new AudioFileSourceBuffer(i2sFile, 2048);\n  i2sMp3->begin(i2sBuff, i2sOut);\n}\n';
  Blockly.Arduino.definitions_.define_ESP8266Audio_function_invoke_httpMp3_event = 'void playHttpMP3(String myStationURL) {\n  mp3Done = true;\n  ttsDone = true;\n  httpDone = false;\n  dacPlayType = "HTTPMP3";\n  httpLink = myStationURL;\n\n  myStationURL.replace("www.dropbox","dl.dropboxusercontent");\n  myStationURL.replace("?dl=0","");\n  i2sFile->open(myStationURL.c_str());\n  if (i2sBuff!=NULL)\n    i2sBuff->close();\n  i2sBuff = new AudioFileSourceBuffer(i2sFile, 2048);\n  i2sMp3->begin(i2sBuff, i2sOut);\n}\n';
  Blockly.Arduino.definitions_.define_ESP8266Audio_function_invoke_file_event = 'void getVoiceFromFile(String myFileName, byte sdType) {\n  voiceFileExt = "";\n\n  if (myFileName.length()<4)\n    return;\n  String extendName = myFileName.substring(myFileName.length()-3);\n  extendName.toLowerCase();\n  if ((extendName!="wav") && (extendName!="mp3"))\n    return;\n  voiceFileExt = extendName;\n  httpDone = true;\n  ttsDone = true;\n  mp3Done = false;\n  dacPlayType = "MP3";\n  if(myFileName.indexOf("/")!=0)\n    myFileName = "/" + myFileName;\n  if (sdType==1){\n    SD.begin(CS_PIN);\n    i2sSdFile = new AudioFileSourceSD(String(myFileName).c_str());\n    if (extendName=="mp3"){\n      if (i2sBuff!=NULL)\n        i2sBuff->close();\n      i2sBuff = new AudioFileSourceBuffer(i2sSdFile, 2048);\n    } else {\n      if (i2sID3!=NULL)\n        i2sID3->close();\n      i2sID3 = new AudioFileSourceID3(i2sSdFile);\n    }\n    mp3FileName = myFileName;\n  } else {\n    if (myFileName=="/TTS/tts.mp3"){\n      ttsDone = false;\n      mp3Done = true;\n      dacPlayType = "TTS";\n    } else {\n      mp3FileName = myFileName;\n    }\n\n    SPIFFS.begin();\n    i2sSPIFFSfile = new AudioFileSourceSPIFFS(String(myFileName).c_str());\n\n    if (extendName=="mp3"){\n      if (i2sBuff!=NULL)\n        i2sBuff->close();\n      i2sBuff = new AudioFileSourceBuffer(i2sSPIFFSfile, 2048);\n    } else {\n      if (i2sID3!=NULL)\n        i2sID3->close();\n      i2sID3 = new AudioFileSourceID3(i2sSPIFFSfile);\n    }\n  }\n\n  if (extendName=="mp3")\n    i2sMp3->begin(i2sBuff, i2sOut);\n  else if (extendName=="wav")\n    i2sWav->begin(i2sID3, i2sOut);\n}\n';
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

Blockly.Arduino.otto9_configuration = function(block) {
  var PIN_YL= block.getFieldValue('PIN_YL');
  var PIN_YR= block.getFieldValue('PIN_YR');
  var PIN_RL= block.getFieldValue('PIN_RL');
  var PIN_RR= block.getFieldValue('PIN_RR');
  var PIN_Buzzer= block.getFieldValue('PIN_Buzzer');

  Blockly.Arduino.includes_['otto_lib'] = '#include <Otto.h>\n'
	+ 'Otto Otto;';

  Blockly.Arduino.definitions_['otto_legs'] = '#define LeftLeg '+ PIN_YL +' // left leg pin, servo[0]\n'
 	+ '#define RightLeg '+ PIN_YR +' // right leg pin, servo[1]\n'
	+ '#define LeftFoot '+ PIN_RL +' // left foot pin, servo[2]\n'
    + '#define RightFoot '+ PIN_RR +' // right foot pin, servo[3]\n'
    + '#define Buzzer '+ PIN_Buzzer +' //buzzer pin \n'; 

  Blockly.Arduino.setups_['otto_init']='Otto.init(LeftLeg, RightLeg, LeftFoot, RightFoot, true, Buzzer);\n';
  var code = '';
  return code;
};

Blockly.Arduino.otto_i2cConfig = function(block) {
  var PIN_SDA= block.getFieldValue('PIN_SDA');
  var PIN_SCL= block.getFieldValue('PIN_SCL');
	
  Blockly.Arduino.includes_['otto_i2cConfig_lib'] = '#include <Wire.h>\n';

  Blockly.Arduino.definitions_['otto_i2cConfig_def'] = '#define PIN_SDA '+ PIN_SDA +'\n'
	+ '#define PIN_SCL '+ PIN_SCL +'\n';
	
  Blockly.Arduino.setups_['otto_i2cConfig_begin']='Wire.begin(PIN_SDA, PIN_SCL);';
  
  var code = '';
  return code;
};

Blockly.Arduino.otto_arms_init = function(block) {
  var PIN_AL= block.getFieldValue('PIN_AL');
  var PIN_AR= block.getFieldValue('PIN_AR');

    Blockly.Arduino.includes_['otto_arms'] = '#include <Servo.h>\n'
    + 'Servo AL, AR;';
    Blockly.Arduino.variables_['otto_arms'] = 'int adj[]={ 0, 0,};\n'
    +'int pos[]={ 90,90}; \n'
    +'int shift = 60; \n'
    +'int shift_inc = 10;  \n'
    +'int shift_delay = 50;  \n';

    Blockly.Arduino.definitions_['otto_arms'] = '#define PIN_AL '+ PIN_AL +' // left arm\n'
    +'#define PIN_AR '+ PIN_AR +' // right arm \n'
    +'void move_servo(){ AL.write(pos[1]+adj[1]); AR.write(pos[2]+adj[2]);}';

    Blockly.Arduino.setups_['otto_arms']='AL.attach(PIN_AR);\n'
    +'AR.attach(PIN_AL);\n'
    +'move_servo();\n'
    +'delay(100);';
  var code = '';
  return code;
};

Blockly.Arduino.otto_arms = function(block) {
  var dropdown_otto_arms_choice = block.getFieldValue('otto_arms_choice');
  var code = '';
  switch(dropdown_otto_arms_choice) {
	case 'HANDSUP':
    code += 'AL.write(160);\n'
    +'AR.write(20);\n'
    +'delay(shift_delay);';
    break;
  case 'HANDSDOWN':
    code += 'AL.write(20);\n'
    +'AR.write(160);\n'
    +'delay(shift_delay);';
		break;
	case 'HANDWAVE1':
		code += 'for(int angle=90; angle<90+shift; angle+=shift_inc){  pos[1] = angle;    move_servo();  delay(shift_delay);}\n'
    +'for(int angle=90+shift; angle>90-shift; angle-=shift_inc) { pos[1] = angle;  move_servo(); delay(shift_delay); }\n'
    +'for(int angle=90-shift; angle<90; angle+=shift_inc) {pos[1] = angle;  move_servo();   delay(shift_delay); }\n';
		break;
	case 'HANDWAVE2':
		code += 'for(int angle=90; angle<90+shift; angle+=shift_inc){  pos[2] = angle;    move_servo();  delay(shift_delay);}\n'
     +'for(int angle=90+shift; angle>90-shift; angle-=shift_inc) { pos[2] = angle;  move_servo(); delay(shift_delay); }\n'
     +'for(int angle=90-shift; angle<90; angle+=shift_inc) {pos[2] = angle;  move_servo();   delay(shift_delay); }\n';
		break;
  }
  return code;
};

Blockly.Arduino.otto_arms_home = function(block) {
var code = 'AL.write(90);\n'
+'AR.write(90);\n'
+'delay(shift_delay);';
return code;
};

Blockly.Arduino.definitions_['otto9_legs'] = '#define N_SERVOS 4\n'
  + '#define LeftLeg 2 \n'
	+ '#define RightLeg 3 \n'
	+ '#define LeftFoot 4 \n'
  + '#define RightFoot 5 \n'
  +'#define Buzzer  13 \n'
 +'#define DIN_PIN    A3 \n'
  +'#define CS_PIN     A2 \n'
  +'#define CLK_PIN    A1 \n'
  +'#define LED_DIRECTION  1 \n'
  +'#define PIN_Button   A0 \n'
  +'#define PIN_ASSEMBLY    7\n'
  ;
  Blockly.Arduino.setups_['otto9_init']='Serial.begin(9600);\n'
  +'BTserial.begin(9600);\n'
 +'Otto.init(LeftLeg, RightLeg, LeftFoot, RightFoot, true, Buzzer);\n'
  +'Otto.initMATRIX(DIN_PIN, CS_PIN, CLK_PIN, LED_DIRECTION);\n'
  +'Otto.matrixIntensity(1);\n'
  +'pinMode(PIN_ASSEMBLY, INPUT_PULLUP);\n'
  +'pinMode(PIN_Button, INPUT);\n'
  +'SCmd.addCommand("S", receiveStop);    \n'
  +'SCmd.addCommand("L", receiveLED);     \n'
  +'SCmd.addCommand("T", recieveBuzzer);    \n'
  +'SCmd.addCommand("M", receiveMovement);   \n'
  +'SCmd.addCommand("H", receiveGesture);    \n'
  +'SCmd.addCommand("K", receiveSing);       \n'
  +'SCmd.addCommand("C", receiveTrims);      \n'
  +'SCmd.addCommand("G", receiveServo);      \n'
  +'SCmd.addCommand("R", receiveName);       \n'
  +'SCmd.addCommand("E", requestName);\n'
  +'SCmd.addCommand("I", requestProgramId);\n'
  +'SCmd.addDefaultHandler(receiveStop);\n'
  +'Otto.sing(S_connection);\n'
  +'Otto.home();\n'

  +'for (int i = 0; i < 2; i++) {\n'
  +'for (int i = 0; i < 8; i++) {\n'
      +'Otto.putAnimationMouth(littleUuh, i);\n'
      +'delay(150);\n'
    +'}\n'
  +'}\n'
  +'//Smile for a happy Otto :)\n'
  +'Otto.putMouth(smile);\n'
  +'Otto.sing(S_happy);\n'
  +'delay(200);\n'
  +'if (EEPROM.read(5) == name_fir) {\n'
    +'Otto.jump(1, 700);\n'
    +'delay(200);\n'
    +'Otto.shakeLeg(1, T, 1);\n'
    +'Otto.putMouth(smallSurprise);\n'
    +'Otto.swing(2, 800, 20);\n'
    +'Otto.home();\n'
  +'}\n'
  +'Otto.putMouth(happyOpen);\n'
  +'previousMillis = millis();\n'
 +'while (digitalRead(PIN_ASSEMBLY) == LOW) {\n'
    +'Otto.home();\n'
    +'Otto.sing(S_happy_short);   // sing every 5 seconds so we know OTTO is still working\n'
    +'delay(5000);}\n'
  
  var code = 'SCmd.readSerial();     if (Otto.getRestState()==false){ move(moveId); }  \n'
  return code;
};

Blockly.Arduino.otto9_smooth = function(block) {
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Servo.h>\n'
  + '#include <Oscillator.h>\n'
  + '#include <EEPROM.h>\n'
  + '#define N_SERVOS 4';
  Blockly.Arduino.variables_['otto9_var'] = 'void goingUp(int tempo);\n'
  + 'void drunk (int tempo);\n'
  + 'void noGravity(int tempo);\n'
  + 'void kickLeft(int tempo);\n'
  + 'void kickRight(int tempo);\n'
  + 'void run(int steps, int T=500);\n'
  + 'void walk(int steps, int T=1000);\n'
  + 'void backyard(int steps, int T=3000);\n'
  + 'void backyardSlow(int steps, int T=5000);\n'
  + 'void turnLeft(int steps, int T=3000);\n'
  + 'void turnRight(int steps, int T=3000);\n'
  + 'void moonWalkLeft(int steps, int T=1000);\n'
  + 'void moonWalkRight(int steps, int T=1000);\n'
  + 'void crusaito(int steps, int T=1000);\n'
  + 'void swing(int steps, int T=1000);\n'
  + 'void upDown(int steps, int T=1000);\n'
  + 'void flapping(int steps, int T=1000);\n'
  + 'int t=495; // TEMPO: 121 BPM\n'
  + 'double pause=0;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define N_SERVOS 4\n'
  + '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
  + '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define INTERVALTIME 10.0\n' 
  + 'Oscillator servo[N_SERVOS];';
  Blockly.Arduino.setups_['otto9_init']='  servo[0].attach(PIN_RR);\n'
  + 'servo[1].attach(PIN_RL);\n'
  + 'servo[2].attach(PIN_YR);\n'
  + 'servo[3].attach(PIN_YL);\n'
  + 'for(int i=0;i<4;i++) servo[i].SetPosition(90);\n'
  var code = 'dance();}\n'
  + 'void dance(){ primera_parte(); segunda_parte(); moonWalkLeft(4,t*2); moonWalkRight(4,t*2); moonWalkLeft(4,t*2); moonWalkRight(4,t*2); primera_parte();  crusaito(1,t*8); crusaito(1,t*7);\n'
  + 'for (int i=0; i<16; i++){   flapping(1,t/4);   delay(3*t/4); }  moonWalkRight(4,t*2); moonWalkLeft(4,t*2);  moonWalkRight(4,t*2);  moonWalkLeft(4,t*2);  drunk(t*4);drunk(t*4);  drunk(t*4);  drunk(t*4);\n'
  + 'kickLeft(t);  kickRight(t);  drunk(t*8);  drunk(t*4);drunk(t/2);  delay(t*4);   drunk(t/2);  delay(t*4);   walk(2,t*2);  backyard(2,t*2);  goingUp(t*2);  goingUp(t*1);  noGravity(t*2); crusaito(1,t*2);  crusaito(1,t*8); crusaito(1,t*2); crusaito(1,t*8); crusaito(1,t*2); crusaito(1,t*3);\n'
  + 'delay(t);  primera_parte();    for (int i=0; i<32; i++){   flapping(1,t/2);  delay(t/2); }   for(int i=0;i<4;i++) servo[i].SetPosition(90);} \n'
  + 'void oscillate(int A[N_SERVOS], int O[N_SERVOS], int T, double phase_diff[N_SERVOS]){  for (int i=0; i<4; i++) {   servo[i].SetO(O[i]); servo[i].SetA(A[i]); servo[i].SetT(T); servo[i].SetPh(phase_diff[i]); }  double ref=millis(); for (double x=ref; x<T+ref; x=millis()){ for (int i=0; i<4; i++){ servo[i].refresh(); }}}\n'
  + 'unsigned long final_time; unsigned long interval_time;int oneTime;int iteration;float increment[N_SERVOS];  int oldPosition[]={90,90,90,90}; \n'
  + 'void moveNServos(int time, int  newPosition[]){\n'
  + 'for(int i=0;i<N_SERVOS;i++)	increment[i] = ((newPosition[i])-oldPosition[i])/(time/INTERVALTIME);  final_time =  millis() + time;  iteration = 1; \n'
  + 'while(millis() < final_time){ interval_time = millis()+INTERVALTIME;   oneTime=0;      while(millis()<interval_time){	 if(oneTime<1){ for(int i=0;i<N_SERVOS;i++){  servo[i].SetPosition(oldPosition[i] + (iteration * increment[i])); }	iteration++;oneTime++; } } }  \n'
  + 'for(int i=0;i<N_SERVOS;i++){	 oldPosition[i] = newPosition[i]; }   }\n'
  + 'void goingUp(int tempo){\n'
  + 'pause=millis(); for(int i=0;i<4;i++) servo[i].SetPosition(90);\n'
  + 'delay(tempo);servo[0].SetPosition(80);servo[1].SetPosition(100);delay(tempo);servo[0].SetPosition(70); servo[1].SetPosition(110); delay(tempo); servo[0].SetPosition(60); servo[1].SetPosition(120); delay(tempo); servo[0].SetPosition(50); servo[1].SetPosition(130); delay(tempo); servo[0].SetPosition(40); servo[1].SetPosition(140); delay(tempo); servo[0].SetPosition(30); servo[1].SetPosition(150);delay(tempo); servo[0].SetPosition(20); servo[1].SetPosition(160); delay(tempo); while(millis()<pause+8*t);}\n'
  + 'void primera_parte(){\n'
  + 'int move1[4] = {60,120,90,90}; int move2[4] = {90,90,90,90}; int move3[4] = {40,140,90,90}; for(int x=0; x<3; x++){ for(int i=0; i<3; i++){  lateral_fuerte(1,t/2);  lateral_fuerte(0,t/4); lateral_fuerte(1,t/4);  delay(t);  } pause=millis(); for(int i=0;i<4;i++) servo[i].SetPosition(90); moveNServos(t*0.4,move1); moveNServos(t*0.4,move2); while(millis()<(pause+t*2)); }for(int i=0; i<2; i++){ lateral_fuerte(1,t/2); lateral_fuerte(0,t/4); lateral_fuerte(1,t/4); delay(t); } pause=millis(); for(int i=0;i<4;i++) servo[i].SetPosition(90);crusaito(1,t*1.4); moveNServos(t*1,move3); for(int i=0;i<4;i++) servo[i].SetPosition(90); while(millis()<(pause+t*4)); }\n'
  + 'void segunda_parte(){\n'
  + 'int move1[4] = {90,90,80,100};int move2[4] = {90,90,100,80};int move3[4] = {90,90,80,100};int move4[4] = {90,90,100,80};   int move5[4] = {40,140,80,100};int move6[4] = {40,140,100,80};int move7[4] = {90,90,80,100};int move8[4] = {90,90,100,80}; int move9[4] = {40,140,80,100}; int move10[4] = {40,140,100,80}; int move11[4] = {90,90,80,100};int move12[4] = {90,90,100,80};\n'
  + 'for(int x=0; x<7; x++){ for(int i=0; i<3; i++){ pause=millis(); moveNServos(t*0.15,move1); moveNServos(t*0.15,move2); moveNServos(t*0.15,move3); moveNServos(t*0.15,move4);  while(millis()<(pause+t)); }pause=millis(); moveNServos(t*0.15,move5); moveNServos(t*0.15,move6); moveNServos(t*0.15,move7); moveNServos(t*0.15,move8);  while(millis()<(pause+t));  }\n'
  + 'for(int i=0; i<3; i++){ pause=millis();moveNServos(t*0.15,move9);moveNServos(t*0.15,move10);moveNServos(t*0.15,move11); moveNServos(t*0.15,move12);while(millis()<(pause+t));}}\n'
  + 'void lateral_fuerte(boolean side, int tempo){\n'
  + 'for(int i=0;i<4;i++) servo[i].SetPosition(90);if (side) servo[0].SetPosition(40);else servo[1].SetPosition(140);delay(tempo/2);servo[0].SetPosition(90);servo[1].SetPosition(90);delay(tempo/2);}\n'
  + 'void drunk (int tempo){\n'
  + 'pause=millis();int move1[] = {60,70,90,90};int move2[] = {110,120,90,90};int move3[] = {60,70,90,90};int move4[] = {110,120,90,90};moveNServos(tempo*0.235,move1);  moveNServos(tempo*0.235,move2);moveNServos(tempo*0.235,move3);moveNServos(tempo*0.235,move4);while(millis()<(pause+tempo));}\n'
  + 'void noGravity(int tempo){int move1[4] = {120,140,90,90};int move2[4] = {140,140,90,90};int move3[4] = {120,140,90,90};int move4[4] = {90,90,90,90};for(int i=0;i<4;i++) servo[i].SetPosition(90);for(int i=0;i<N_SERVOS;i++) oldPosition[i]=90;moveNServos(tempo*2,move1);moveNServos(tempo*2,move2);delay(tempo*2);moveNServos(tempo*2,move3);moveNServos(tempo*2,move4);}\n'
  + 'void kickLeft(int tempo){\n'
  + 'for(int i=0;i<4;i++) servo[i].SetPosition(90);delay(tempo);servo[0].SetPosition(50); servo[1].SetPosition(70);delay(tempo);servo[0].SetPosition(80); servo[1].SetPosition(70); delay(tempo/4);servo[0].SetPosition(30); servo[1].SetPosition(70);delay(tempo/4);servo[0].SetPosition(80);servo[1].SetPosition(70); delay(tempo/4);servo[0].SetPosition(30); servo[1].SetPosition(70); delay(tempo/4);servo[0].SetPosition(80);servo[1].SetPosition(70); delay(tempo); }\n'
  + 'void kickRight(int tempo){\n'
  + 'for(int i=0;i<4;i++) servo[i].SetPosition(90);delay(tempo);servo[0].SetPosition(110);servo[1].SetPosition(130); delay(tempo);servo[0].SetPosition(110); servo[1].SetPosition(100); delay(tempo/4);servo[0].SetPosition(110); servo[1].SetPosition(150); delay(tempo/4);servo[0].SetPosition(110); servo[1].SetPosition(80); delay(tempo/4);servo[0].SetPosition(110); servo[1].SetPosition(150); delay(tempo/4);servo[0].SetPosition(110); servo[1].SetPosition(100); delay(tempo);}\n'
  + 'void walk(int steps, int T){int A[4]= {15, 15, 30, 30};int O[4] = {0, 0, 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff); }\n'
  + 'void run(int steps, int T){int A[4]= {10, 10, 10, 10};int O[4] = {0, 0, 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff); }\n'
  + 'void backyard(int steps, int T){int A[4]= {15, 15, 30, 30};int O[4] = {0, 0, 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(-90), DEG2RAD(-90)}; for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);}\n'
  + 'void backyardSlow(int steps, int T){int A[4]= {15, 15, 30, 30};int O[4] = {0, 0, 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(-90), DEG2RAD(-90)}; for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);}\n'
  + 'void turnLeft(int steps, int T){int A[4]= {20, 20, 10, 30};int O[4] = {0, 0, 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);}\n'
  + 'void turnRight(int steps, int T){int A[4]= {20, 20, 30, 10};int O[4] = {0, 0, 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)}; for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);}\n'
  + 'void moonWalkRight(int steps, int T){int A[4]= {25, 25, 0, 0};int O[4] = {-15 ,15, 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 + 120), DEG2RAD(90), DEG2RAD(90)}; for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);}\n'
  + 'void moonWalkLeft(int steps, int T){int A[4]= {25, 25, 0, 0};int O[4] = {-15, 15, 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 - 120), DEG2RAD(90), DEG2RAD(90)}; for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);}\n'
  + 'void crusaito(int steps, int T){int A[4]= {25, 25, 30, 30};int O[4] = {- 15, 15, 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 + 120), DEG2RAD(90), DEG2RAD(90)}; for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);}\n'
  + 'void swing(int steps, int T){int A[4]= {25, 25, 0, 0};int O[4] = {-15, 15, 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);}\n'
  + 'void upDown(int steps, int T){int A[4]= {25, 25, 0, 0};int O[4] = {-15, 15, 0, 0};double phase_diff[4] = {DEG2RAD(180), DEG2RAD(0), DEG2RAD(270), DEG2RAD(270)}; for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);}\n'
  + 'void flapping(int steps, int T){int A[4]= {15, 15, 8, 8};int O[4] = {-A[0], A[1], 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180), DEG2RAD(90), DEG2RAD(-90)};for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);}\n'
  + 'void test(int steps, int T){int A[4]= {15, 15, 8, 8};int O[4] = {-A[0] + 10, A[1] - 10, 0, 0};double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180), DEG2RAD(90), DEG2RAD(-90)};for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n'
  return code;
};