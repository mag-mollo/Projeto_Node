import chalk from 'chalk';
import fs from 'fs';

const LIMIT_MESSAGE = 64;
const RESTRICTION_MESSAGE = '...'

const logLevels = {
  TRACE: 'TRCE',
  DEBUG: 'DEBG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERRO: 'ERRO',
};

function log(level, message, object) {
  const hour = new Date();
  const currentTime = hour.toLocaleTimeString('pt-BR');

  let levelColor = level;

  switch (level) {
    case logLevels.INFO:
      levelColor
   = chalk.blue(level);
      break;
    case logLevels.WARN:
      levelColor
   = chalk.yellow(level);
      break;
    case logLevels.ERRO:
      levelColor
   = chalk.red(level);
      break;
    case logLevels.TRACE:
      levelColor
   = chalk.bold(level);
      break;
    case logLevels.DEBUG:
      levelColor
   = chalk.bold(level);
      break;
  }

  
  const messageSize = message.length;
  if (messageSize > LIMIT_MESSAGE) {
    const restriction =  LIMIT_MESSAGE - RESTRICTION_MESSAGE.length
    message = message.substring(0, restriction) + RESTRICTION_MESSAGE;
  }

  const logMessage = (`[${levelColor} - ${currentTime}] ${message}`);
  console.log(logMessage, object);

  if (level === logLevels.TRACE || level === logLevels.DEBUG) {
    return;
  }

  if (object && typeof object === 'object') {
    object = JSON.stringify(object)
  }

  const log = `[${logLevels[level]} - ${currentTime}] ${message} - ${object} \n`;
  fs.appendFileSync('logs.txt', log);
}


const logger = {
  info: (message, object) => log(logLevels.INFO, message, object),
  warn: (message, object) => log(logLevels.WARN, message, object),
  error: (message, object) => log(logLevels.ERRO, message, object),
  trace: (message, object) => log(logLevels.TRACE, message, object),
  debug: (message, object) => log(logLevels.DEBUG, message, object),
};


export default logger;


