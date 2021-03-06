const path = require("path");
const VersionFile = require('webpack-version-file');

module.exports = () => {
    const versionFile =  new VersionFile({
        output: path.join(process.cwd(), "version.js"),
        templateString: '// This file is auto-generated by webpack. Any edits will be overwritten. \nexport default \'<%= date %>\'',
        data: {
            date: ((new Date().valueOf()/10000).toFixed(0))/10000 // Reduce resolution of 10 sec, and make more readable with decimal.
        }
    });
    versionFile.apply();
}
