/**
 * Objeto de estado global da aplicação,
 * que será manipulado pelo usuário através dos inputs
 */
const globalState = {
  allDevs: [],
  filteredDevs: [],
  loadingData: true,
  currentFilter: "",

  radioAnd: false,
  radioOr: true,

  checkboxes: [{
      filter: "java",
      description: "Java",
      checked: true
    },
    {
      filter: "javascript",
      description: "JavaScript",
      checked: true
    },
    {
      filter: "python",
      description: "Python",
      checked: true
    }
  ]
};

/**
 * Variáveis globais que mapeiam elementos HTML
 */
const globaldivDevs = document.querySelector("#divDevs");
const globalInputName = document.querySelector("#inputName");
const globalDivCheckboxes = document.querySelector("#checkboxes");
const globalRadioAnd = document.querySelector("#radioAnd");
const globalRadioOr = document.querySelector("#radioOr");

/**
 * Tudo começa aqui. A invocação desta função é feita
 * na última linha de código deste arquivo
 */
async function start() {
  /**
   * Adicionando eventos aos inputs, checkboxes e radio buttons
   */
  globalInputName.addEventListener("input", handleInputChange);

  globalRadioAnd.addEventListener("input", handleRadioClick);
  globalRadioOr.addEventListener("input", handleRadioClick);

  /**
   * Renderizando os checkboxes de forma dinâmica
   */
  renderCheckboxes();

  /**
   * Obtendo todos os países do backend
   * de forma assíncrona
   */
  await fetchAll();

  /**
   * Iniciamos o app já filtrando os países conforme
   * valor inicial dos inputs
   */
  filterDevs();
}

/**
 * Função para montar os checkboxes
 * dinamicamente a partir de globalState
 */
function renderCheckboxes() {
  const {
    checkboxes
  } = globalState;

  const inputCheckboxes = checkboxes.map((checkbox) => {
    const {
      filter: id,
      description,
      checked
    } = checkbox;

    // prettier-ignore
    return (
      `<label class="option">
        <input
          id="${id}"
          type="checkbox"
          checked="${checked}"
        />
        <span>${description}</span>
      </label>`
    );
  });

  globalDivCheckboxes.innerHTML = inputCheckboxes.join("");

  /**
   * Adicionando eventos
   */
  checkboxes.forEach((checkbox) => {
    const {
      filter: id
    } = checkbox;
    const element = document.querySelector(`#${id}`);
    element.addEventListener("input", handleCheckboxClick);
  });
}

/**
 * Esta função é executada somente uma vez
 * e traz todos os países do backend. Além disso,
 * faz uma transformação nos dados, incluindo um
 * campo para facilitar a pesquisa (removendo acentos,
 * espaços em branco e tornando todo o texto minúsculo) e
 * também um array contendo somente o nome das línguas
 * faladas em determinado país
 */
async function fetchAll() {
  const url =
    //"https://my-json-server.typicode.com/rrgomide/json-Devs/Devs";
    //"./../backend/devs.json"
    "http://localhost:3001/devs"

  const resource = await fetch(url);
  const json = await resource.json();

  const jsonWithImprovedSearch = json.map((item) => {
    const {
      name,
      programmingLanguages
    } = item;
    const lowerCaseName = name.toLowerCase();
    return {
      ...item,
      searchName: removeAccentMarksFrom(lowerCaseName)
        .split("")
        .filter((char) => char !== " ")
        .join(""),
      searchDevs: getOnlyDevsFrom(programmingLanguages)
    };
  });

  /**
   * Atribuindo valores aos campos
   * através de cópia
   */
  globalState.allDevs = [...jsonWithImprovedSearch];
  globalState.filteredDevs = [...jsonWithImprovedSearch];

  globalState.loadingData = false;
}

function handleInputChange({
  target
}) {
  /**
   * Atribuindo valor do input ao
   * globalState
   */
  globalState.currentFilter = target.value.toLocaleLowerCase().trim();

  filterDevs();
}

/**
 * Lidando com os cliques nos checkboxes
 * de forma dinâmica
 */
function handleCheckboxClick({
  target
}) {
  const {
    id,
    checked
  } = target;
  const {
    checkboxes
  } = globalState;

  /**
   * Refletindo o estado dos checkboxes
   * em globalState
   */
  const checkboxToChange = checkboxes.find(
    (checkbox) => checkbox.filter === id
  );
  checkboxToChange.checked = checked;

  filterDevs();
}

/**
 * Aqui garantimos que uma e somente uma das opções
 * de radio de state permaneça como true. Em seguida,
 * filtramos os países
 */
function handleRadioClick({
  target
}) {
  const radioId = target.id;

  globalState.radioAnd = radioId === "radioAnd";
  globalState.radioOr = radioId === "radioOr";

  filterDevs();
}

/**
 * Função para varrer o array de idiomas
 * e trazer somente o nome em minúsculas, de forma ordenada
 */
function getOnlyDevsFrom(searchDevs) {
  return searchDevs.map((searchDevs) => searchDevs.language.toLowerCase()).sort();
}

/**
 * Função para remover acentos e caracteres especiais
 * de determinado texto
 */
function removeAccentMarksFrom(text) {
  const WITH_ACCENT_MARKS = "áãâäàéèêëíìîïóôõöòúùûüñ".split("");
  const WITHOUT_ACCENT_MARKS = "aaaaaeeeeiiiiooooouuuun".split("");

  const newText = text
    .toLocaleLowerCase()
    .split("")
    .map((char) => {
      /**
       * Se indexOf retorna -1, indica
       * que o elemento não foi encontrado
       * no array. Caso contrário, indexOf
       * retorna a posição de determinado
       * caractere no array de busca
       */
      const index = WITH_ACCENT_MARKS.indexOf(char);

      /**
       * Caso o caractere acentuado tenha sido
       * encontrado, substituímos pelo equivalente
       * do array b
       */
      if (index > -1) {
        return WITHOUT_ACCENT_MARKS[index];
      }

      return char;
    })
    .join("");

  return newText;
}

/**
 * Principal função deste app.
 *
 * Filtra os países conforme definições
 * do usuário e invoca a renderização
 * da tela
 */
function filterDevs() {
  const {
    allDevs,
    radioOr,
    currentFilter,
    checkboxes
  } = globalState;

  /**
   * Obtendo array de idiomas a partir dos
   * checkboxes que estão marcados, retornando somente o id
   * da linguagem para facilitar a busca.
   */
  const filterDevs = checkboxes
    .filter(({
      checked
    }) => checked)
    .map(({
      filter
    }) => filter)
    .sort();

  /**
   * Obtendo os países com base nos idiomas
   * e se o usuário escolheu "OU", o que abrange mais opções do
   * que "E" (mais limitado)
   */
  let filteredDevs = allDevs.filter(({
    searchDevs
  }) => {
    /**
     * Com "OU", verificamos se pelo menos um dos idiomas
     * escolhidos pelo usuário pertence a determinado país.
     * Ex: Se o usuário escolheu somente Inglês, vai retornar paíse
     * que fala tanto inglês quanto francês, por exemplo
     *
     * Com "E", verificamos a comparação exata do(s) idioma(s)
     * Ex: Se o usuário escolheu somente Francês, vai retornar país
     * que fala somente o francês
     */
    return radioOr ?
      filterDevs.some((item) => searchDevs.includes(item)) :
      filterDevs.join("") === searchDevs.join("");
  });

  /**
   * Após o primeiro filtro, filtramos mais uma vez
   * conforme o texto do input
   */
  if (currentFilter) {
    filteredDevs = filteredDevs.filter(({
        searchName
      }) =>
      searchName.includes(currentFilter)
    );
  }

  /**
   * Definimos os países filtrados no estado do app
   * e invocamos a função de renderização em seguida.
   */
  globalState.filteredDevs = filteredDevs;
  renderDevs();
}

/**
 * Função de renderização dos países em tela
 */
function renderDevs() {
  const {
    filteredDevs
  } = globalState;

  const DevsToShow = filteredDevs
    .map((dev) => {
      return renderDev(dev);
    })
    .join("");


  const renderedHTML = `
     <div>
       <h2>${filteredDevs.length} devs encontrado(s)</h2>
       <div class='row'>
         ${DevsToShow}
       </div>
     </div>
  `;

  globaldivDevs.innerHTML = renderedHTML;
}

/**
 * Isolamos a função para renderizar um país,
 * utilizando algumas classes do Materialize
 * e o próprio CSS do app
 */
function renderDev(Dev) {
  const {
    name,
    picture,
    programmingLanguages
  } = Dev;
  return `
    <div class='col s12 m6 l4'>
      <div class='devs-card'>
        <img class='picture' src="${picture}" alt="${name}"/>
        <div class='data'>
          <span>${name}</span>
          <span class='language'>
            <strong>${renderLanguages(programmingLanguages)}</strong>
          </span>
        </div>
      </div>
    </div>
  `;
}

/**
 * Função para renderizar os idiomas.
 */
function renderLanguages(languages) {
  const {
    checkboxes
  } = globalState;

  const DevsToShow = languages
    .map((language) => {
      checkboxes.find((item) => {
        item.description === language.language
      });
      const renderedHTML = `
          <img src="./img/${language.language.toLowerCase()}.png"
          class = "imagemLanguages" >
        `;
      globaldivDevs.innerHTML = renderedHTML;
      return globaldivDevs.innerHTML;
    })
    .join(" ");

  return DevsToShow;
}


/**
 * Inicializando o app
 */
start();