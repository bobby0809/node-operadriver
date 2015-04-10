var path = require('path');

exports.path = process.platform === 'win32'
  ? path.join(__dirname, 'operadriver', 'operadriver.exe')
  : path.join(__dirname, 'operadriver', 'operadriver');

exports.version = '0.2.1';

exports.start = function() {
  exports.defaultInstance = require('child_process').execFile(exports.path);
  return exports.defaultInstance;
};

exports.stop = function () {
  if (exports.defaultInstance) {
    exports.defaultInstance.kill();
  }
};