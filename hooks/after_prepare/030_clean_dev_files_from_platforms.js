#!/usr/bin/env node

/**
 * After prepare, files are copied to the platforms/ios and platforms/android folders.
 * Lets clean up some of those files that arent needed with this hook.
 */
var fs = require('fs');
var path = require('path');

var deleteFolderRecursive = function (removePath) {
    if (fs.existsSync(removePath)) {
        fs.readdirSync(removePath).forEach(function (file, index) {
            var curPath = path.join(removePath, file);
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(removePath);
    }
};

var iosPlatformsDir_1 = path.resolve(__dirname, '../../platforms/ios/www/css');
var iosPlatformsDir_2 = path.resolve(__dirname, '../../platforms/ios/www/dist/app');
var iosPlatformsDir_3 = path.resolve(__dirname, '../../platforms/ios/www/app');

var androidPlatformsDir_1 = path.resolve(__dirname, '../../platforms/android/assets/www/css');
var androidPlatformsDir_2 = path.resolve(__dirname, '../../platforms/android/assets/www/dist/app');
var androidPlatformsDir_3 = path.resolve(__dirname, '../../platforms/android/assets/www/app');

deleteFolderRecursive(iosPlatformsDir_1);
deleteFolderRecursive(iosPlatformsDir_2);
deleteFolderRecursive(iosPlatformsDir_3);

deleteFolderRecursive(androidPlatformsDir_1);
deleteFolderRecursive(androidPlatformsDir_2);
deleteFolderRecursive(androidPlatformsDir_3);