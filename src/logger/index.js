import chalk from 'chalk';
import fs from 'fs';
import config from '../config/default.json' assert { type: "json" }


const logLevels = {
  TRACE: 'TRCE',
  DEBUG: 'DEBG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERRO: 'ERRO',
};

function log(level, message, object) {
  let levelColor = level;

  switch (level) {
    case logLevels.INFO:
      levelColor = chalk.blue(level);
      break;
    case logLevels.WARN:
      levelColor = chalk.yellow(level);
      break;
    case logLevels.ERRO:
      levelColor = chalk.red(level);
      break;
    case logLevels.TRACE:
      levelColor = chalk.bold(level);
      break;
    case logLevels.DEBUG:
      levelColor = chalk.bold(level);
      break;
  }

  const limitMessage = config.logger.limitMessage;
  const restrictionMessage = config.logger.restrictionMessage;
  const messageSize = message.length;

  if (messageSize > limitMessage) {
    const restriction = limitMessage - restrictionMessage.length
    message = message.substring(0, restriction) + restrictionMessage;
  }

  let logMessage = buildLogMessage(levelColor, message)
  if (object && typeof object === 'object') {
    console.log(logMessage, object);
  } else {
    console.log(logMessage);
  }

  const shouldWrite = config.logger.shouldWriteLogs;
  if (!shouldWrite || level === logLevels.TRACE || level === logLevels.DEBUG) {
    return;
  }

  logMessage = buildLogMessage(level, message, object);
  const logFile = config.logger.logFilePath;
  fs.appendFileSync(logFile, logMessage + '\n');
}


function buildLogMessage(level, message, object = null) {
  const hour = new Date();
  const currentTime = hour.toLocaleTimeString('pt-BR');
  let logMessage = (`[${level} - ${currentTime}] ${message}`);
  if (object && typeof object === 'object') {
    object = JSON.stringify(object)
    logMessage = `${logMessage} - ${object}`
  }
  return logMessage;

}

const logger = {
  info: (message, object) => log(logLevels.INFO, message, object),
  warn: (message, object) => log(logLevels.WARN, message, object),
  error: (message, object) => log(logLevels.ERRO, message, object),
  trace: (message, object) => log(logLevels.TRACE, message, object),
  debug: (message, object) => log(logLevels.DEBUG, message, object),
};

export default logger;


