import "reflect-metadata";
const program = require('commander');
const server = require('./server');
import config from './config';
program
    .option('-p, --port <int>', '端口', 8080)
    .option('-d, --dev', '开发模式')
    .option('-b, --backend', '只运行后端');
program.parse(process.argv);

config.addConfig(program.opts());

server();