'use strict';
let chalk = require('chalk');

module.exports = function(str) {
    if (str.indexOf('§') < 0)
        return str;

    let strs = str.split('§');
    for (var n = 0; n < strs.length; n++) {
        let str = strs[n].substring(1);
        switch (strs[n][0]) {
            case '0':
                strs[n] = chalk.hex('#000000')(str);
                break;
            case '1':
                strs[n] = chalk.hex('#0000AA')(str);
                break;
            case '2':
                strs[n] = chalk.hex('#00AA00')(str);
                break;
            case '3':
                strs[n] = chalk.hex('#00AAAA')(str);
                break;
            case '4':
                strs[n] = chalk.hex('#AA0000')(str);
                break;
            case '5':
                strs[n] = chalk.hex('#AA00AA')(str);
                break;
            case '6':
                strs[n] = chalk.hex('#FFAA00')(str);
                break;
            case '7':
                strs[n] = chalk.hex('#AAAAAA')(str);
                break;
            case '8':
                strs[n] = chalk.hex('#555555')(str);
                break;
            case '9':
                strs[n] = chalk.hex('#5555FF')(str);
                break;
            case 'a':
                strs[n] = chalk.hex('#55FF55')(str);
                break;
            case 'b':
                strs[n] = chalk.hex('#55FFFF')(str);
                break;
            case 'c':
                strs[n] = chalk.hex('#FF5555')(str);
                break;
            case 'd':
                strs[n] = chalk.hex('#FF55FF')(str);
                break;
            case 'e':
                strs[n] = chalk.hex('#FFFF55')(str);
                break;
            case 'f':
                strs[n] = chalk.hex('#FFFFFF')(str);
                break;
            
            case 'l':
                strs[n] = chalk.bold(str);
                break;
            case 'n':
                strs[n] = chalk.underline(str);
                break;
            case 'o':
                strs[n] = chalk.italic(str);
                break;

            case 'r':
            default:
                strs[n] = str;
                break;
        }
    }
    return strs.join('');
}