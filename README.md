## 💡SOBRE O PROJETO
**ENTENDENDO O PROBLEMA:**
Foi usado como  contexto o blog de programação do site da Alura. Quase todo dia, novos artigos são publicados lá e todos os  textos são escritos em Markdown.

Todos os artigos do blog da Alura contem links clicáveis. Mas, com o passar do tempo, pode ser que um desses links saia do ar.

**IDEIA DE SOLUÇÃO:**
 Para gerenciar isso numa plataforma com milhares de arquivos com links, como é o nesse caso.Foi decidido automatizar essa tarefa,ou seja , criar uma biblioteca em node  que resolva este problema específico, capaz de acessar arquivos de texto em Markdown, capturar os links espalhados pelo texto e testá-los.
Fazendo isso, descobriremos se os links ainda estão no ar.

## 🛠 TECNOLOGIA UTILIZADA

O projeto foi desenvolvido utilizando: 

- [Node.js](https://nodejs.org/en/)



## ⬇️ COMO BAIXAR  E RODAR O PROJETO 

Clonando o repositório do projeto:

1- Copiando o URL do repositório remoto pelo [HTTP](https://github.com/mag-mollo/Projeto_Node.git) 

2- Utilize a janela do terminal Git Bash e acesso alguma pasta do seu desktop, onde será anexada a cópia do projeto:
```bash
    $ cd Desktop
    $ ls
    $ git clone https://github.com/mag-mollo/Projeto_Node.git

```
3- Abra o Terminal integrado com o VSCode e mude para o terminal Git Bash , insira o comando que baixa o conteudo de um repositorio remoto: 
```bash
    $ git pull
```
4- Como o projeto se baseia em pacotes utilizados para adiministrar as bibliotecas, então precisamos do [NPM](https://www.npmjs.com//)(Node Package Manager) , para gerenciar todos os pacotes no back-end da aplicação.
Caso precise instalar a dependência, utilize o seguinte comando no terminal do VSCode:
```bash
   npm install
```
5- No projeto utilizamos o biblioteca do Chalk , que faz a estilização de textos para a saida no terminal. 
Caso precise instalar a lib, utilize o seguinte comando no terminal do VSCode:
```bash
   npm install chalk
```
Para vizualizar apenas o retorno dos links do texto que estão no arquivo [texto.md](https://github.com/mag-mollo/Projeto_Node/blob/main/files/texto.md). No terminal precisamos passar o caminho exato do arquivo:
```bash
   node src/manager/cli.js ./examples 
```
Por fim , para visulizar o retorno das validações dos links do texto que estão no arquivo [texto.md](https://github.com/mag-mollo/Projeto_Node/blob/main/files/texto.md). No terminal precisamos passar o script personalizado para esse projeto:
```bash
   npm rum cli:valid 
```
