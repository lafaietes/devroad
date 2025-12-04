export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "O que te dá mais satisfação?",
    options: [
      { text: "Ver algo bonito e interativo na tela", score: { web: 1, frontend: 2, mobile: 1 } },
      { text: "Saber que o sistema funciona rápido e seguro por trás", score: { web: 1, backend: 2, devops: 1 } },
      { text: "Criar dispositivos inteligentes que interagem com o mundo", score: { iot: 3 } },
      { text: "Criar economias digitais e sistemas descentralizados", score: { blockchain: 3 } }
    ]
  },
  {
    id: 2,
    question: "Qual tarefa parece mais interessante?",
    options: [
      { text: "Ajustar cores, animações e layouts", score: { frontend: 3, mobile: 1 } },
      { text: "Soldar componentes e programar chips", score: { iot: 3 } },
      { text: "Configurar servidores na nuvem", score: { devops: 3, backend: 1 } },
      { text: "Treinar um computador para reconhecer imagens", score: { ai: 3, data: 1 } }
    ]
  },
  {
    id: 3,
    question: "Onde você prefere que seu código rode?",
    options: [
      { text: "No navegador de internet", score: { web: 1, frontend: 1, fullstack: 1 } },
      { text: "No celular (na mão das pessoas)", score: { mobile: 3 } },
      { text: "Em servidores potentes ou na nuvem", score: { backend: 1, devops: 2, cloud: 2 } },
      { text: "Em uma rede mundial imutável", score: { blockchain: 3 } }
    ]
  },
  {
    id: 4,
    question: "Como você lida com problemas?",
    options: [
      { text: "Gosto de ver o problema visualmente para resolver", score: { frontend: 2, mobile: 1 } },
      { text: "Gosto de lógica abstrata e estruturas de dados", score: { backend: 2, data: 1 } },
      { text: "Gosto de entender a física/eletrônica por trás", score: { iot: 3 } },
      { text: "Gosto de hackear/quebrar para entender a falha", score: { cyber: 3 } }
    ]
  },
  {
    id: 5,
    question: "Nível de interesse em Design/Visual?",
    options: [
      { text: "Amo, quero que tudo seja lindo", score: { frontend: 3, mobile: 2, games: 1 } },
      { text: "Gosto, mas prefiro focar na funcionalidade", score: { fullstack: 3, mobile: 1 } },
      { text: "Indiferente, me dê um terminal preto", score: { backend: 2, devops: 3, cyber: 2, data: 1 } },
      { text: "Prefiro gráficos e estatísticas", score: { data: 3 } }
    ]
  }
];

export const QUIZ_RESULT_MAPPING = {
  frontend: { main: 'web', sub: 'frontend' },
  backend: { main: 'web', sub: 'backend' },
  fullstack: { main: 'web', sub: 'fullstack' },
  web: { main: 'web', sub: 'fullstack' },

  reactNative: { main: 'mobile', sub: 'reactNative' },
  mobile: { main: 'mobile', sub: 'reactNative' },

  datascience: { main: 'data', sub: 'datascience' },
  data: { main: 'data', sub: 'datascience' },
  ai: { main: 'data', sub: 'ai' },

  devops: { main: 'devops', sub: 'general' },
  cloud: { main: 'devops', sub: 'clouds' },

  cyber: { main: 'cyber', sub: 'general' },
  games: { main: 'games', sub: 'general' },
  iot: { main: 'iot', sub: 'embedded'},
  blockchain: { main: 'blockchain', sub: 'dapps'}
};
