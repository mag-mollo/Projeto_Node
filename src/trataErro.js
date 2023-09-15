import chalk from 'chalk';
import infoCaminho from './cli';

const logLevels = {
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERRO',
};

function log(level, mensagem, dados) {
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
    case logLevels.ERROR:
      corDoLevel = chalk.red(level);
      break;
  }

  // Imprime o level - hora - mensagem - dados
  console.log(`[${corDoLevel} - ${horario}] ${mensagem}`);
}


const dados = {
  caminho_diretorio: infoCaminho(1),
  nome_arquivo: infoCaminho(2),
}
console.log(dados.caminho_diretorio)



// const logger = {
//    info: (mensagem) => log(logLevels.INFO, mensagem, dados), 
//    warn: (mensagem) => log(logLevels.WARN, mensagem, dados),
//    error: (mensagem) => log(logLevels.ERROR, mensagem, dados),
// };

export default logger;


