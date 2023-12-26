//Serial
Blockly.Arduino.xlan_serial_init = function(block) {
  var dropdown_baud = block.getFieldValue('baud');
  Blockly.Arduino.setups_.xlan_serial_init = 'Serial.begin(' + dropdown_baud + ');';
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

//Line
Blockly.Arduino.xlan_set_line_token = function(block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC||"");
  Blockly.Arduino.definitions_.define_line_include = '#include <WiFiClientSecure.h>';
  Blockly.Arduino.definitions_.xlan_set_line_token = 'String lineToken = ' + value_text + ';\nWiFiClientSecure client_tcp;\n';
  var code = '';

  return code;
};

Blockly.Arduino.xlan_send_line_msg = function(block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC||"");
  Blockly.Arduino.definitions_.xlan_set_line_msg = 'void sendLineMsg(String msg) {\n  client_tcp.setInsecure();\n  if (client_tcp.connect("notify-api.line.me", 443)) {\n    client_tcp.println("POST /api/notify HTTP/1.1");\n    client_tcp.println("Connection: close");\n    client_tcp.println("Host: notify-api.line.me");\n    client_tcp.println("Authorization: Bearer " + lineToken);\n    client_tcp.println("Content-Length: " + String(msg.length() + 8));\n    client_tcp.println("Content-Type: application/x-www-form-urlencoded");\n    client_tcp.println();\n    client_tcp.println("message=" + msg);\n    client_tcp.println();\n    client_tcp.stop();\n  }\n}\n';
  var code = '\nsendLineMsg(' + value_text + ');';

  return code;
};

Blockly.Arduino.xlan_send_line_msg_with_image = function(block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC||"");
  Blockly.Arduino.definitions_.xlan_set_line_msg_with_image = 'void sendLineMsgWithImage(String msg, camera_fb_t *fb) {\n  client_tcp.setInsecure();\n  if (client_tcp.connect("notify-api.line.me", 443)) {\n    String head = "--Cusboundary\\r\\nContent-Disposition: form-data;";\n    head += "name=\\"message\\"; \\r\\n\\r\\n" + msg + "\\r\\n";\n    head += "--Cusboundary\\r\\n";\n    head += "Content-Disposition: form-data;name=\\"imageFile\\";";\n    head += "filename=\\"esp32-cam.jpg\\"\\r\\nContent-Type: image/jpeg\\r\\n\\r\\n";\n    String tail = "\\r\\n--Cusboundary--\\r\\n";\n    uint16_t imageLen = fb->len;\n    uint16_t extraLen = head.length() + tail.length();\n    uint16_t totalLen = imageLen + extraLen;\n\n    client_tcp.println("POST /api/notify HTTP/1.1");\n    client_tcp.println("Connection: close");\n    client_tcp.println("Host: notify-api.line.me");\n    client_tcp.println("Authorization: Bearer " + lineToken);\n    client_tcp.println("Content-Length: " + String(totalLen));\n    client_tcp.println("Content-Type: multipart/form-data;boundary=Cusboundary");\n    client_tcp.println();\n    client_tcp.print(head);\n    uint8_t *fbBuf = fb->buf;\n    size_t fbLen = fb->len;\n\n    for (size_t n = 0; n < fbLen; n = n + 2048)\n    {\n      if (n + 2048 < fbLen)\n      {\n        client_tcp.write(fbBuf, 2048);\n        fbBuf += 2048;\n      }\n      else if (fbLen % 2048 > 0)\n      {\n        size_t remainder = fbLen % 2048;\n        client_tcp.write(fbBuf, remainder);\n      }\n    }\n    client_tcp.print(tail);\n    client_tcp.println();\n    client_tcp.stop();\n  }\n}\n';
  var code = '\nsendLineMsgWithImage(' + value_text + ', fb);\nesp_camera_fb_return(fb);\n';

  return code;
};

//BLE
Blockly.Arduino.xlan_ble_serial_init = function(block) {
  Blockly.Arduino.definitions_.xlan_ble_serial_init = '#include <BluetoothSerial.h>\nBluetoothSerial BLESerial;';
  var value_text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC||"");
  Blockly.Arduino.setups_.xlan_ble_serial_init = 'BLESerial.begin(' + value_text + ');';
  var code = '';

  return code;
};

Blockly.Arduino.xlan_ble_serial_while_loop = function(block) {
  var statement = Blockly.Arduino.statementToCode(this, "STATEMENT");
  var code = 'while (BLESerial.available()) {\n' + statement + '\n}\n';

  return code;
};

Blockly.Arduino.xlan_ble_serial_read_a_char = function(block) {
  var variable_name = Blockly.Arduino.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var code = variable_name + ' = BLESerial.read();\n';

  return code;
};

//Camera
Blockly.Arduino.xlan_camera_init = function(block) {
  var dropdown_resolution = block.getFieldValue('resolution');
  Blockly.Arduino.definitions_.define_camera_include = '#include "esp_camera.h"\n\n#define PWDN_GPIO_NUM 32\n#define RESET_GPIO_NUM -1\n#define XCLK_GPIO_NUM 0\n#define SIOD_GPIO_NUM 26\n#define SIOC_GPIO_NUM 27\n#define Y9_GPIO_NUM 35\n#define Y8_GPIO_NUM 34\n#define Y7_GPIO_NUM 39\n#define Y6_GPIO_NUM 36\n#define Y5_GPIO_NUM 21\n#define Y4_GPIO_NUM 19\n#define Y3_GPIO_NUM 18\n#define Y2_GPIO_NUM 5\n#define VSYNC_GPIO_NUM 25\n#define HREF_GPIO_NUM 23\n#define PCLK_GPIO_NUM 22\n\nsensor_t *cam;';
  Blockly.Arduino.setups_.xlan_camera_init = 'camera_config_t config;\n  config.ledc_channel = LEDC_CHANNEL_0;\n  config.ledc_timer = LEDC_TIMER_0;\n  config.pin_d0 = Y2_GPIO_NUM;\n  config.pin_d1 = Y3_GPIO_NUM;\n  config.pin_d2 = Y4_GPIO_NUM;\n  config.pin_d3 = Y5_GPIO_NUM;\n  config.pin_d4 = Y6_GPIO_NUM;\n  config.pin_d5 = Y7_GPIO_NUM;\n  config.pin_d6 = Y8_GPIO_NUM;\n  config.pin_d7 = Y9_GPIO_NUM;\n  config.pin_xclk = XCLK_GPIO_NUM;\n  config.pin_pclk = PCLK_GPIO_NUM;\n  config.pin_vsync = VSYNC_GPIO_NUM;\n  config.pin_href = HREF_GPIO_NUM;\n  config.pin_sscb_sda = SIOD_GPIO_NUM;\n  config.pin_sscb_scl = SIOC_GPIO_NUM;\n  config.pin_pwdn = PWDN_GPIO_NUM;\n  config.pin_reset = RESET_GPIO_NUM;\n  config.xclk_freq_hz = 20000000;\n  config.pixel_format = PIXFORMAT_JPEG;\n  config.frame_size = ' + dropdown_resolution + ';\n  config.fb_count = 2;\n  config.jpeg_quality = 10;\n\n  esp_err_t err = esp_camera_init(&config);\n  if (err != ESP_OK)\n    return;\n\n  cam = esp_camera_sensor_get();\n';
  var code = '';

  return code;
};

Blockly.Arduino.xlan_camera_brightness = function(block) {
  var dropdown_brightness = block.getFieldValue('brightness');
  var code = '\ncam->set_brightness(cam, ' + dropdown_brightness + ');';

  return code;
};

Blockly.Arduino.xlan_camera_special_effect = function(block) {
  var dropdown_sp_effect = block.getFieldValue('sp_effect');
  var code = '\ncam->set_special_effect(cam, ' + dropdown_sp_effect + ');';

  return code;
};

Blockly.Arduino.xlan_camera_wb_mode = function(block) {
  var dropdown_wb_mode = block.getFieldValue('wb_mode');
  var code = '\ncam->set_whitebal(cam, ' + dropdown_wb_mode + ');';

  return code;
};

Blockly.Arduino.xlan_camera_v_flip = function(block) {
  var dropdown_v_flip = block.getFieldValue('v_flip');
  var code = '\ncam->set_vflip(cam, ' + dropdown_v_flip + ');';

  return code;
};

Blockly.Arduino.xlan_camera_h_mirror = function(block) {
  var dropdown_h_mirror = block.getFieldValue('h_mirror');
  var code = '\ncam->set_hmirror(cam, ' + dropdown_h_mirror + ');';

  return code;
};

Blockly.Arduino.xlan_camera_capture_images = function(block) {
  var code = '\ncamera_fb_t *fb = esp_camera_fb_get();\nif (!fb)\n  return;\n';

  return code;
};

//MMShield32
Blockly.Arduino.mmshield_init = function(block) {
  Blockly.Arduino.definitions_.mmshield_init = '#include "XLAN_MMShield.h"\nXLAN_MMShield mm = XLAN_MMShield();';
  Blockly.Arduino.setups_.mmshield_init = 'mm.Init();';
  var code = '';

  return code;
};

//Motor
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

//OLED
Blockly.Arduino.mmshield_oled_init = function(block) {
  Blockly.Arduino.definitions_.mmshield_oled_init = '#include "SSD1306Wire.h"\nSSD1306Wire display(0x3c, I2C_SDA, I2C_SCL);';
  Blockly.Arduino.setups_.mmshield_oled_init = 'display.init();';
  var code = '';

  return code;
};

Blockly.Arduino.mmshield_oled_flip = function(block) {
  var code = 'display.flipScreenVertically();\n';

  return code;
};

Blockly.Arduino.mmshield_oled_set_align = function(block) {
  var dropdown_align = block.getFieldValue('align');
  var code = 'display.setTextAlignment(' + dropdown_align + ');\n';

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

Blockly.Arduino.mmshield_oled_clear = function(block) {
  var code = 'display.clear();\ndisplay.display();\n';

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
  Blockly.Arduino.definitions_.define_i2sMic_include = '#include <driver/i2s.h>\n#include "SPIFFS.h"\n#include <SD.h>';
  Blockly.Arduino.definitions_.define_i2sMic_invoke = '#define MIC_SCK ' + number_sck + '\n#define MIC_WS ' + number_ws + '\n#define MIC_SD ' + number_sd + '\n#define I2S_MIC_PORT I2S_NUM_1\n#define RECORD_TIME (recTime)\n#define MIC_SAMPLE_RATE     (16000)\n#define MIC_SAMPLE_BITS     (16)\n#define MIC_READ_LEN        (3 * 1024)\n#define MIC_CHANNEL_NUM     (1)\n#define FLASH_RECORD_SIZE   (MIC_CHANNEL_NUM * MIC_SAMPLE_RATE * MIC_SAMPLE_BITS / 8 * RECORD_TIME)\n\nconst int headerSize = 44;\nint recTime = 5;\nFile wavFile;\n';
  Blockly.Arduino.definitions_.define_SD_CS_invoke = 'int CS_PIN = SS;';
  Blockly.Arduino.definitions_.define_i2sMic_event = 'void i2sMicInit() {\n  i2s_config_t i2s_config = {\n    .mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_RX),\n    .sample_rate = MIC_SAMPLE_RATE,\n    .bits_per_sample = i2s_bits_per_sample_t(MIC_SAMPLE_BITS),\n    .channel_format = I2S_CHANNEL_FMT_ONLY_LEFT,\n    .communication_format = i2s_comm_format_t(I2S_COMM_FORMAT_I2S | I2S_COMM_FORMAT_I2S_MSB),\n    .intr_alloc_flags = 0,\n    .dma_buf_count = 64,\n    .dma_buf_len = 1024,\n    .use_apll = 1\n  };\n  i2s_driver_install(I2S_MIC_PORT, &i2s_config, 0, NULL);\n  const i2s_pin_config_t pin_config = {\n    .bck_io_num = MIC_SCK,\n    .ws_io_num = MIC_WS,\n    .data_out_num = -1,\n    .data_in_num = MIC_SD\n  };\n  i2s_set_pin(I2S_MIC_PORT, &pin_config);\n}\n';
  var code = '';

  return code;
};

Blockly.Arduino.i2s_media_input_device_start = function(block) {
  var code = 'i2sMicInit();\n';

  return code;
};

Blockly.Arduino.i2s_media_input_device_stop = function(block) {
  var code = 'i2s_driver_uninstall(I2S_MIC_PORT);\n';

  return code;
};

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
};

Blockly.Arduino.i2s_media_azure_stt_result = function(block) {
  if (Blockly.Arduino.my_board_type=="ESP32") {
    return ['strRecgText', Blockly.Arduino.ORDER_ATOMIC];
  } else {
    return ['""', Blockly.Arduino.ORDER_ATOMIC];
  }
};

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
};

Blockly.Arduino.i2s_media_play_web_radio = function(block) {
  var value_text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC||"");
  var code = 'playWebRadio(' + value_text + ');\n';

  return code;
};

Blockly.Arduino.i2s_media_web_radio_url = function(block) {
  var value_text = '\"' + block.getFieldValue("WEB_RADIO_URL") + '\"';

  return [value_text, Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.i2s_media_loop = function(block) {
  return 'i2sMediaLoop();\n';
};

Blockly.Arduino.i2s_media_google_tts = function(block) {
  var value_text = Blockly.Arduino.valueToCode(block, "TEXT", Blockly.Arduino.ORDER_ATOMIC||"");
  var dropdown_lang = block.getFieldValue('lang');

  return 'textToSpeech(' + value_text + ', \"' + dropdown_lang + '");\n';
};

//MotorDriverV5
Blockly.Arduino.motordriver_init = function(block) {
  Blockly.Arduino.definitions_.motordriver_init = 'Emakefun_MotorDriver mMotorDriver = Emakefun_MotorDriver(0x60, MOTOR_DRIVER_BOARD_V5);';
  var code = '';

  return code;
};

Blockly.Arduino.motordriver_set_io_freq = function(block) {
  var freq = block.getFieldValue('freq');
  Blockly.Arduino.setups_.motordriver_set_freq = 'mMotorDriver.begin(' + freq + ');';
  var code = '';

  return code;
};

Blockly.Arduino.motordriver_set_io_port = function(block) {

};

Blockly.Arduino.motordriver_set_output_pwm_value = function(block) {

};

//RGB
Blockly.Arduino.motordriver_mixed_rgb_led_color = function(block) {

};

//Buzzer
Blockly.Arduino.motordriver_play_note = function(block) {

};

//Motor
Blockly.Arduino.motordriver_attach_motor = function(block) {

};

Blockly.Arduino.motordriver_motor_rotate = function(block) {

};

Blockly.Arduino.motordriver_stop_motor = function(block) {

};

Blockly.Arduino.motordriver_attach_servo = function(block) {

};

Blockly.Arduino.motordriver_servo_rotate = function(block) {

};

//PS2
Blockly.Arduino.motordriver_init_ps2_receiver = function(block) {

};

Blockly.Arduino.motordriver_ps2_button_pressed = function(block) {

};

Blockly.Arduino.motordriver_ps2_button_hold = function(block) {

};

Blockly.Arduino.motordriver_ps2_left_js_x = function(block) {

};

Blockly.Arduino.motordriver_ps2_left_js_y = function(block) {

};

Blockly.Arduino.motordriver_ps2_right_js_x = function(block) {

};

Blockly.Arduino.motordriver_ps2_right_js_y = function(block) {

};