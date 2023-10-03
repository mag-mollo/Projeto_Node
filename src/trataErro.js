import chalk from 'chalk';
import fs from 'fs';

const logLevels = {
  TRACE: 'TRCE',
  DEBUG: 'DEBG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERRO: 'ERRO',
};

function log(level, mensagem, objeto) {
  const hora = new Date();
  const horario = hora.toLocaleTimeString('pt-BR');

  let corDoLevel = level;

  switch (level) {
    case logLevels.INFO:
      corDoLevel = chalk.blue(level);
      break;
    case logLevels.WARN:
      corDoLevel = chalk.yellow(level);
      break;
    case logLevels.ERRO:
      corDoLevel = chalk.red(level);
      break;
    case logLevels.TRACE:
      corDoLevel = chalk.bold(level);
      break;
    case logLevels.DEBUG:
      corDoLevel = chalk.bold(level);
      break;
  }

  const limiteMensagem = 64;
  const restricao = 61;
  const mensagemTamanho = mensagem.length;
  if (mensagemTamanho > limiteMensagem) {
    const mensagemRestrita = mensagem.substring(0, restricao) + '...';
    mensagem = mensagemRestrita;
  }

  const logMessage = (`[${corDoLevel} - ${horario}] ${mensagem}`);
  console.log(logMessage, objeto);

  if (level === logLevels.TRACE || level === logLevels.DEBUG) {
    return;
  }

  if (objeto && typeof objeto === 'object') {
    objeto = JSON.stringify(objeto)
  }

  const log = `[${logLevels[level]} - ${horario}] ${mensagem} - ${objeto} \n`;
  fs.appendFileSync('logs.txt', log);
}


const logger = {
  info: (mensagem, objeto) => log(logLevels.INFO, mensagem, objeto),
  warn: (mensagem, objeto) => log(logLevels.WARN, mensagem, objeto),
  error: (mensagem, objeto) => log(logLevels.ERRO, mensagem, objeto),
  trace: (mensagem, objeto) => log(logLevels.TRACE, mensagem, objeto),
  debug: (mensagem, objeto) => log(logLevels.DEBUG, mensagem, objeto),
};


export default logger;


