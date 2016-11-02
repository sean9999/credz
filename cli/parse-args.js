/**
 * parse command line arguments into objects for easy consumption by javascript
 **/


const args = process.argv.slice(1);
const mainCommand = args.shift().split('/').pop();
const subCommand = args.shift();
const flagPattern = /^\-/;
const flags = [];
const options = {};
const operands = [];
args.forEach((arg) => {
    if (flagPattern.test(arg)) {
        flags.push(arg);
    } else {
        operands.push(arg);
    }
});
const dashToCamel = (dstr) => {
    let cstr = dstr.replace(/-(\w)/g,(wholeMatch,letter) => {
        return letter.toUpperCase();
    });
    return cstr;
};
const inferType = (instring) => {
    let r = instring;
    if (instring.length) {
        if ( /^\d+(\.\d+)?$/.test(instring) ) {
            r = Number.parseFloat(instring);
        }
    } else {
        return null;
    }
    return r;
}; 
flags.forEach((flag) => {
    if (/^\-{1,2}\w+$/.test(flag)) {
        options[ dashToCamel(flag.replace(/^\-+/,'')) ] = true;
    } else {
        if ( /^\-\-no\-/.test(flag) ) {
            options[ dashToCamel(flag.replace(/^\-\-no\-/,'')) ] = false;
        } else {
            if ( flag.indexOf('=') ) {
                let [k,v] = flag.split('=');
                options[ dashToCamel(k.replace(/^\-*/,'')) ] = inferType(v);
            }
        }
    }
});

module.exports = {mainCommand,subCommand,options,operands};
