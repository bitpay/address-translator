var fs = require('fs-extra');
var cryptoConfigFile = './node_modules/@angular/cli/models/webpack-configs/common.js';

if (!fs.exists(cryptoConfigFile)) {
  console.log('## Could not find the crypto config file');
  return;
}

fs.readFile(cryptoConfigFile, 'utf8', function(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  
  console.log('## Applying crypto configuration...');
  var result = data.replace(/crypto: 'empty'/g, 'crypto: true');
  
  fs.writeFile(cryptoConfigFile, result, 'utf8', function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log('## Crypto config enabled successfully');
  });
});