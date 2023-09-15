// import fs from 'fs';
// //import chalk from 'chalk';

// //regex pegando apenas protocolo e dominio
// // https?:\/\/[^\s$.?#].[^\s\)]*
// function extraiLinks(texto){
//     const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;

//     const capturas = [...texto.matchAll(regex)];
//     const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
//     return resultados.length !== 0 ? resultados : 'nao há links no arquivo de texto' ;
// }


// // //Tratamentos de Erro
// // function trataErro(erro){
// //     //lançar erros para fora do erro ,exibidos ou tratados
// //     throw new Error(chalk.red(erro.code, 'Não há arquivo no diretorio')) 
// // }


// //async /await 
// async function pegaArquivo(caminhoDoArquivo){
//     try{
//         const encoding = 'utf-8';
//         const texto = await fs.promises.readFile(caminhoDoArquivo , encoding)
//         return extraiLinks(texto);
//     } catch (erro) {
//             if (erro.code === 'ENOENT') {
//               logger.warn();
//               return;
//             } else {
//               logger.error();
//               return;
//             }
//           }    
// }


// export default pegaArquivo;




import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];
  const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
  return resultados.length !== 0 ? resultados : 'não há links no arquivo';
}

function trataErro(erro) {
  console.log(erro);
  throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

// async/await

async function pegaArquivo(caminhoDoArquivo) {
  try {
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    return extraiLinks(texto);
  } catch (erro) {
    trataErro(erro)
  }
}

export default pegaArquivo;