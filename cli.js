#!/usr/bin/env node

/**
 * credz command line tool
 **/

const ctx = require('./cli/parse-args.js');
const cliError = require('./cli/cliError');
const color = require('bash-color');
const niceOutput = (out) => {
    let safeOut = out;
    if (typeof out === 'object') {
        safeOut = JSON.stringify(out,null,'\t');
    }
    return safeOut;    
};
const outputStdOut = (out) => {
    console.log(color.blue(niceOutput(out)));
};
const outputStdErr = (out) => {
    console.log(color.red(niceOutput(out)));
};
try {
    const subCommand = require('./cli/subcommands/'+ctx.subCommand+'/index.js');
    subCommand(ctx).then(outputStdOut).catch(outputStdErr);
} catch(e) {
    cliError(e.message).then(outputStdOut).catch(outputStdErr);
}
