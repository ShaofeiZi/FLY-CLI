'use strict';

const r2 = require('r2');
const chalk = require('chalk');
const boxen = require('boxen');
const compareVersion = require('compare-versions');

const { version: nowVersion } = require('../package');

module.exports = async ( ) => {
    try {
        // const { version } = JSON.parse( await r2( '' ).text );
const version = '3.2.1'
        // if ( compareVersion( version, nowVersion ) > 0 ) {
            console.log(
                boxen(
                    chalk.yellow( `请升级FLY-CLI ${ nowVersion } → ${ chalk.bold.yellow.underline( version ) }\n运行 ${ chalk.bold.green( 'npm i -g fly-cli' ) } 来升级` ),
                    {
                        padding: { left: 1, right: 1 },
                        borderStyle: 'double',
                        borderColor: 'yellow',
                    }
                )
            )
        // }
    } catch ( e ) {
        console.error( '[CHECK UPDATE ERROR]', e );
    }
};
