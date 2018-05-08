#!/usr/bin/env node

'use strict';

const program = require('commander');
const chalk = require('chalk');

const { version } = require('./package');
const checkUpdate = require('./core/check_update');
const initEngine = require('./core/init_engine');
( async ( ) => {
    /** 
     * 检查新版本
     */
    await checkUpdate( );
    // 初始化工作流
    // await initEngine();

    
    program.version(version).description('An application for pizzas ordering')
    program.parse( process.argv );

} )( );
