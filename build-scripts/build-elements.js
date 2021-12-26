const fs = require('fs-extra');
const concat = require('concat');
const glob = require('glob');
const chalk = require('chalk');
const dlcFormCommon = require('./_common');

const _log = dlcFormCommon.dlcLog;

(async () => {
    glob('./dist/elements/*.js', (err, files) => {
        if (err) {
            _log(err, 'error');
        }

        build(files);
    });

})();

/**
 * 
 * @param {*} files
 */
const build = async (files) => {
    const outputDir = './dist/elements';
    await fs.ensureDir(outputDir);
    await concat(files, `${outputDir}/elements.js`);

    await fs.copyFile('./projects/elements/package.json', './dist/elements/package.json');

    _log('');
    _log(chalk.greenBright('√ Elements built!'));
    _log('');
};