function getLinks(arrLinks) {
  return arrLinks.map((obejctLinks) => Object.values(obejctLinks).join())
}

async function checkStatus(listURLs) {
  const arrStatus = await Promise
    .all(
      listURLs.map(async (url) => {
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


export default async function validList(listLinks) {

  const links = getLinks(listLinks);
  const status = await checkStatus(links);

  return listLinks.map((object, index) => ({
    ...object,
    status: status[index]
  }))

}
