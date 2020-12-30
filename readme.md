# Descrição do Desafio Modulo 1 - Javascript

Bootcamp FrontEnd - IGTI

## Objetivos

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

![alt text](https://github.com/FabianaTavares/Modulo1-Javascript-Desafio/master/frontend/img/img_desafio_sugestao.PNG)
