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
                strs[n] = chalk.black(str);
                break;
            case '9':
            case '1':
                strs[n] = chalk.blue(str);
                break;
            case 'a':
            case '2':
                strs[n] = chalk.green(str);
                break;
            case 'b':
            case '3':
                strs[n] = chalk.cyan(str);
                break;
            case 'c':
            case '4':
                strs[n] = chalk.red(str);
                break;
            case 'd':
            case '5':
                strs[n] = chalk.magenta(str);
                break;
            //6 = Brown
            case '7':
            case '8':
                strs[n] = chalk.gray(str);
                break;
            case 'e':
                strs[n] = chalk.yellow(str);
                break;
            default:
            case 'r':
            case 'f':
                strs[n] = str;
                break;
        }
    }
    return strs.join('');
}