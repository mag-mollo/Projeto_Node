import fs from 'fs';
import chalk from 'chalk';
import logger from '../logger/index.js';



function filterLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capture = [...texto.matchAll(regex)];
  const result = capture.map(capture => ({ [capture[1]]: capture[2] }))
  return result.length !== 0 ? result : logger.warn('Não há links no arquivo');

}

function processError(erro) {
  console.log(erro);
  throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));

}

// async/await

async function getFile(filePath) {

  try {
    const encoding = 'utf-8';
    const text = await fs.promises.readFile(filePath, encoding)
    return filterLinks(text);
  } catch (erro) {
    processError(erro)
  }
}

export default getFile;
