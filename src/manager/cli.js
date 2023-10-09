import chalk from 'chalk';
import fs from 'fs';
import getFile from './index.js';
import validList from './http-validation.js';
import logger from '../logger/index.js';


const path = process.argv;

function infopath() {
  const data = {
    path_directory: path[1],
    name_directory: path[2],
  }
  logger.info("Trace", data)
  return;
}


async function printList(valid, result, identifier = '') {
  if (!identifier) {
    identifier = 'Identificador padrão'
  }
  if (valid) {
    logger.debug(chalk.black.bgGreen(identifier),
      await validList(result));
  } else {
    logger.trace(chalk.black.bgGreen(identifier), result);
  }
}

async function processText(argument) {
  const path = argument[2];
  const valid = argument[3] === '--valid';

  try {
    fs.lstatSync(path);
    const message = 'Sucess'
    logger.info(message)
    infopath()
  } catch (error) {
    if (error.code === 'ENOENT') {
      const message = 'Pasta ou diretorio nao encontrado'
      logger.warn(message);
    }
    else {
      const message = `Algo no código ou no path está incorreto`
      logger.error(message, error)
    }
    infopath()
    return;

  }

  const lstatResponse = fs.lstatSync(path);
  if (lstatResponse.isFile()) {
    const result = await getFile(argument[2]);
    printList(valid, result);
  } else if (lstatResponse.isDirectory()) {
    const files = await fs.promises.readdir(path)
    files.forEach(async (fileName) => {
      const list = await getFile(`${path}/${fileName}`)
      printList(valid, list, fileName)
    })
  }
}



processText(path);

