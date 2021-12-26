const chalk = require('chalk');

exports.dlcLog = (log, type) => {
    let chalkOutput;
    let prefix;

    if (!type) {
        type = 'log';
        chalkOutput = chalk.bgBlue.white.bold;
        prefix = 'DLC-Form Build';
    }

    if (type === 'error') {
        chalkOutput = chalk.bgRedBright.black.bold;
        prefix = 'DLC-Form Build Error'
    }

    console[type](`${chalkOutput(`${prefix} > `)} ${log}`);
}