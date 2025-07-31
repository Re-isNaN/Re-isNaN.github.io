//
// FUNCAO DE ROLAGEM LATERAL CARROSSEL
function smoothScrollTo(element, target) {
  const duration = 400;
  const start = element.scrollLeft;
  const distance = target - start;
  const startTime = performance.now();

  function scroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 0.5 * (1 - Math.cos(Math.PI * progress));
    element.scrollLeft = start + distance * ease;

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  }

  requestAnimationFrame(scroll);
}

//
// PROJETOS
const categorias = [{
  categoria: 'JS Expert',
  projetos: [
    {
      titulo: 'Iterators / Generators',
      descricao: `Esse projeto explora o funcionamento de iterators em JavaScript explicando os funcionamento interno com Symbols, bem como o funcionamento por baixo dos panos de laços for, while e métodos de array.`,
      foto: `./assets/Projetos/js_expert/iterators.png`,
      url: `https://github.com/Re-isNaN/IteratorsGenerators`
    },
    {
      titulo: 'Proxy',
      descricao: `Esse projeto explora o objeto Proxy em JS com uma validação simples de propriedades e valores de um objeto em uma página html com um formulário`,
      foto: `./assets/Projetos/js_expert/proxy.png`,
      url: `https://github.com/Re-isNaN/ValidationProxyJS`
    },
    {
      titulo: 'Web Worker',
      descricao: `Web Worker é utilizado em alguns de meus projetos para processamento de tarefas pesadas em segundo plano, evitando gargalos no client-side e melhorando a experiência de usuário`,
      foto: `./assets/Projetos/js_expert/web_worker.png`,
      url: `https://github.com/Re-isNaN/SimpleChatBot?tab=readme-ov-file#-web-workers-por-que-usar-para-processamento-pesado`
    },
  ]
},
{
  categoria: 'Node',
  projetos: [
    {
      titulo: 'Performance TSP',
      descricao: `Esse projeto explora o máximo da performance com Node, resolvendo um dos maiores problemas da computação atual — Problemas NP — com paralelismo e assincronidade, além disso compara a performance obtida em diferentes cenários com análise de métricas e benchmark.`,
      foto: `./assets/Projetos/node/tsp.png`,
      url: `https://github.com/Re-isNaN/TSP`
    },
    {
      titulo: 'Comunicação entre PY e JS',
      descricao: `Esse projeto mostra que é possível utilizar-se soluções em outra linguagens e fazer comunicação com JS da mesma forma, usando o child-process do Node é capaz de executar um código em Python em segundo plano e comunicar-se com o Node.`,
      foto: `./assets/Projetos/node/communication_py_js.png`,
      url: `https://github.com/Re-isNaN/CommunicationJS2Py`
    },
    {
      titulo: 'Code Sandbox (backend)',
      descricao: `O backend do Code Sandbox é uma parte extremamente importante para a segurança do projeto, é responsável por executar o código fornecido pelo usuário em um ambiente isolado — com child process — e retornar o resultado do código fornecido.`,
      foto: `./assets/Projetos/node/code_sandbox.png`,
      url: `https://github.com/Re-isNaN/CodeSandbox?tab=readme-ov-file#backend`
    },
    {
      titulo: 'Worker Thread',
      descricao: `Essa parte do projeto de Perfomance TSP mostra o uso de worker threads para paralelismo no node, como alternativa menos custosa e mais simples aos child_process.`,
      foto: `./assets/Projetos/node/worker_thread.png`,
      url: `https://github.com/Re-isNaN/TSP?tab=readme-ov-file#-worker_threads`
    },
    {
      titulo: 'Child Process',
      descricao: `Essa parte do projeto de Perfomance TSP analisa o uso de child_process para paralelismo no node, criando ambientes de processamento isolado do processo real. Além disso, child_process são utilizados em outros projetos, como 'Code Sandbox' e 'Communication PY'`,
      foto: `./assets/Projetos/node/child_process.png`,
      url: `https://github.com/Re-isNaN/TSP?tab=readme-ov-file#-child_process`
    },
  ]
},
{
  categoria: 'React',
  projetos: [
    {
      titulo: 'Simulador de Investimento',
      descricao: `O Simulador de Investimento é uma página simples em React para análise de rendimento de determinado investimento feito com a lib MUI para UI e ApexCharts para gráfico, com design moderno, além de utilizar-se de useRef e Web Worker para melhor processamento.`,
      foto: `./assets/Projetos/react/simulador_investimento.png`,
      url: `https://github.com/Re-isNaN/SimuladorInvestimento`
    },
    {
      titulo: 'Code Sandbox (frontend)',
      descricao: `O frontend do Code Sandbox é responsável pela parte visual e interatividade com o usuário, além disso usa a lib "@monaco-editor responsável pela estilização do código, semelhante ao VS Code.`,
      foto: `./assets/Projetos/react/code_sandbox.png`,
      url: `https://github.com/Re-isNaN/CodeSandbox?tab=readme-ov-file#-frontend--tecnologias-e-estrutura`
    },
  ]
},
{
  categoria: 'Inteligência Artificial',
  projetos: [
    {
      titulo: 'Simple Chatbot',
      descricao: `Simple Chat bot é um exemplo simplificado de como funciona um modelo de embedding em IA, responsável pela transformação semântica das palavras em grandezas quantificáveis para classificação. Nesse caso, utiliza @xenova/transformers para responder 3 perguntas simples em diferentes variações.`,
      foto: `./assets/Projetos/ia/simple_chatbot.png`,
      url: `https://github.com/Re-isNaN/SimpleChatBot`
    },
    {
      titulo: 'Qualificação de Leads',
      descricao: `Essa parte do projeto de Comunicação entre PY e JS, foi desenvolvida em Python e pretende qualificar a um lead (possível cliente) para prospectar (fechar negócio), com base na evolução das interações com o mesmo. Utilizando Machine Learning analisa os status de 4 interações e gera a probabilidade de prospecto.`,
      foto: `./assets/Projetos/ia/qualificacao_leads.png`,
      url: `https://github.com/Re-isNaN/CommunicationJS2Py?tab=readme-ov-file#-machine-learning-aprendizado-de-m%C3%A1quina`
    },
  ]
},
{
  categoria: 'Projetos Comerciais',
  projetos: [
    {
      titulo: 'Microsserviço Login',
      descricao: `O Microsserviço de Login foi uma solução desenvolvida para a empresa Speed System Informática, para facilitar a autenticação entre diversos produtos, centralizando as regras de autenticação dos sistemas e evitando o reutilização de código desnecessária.`,
      foto: `./assets/Projetos/comerciais/microsservico_login.png`,
      url: `https://www.ssi.net.br/`
    },
    {
      titulo: 'Sistema para gerenciamento de vendas de indústria',
      descricao: `Esse sistema foi desenvolvido para a empresa Speed System Informática para o gerenciamento de pedidos de vendas de indústrias, focado para o controle do setor de vendas — tanto para gestor como vendedor — com gerenciamento de clientes, CRM, pedidos e acompanhamento básico de linha de produção.`,
      foto: `./assets/Projetos/comerciais/sistema_industria.png`,
      url: `https://www.ssi.net.br/`
    },
    {
      titulo: 'Sistema ERP de consulta online para gestor',
      descricao: `O Sistema Ardun (parte Online) é um Sistema ERP para a Speed System Informática para que gestores possam acompanhar o andamento de seus comércios de forma simplificada e interface web responsiva, acessível de qualquer localidade.`,
      foto: `./assets/Projetos/comerciais/sistema_erp.png`,
      url: `https://www.ssi.net.br/`
    },
    {
      titulo: 'Sistema ERP de cadastro para vendedor',
      descricao: `O Sistema Ardun Pedidos, desenvolvido para a Speed System Informática, é um sistema simples para gerenciamento de vendas e clientes para vendedores, semelhante ao de indústrias, mas focado em comércios.`,
      foto: `./assets/Projetos/comerciais/sistema_erp_vendedor.png`,
      url: `https://www.ssi.net.br/`
    },
    {
      titulo: 'Sistema inteligente para food service informal',
      descricao: `O Softos Pedidos, desenvolvido para a Speed Systema Informática, é um sistema simples para gerenciamento de pedidos de lanchonetes, bares, restaurantes e pequenos comércios de foo service em geral.`,
      foto: `./assets/Projetos/comerciais/sistema_pedidos.png`,
      url: `https://www.ssi.net.br/`
    },
  ]
},
]

const elContainerProjetos = document.getElementById('container-projetos')

const elProjeto = (pro) => {
    // container do projeto
    const elContainerProjeto = document.createElement('div')
    elContainerProjeto.className = 'projeto'

    // imagem do projeto
    const elImgProjeto = document.createElement('img')
    elImgProjeto.className = 'img-projeto'
    elImgProjeto.src = pro.foto
    elImgProjeto.alt = pro.titulo
    elImgProjeto.addEventListener('click', () => {
      window.open(pro.url)
    })

    // container do texto (titulo e descricao)
    const elContainerTextProjeto = document.createElement('div')
    elContainerTextProjeto.className = 'text-projeto'

    // titulo do projeto
    const elTituloProjeto = document.createElement('h3')
    elTituloProjeto.className = 'titulo'
    elTituloProjeto.textContent = pro.titulo

    // descricao do projeto
    const elTextoProjeto = document.createElement('p')
    elTextoProjeto.className = 'texto'
    elTextoProjeto.textContent = pro.descricao

    // Acrescenta os titulo e a descricao no container de texto
    elContainerTextProjeto.appendChild(elTituloProjeto)
    elContainerTextProjeto.appendChild(elTextoProjeto)

    // Acrescenta a imagem e o container texto dentro do container do projeto
    elContainerProjeto.appendChild(elImgProjeto)
    elContainerProjeto.appendChild(elContainerTextProjeto)

    return elContainerProjeto
}

const elCategoria = (cat) => {
  // Secao principal da categoria
  const sectionPrincipal = document.createElement(`section`)
  sectionPrincipal.className = `section-projetos ${cat.categoria}`

  // Titulo da categoria
  const titulo = document.createElement(`h2`)
  titulo.textContent = cat.categoria

  // Div do carrossel
  const carrossel = document.createElement('div')
  carrossel.className = 'carrossel-projetos'

  // Botao de voltar
  const btnVoltar = document.createElement('button')
  btnVoltar.className = 'btn-voltar'
  btnVoltar.textContent = '⮜'
  
  btnVoltar?.addEventListener('click', () => {
    const scrollAmount = carrossel.offsetWidth;
    smoothScrollTo(carrossel, carrossel.scrollLeft - scrollAmount);
  });

  // Botao de prosseguir
  const btnProsseguir = document.createElement('button')
  btnProsseguir.className = 'btn-prosseguir'
  btnProsseguir.textContent = '⮞'

  btnProsseguir?.addEventListener('click', () => {
    const scrollAmount = carrossel.offsetWidth;
    smoothScrollTo(carrossel, carrossel.scrollLeft + scrollAmount);
  });

  if(cat.projetos.length > 2){
    // Acrescenta os botoes de voltar e prosseguir ao container do carrossel
    carrossel.appendChild(btnVoltar)
    carrossel.appendChild(btnProsseguir)
  }

  // Acrescenta o titulo e o container do carrossel
  sectionPrincipal.appendChild(titulo)
  sectionPrincipal.appendChild(carrossel)

  for(const pro of cat.projetos){
    carrossel.appendChild(elProjeto(pro))
  }

  return sectionPrincipal
}

for(const cat of categorias){
  elContainerProjetos.appendChild(elCategoria(cat))
}