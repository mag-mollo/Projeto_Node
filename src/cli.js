// import chalk from 'chalk';
// import fs from 'fs';
// import pegaArquivo from './index.js';
// import logger from './trataErro.js';
// import listaValidada from './http-validacao.js';
// import { error } from 'console';




// const caminho = process.argv;



// async function imprimeLista(valida , resultado, identificador = '') {
//   if(valida){
//     console.log(chalk.yellow('Lista validada ')),
//     chalk.black.bgGreen(identificador),
//     await listaValidada(resultado);
//   }else{
//     console.log(chalk.yellow('Lista de links'),
//     chalk.black.bgGreen(identificador),
//     resultado);
//   }
// }



// async function processaTexto(argumentos) {
//   const caminho = argumentos[2];
//   const valida = argumentos[3] === '--valida';
  


  // try {
  //   fs.lstatSync(caminho);
  //   const mensagem = 'Sucess'
  //   logger.info(mensagem)
  // } catch (erro) {
  //   //console.log(erro);
  //   if (erro.code === 'ENOENT') {
  //     const mensagem = 'Pasta ou diretorio nao encontrado'
  //     logger.error(mensagem);
  //     return;
  //   } else { 
  //     const mensagem = 'Pasta ou diretorio vazio'   //else if para validar o tipo do erro do warn
  //     logger.warn(mensagem);
  //     console.error()
  //     return
  //   } //criar else para erros nao tratados( por enquanto usar console.error)
  // }


  
//   if (fs.lstatSync(caminho).isFile()) {
//     const resultado = await pegaArquivo(argumentos[2]);
//     imprimeLista( valida, resultado);
//   } else if (fs.lstatSync(caminho).isDirectory()) {
//     const arquivos = await fs.promises.readdir(caminho)
//     //fs.readdir(caminho, (error, arquivos) => { })
//     arquivos.forEach(async (nomeDeArquivo) => {
//       const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
//       imprimeLista(valida, lista, nomeDeArquivo)
//     })
//   }
// }

// processaTexto(caminho);


import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo from './index.js';
import listaValidada from './http-validacao.js';
import logger from './trataErro.js';

const caminho = process.argv;
function infoCaminho(indice){
   console.log(caminho[indice]);
}
infoCaminho(1);

async function imprimeLista(valida, resultado, identificador = '') {
  if (valida) {
    console.log(
      chalk.yellow('LISTA VALIDADA'),
      chalk.black.bgGreen(identificador),
      await listaValidada(resultado));    
  } else {
    console.log(
      chalk.yellow('lista de links'),
      chalk.black.bgGreen(identificador),
      resultado);
  }
}


async function processaTexto(argumentos) {
  const caminho = argumentos[2];
  const valida = argumentos[3] === '--valida';

  // try {
  //   fs.lstatSync(caminho);
  //   const mensagem = 'Sucess'
  //   logger.info(mensagem)
  // } catch (erro) {
  //   //console.log(erro);
  //   if (erro.code === 'ENOENT') {
  //     const mensagem = 'Pasta ou diretorio nao encontrado'
  //     logger.error(mensagem);
  //     return;
  //   } else { 
  //     const mensagem = 'Pasta ou diretorio vazio'   //else if para validar o tipo do erro do warn
  //     logger.warn(mensagem);
  //     console.error()
  //     return
  //   } //criar else para erros nao tratados( por enquanto usar console.error)
  // }


  if (fs.lstatSync(caminho).isFile()) {
    const resultado = await pegaArquivo(argumentos[2]);
    imprimeLista(valida, resultado);
  } else if (fs.lstatSync(caminho).isDirectory()) {
    const arquivos = await fs.promises.readdir(caminho)
    arquivos.forEach(async (nomeDeArquivo) => {
      const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
      imprimeLista(valida, lista, nomeDeArquivo)
    })
  }
}

processaTexto(caminho);

export default infoCaminho;