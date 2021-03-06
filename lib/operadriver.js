var path = require('path');
process.env.PATH += path.delimiter + path.join(__dirname, 'operadriver');
exports.path = process.platform === 'win32' ? path.join(__dirname, 'operadriver', 'operadriver.exe') : path.join(__dirname, 'operadriver', 'operadriver');
exports.version = '0.2.2';
exports.start = function(args) {
  exports.defaultInstance = require('child_process').execFile(exports.path, args);
  return exports.defaultInstance;
}
exports.stop = function () {
  if (exports.defaultInstance != null){
    exports.defaultInstance.kill();
  }
}
