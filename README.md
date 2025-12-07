# DevRoad - Guia de Programação

Projeto de extensão universitária open source dedicado a democratizar o acesso ao conhecimento em programação através de recursos 100% gratuitos.

## Sobre o Projeto

DevRoad é uma plataforma que ajuda iniciantes a descobrirem seu caminho na programação, oferecendo:

- **Quiz Vocacional** - Descubra qual área da programação combina com você
- **Roadmaps Detalhados** - Guias completos para diferentes áreas tech
- **Recomendação de Conteúdo** - 100% gratuito, oferecido por especialistas
- **Conteúdo em Português** - Focado na comunidade brasileira

## Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool moderno e ultrarrápido
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Ícones modernos e leves
- **Deploy:** Vercel

## Estrutura do Projeto

```
guia-programacao/
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── Button.jsx       # Componente de botão reutilizável
│   │       ├── Card.jsx         # Componente de card reutilizável
│   │       └── Badge.jsx        # Componente de badge
│   ├── pages/
│   │   ├── Hero.jsx             # Página inicial
│   │   ├── QuizPage.jsx         # Quiz vocacional
│   │   ├── RoadmapList.jsx      # Lista de trilhas
│   │   └── RoadmapDetail.jsx    # Detalhes da trilha
│   ├── data/
│   │   ├── roadmaps.js          # Dados das trilhas
│   │   └── quiz.js              # Dados do quiz
│   ├── App.jsx                  # Componente principal
│   ├── main.jsx                 # Ponto de entrada
│   └── index.css                # Estilos globais + Tailwind
├── tailwind.config.js           # Configuração Tailwind
├── postcss.config.js            # Configuração PostCSS
├── vite.config.js               # Configuração Vite
└── package.json                 # Dependências
```

## Funcionalidades

### Página Inicial
- Design com gradientes animados
- Descrição do projeto
- CTAs para Quiz e Trilhas

### Quiz Vocacional
- Perguntas estratégicas
- Recomendação personalizada baseada em perfil
- Redireciona para trilha correspondente

### Trilhas de Aprendizado

**Trilhas Principais:**
- **Desenvolvimento Web** - Frontend, Backend, Fullstack
- **Desenvolvimento Mobile** - React Native, Flutter, Nativo
- **Data Science & IA** - Python, ML, Analytics, TensorFlow, PyTorch, LLMs
- **Desenvolvimento de Jogos** - Unity, Godot, Unreal

**Especializações e Infraestrutura:**
- **DevOps & Cloud** - Docker, CI/CD, Cloud
- **Cybersecurity** - Cybersecurity, Ethical Hacking
- **Blockchain & Web3** - Solidity, Web3, DeFi
- **Internet das Coisas** - Sistemas Embarcados

### Detalhes da Trilha
- Timeline de aprendizado com fases progressivas
- Tecnologias por fase
- Projetos práticos sugeridos
- Recursos gratuitos curados
- Requisitos de hardware
- Dicas essenciais
- Plataformas de prática
- Comunidades brasileiras
- Comparativos de tecnologias

## Como Rodar o Projeto

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <https://github.com/lafaietes/devroad/>
cd guia-programacao
```

2. Instale as dependências:
```bash
npm install
```

3. Rode o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador

## Design

### Cores Principais
- **Indigo/Purple** (#4f46e5 → #7c3aed) - Primário
- **Cyan** (#06b6d4) - Secundário
- **Slate** - Backgrounds e texto
- **Gradientes** - Efeitos visuais e destaques

### Componentes UI
- **Button** - 3 variantes (primary, secondary, outline)
- **Card** - Glassmorphism com backdrop blur
- **Badge** - Pills para tags e tecnologias

### Animações
- Gradientes animados na home
- Transições suaves em hover
- Fade-in em páginas
- Progress bar no quiz

## Contribuindo

Contribuições são bem-vindas!

**Como contribuir:**
1. Adicione novos recursos
2. Atualize tecnologias
3. Melhore o conteúdo 
4. Corrija eventuais bugs
5. Sugira novas trilhas
6. Implemente melhoriasd na responsividade mobile

## Licença

Projeto de extensão universitária de código aberto. Use livremente.

**Tecnologias:**
- React 18.3.1
- Vite 7.2.6
- Tailwind CSS 3.4.0
- Lucide React 0.468.0

---

**Obrigado por acessar o DevRoad!**