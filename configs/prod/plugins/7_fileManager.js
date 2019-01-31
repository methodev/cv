//====================================================|
// WEBPACK PROD PLUGINS: FILE MANAGER


//--------------------------| Import

const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');


//--------------------------| Configuration

const plugin = new FileManagerPlugin({
  onEnd: {
    archive: [
      {
        source: path.join(__dirname, '../../../dist'),
        destination: './production.zip'
      }
    ]
  }
});


//--------------------------| Export

module.exports = plugin;
