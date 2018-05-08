'use strict';

const path = require('path');
const override = require('engine/override');

module.exports = async ( ) => {
    await override(
        path.resolve( __dirname, '../node_modules' ),
        path.resolve( __dirname, '../node_modules/engine/node_modules_override' ),
        false,
    )
};
