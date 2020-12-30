# Descrição do Desafio Modulo 1 - Javascript

Bootcamp FrontEnd - IGTI 2020

## Observação

Apesar de o curso fornecer o codigo fonte original aos alunos, procurei deixar o meu codigo, exibindo assim erros e acertos, coisas a melhorar, acho que transparência é um ponto importantíssimo para o profissional.

## Ambiente de Desenvolvimento

### Backend

Para que o backend funcione, execute os seguintes comandos (sem aspas):

1. "npm install", para instalar as dependências
2. "npm start", para "subir" o backend

### Frontend

1. Abrir o arquivo index.html no browser.

## Resultado final no Firebase

Para ver o projeto em execução, foi utilizado o host de testes do firebase, basta clicar no link abaixo:

## Objetivos do Desafio

Exercitar os seguintes conceitos trabalhados no Módulo:

- Declarar elementos HTML como títulos, parágrafos, inputs, divs, spans etc.
- Estilizar o app com CSS.
- Mapear elementos do DOM para serem manipulados com JavaScript.
- Realizar diversos cálculos com array methods como map, filter, some, forEach e
- includes.
- Realizar requisições HTTP com o comando fetch e utilização de promises ou
- async/await.
- Sair da zona de conforto e pensar fora da caixa.

## Enunciado

Criar uma aplicação para pesquisar desenvolvedores (dev's) com opções de filtragem.

## Atividades

Os alunos deverão desempenhar as seguintes atividades:

1. "Subir" o backend, que será fornecido pelo professor e contém um arquivo JSON
   com 99 dev's já definidos.
2. No frontend, carregar os dados dos dev's em memória através de acesso ao backend
   com o comando fetch.
3. Permitir a filtragem de dev's a partir de trechos do nome, através de um input de
   texto com interação do usuário, considerando o texto em minúsculo sem espaços
   em branco e desconsiderando acentos. Assim, o termo de busca "dre", deve trazer
   os dev's Andréia e André, por exemplo.
4. Permitir a filtragem de dev's através das linguagens de programação. Há dev's
   cadastrados que conhecem Java, JavaScript e/ou Python. Essa filtragem deve
   considerar os operadores lógicos E ou OU. Assim, se eu pesquiso por dev's que
   conhecem Java E Python, somente os dev's que conhecem ambas as linguagens
   devem ser retornados. Se eu pesquiso com OU, os dev's que conhecem somente
   uma das linguagens também devem ser retornados.
5. Para representar as linguagens de programação dos dev's, foram utilizados ícones,
   que também serão fornecidos pelo professor, sendo:
   a. Java.
   b. JavaScript.
   c. Python .
6. As imagens abaixo ilustram exemplos de interface da aplicação em algumas
   situações possíveis. Foi utilizado o Materialize como ferramenta de CSS.

![alt text](https://github.com/FabianaTavares/Modulo1-Javascript-Desafio/blob/master/frontend/img/img_desafio_sugestao.PNG)

Perceba também a variação da combinação de linguagens de programação, pois
há dev's que conhecem somente JavaScript e dev's que conhecem JavaScript E Python,
por exemplo. Isso é válido quando OU está selecionado.

Busca com o texto "or", que filtrou Nara Porto, Aléxio Rezende (desconsiderando espaços em branco) e Loreta Nascimento.

## Dicas e Sugestões

1. Lembre-se sempre de que há várias formas de se implementar um problema.
2. Após executar a requisição à API, faça uma transformação de dados com map e crie
   um campo adicional para usar como busca. Esse campo deve converter o nome
   para minúsculas e retirar os espaços em branco. Use esse campo adicional para
   localizar os dev's quando o usuário digitar no input.
3. Dê prioridade à funcionalidade e só depois dedique-se à interface.
4. A função split pode converter uma string em array. A função join pode converter
   um array em string.
5. Utilize o evento input para filtrar os dados a partir da digitação do usuário.
6. Na minha opinião, a lógica mais complexa deste app é a filtragem de dev's utilizando
   OR. Para fazer isso, pense em conjuntos. Utilizando OR, pelo menos uma das
   linguagens marcadas (array.some) deve estar presente no conjunto de todas as
   linguagens (array.includes).
7. Tente ao máximo implementar o desafio sozinho, com o apoio do fórum. Em último
   caso, deixo um projeto bastante semelhante ao desafio neste link, que pode servir
   de apoio e sanar algumas dúvidas. Atenção: tenha certeza de que você vai
   aprender muito mais se implementar este desafio sozinho.
