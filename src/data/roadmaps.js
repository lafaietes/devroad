
export const ROADMAPS = {
  web: {
    category: "main",
    title: "Desenvolvimento Web",
    iconName: "Code2",
    description: "Crie sites, sistemas e aplicações web modernas.",
    color: "from-blue-600 to-cyan-400",
    defaultTab: "fullstack",
    setup: {
      machine: {
        title: "Computador (CPU/RAM)",
        min: "i3/Ryzen 3 + 8GB RAM.",
        rec: "i5/Ryzen 5 + 16GB RAM.",
        tip: "SSD é obrigatório para não sofrer com lentidão."
      },
      visual: {
        title: "Tela & Periféricos",
        desc: "Um segundo monitor aumenta sua produtividade em 40% (código em um, resultado no outro).",
        tip: "Para Front-end, prefira telas IPS com boa fidelidade de cor (Full HD+)."
      },
      system: {
        title: "Sistema & Rede",
        desc: "Windows (com WSL2), Linux (Ubuntu/Mint) ou macOS.",
        tip: "Internet estável de 50Mb+ é suficiente."
      }
    },
    subtracks: {
      frontend: {
        title: "Front-end",
        desc: "Foco na interface, experiência do usuário e parte visual.",
        iconName: "Layout",
        practice: [
          { name: "Frontend Mentor", desc: "Desafios de UI com designs profissionais." },
          { name: "CSSBattle", desc: "Gamificação de CSS puro." },
          { name: "Codewars", desc: "Treino de lógica JavaScript." },
          { name: "DevChallenge", desc: "Projetos completos de Front." }
        ],
        steps: [
          {
            phase: "Fase 1: A Base da Web (1-2 Meses)",
            desc: "Não pule os fundamentos. A web é feita de HTML, CSS e JS.",
            techs: ["HTML5 Semântico", "CSS3 (Flexbox/Grid)", "JavaScript Moderno (ES6+)", "Git & GitHub"],
            project: "Portfólio Pessoal Responsivo.",
            resources: ["Curso em Vídeo (Gustavo Guanabara)", "MDN Web Docs", "FreeCodeCamp"]
          },
          {
            phase: "Fase 2: Ecossistema React (2-4 Meses)",
            desc: "Criando interfaces complexas e interativas.",
            techs: ["React.js", "Tailwind CSS", "React Router", "Consumo de APIs (Fetch/Axios)"],
            project: "App de Clima ou E-commerce simples.",
            resources: ["React Docs", "Rocketseat Discover", "Origamid"]
          },
          {
            phase: "Fase 3: Avançado (3-6 Meses)",
            desc: "Performance, acessibilidade e frameworks fullstack.",
            techs: ["Next.js", "TypeScript", "Jest (Testes)", "SEO & Acessibilidade"],
            project: "Landing Page de alta performance com CMS.",
            resources: ["Next.js Learn", "Vercel"]
          }
        ],
        tips: [
          "Aprenda bem JavaScript antes de ir para o React.",
          "Construa projetos reais, não apenas acompanhe tutoriais.",
          "O design importa: estude o básico de UI/UX."
        ]
      },
      backend: {
        title: "Back-end",
        desc: "Foco em regras de negócio, banco de dados e servidores.",
        iconName: "Server",
        practice: [
          { name: "HackerRank", desc: "Algoritmos, SQL e Estrutura de Dados." },
          { name: "BeeCrowd", desc: "Lógica de programação clássica." },
          { name: "Codewars", desc: "Katas (desafios) de Node.js/Python." },
          { name: "SQLZoo", desc: "Prática interativa de SQL." }
        ],
        steps: [
          {
            phase: "Fase 1: Lógica e Servidor (1-2 Meses)",
            desc: "Entendendo como requisições funcionam.",
            techs: ["Lógica de Programação", "Node.js", "Express/Fastify", "HTTP & APIs REST"],
            project: "API de cadastro de usuários (CRUD).",
            resources: ["Node.js.org", "Filipe Deschamps", "Roadmap.sh"]
          },
          {
            phase: "Fase 2: Dados e Autenticação (2-4 Meses)",
            desc: "Persistência e segurança.",
            techs: ["PostgreSQL ou MongoDB", "Prisma/TypeORM", "JWT (Auth)", "Docker Básico"],
            project: "Sistema de Blog com Login.",
            resources: ["PostgreSQL Tutorial", "Docker Docs"]
          },
          {
            phase: "Fase 3: Arquitetura (3-6 Meses)",
            desc: "Escalabilidade e boas práticas.",
            techs: ["Clean Architecture", "SOLID", "Testes Automatizados", "CI/CD"],
            project: "API robusta com testes e documentação (Swagger).",
            resources: ["Full Cycle", "Clean Code (Livro)"]
          }
        ],
        tips: [
          "Segurança é prioridade: nunca salve senhas em texto puro.",
          "Entenda a diferença entre bancos relacionais (SQL) e não-relacionais (NoSQL).",
          "Aprenda Docker cedo, vai facilitar sua vida."
        ]
      },
      fullstack: {
        title: "Fullstack",
        desc: "Domine o fluxo completo, do banco de dados ao pixel.",
        iconName: "Layers",
        practice: [
          { name: "FullstackOpen", desc: "Curso/Desafio completo da Univ. Helsinki." },
          { name: "DevChallenge", desc: "Desafios Fullstack." },
          { name: "Frontend Mentor", desc: "Faça o Fullstack nos desafios Premium." }
        ],
        steps: [
          {
            phase: "Fase 1: O Lado do Cliente (2 Meses)",
            desc: "Comece pelo visual para ver resultados rápidos.",
            techs: ["HTML/CSS/JS", "React Básico", "Integração com APIs"],
            project: "Dashboard consumindo dados falsos.",
            resources: ["Rocketseat Ignite", "Odin Project"]
          },
          {
            phase: "Fase 2: O Lado do Servidor (2-3 Meses)",
            desc: "Conectando as pontas.",
            techs: ["Node.js", "Banco de Dados (SQL)", "Criação de APIs"],
            project: "Fullstack ToDo List com Login.",
            resources: ["Youtube: Mano Deyvin", "Stack Overflow"]
          },
          {
            phase: "Fase 3: Integração e Deploy (3+ Meses)",
            desc: "Colocando no ar.",
            techs: ["Next.js (Fullstack)", "Vercel/Railway", "Autenticação (NextAuth)", "TypeScript"],
            project: "SaaS (Software as a Service) simples.",
            resources: ["Vercel Docs", "Supabase"]
          }
        ],
        tips: [
          "É muita coisa para aprender: tenha paciência.",
          "Tente focar em uma stack (ex: MERN ou Next.js) no início.",
          "Fullstack não significa saber 100% de tudo, mas saber integrar tudo."
        ]
      }
    },
    comparison: {
      title: "Qual caminho escolher?",
      headers: ["Front-end", "Back-end", "Fullstack"],
      rows: [
        ["Foco", "Visual, Interação, UX", "Dados, Regras, Segurança", "Visão Geral, Produto"],
        ["Perfil", "Criativo e Visual", "Lógico e Estrutural", "Versátil e Empreendedor"],
        ["Mercado", "Muitas vagas, alta concorrência Jr", "Vagas mais técnicas, salários sólidos", "Muito valorizado em Startups"]
      ]
    }
  },
  mobile: {
    category: "main",
    title: "Desenvolvimento Mobile",
    iconName: "Smartphone",
    description: "Apps para Android e iOS.",
    color: "from-emerald-500 to-green-400",
    defaultTab: "reactNative",
    setup: {
      machine: {
        title: "A Máquina (Pesada)",
        min: "i5/Ryzen 5 + 12GB RAM.",
        rec: "i7/Ryzen 7 + 16GB/32GB RAM.",
        tip: "Emuladores (Android Studio) consomem MUITA memória RAM. Se tiver 8GB, use o celular físico via USB."
      },
      visual: {
        title: "Tela & Testes",
        desc: "Um monitor para código e um celular físico para testes.",
        tip: "Cabo USB de qualidade é essencial para debug via celular."
      },
      system: {
        title: "Sistema (O Grande Filtro)",
        desc: "Windows/Linux compilam apenas Android.",
        tip: "Para compilar iOS, você PRECISA de um Mac (Macbook Air M1 é o melhor custo-benefício atual)."
      }
    },
    subtracks: {
      reactNative: {
        title: "React Native",
        desc: "Ideal para quem vem do Web/JavaScript.",
        iconName: "Code2",
        practice: [
          { name: "Rocketseat Challenges", desc: "Desafios práticos de RN." },
          { name: "Codewars", desc: "Treine lógica com JS/TS." }
        ],
        steps: [
          { phase: "Fundamentos", techs: ["JS/TS", "React Native Core", "Expo"], desc: "Criando telas nativas com JS.", resources: ["Rocketseat", "React Native Docs"] },
          { phase: "Intermediário", techs: ["Navegação", "Consumo de API", "Estilização"], desc: "Apps dinâmicos.", resources: ["Matheus Fraga"] },
          { phase: "Avançado", techs: ["Animações", "Offline First", "Lojas"], desc: "Publicação nas lojas.", resources: ["Expo EAS"] }
        ],
        tips: [
          "React Native não é React Web. Tem suas peculiaridades.",
          "Teste sempre em dispositivos reais, não apenas emuladores."
        ]
      },
      flutter: {
        title: "Flutter",
        desc: "Performance nativa e UI consistente com Dart.",
        iconName: "Zap",
        practice: [
          { name: "Flutter Challenges", desc: "Recriação de UIs complexas." },
          { name: "HackerRank", desc: "Treine lógica com Dart (se disponível) ou C++." }
        ],
        steps: [
          { phase: "Fundamentos", techs: ["Dart", "Widgets Básicos", "Layouts"], desc: "Aprendendo a linguagem do Google.", resources: ["Flutterando", "Flutter Docs"] },
          { phase: "Intermediário", techs: ["Gerência de Estado (Bloc/Provider)", "APIs"], desc: "Apps robustos.", resources: ["Deivid Willyan"] },
          { phase: "Avançado", techs: ["Clean Arch", "Testes", "Native Channels"], desc: "Integração profunda.", resources: ["Pub.dev"] }
        ],
        tips: [
          "Dart é fácil se você já conhece outra linguagem OOP.",
          "Flutter tem uma das melhores documentações."
        ]
      },
      android: {
        title: "Nativo",
        desc: "Máxima performance com Kotlin (Android) e Swift (iOS).",
        iconName: "Smartphone",
        practice: [
          { name: "Google Codelabs", desc: "Exercícios oficiais do Android." },
          { name: "LeetCode", desc: "Ótimo para lógica em Java/Kotlin." }
        ],
        steps: [
          { phase: "Fundamentos", techs: ["Kotlin/Swift", "Android Studio/Xcode", "XML/SwiftUI"], desc: "Linguagens oficiais: Kotlin para Android, Swift para iOS.", resources: ["Android Developers", "Apple Developer"] },
          { phase: "Intermediário", techs: ["Retrofit/Alamofire", "Room/CoreData", "Coroutines/async"], desc: "Arquitetura MVVM em ambas plataformas.", resources: ["Google Codelabs", "Hacking with Swift"] },
          { phase: "Avançado", techs: ["Jetpack Compose/SwiftUI", "Dependency Injection", "CI/CD"], desc: "Apps de nível empresarial em Android e iOS.", resources: ["Kotlin Docs", "Swift.org"] }
        ],
        tips: [
          "Kotlin (Android) e Swift (iOS) são linguagens modernas e poderosas.",
          "Você pode focar em uma plataforma primeiro e depois aprender a outra.",
          "Grandes empresas preferem apps nativos para performance crítica."
        ]
      }
    },
    comparison: {
      title: "Híbrido vs Nativo?",
      headers: ["React Native", "Flutter", "Nativo (Kotlin/Swift)"],
      rows: [
        ["Linguagem", "JavaScript / TypeScript", "Dart", "Kotlin / Swift"],
        ["Performance", "Ótima (perto do nativo)", "Excelente (motor gráfico próprio)", "Máxima (direto no metal)"],
        ["Mercado BR", "Muito Forte", "Crescendo Rápido", "Estável (Bancos/Grandes Apps)"]
      ]
    }
  },
  data: {
    category: "main",
    title: "Data Science & IA",
    iconName: "Database",
    description: "Transforme dados em inteligência.",
    color: "from-purple-600 to-pink-500",
    defaultTab: "datascience",
    setup: {
      machine: {
        title: "Processamento",
        min: "8GB RAM (Para estudos básicos).",
        rec: "16GB+ RAM e Placa de Vídeo NVIDIA (RTX).",
        tip: "Se tiver PC fraco, use o Google Colab ou Kaggle Kernels (Gratuitos na nuvem)."
      },
      visual: {
        title: "Visualização",
        desc: "Monitor Ultrawide ajuda a ver planilhas gigantes e código ao mesmo tempo.",
        tip: "Notebooks numéricos ajudam na entrada de dados."
      },
      system: {
        title: "Ambiente",
        desc: "Linux ou Windows com WSL2.",
        tip: "Python e Anaconda são pesados. SSD é mandatório."
      }
    },
    subtracks: {
      datascience: {
        title: "Data Science",
        desc: "Análise, estatística e visualização.",
        iconName: "Database",
        practice: [
          { name: "Kaggle", desc: "Competições e datasets reais." },
          { name: "HackerRank", desc: "Estatística e Python." },
          { name: "DataCamp", desc: "Projetos guiados." }
        ],
        steps: [
          { phase: "Fase 1", techs: ["Python", "Estatística", "Pandas"], desc: "Manipulando dados.", resources: ["Kaggle", "Data Science Academy"] },
          { phase: "Fase 2", techs: ["Visualização", "SQL", "Storytelling"], desc: "Transformando dados em insights.", resources: ["Seaborn", "Tableau Public"] },
          { phase: "Fase 3", techs: ["Big Data", "Spark", "Cloud Data"], desc: "Lidando com grandes volumes.", resources: ["AWS Data"] }
        ],
        tips: [
          "Matemática e estatística são fundamentais.",
          "Storytelling com dados é tão importante quanto a análise."
        ]
      },
      ai: {
        title: "Inteligência Artificial",
        desc: "Machine Learning e Redes Neurais.",
        iconName: "BrainCircuit",
        practice: [
          { name: "Kaggle", desc: "Desafios de ML/Deep Learning." },
          { name: "Hugging Face", desc: "Hospede e teste seus modelos." }
        ],
        steps: [
          { phase: "Fase 1", techs: ["Matemática", "Python Avançado", "Scikit-Learn"], desc: "Algoritmos de aprendizado.", resources: ["Coursera ML"] },
          { phase: "Fase 2", techs: ["Deep Learning", "TensorFlow/PyTorch", "NLP"], desc: "Redes neurais profundas.", resources: ["Fast.ai"] },
          { phase: "Fase 3", techs: ["LLMs", "LangChain", "Hugging Face"], desc: "IA Generativa moderna.", resources: ["DeepLearning.AI"] }
        ],
        tips: [
          "IA requer base forte em matemática.",
          "Comece com problemas simples antes de LLMs."
        ]
      }
    }
  },
  devops: {
    category: "spec",
    title: "DevOps & Cloud",
    iconName: "Cloud",
    description: "Infraestrutura como código e nuvem.",
    color: "from-orange-400 to-amber-400",
    defaultTab: "general",
    setup: {
      machine: {
        title: "Virtualização",
        min: "8GB RAM.",
        rec: "16GB+ RAM (Para rodar Docker e Kubernetes localmente).",
        tip: "Habilite a virtualização (VT-x/AMD-V) na BIOS."
      },
      visual: {
        title: "Produtividade",
        desc: "Teclado confortável (Mecânico) para longas sessões de terminal.",
        tip: "Monitor vertical pode ajudar na leitura de logs."
      },
      system: {
        title: "O Sistema",
        desc: "Linux (Ubuntu/Fedora) é a língua nativa de servidores.",
        tip: "Se usar Windows, o WSL2 (Windows Subsystem for Linux) é obrigatório."
      }
    },
    subtracks: {
      general: {
        title: "DevOps Generalista",
        desc: "A base de operações e automação.",
        iconName: "Terminal",
        practice: [
          { name: "KodeKloud", desc: "Labs interativos de DevOps." },
          { name: "HackerRank", desc: "Scripting (Bash) e Linux." },
          { name: "SadServers", desc: "Resolva problemas em servidores Linux." }
        ],
        steps: [
          { phase: "Base", techs: ["Linux", "Redes", "Git", "Scripting"], desc: "O sistema operacional da internet.", resources: ["Linux Journey"] },
          { phase: "Containers", techs: ["Docker", "Kubernetes", "CI/CD"], desc: "Empacotamento e orquestração.", resources: ["Kubernetes.io"] },
          { phase: "Cloud", techs: ["Terraform", "Ansible", "Monitoramento"], desc: "Infraestrutura como código.", resources: ["HashiCorp"] }
        ],
        tips: [
          "Linux é obrigatório para DevOps.",
          "Aprenda Docker antes de Kubernetes."
        ]
      },
      clouds: {
        title: "Provedores Cloud",
        desc: "Especialização em plataformas.",
        iconName: "Cloud",
        practice: [
          { name: "AWS Skill Builder", desc: "Labs oficiais da AWS." },
          { name: "Microsoft Learn", desc: "Sandboxes gratuitos Azure." }
        ],
        steps: [
          { phase: "AWS", techs: ["EC2", "S3", "Lambda", "IAM"], desc: "Líder de mercado.", resources: ["AWS Skill Builder"] },
          { phase: "Azure", techs: ["Azure AD", "DevOps", "VMs"], desc: "Forte no mundo corporativo.", resources: ["Microsoft Learn"] },
          { phase: "Google Cloud", techs: ["GKE", "BigQuery", "Firebase"], desc: "Forte em dados e Kubernetes.", resources: ["Google Cloud Skills"] }
        ],
        tips: [
          "Certificações cloud valem a pena.",
          "Use os créditos gratuitos para aprender."
        ]
      }
    }
  },
  cyber: {
    category: "spec",
    title: "Cybersecurity",
    iconName: "Shield",
    description: "Proteção ofensiva e defensiva.",
    color: "from-red-600 to-rose-500",
    defaultTab: "general",
    setup: {
      machine: {
        title: "Laboratório",
        min: "8GB RAM.",
        rec: "16GB+ RAM (Para rodar 2 ou 3 Máquinas Virtuais simultâneas).",
        tip: "Você precisará isolar ambientes infectados em VMs."
      },
      visual: {
        title: "Periféricos",
        desc: "Adaptador Wi-Fi USB específico (que suporte modo monitor) para testes de rede.",
        tip: "Telas múltiplas ajudam a monitorar tráfego e atacar ao mesmo tempo."
      },
      system: {
        title: "OS de Ataque",
        desc: "Kali Linux ou Parrot OS.",
        tip: "Rode via Pen Drive (Live USB) ou VirtualBox. Não instale como sistema principal no início."
      }
    },
    subtracks: {
      general: {
        title: "Segurança Ofensiva/Defensiva",
        desc: "Red Team vs Blue Team.",
        iconName: "Shield",
        practice: [
          { name: "TryHackMe", desc: "Salas guiadas (Melhor para iniciantes)." },
          { name: "HackTheBox", desc: "Desafios reais e CTFs." },
          { name: "PicoCTF", desc: "CTF focado em educação." }
        ],
        steps: [
          { phase: "Base", techs: ["Redes (TCP/IP)", "Linux", "Python"], desc: "Entendendo o terreno.", resources: ["TryHackMe"] },
          { phase: "Hacking", techs: ["Kali Linux", "Metasploit", "Burp Suite"], desc: "Pentesting ético.", resources: ["HackTheBox"] },
          { phase: "Defesa", techs: ["Firewalls", "SIEM", "Hardening"], desc: "Protegendo infraestruturas.", resources: ["Blue Team Labs"] }
        ],
        tips: [
          "Sempre tenha autorização escrita antes de testar sistemas.",
          "Ética é fundamental em segurança."
        ]
      }
    }
  },
  games: {
    category: "main",
    title: "Desenvolvimento de Jogos",
    iconName: "Gamepad2",
    description: "Jogos 2D, 3D e Engines.",
    color: "from-orange-500 to-red-500",
    defaultTab: "general",
    setup: {
      machine: {
        title: "Renderização",
        min: "i5 + 8GB RAM + Placa de Vídeo Integrada (Jogos 2D).",
        rec: "16GB RAM + Placa de Vídeo Dedicada (GTX/RTX) para 3D.",
        tip: "SSD é vital para carregar assets pesados da Unity/Unreal."
      },
      visual: {
        title: "Visual",
        desc: "Monitor com boa fidelidade de cor para arte.",
        tip: "Tablet digitalizador (Wacom) é útil se você for criar seus próprios sprites."
      },
      system: {
        title: "Ecossistema",
        desc: "Windows é o padrão absoluto para Games.",
        tip: "Linux tem suporte, mas drivers de vídeo podem dar dor de cabeça."
      }
    },
    subtracks: {
      general: {
        title: "Game Dev",
        desc: "Unity ou Godot.",
        iconName: "Gamepad2",
        practice: [
          { name: "Itch.io Jams", desc: "Participe de Game Jams." },
          { name: "Codewars", desc: "Treine lógica C# (Unity)." }
        ],
        steps: [
          { phase: "Lógica", techs: ["C#", "GDScript", "Matemática"], desc: "Programando comportamento.", resources: ["Brackeys"] },
          { phase: "Engine", techs: ["Unity", "Godot", "Unreal"], desc: "Dominando a ferramenta.", resources: ["Unity Learn"] },
          { phase: "Arte & Polimento", techs: ["Shaders", "VFX", "Game Design"], desc: "O 'Game Juice'.", resources: ["GMTK"] }
        ],
        tips: [
          "Comece com jogos 2D simples.",
          "Game design é tão importante quanto programação."
        ]
      }
    }
  },
  iot: {
    category: "spec",
    title: "Internet das Coisas",
    iconName: "Cpu",
    description: "Conectando o mundo físico à internet.",
    color: "from-yellow-400 to-amber-500",
    defaultTab: "embedded",
    setup: {
      machine: {
        title: "O Computador",
        min: "Qualquer computador básico funciona.",
        rec: "Portas USB funcionais são o mais importante.",
        tip: "O código é leve, o computador não precisa ser potente."
      },
      visual: {
        title: "Bancada Física",
        desc: "Multímetro, Ferro de Solda e Protoboard.",
        tip: "Você vai precisar de espaço físico na mesa, não apenas tela."
      },
      system: {
        title: "Hardware Externo",
        desc: "Kit Iniciante Arduino ou ESP32.",
        tip: "Compre componentes genéricos, são muito mais baratos que os de marca."
      }
    },
    subtracks: {
      embedded: {
        title: "Sistemas Embarcados",
        desc: "Arduino, ESP32 e C++.",
        iconName: "Cpu",
        practice: [
          { name: "Wokwi", desc: "Simulador de Arduino/ESP32 Online." },
          { name: "HackerRank", desc: "Treine lógica C++." }
        ],
        steps: [
          { phase: "Eletrônica", techs: ["Lei de Ohm", "Circuitos", "Sensores"], desc: "O básico de hardware.", resources: ["Tinkercad Circuits"] },
          { phase: "Microcontroladores", techs: ["Arduino IDE", "C++", "GPIO"], desc: "Controlando o mundo físico.", resources: ["Brincando com Ideias"] },
          { phase: "Conectividade", techs: ["MQTT", "Wi-Fi (ESP32)", "LoraWAN"], desc: "IoT na prática.", resources: ["FilipeFlop"] }
        ],
        tips: [
          "Comece com projetos simples como LED piscando.",
          "Eletrônica básica é importante."
        ]
      }
    }
  },
  blockchain: {
    category: "spec",
    title: "Blockchain & Web3",
    iconName: "Boxes",
    description: "A internet descentralizada.",
    color: "from-indigo-500 to-violet-500",
    defaultTab: "dapps",
    setup: {
      machine: {
        title: "O Computador",
        min: "i3 + 8GB RAM.",
        rec: "Simular uma Blockchain local pode consumir CPU.",
        tip: "SSD ajuda muito na indexação de nós locais."
      },
      visual: {
        title: "Segurança",
        desc: "Carteira Hardware (Ledger/Trezor) para guardar ativos reais.",
        tip: "Nunca use sua carteira principal para desenvolvimento."
      },
      system: {
        title: "Ambiente",
        desc: "Linux ou Mac são preferidos por ferramentas CLI.",
        tip: "Navegadores baseados em Chromium (Brave/Chrome) com Metamask instalado."
      }
    },
    subtracks: {
      dapps: {
        title: "Smart Contracts",
        desc: "Solidity e Ethereum.",
        iconName: "Boxes",
        practice: [
          { name: "CryptoZombies", desc: "Aprenda Solidity fazendo um jogo." },
          { name: "Speed Run Ethereum", desc: "Desafios práticos para Web3." }
        ],
        steps: [
          { phase: "Conceitos", techs: ["Blockchain", "Wallets", "Consenso"], desc: "Como funciona a chain.", resources: ["Whiteboard Crypto"] },
          { phase: "Contratos", techs: ["Solidity", "Remix IDE", "Tokens (ERC20)"], desc: "Programando dinheiro.", resources: ["CryptoZombies"] },
          { phase: "Frontend Web3", techs: ["Ethers.js", "Hardhat", "IPFS"], desc: "Conectando sites à blockchain.", resources: ["Web3devs"] }
        ],
        tips: [
          "Teste sempre em redes de teste (testnets).",
          "Segurança em smart contracts é crítica."
        ]
      }
    }
  }
};
