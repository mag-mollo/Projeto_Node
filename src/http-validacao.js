function extraiLinks(arrLinks) {
  return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}

async function checaStatus(listaURLs) {
  const arrStatus = await Promise
    .all(
      listaURLs.map(async (url) => {
        try {
          const response = await fetch(url)
          return `${response.status} - ${response.statusText}`;
        } catch (erro) {
          if (erro.cause.code == 'ENOTFOUND')
            return 'link não encontrado';
        }
      })
    )
  return arrStatus;

}


export default async function listaValidada(listaDeLinks) {

  const links = extraiLinks(listaDeLinks);
  const status = await checaStatus(links);

  return listaDeLinks.map((objeto, indice) => ({
    ...objeto,
    status: status[indice]
  }))

}
