#!/usr/bin/env node

'use strict';

const program = require('commander');
const chalk = require('chalk');
const checkUpdate = require('./core/check_update');

( async ( ) => {
    await checkUpdate( );
} )( );
