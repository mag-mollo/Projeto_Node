import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo from './index.js';
import listaValidada from './http-validacao.js';
import logger from './trataErro.js';
import { log } from 'console';



const caminho = process.argv;

function infoCaminho() {
  const dados = {
    caminho_diretorio: caminho[1],
    nome_diretorio: caminho[2],
  }
  logger.info("Trace", dados)
  return;
  //logger.info(JSON.stringify(dados));

}


async function imprimeLista(valida, resultado, identificador = '') {
  if(!identificador){
    identificador = 'Identificador padrão'
  }
  if (valida ) {
    logger.debug(chalk.black.bgGreen(identificador),
     await listaValidada(resultado));
  } else {
    logger.trace( chalk.black.bgGreen(identificador),resultado);
  }
}

async function processaTexto(argumentos) {
  const caminho = argumentos[2];
  const valida = argumentos[3] === '--valida';

  try {
    fs.lstatSync(caminho);
    const mensagem = 'Sucess'
    logger.info(mensagem)
    infoCaminho()
  } catch (erro) {

    if (erro.code === 'ENOENT') {
      const mensagem = 'Pasta ou diretorio nao encontrado'
      logger.warn(mensagem);
    }
    else {
      const mensagem = `Algo no código ou no caminho está incorreto`
      logger.error(mensagem, erro)
    }
    infoCaminho()
    return;

  }

  const lstatResponse = fs.lstatSync(caminho);
  if (lstatResponse.isFile()) {
    const resultado = await pegaArquivo(argumentos[2]);
    imprimeLista(valida, resultado);
  } else if (lstatResponse.isDirectory()) {
    const arquivos = await fs.promises.readdir(caminho)
    arquivos.forEach(async (nomeDeArquivo) => {
      const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
      imprimeLista(valida, lista, nomeDeArquivo)
    })
  }
}



processaTexto(caminho);

