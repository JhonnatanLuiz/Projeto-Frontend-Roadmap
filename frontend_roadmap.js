// ============================================
// CONFIGURAÇÃO E CONSTANTES
// ============================================

const STORAGE_KEYS = {
    PROGRESS: 'frontend_roadmap_progress',
    THEME: 'frontend_roadmap_theme'
};

// ============================================
// BASE DE DADOS DAS TECNOLOGIAS
// ============================================

const techData = {
    // CORE FOUNDATIONS
    'html5': {
        title: 'HTML5',
        category: 'Fundamento Essencial',
        description: 'HTML5 é a quinta e atual versão da linguagem de marcação HTML, trazendo novos elementos semânticos, APIs poderosas e suporte multimídia nativo.',
        features: [
            'Elementos semânticos (header, nav, article, section)',
            'APIs nativas (Geolocation, LocalStorage, Canvas)',
            'Suporte nativo para áudio e vídeo',
            'Formulários aprimorados com novos tipos de input',
            'Melhor acessibilidade e SEO'
        ],
        useCases: [
            'Estruturação semântica de páginas web',
            'Criação de aplicações web progressivas (PWAs)',
            'Desenvolvimento de jogos 2D com Canvas',
            'Formulários interativos e validação'
        ],
        resources: [
            { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML' },
            { name: 'HTML5 Rocks', url: 'https://www.html5rocks.com/' },
            { name: 'W3C HTML5', url: 'https://www.w3.org/TR/html5/' }
        ],
        difficulty: 'Iniciante',
        learningTime: '2-4 semanas'
    },
    
    'semantic-html': {
        title: 'HTML Semântico',
        category: 'Fundamento',
        description: 'HTML semântico utiliza tags que carregam significado sobre o conteúdo, melhorando acessibilidade, SEO e manutenibilidade do código.',
        features: [
            'Tags com significado: &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;aside&gt;, &lt;footer&gt;',
            'Melhor compreensão pelos motores de busca',
            'Acessibilidade para leitores de tela',
            'Código mais legível e manutenível'
        ],
        useCases: [
            'Estruturação de blogs e sites de conteúdo',
            'Melhorar ranqueamento em motores de busca',
            'Facilitar navegação para usuários com deficiência',
            'Documentação e artigos técnicos'
        ],
        resources: [
            { name: 'MDN Semântica HTML', url: 'https://developer.mozilla.org/pt-BR/docs/Glossary/Semantics' }
        ],
        difficulty: 'Iniciante',
        learningTime: '1 semana'
    },
    
    'web-accessibility': {
        title: 'Web Accessibility (A11y)',
        category: 'Fundamento',
        description: 'Acessibilidade web garante que sites e aplicações sejam utilizáveis por todas as pessoas, incluindo aquelas com deficiências.',
        features: [
            'ARIA (Accessible Rich Internet Applications)',
            'Navegação por teclado',
            'Contraste de cores adequado',
            'Textos alternativos para imagens',
            'Suporte a leitores de tela'
        ],
        useCases: [
            'Sites governamentais e institucionais',
            'E-commerce inclusivo',
            'Aplicações corporativas',
            'Conformidade com WCAG 2.1'
        ],
        resources: [
            { name: 'WCAG Guidelines', url: 'https://www.w3.org/WAI/WCAG21/quickref/' },
            { name: 'A11y Project', url: 'https://www.a11yproject.com/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '3-4 semanas'
    },
    
    'seo-practices': {
        title: 'SEO Best Practices',
        category: 'Fundamento',
        description: 'Práticas de otimização para motores de busca que melhoram a visibilidade e ranqueamento de sites nos resultados de pesquisa.',
        features: [
            'Meta tags otimizadas (title, description)',
            'Estrutura de URLs amigáveis',
            'Schema.org e dados estruturados',
            'Performance e Core Web Vitals',
            'Mobile-first e responsividade'
        ],
        useCases: [
            'E-commerce e marketing digital',
            'Blogs e sites de conteúdo',
            'Landing pages',
            'Sites institucionais'
        ],
        resources: [
            { name: 'Google Search Central', url: 'https://developers.google.com/search' },
            { name: 'Schema.org', url: 'https://schema.org/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'progressive-enhancement': {
        title: 'Progressive Enhancement',
        category: 'Conceito',
        description: 'Estratégia de desenvolvimento que garante funcionalidade básica para todos os navegadores, adicionando recursos avançados progressivamente.',
        features: [
            'Funcionalidade básica em HTML puro',
            'Aprimoramento com CSS',
            'Interatividade com JavaScript',
            'Detecção de recursos (feature detection)',
            'Graceful degradation'
        ],
        useCases: [
            'Sites com ampla compatibilidade',
            'Aplicações acessíveis',
            'Performance em redes lentas',
            'Suporte a navegadores antigos'
        ],
        resources: [
            { name: 'MDN Progressive Enhancement', url: 'https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'css3': {
        title: 'CSS3 & Modern CSS',
        category: 'Fundamento Essencial',
        description: 'CSS3 trouxe recursos poderosos como Flexbox, Grid, animações, transformações e variáveis CSS (Custom Properties).',
        features: [
            'Flexbox e Grid Layout',
            'Animações e transições',
            'Custom Properties (variáveis CSS)',
            'Media Queries e responsividade',
            'Pseudo-classes e pseudo-elementos avançados'
        ],
        useCases: [
            'Layouts responsivos complexos',
            'Animações e microinterações',
            'Design systems e temas',
            'Interfaces modernas e adaptativas'
        ],
        resources: [
            { name: 'MDN CSS', url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS' },
            { name: 'CSS Tricks', url: 'https://css-tricks.com/' },
            { name: 'Web.dev CSS', url: 'https://web.dev/learn/css/' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '4-6 semanas'
    },
    
    'flexbox-grid': {
        title: 'Flexbox & CSS Grid',
        category: 'Layout',
        description: 'Sistemas modernos de layout CSS que permitem criar interfaces flexíveis e responsivas com facilidade.',
        features: [
            'Flexbox: layouts unidimensionais (linha ou coluna)',
            'Grid: layouts bidimensionais (linhas e colunas)',
            'Alinhamento poderoso e controle de espaçamento',
            'Responsividade nativa',
            'Compatibilidade com todos navegadores modernos'
        ],
        useCases: [
            'Layouts de página complexos',
            'Componentes de interface (cards, navbars)',
            'Galerias de imagens',
            'Dashboards e painéis administrativos'
        ],
        resources: [
            { name: 'CSS Grid Garden', url: 'https://cssgridgarden.com/' },
            { name: 'Flexbox Froggy', url: 'https://flexboxfroggy.com/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'css-custom-properties': {
        title: 'CSS Custom Properties',
        category: 'Feature CSS',
        description: 'Variáveis CSS nativas que permitem reutilizar valores e criar temas dinâmicos com facilidade.',
        features: [
            'Sintaxe: --nome-variavel: valor',
            'Uso com função var()',
            'Escopo e herança',
            'Manipulação via JavaScript',
            'Ideal para design systems'
        ],
        useCases: [
            'Sistemas de tema (dark/light mode)',
            'Design tokens',
            'Componentes reutilizáveis',
            'Animações dinâmicas'
        ],
        resources: [
            { name: 'MDN Custom Properties', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/--*' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1 semana'
    },
    
    'container-queries': {
        title: 'Container Queries',
        category: 'Feature CSS',
        description: 'Permite aplicar estilos baseados no tamanho do container pai, não da viewport, revolucionando o design responsivo de componentes.',
        features: [
            'Responsividade baseada no container',
            'Componentes verdadeiramente reutilizáveis',
            '@container e container-type',
            'Unidades de container (cqw, cqh)',
            'Suporte crescente nos navegadores'
        ],
        useCases: [
            'Design systems modulares',
            'Componentes responsivos independentes',
            'Layouts adaptativos complexos',
            'Micro-frontends'
        ],
        resources: [
            { name: 'MDN Container Queries', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries' }
        ],
        difficulty: 'Avançado',
        learningTime: '1-2 semanas'
    },
    
    'cascade-layers': {
        title: 'Cascade Layers',
        category: 'Feature CSS',
        description: 'Controle explícito sobre a ordem de precedência de estilos CSS, facilitando a organização e manutenção de grandes bases de código.',
        features: [
            '@layer para definir camadas',
            'Controle de especificidade',
            'Organização de estilos',
            'Melhor para design systems',
            'Evita !important'
        ],
        useCases: [
            'Grandes aplicações com múltiplos estilos',
            'Design systems empresariais',
            'Micro-frontends',
            'Migração gradual de estilos'
        ],
        resources: [
            { name: 'MDN Cascade Layers', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@layer' }
        ],
        difficulty: 'Avançado',
        learningTime: '1 semana'
    },
    
    'logical-properties': {
        title: 'Logical Properties',
        category: 'Feature CSS',
        description: 'Propriedades CSS que se adaptam à direção do texto (LTR/RTL) e modo de escrita, facilitando internacionalização.',
        features: [
            'inline-start, inline-end (ao invés de left, right)',
            'block-start, block-end (ao invés de top, bottom)',
            'Suporte a idiomas RTL automaticamente',
            'Melhor para internacionalização',
            'Código mais semântico'
        ],
        useCases: [
            'Sites multilíngues',
            'Aplicações internacionais',
            'Suporte a idiomas RTL (árabe, hebraico)',
            'Componentes globais'
        ],
        resources: [
            { name: 'MDN Logical Properties', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1 semana'
    },
    
    'javascript': {
        title: 'JavaScript (ES6+)',
        category: 'Fundamento Essencial',
        description: 'Linguagem de programação essencial para desenvolvimento web, com recursos modernos desde ES6 (2015) que transformaram a forma de desenvolver.',
        features: [
            'Arrow functions e template literals',
            'Destructuring e spread operator',
            'Classes e módulos (import/export)',
            'Promises, async/await',
            'Map, Set, WeakMap, WeakSet',
            'Proxies e Reflect',
            'Generators e Iterators'
        ],
        useCases: [
            'Interatividade e manipulação do DOM',
            'Requisições HTTP (fetch, axios)',
            'Single Page Applications (SPAs)',
            'Desenvolvimento backend (Node.js)',
            'Aplicações mobile (React Native)'
        ],
        resources: [
            { name: 'MDN JavaScript', url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' },
            { name: 'JavaScript.info', url: 'https://javascript.info/' },
            { name: 'Eloquent JavaScript', url: 'https://eloquentjavascript.net/' }
        ],
        difficulty: 'Iniciante a Avançado',
        learningTime: '8-12 semanas'
    },
    
    'modern-syntax': {
        title: 'Modern Syntax (ES2023+)',
        category: 'JavaScript',
        description: 'Recursos mais recentes do JavaScript, incluindo novidades do ES2020 ao ES2023+.',
        features: [
            'Optional chaining (?.) e Nullish coalescing (??)',
            'Array.prototype.at()',
            'Top-level await',
            'Private class fields (#)',
            'Logical assignment operators (||=, &&=, ??=)',
            'Array.findLast() e findLastIndex()'
        ],
        useCases: [
            'Código mais conciso e legível',
            'Manipulação segura de dados',
            'Programação orientada a objetos moderna',
            'Desenvolvimento de bibliotecas'
        ],
        resources: [
            { name: 'TC39 Proposals', url: 'https://github.com/tc39/proposals' },
            { name: 'Can I Use', url: 'https://caniuse.com/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'async-await': {
        title: 'Async/Await & Promises',
        category: 'JavaScript',
        description: 'Padrões modernos para lidar com operações assíncronas em JavaScript de forma mais legível e manutenível.',
        features: [
            'Promises (then, catch, finally)',
            'Async/await syntax',
            'Promise.all(), Promise.race(), Promise.allSettled()',
            'Error handling com try/catch',
            'Chaining de promessas'
        ],
        useCases: [
            'Requisições HTTP (fetch API)',
            'Leitura/escrita de arquivos',
            'Operações de banco de dados',
            'Animações sequenciais',
            'Processamento em paralelo'
        ],
        resources: [
            { name: 'MDN Promises', url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise' },
            { name: 'Async/Await Guide', url: 'https://javascript.info/async-await' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2 semanas'
    },
    
    'esm-modules': {
        title: 'Modules (ESM)',
        category: 'JavaScript',
        description: 'Sistema de módulos nativo do JavaScript (ES Modules) que permite organizar código em arquivos reutilizáveis.',
        features: [
            'import e export syntax',
            'Named exports e default exports',
            'Dynamic imports (import())',
            'Suporte nativo em navegadores',
            'Compatibilidade com Node.js'
        ],
        useCases: [
            'Organização de código em grandes aplicações',
            'Reutilização de componentes',
            'Code splitting',
            'Bibliotecas e pacotes npm'
        ],
        resources: [
            { name: 'MDN ES Modules', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'web-apis': {
        title: 'Web APIs',
        category: 'JavaScript',
        description: 'APIs nativas do navegador que fornecem funcionalidades poderosas sem necessidade de bibliotecas externas.',
        features: [
            'Fetch API para requisições HTTP',
            'LocalStorage e SessionStorage',
            'Geolocation API',
            'Notification API',
            'Web Workers',
            'Canvas e WebGL',
            'Intersection Observer'
        ],
        useCases: [
            'PWAs (Progressive Web Apps)',
            'Aplicações offline-first',
            'Jogos 2D/3D no navegador',
            'Notificações push',
            'Lazy loading de imagens'
        ],
        resources: [
            { name: 'MDN Web APIs', url: 'https://developer.mozilla.org/en-US/docs/Web/API' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '4-6 semanas'
    },
    
    'typescript': {
        title: 'TypeScript',
        category: 'Linguagem',
        description: 'Superset de JavaScript que adiciona tipagem estática, melhorando a qualidade do código e a experiência de desenvolvimento.',
        features: [
            'Tipagem estática opcional',
            'Interfaces e tipos customizados',
            'Enums e Generics',
            'Decorators',
            'Inferência de tipos',
            'Compatibilidade com JavaScript'
        ],
        useCases: [
            'Aplicações de grande escala',
            'Projetos colaborativos',
            'Bibliotecas e frameworks',
            'Redução de bugs em produção'
        ],
        resources: [
            { name: 'TypeScript Official', url: 'https://www.typescriptlang.org/' },
            { name: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/handbook/intro.html' }
        ],
        difficulty: 'Intermediário',
        learningTime: '3-4 semanas'
    },
    
    // REACT ECOSYSTEM
    'react': {
        title: 'Ecossistema React',
        category: 'Framework',
        description: 'Biblioteca JavaScript para construção de interfaces de usuário, criada pelo Facebook, com um ecossistema rico e comunidade ativa.',
        features: [
            'Component-based architecture',
            'Virtual DOM para performance',
            'JSX syntax',
            'Hooks (useState, useEffect, useContext)',
            'Ecossistema vasto de bibliotecas',
            'React Developer Tools'
        ],
        useCases: [
            'Single Page Applications (SPAs)',
            'Dashboards e painéis administrativos',
            'E-commerce',
            'Redes sociais',
            'Aplicações mobile (React Native)'
        ],
        resources: [
            { name: 'React Docs', url: 'https://react.dev/' },
            { name: 'React Tutorial', url: 'https://react.dev/learn' }
        ],
        difficulty: 'Intermediário',
        learningTime: '4-6 semanas'
    },
    
    'react18': {
        title: 'React 18+ (Concurrent Features)',
        category: 'Framework',
        description: 'Última versão do React com recursos concorrentes que melhoram a experiência do usuário e performance.',
        features: [
            'Concurrent Rendering',
            'Automatic Batching',
            'Transitions API (useTransition)',
            'Suspense para data fetching',
            'Server Components',
            'Streaming SSR'
        ],
        useCases: [
            'Aplicações com muita interatividade',
            'Dashboards em tempo real',
            'Formulários complexos',
            'Aplicações com navegação suave'
        ],
        resources: [
            { name: 'React 18 Release', url: 'https://react.dev/blog/2022/03/29/react-v18' }
        ],
        difficulty: 'Avançado',
        learningTime: '2-3 semanas'
    },
    
    'nextjs': {
        title: 'Next.js 14+ (App Router)',
        category: 'Framework React',
        description: 'Framework React para produção com renderização server-side, geração estática, e otimizações automáticas.',
        features: [
            'App Router (novo paradigma de rotas)',
            'Server Components e Client Components',
            'Streaming e Suspense',
            'Otimização automática de imagens',
            'API Routes',
            'Middleware',
            'Incremental Static Regeneration (ISR)'
        ],
        useCases: [
            'Sites de conteúdo e blogs',
            'E-commerce de alto desempenho',
            'Aplicações SaaS',
            'Landing pages otimizadas para SEO'
        ],
        resources: [
            { name: 'Next.js Docs', url: 'https://nextjs.org/docs' },
            { name: 'Next.js Learn', url: 'https://nextjs.org/learn' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '3-4 semanas'
    },
    
    'remix': {
        title: 'Remix',
        category: 'Framework React',
        description: 'Framework full-stack React focado em web fundamentals, performance e experiência do desenvolvedor.',
        features: [
            'Nested Routing',
            'Data Loading e Mutations',
            'Progressive Enhancement',
            'Error Boundaries',
            'Otimizações automáticas',
            'Suporte a múltiplos adaptadores (Node, Deno, Cloudflare)'
        ],
        useCases: [
            'Aplicações full-stack',
            'Sites com muitas formas e interações',
            'Aplicações que priorizam performance',
            'Projetos que valorizam web standards'
        ],
        resources: [
            { name: 'Remix Docs', url: 'https://remix.run/docs' }
        ],
        difficulty: 'Avançado',
        learningTime: '3-4 semanas'
    },
    
    'react-state': {
        title: 'State Management (Redux, Zustand, Jotai)',
        category: 'Gerenciamento de Estado',
        description: 'Soluções para gerenciar estado global em aplicações React, desde Redux tradicional até alternativas modernas.',
        features: [
            'Redux Toolkit: Redux simplificado',
            'Zustand: API minimalista e performática',
            'Jotai: Atomic state management',
            'Immer para imutabilidade',
            'DevTools para debug'
        ],
        useCases: [
            'Estado compartilhado entre componentes',
            'Aplicações complexas com muito estado',
            'Sincronização de dados',
            'Cache de requisições'
        ],
        resources: [
            { name: 'Redux Toolkit', url: 'https://redux-toolkit.js.org/' },
            { name: 'Zustand', url: 'https://zustand-demo.pmnd.rs/' },
            { name: 'Jotai', url: 'https://jotai.org/' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '2-4 semanas'
    },
    
    'react-query': {
        title: 'React Query/TanStack Query',
        category: 'Data Fetching',
        description: 'Biblioteca para gerenciamento de estado assíncrono (server state) com cache, sincronização e atualizações automáticas.',
        features: [
            'Cache automático e inteligente',
            'Refetch automático em foco',
            'Paginação e infinite scroll',
            'Optimistic updates',
            'Retry e error handling',
            'DevTools integrado'
        ],
        useCases: [
            'Aplicações com muitas requisições HTTP',
            'Dashboards em tempo real',
            'Listagens com paginação',
            'Formulários com validação server-side'
        ],
        resources: [
            { name: 'TanStack Query Docs', url: 'https://tanstack.com/query/latest' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    // VUE ECOSYSTEM
    'vue': {
        title: 'Ecossistema Vue',
        category: 'Framework',
        description: 'Framework JavaScript progressivo para construção de interfaces de usuário, conhecido por sua curva de aprendizado suave.',
        features: [
            'Reatividade baseada em Proxy',
            'Single File Components (.vue)',
            'Template syntax intuitiva',
            'Composition API e Options API',
            'Vue DevTools',
            'Ecossistema oficial (Router, Pinia)'
        ],
        useCases: [
            'SPAs progressivas',
            'Dashboards administrativos',
            'Aplicações de pequeno a grande porte',
            'Integração gradual em projetos existentes'
        ],
        resources: [
            { name: 'Vue.js Docs', url: 'https://vuejs.org/' },
            { name: 'Vue Mastery', url: 'https://www.vuemastery.com/' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '3-5 semanas'
    },
    
    'vue3': {
        title: 'Vue 3 (Composition API)',
        category: 'Framework',
        description: 'Versão mais recente do Vue com melhor performance, TypeScript e a poderosa Composition API.',
        features: [
            'Composition API para lógica reutilizável',
            'Melhor TypeScript support',
            'Performance superior (Virtual DOM otimizado)',
            'Teleport e Suspense',
            'Fragments e múltiplos elementos raiz',
            'Menor bundle size'
        ],
        useCases: [
            'Aplicações modernas com TypeScript',
            'Projetos que necessitam alta performance',
            'Composables reutilizáveis',
            'Aplicações de grande escala'
        ],
        resources: [
            { name: 'Vue 3 Docs', url: 'https://vuejs.org/guide/introduction.html' }
        ],
        difficulty: 'Intermediário',
        learningTime: '3-4 semanas'
    },
    
    'nuxt3': {
        title: 'Nuxt 3',
        category: 'Framework Vue',
        description: 'Framework Vue para aplicações full-stack com SSR, SSG, e rotas baseadas em sistema de arquivos.',
        features: [
            'Auto-imports de componentes',
            'Server-Side Rendering (SSR)',
            'Static Site Generation (SSG)',
            'API Routes',
            'Nitro Engine para deploy universal',
            'TypeScript nativo'
        ],
        useCases: [
            'Sites de conteúdo otimizados para SEO',
            'E-commerce',
            'Aplicações full-stack',
            'Jamstack projects'
        ],
        resources: [
            { name: 'Nuxt 3 Docs', url: 'https://nuxt.com/' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '3-4 semanas'
    },
    
    'pinia': {
        title: 'Pinia (State Management)',
        category: 'Gerenciamento de Estado',
        description: 'Store oficial do Vue 3, sucessor do Vuex, com API mais simples e melhor suporte ao TypeScript.',
        features: [
            'API intuitiva com setup stores',
            'TypeScript inferido automaticamente',
            'DevTools integration',
            'Hot Module Replacement',
            'Plugins extensíveis',
            'Server-Side Rendering'
        ],
        useCases: [
            'Estado global em aplicações Vue',
            'Compartilhamento de estado entre componentes',
            'Cache de dados',
            'Sincronização com backend'
        ],
        resources: [
            { name: 'Pinia Docs', url: 'https://pinia.vuejs.org/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'vue-router': {
        title: 'Vue Router',
        category: 'Roteamento',
        description: 'Biblioteca oficial de roteamento para Vue.js, essencial para Single Page Applications.',
        features: [
            'Rotas dinâmicas e aninhadas',
            'Navigation Guards',
            'Lazy loading de componentes',
            'Hash mode e History mode',
            'Scroll behavior',
            'TypeScript support'
        ],
        useCases: [
            'SPAs com múltiplas páginas',
            'Navegação programática',
            'Proteção de rotas (autenticação)',
            'Transições entre páginas'
        ],
        resources: [
            { name: 'Vue Router Docs', url: 'https://router.vuejs.org/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1-2 semanas'
    },
    
    // ANGULAR ECOSYSTEM
    'angular': {
        title: 'Ecossistema Angular',
        category: 'Framework',
        description: 'Framework completo do Google para desenvolvimento de aplicações web escaláveis e de nível empresarial.',
        features: [
            'Framework completo (bateria incluída)',
            'TypeScript obrigatório',
            'Dependency Injection',
            'RxJS para programação reativa',
            'CLI poderoso',
            'Ecossistema oficial completo'
        ],
        useCases: [
            'Aplicações empresariais',
            'Dashboards complexos',
            'Sistemas bancários e financeiros',
            'Aplicações de grande escala'
        ],
        resources: [
            { name: 'Angular Docs', url: 'https://angular.io/' },
            { name: 'Angular University', url: 'https://angular-university.io/' }
        ],
        difficulty: 'Avançado',
        learningTime: '6-8 semanas'
    },
    
    'angular17': {
        title: 'Angular 17+',
        category: 'Framework',
        description: 'Versão mais recente do Angular com Signals, performance aprimorada e melhor experiência de desenvolvimento.',
        features: [
            'Signals para reatividade',
            'Standalone Components (sem modules)',
            'Melhor performance de renderização',
            'Control Flow simplificado (@if, @for)',
            'Defer loading',
            'SSR e Hydration aprimorados'
        ],
        useCases: [
            'Migração de aplicações Angular antigas',
            'Novas aplicações enterprise',
            'Aplicações que necessitam SSR',
            'Projetos com requisitos de performance'
        ],
        resources: [
            { name: 'Angular 17 Release', url: 'https://blog.angular.io/introducing-angular-v17-4d7033312e4b' }
        ],
        difficulty: 'Avançado',
        learningTime: '4-6 semanas'
    },
    
    'signals': {
        title: 'Signals',
        category: 'Reatividade',
        description: 'Sistema de reatividade moderno usado no Angular 17+ e outros frameworks, oferecendo granularidade e performance.',
        features: [
            'Reatividade granular',
            'Performance otimizada',
            'API simples (signal, computed, effect)',
            'Melhor debugging',
            'Sem virtual DOM'
        ],
        useCases: [
            'Estado reativo eficiente',
            'Componentes de alta performance',
            'Computed values',
            'Side effects controlados'
        ],
        resources: [
            { name: 'Angular Signals', url: 'https://angular.io/guide/signals' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'rxjs': {
        title: 'RxJS',
        category: 'Programação Reativa',
        description: 'Biblioteca de programação reativa usando Observables, essencial no ecossistema Angular.',
        features: [
            'Observables e Subjects',
            'Operadores (map, filter, switchMap, etc)',
            'Composição de streams',
            'Gerenciamento de subscrições',
            'Error handling robusto'
        ],
        useCases: [
            'Requisições HTTP complexas',
            'WebSockets e eventos em tempo real',
            'Formulários reativos',
            'Autocomplete e debouncing'
        ],
        resources: [
            { name: 'RxJS Docs', url: 'https://rxjs.dev/' },
            { name: 'Learn RxJS', url: 'https://www.learnrxjs.io/' }
        ],
        difficulty: 'Avançado',
        learningTime: '4-6 semanas'
    },
    
    'ngrx': {
        title: 'NgRx/Service Management',
        category: 'Gerenciamento de Estado',
        description: 'Gerenciamento de estado reativo para Angular, inspirado no Redux e usando RxJS.',
        features: [
            'Redux pattern com RxJS',
            'Store global imutável',
            'Effects para side effects',
            'Entity adapter',
            'DevTools poderoso',
            'Signals integration (novo)'
        ],
        useCases: [
            'Aplicações Angular complexas',
            'Estado compartilhado entre módulos',
            'Aplicações enterprise',
            'Auditoria de mudanças de estado'
        ],
        resources: [
            { name: 'NgRx Docs', url: 'https://ngrx.io/' }
        ],
        difficulty: 'Avançado',
        learningTime: '3-4 semanas'
    },
    
    // EMERGING FRAMEWORKS
    'emerging': {
        title: 'Frameworks Emergentes',
        category: 'Frameworks',
        description: 'Novos frameworks que trazem abordagens inovadoras para o desenvolvimento frontend.',
        features: [
            'Arquiteturas inovadoras',
            'Foco em performance',
            'Bundle sizes reduzidos',
            'Developer experience aprimorada',
            'Soluções para problemas modernos'
        ],
        useCases: [
            'Projetos que buscam máxima performance',
            'Aplicações edge-first',
            'Sites de conteúdo otimizados',
            'Experimentação e inovação'
        ],
        resources: [
            { name: 'State of JS', url: 'https://stateofjs.com/' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '2-4 semanas (por framework)'
    },
    
    'svelte': {
        title: 'Svelte & SvelteKit',
        category: 'Framework',
        description: 'Compilador que transforma componentes em código imperativo altamente otimizado, sem virtual DOM.',
        features: [
            'Sem virtual DOM (compilador)',
            'Reatividade nativa',
            'Sintaxe simples e intuitiva',
            'SvelteKit para aplicações full-stack',
            'Bundle sizes minúsculos',
            'Transições e animações built-in'
        ],
        useCases: [
            'Sites de alta performance',
            'Aplicações interativas',
            'Componentes web',
            'Projetos que priorizam bundle size'
        ],
        resources: [
            { name: 'Svelte Docs', url: 'https://svelte.dev/' },
            { name: 'SvelteKit Docs', url: 'https://kit.svelte.dev/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'solidjs': {
        title: 'Solid.js',
        category: 'Framework',
        description: 'Framework reativo ultra-performático com sintaxe similar ao React mas sem virtual DOM.',
        features: [
            'Reatividade granular e fine-grained',
            'Sem virtual DOM',
            'JSX syntax',
            'Performance excepcional',
            'Bundle size pequeno',
            'Hooks-like API'
        ],
        useCases: [
            'Aplicações que exigem máxima performance',
            'Interfaces altamente interativas',
            'Dashboards em tempo real',
            'Animações complexas'
        ],
        resources: [
            { name: 'Solid.js Docs', url: 'https://www.solidjs.com/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'qwik': {
        title: 'Qwik',
        category: 'Framework',
        description: 'Framework focado em resumabilidade, com hydration instantânea e JavaScript sob demanda.',
        features: [
            'Resumable architecture (sem hydration)',
            'JavaScript loading sob demanda',
            'Performance imediata',
            'Compatível com React',
            'Otimizado para edge',
            'Zero JavaScript inicial'
        ],
        useCases: [
            'Sites de conteúdo',
            'E-commerce de alta escala',
            'Aplicações edge-first',
            'Performance extrema'
        ],
        resources: [
            { name: 'Qwik Docs', url: 'https://qwik.builder.io/' }
        ],
        difficulty: 'Avançado',
        learningTime: '3-4 semanas'
    },
    
    'astro': {
        title: 'Astro (Islands Architecture)',
        category: 'Framework',
        description: 'Framework para sites de conteúdo que envia zero JavaScript por padrão, usando Islands Architecture.',
        features: [
            'Zero JavaScript por padrão',
            'Islands Architecture',
            'Suporte a múltiplos frameworks (React, Vue, Svelte)',
            'Partial Hydration',
            'Content Collections',
            'Otimização automática'
        ],
        useCases: [
            'Blogs e sites de conteúdo',
            'Documentação',
            'Landing pages',
            'Marketing websites',
            'Sites focados em performance'
        ],
        resources: [
            { name: 'Astro Docs', url: 'https://docs.astro.build/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    // BUILD TOOLS
    'build-systems': {
        title: 'Sistemas de Build',
        category: 'Ferramentas',
        description: 'Ferramentas que processam, empacotam e otimizam código para produção.',
        features: [
            'Bundling de módulos',
            'Transpilação (Babel, TypeScript)',
            'Minificação e otimização',
            'Hot Module Replacement (HMR)',
            'Code splitting',
            'Tree shaking'
        ],
        useCases: [
            'Preparação de código para produção',
            'Desenvolvimento local',
            'Otimização de assets',
            'Suporte a navegadores antigos'
        ],
        resources: [
            { name: 'Tooling Report', url: 'https://bundlers.tooling.report/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-4 semanas'
    },
    
    'vite': {
        title: 'Vite',
        category: 'Build Tool',
        description: 'Build tool moderno extremamente rápido, usando ESM nativo durante desenvolvimento.',
        features: [
            'Dev server instantâneo',
            'HMR ultra-rápido',
            'Build otimizado com Rollup',
            'Suporte a TypeScript, JSX, CSS',
            'Plugin ecosystem rico',
            'Framework agnostic'
        ],
        useCases: [
            'Projetos React, Vue, Svelte',
            'Bibliotecas JavaScript',
            'Desenvolvimento rápido',
            'Aplicações modernas'
        ],
        resources: [
            { name: 'Vite Docs', url: 'https://vitejs.dev/' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'webpack': {
        title: 'Webpack 5',
        category: 'Build Tool',
        description: 'Bundler mais estabelecido do ecossistema JavaScript, altamente configurável e poderoso.',
        features: [
            'Module Federation',
            'Persistent caching',
            'Asset modules',
            'Loaders e plugins extensíveis',
            'Code splitting avançado',
            'Otimizações automáticas'
        ],
        useCases: [
            'Aplicações complexas e grandes',
            'Micro-frontends',
            'Projetos com requisitos específicos de build',
            'Migração de projetos legados'
        ],
        resources: [
            { name: 'Webpack Docs', url: 'https://webpack.js.org/' }
        ],
        difficulty: 'Avançado',
        learningTime: '4-6 semanas'
    },
    
    'parcel': {
        title: 'Parcel',
        category: 'Build Tool',
        description: 'Bundler zero-config que funciona out-of-the-box com configuração mínima.',
        features: [
            'Zero configuração',
            'Suporte automático a múltiplos formatos',
            'HMR built-in',
            'Code splitting automático',
            'Caching inteligente',
            'Resolução de dependências automática'
        ],
        useCases: [
            'Protótipos rápidos',
            'Pequenos projetos',
            'Desenvolvedores iniciantes',
            'Aplicações simples'
        ],
        resources: [
            { name: 'Parcel Docs', url: 'https://parceljs.org/' }
        ],
        difficulty: 'Iniciante',
        learningTime: '1 semana'
    },
    
    'turbopack': {
        title: 'Turbopack',
        category: 'Build Tool',
        description: 'Sucessor do Webpack escrito em Rust, focado em velocidade extrema (desenvolvido pela Vercel).',
        features: [
            'Performance extrema (escrito em Rust)',
            'Incremental bundling',
            'HMR instantâneo',
            'Compatibilidade com Webpack',
            'Otimizações automáticas',
            'Integração nativa com Next.js'
        ],
        useCases: [
            'Projetos Next.js de grande escala',
            'Aplicações que necessitam build rápido',
            'Migração futura de Webpack',
            'Desenvolvimento com grandes codebases'
        ],
        resources: [
            { name: 'Turbopack Docs', url: 'https://turbo.build/pack' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1-2 semanas'
    },
    
    // PACKAGE MANAGERS
    'package-managers': {
        title: 'Gerenciadores de Pacotes',
        category: 'Ferramentas',
        description: 'Ferramentas para instalação, gerenciamento e versionamento de dependências JavaScript.',
        features: [
            'Instalação de dependências',
            'Gerenciamento de versões',
            'Scripts customizados',
            'Lockfiles para reprodutibilidade',
            'Workspaces para monorepos',
            'Cache de pacotes'
        ],
        useCases: [
            'Gerenciamento de dependências',
            'Monorepos',
            'CI/CD pipelines',
            'Publicação de pacotes'
        ],
        resources: [
            { name: 'npm Docs', url: 'https://docs.npmjs.com/' }
        ],
        difficulty: 'Iniciante',
        learningTime: '1 semana'
    },
    
    'npm': {
        title: 'npm',
        category: 'Package Manager',
        description: 'Gerenciador de pacotes padrão do Node.js, com o maior registro de pacotes JavaScript do mundo.',
        features: [
            'Registry com milhões de pacotes',
            'Scripts npm',
            'Workspaces (monorepos)',
            'Audit de segurança',
            'package-lock.json',
            'npx para execução de pacotes'
        ],
        useCases: [
            'Projetos Node.js e frontend',
            'Instalação de dependências',
            'Publicação de pacotes',
            'Execução de scripts'
        ],
        resources: [
            { name: 'npm Docs', url: 'https://docs.npmjs.com/' }
        ],
        difficulty: 'Iniciante',
        learningTime: '1 semana'
    },
    
    'yarn': {
        title: 'yarn (berry)',
        category: 'Package Manager',
        description: 'Gerenciador de pacotes rápido e seguro, com recursos avançados na versão berry (v2+).',
        features: [
            'Plug\'n\'Play (PnP) para instalações instantâneas',
            'Zero-installs com commits de .yarn',
            'Workspaces avançados',
            'Constraints e policies',
            'Melhor performance',
            'Plugins extensíveis'
        ],
        useCases: [
            'Monorepos complexos',
            'Projetos que priorizam velocidade',
            'Empresas com políticas de dependências',
            'Desenvolvimento colaborativo'
        ],
        resources: [
            { name: 'Yarn Docs', url: 'https://yarnpkg.com/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'pnpm': {
        title: 'pnpm',
        category: 'Package Manager',
        description: 'Gerenciador de pacotes eficiente que economiza espaço em disco usando hard links.',
        features: [
            'Content-addressable storage (economiza disco)',
            'Isolamento estrito de dependências',
            'Performance superior',
            'Workspaces monorepo',
            'Compatibilidade com npm',
            'Menor uso de disco e RAM'
        ],
        useCases: [
            'Múltiplos projetos no mesmo sistema',
            'Monorepos',
            'CI/CD rápido',
            'Projetos com muitas dependências'
        ],
        resources: [
            { name: 'pnpm Docs', url: 'https://pnpm.io/' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '1 semana'
    },

    
    // DEVELOPMENT TOOLS
    'dev-tools': {
        title: 'Ferramentas de Desenvolvimento',
        category: 'Ferramentas',
        description: 'Conjunto essencial de ferramentas que melhoram a produtividade e qualidade do código durante o desenvolvimento.',
        features: [
            'Editores de código avançados',
            'DevTools de navegadores',
            'Linters e formatadores',
            'Debuggers integrados',
            'Extensions e plugins',
            'Git hooks para automação'
        ],
        useCases: [
            'Desenvolvimento diário',
            'Debugging de aplicações',
            'Padronização de código',
            'Automação de tarefas'
        ],
        resources: [
            { name: 'VS Code', url: 'https://code.visualstudio.com/' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '2-4 semanas'
    },
    
    'vscode': {
        title: 'VS Code & Extensions',
        category: 'Editor',
        description: 'Editor de código mais popular, altamente extensível com milhares de extensões disponíveis.',
        features: [
            'IntelliSense inteligente',
            'Debugging integrado',
            'Git integration',
            'Terminal integrado',
            'Extensions marketplace',
            'Remote development (SSH, containers)'
        ],
        useCases: [
            'Desenvolvimento web frontend/backend',
            'Pair programming (Live Share)',
            'Desenvolvimento remoto',
            'Integração com DevOps'
        ],
        resources: [
            { name: 'VS Code Docs', url: 'https://code.visualstudio.com/docs' },
            { name: 'Extensions Marketplace', url: 'https://marketplace.visualstudio.com/' }
        ],
        difficulty: 'Iniciante',
        learningTime: '1-2 semanas'
    },
    
    'chrome-devtools': {
        title: 'Chrome DevTools',
        category: 'Debugging',
        description: 'Conjunto de ferramentas de desenvolvimento integrado ao Chrome para debugging, profiling e otimização.',
        features: [
            'Elements inspector',
            'Console para debugging',
            'Network tab para análise de requisições',
            'Performance profiler',
            'Memory profiler',
            'Application storage inspector'
        ],
        useCases: [
            'Debugging de JavaScript',
            'Análise de performance',
            'Inspeção de requisições HTTP',
            'Teste de layouts responsivos'
        ],
        resources: [
            { name: 'Chrome DevTools Docs', url: 'https://developer.chrome.com/docs/devtools/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'framework-devtools': {
        title: 'React/Vue DevTools',
        category: 'Debugging',
        description: 'Extensões de navegador específicas para debugging de aplicações React e Vue.',
        features: [
            'Inspeção de component tree',
            'Props e state debugging',
            'Performance profiling',
            'Hooks inspection (React)',
            'Vuex/Pinia inspection (Vue)',
            'Time-travel debugging'
        ],
        useCases: [
            'Debugging de componentes',
            'Análise de re-renders',
            'Inspeção de estado global',
            'Otimização de performance'
        ],
        resources: [
            { name: 'React DevTools', url: 'https://react.dev/learn/react-developer-tools' },
            { name: 'Vue DevTools', url: 'https://devtools.vuejs.org/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1 semana'
    },
    
    'eslint-prettier': {
        title: 'ESLint & Prettier',
        category: 'Code Quality',
        description: 'Ferramentas essenciais para linting e formatação automática de código JavaScript/TypeScript.',
        features: [
            'ESLint: detecção de erros e problemas',
            'Prettier: formatação consistente',
            'Regras customizáveis',
            'Integração com editors',
            'Auto-fix de problemas',
            'Suporte a TypeScript'
        ],
        useCases: [
            'Padronização de código em equipes',
            'Prevenção de bugs',
            'Code reviews automatizados',
            'Formatação automática ao salvar'
        ],
        resources: [
            { name: 'ESLint', url: 'https://eslint.org/' },
            { name: 'Prettier', url: 'https://prettier.io/' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'husky': {
        title: 'Husky Git Hooks',
        category: 'Automação',
        description: 'Ferramenta para gerenciar Git hooks facilmente, automatizando tarefas antes de commits e pushes.',
        features: [
            'Pre-commit hooks',
            'Pre-push hooks',
            'Commit message linting',
            'Integração com lint-staged',
            'Fácil configuração',
            'Prevenção de commits com problemas'
        ],
        useCases: [
            'Executar testes antes de commit',
            'Validar código com linter',
            'Formatar código automaticamente',
            'Validar mensagens de commit'
        ],
        resources: [
            { name: 'Husky Docs', url: 'https://typicode.github.io/husky/' }
        ],
        difficulty: 'Iniciante',
        learningTime: '1 semana'
    },
    
    // STYLING SOLUTIONS
    'css-frameworks': {
        title: 'Frameworks CSS',
        category: 'Estilização',
        description: 'Frameworks e bibliotecas que facilitam a estilização de aplicações web com abordagens diversas.',
        features: [
            'Utility-first vs Component-based',
            'CSS-in-JS solutions',
            'Atomic CSS',
            'Design tokens',
            'Tema e customização',
            'Performance otimizada'
        ],
        useCases: [
            'Prototipação rápida',
            'Design systems',
            'Aplicações escaláveis',
            'Consistência visual'
        ],
        resources: [
            { name: 'State of CSS', url: 'https://stateofcss.com/' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '2-4 semanas'
    },
    
    'tailwind': {
        title: 'Tailwind CSS',
        category: 'CSS Framework',
        description: 'Framework CSS utility-first que permite construir interfaces customizadas rapidamente sem sair do HTML.',
        features: [
            'Utility classes (px-4, flex, grid)',
            'Customização via config',
            'JIT (Just-In-Time) compiler',
            'Plugins ecosystem',
            'Purge CSS automático',
            'Responsive e dark mode built-in'
        ],
        useCases: [
            'Prototipação rápida',
            'Design systems customizados',
            'Landing pages',
            'Aplicações modernas'
        ],
        resources: [
            { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
            { name: 'Tailwind UI', url: 'https://tailwindui.com/' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'css-in-js': {
        title: 'CSS-in-JS (Styled-components, Emotion)',
        category: 'Estilização',
        description: 'Abordagem que permite escrever CSS dentro do JavaScript, com escopo e temas dinâmicos.',
        features: [
            'Scoped styles por componente',
            'Temas dinâmicos',
            'Props-based styling',
            'SSR support',
            'Critical CSS automático',
            'TypeScript support'
        ],
        useCases: [
            'Componentes React com estilos isolados',
            'Design systems dinâmicos',
            'Temas customizáveis',
            'Aplicações component-driven'
        ],
        resources: [
            { name: 'Styled Components', url: 'https://styled-components.com/' },
            { name: 'Emotion', url: 'https://emotion.sh/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'unocss': {
        title: 'UnoCSS',
        category: 'CSS Engine',
        description: 'Engine CSS atômico instantâneo e altamente customizável, sucessor espiritual do Windi CSS.',
        features: [
            'Performance extrema',
            'Presets customizáveis',
            'Ícones como classes',
            'Variants e shortcuts',
            'Compatível com Tailwind',
            'Zero runtime'
        ],
        useCases: [
            'Projetos que priorizam velocidade de build',
            'Design systems customizados',
            'Aplicações Vue/React/Svelte',
            'Monorepos'
        ],
        resources: [
            { name: 'UnoCSS', url: 'https://unocss.dev/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'panda-css': {
        title: 'Panda CSS',
        category: 'CSS Framework',
        description: 'Framework CSS-in-JS build-time com type-safety e zero runtime, combinando melhor dos dois mundos.',
        features: [
            'Zero runtime (build-time)',
            'Type-safe styling',
            'Atomic CSS output',
            'Recipes e variants',
            'Design tokens',
            'Framework agnostic'
        ],
        useCases: [
            'Projetos TypeScript',
            'Performance crítica',
            'Design systems type-safe',
            'Aplicações modernas'
        ],
        resources: [
            { name: 'Panda CSS', url: 'https://panda-css.com/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1-2 semanas'
    },
    
    // UI LIBRARIES
    'ui-libraries': {
        title: 'Bibliotecas UI & Componentes',
        category: 'UI Components',
        description: 'Bibliotecas de componentes prontos que aceleram o desenvolvimento com componentes acessíveis e customizáveis.',
        features: [
            'Componentes prontos para uso',
            'Acessibilidade (a11y) integrada',
            'Temas customizáveis',
            'Documentação completa',
            'TypeScript support',
            'Responsividade built-in'
        ],
        useCases: [
            'Prototipação rápida',
            'Dashboards administrativos',
            'Aplicações empresariais',
            'Produtos SaaS'
        ],
        resources: [
            { name: 'UI Libraries Comparison', url: 'https://component.gallery/' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '1-3 semanas'
    },
    
    'shadcn': {
        title: 'Shadcn/ui',
        category: 'Component Library',
        description: 'Coleção de componentes reutilizáveis construídos com Radix UI e Tailwind CSS, copiáveis para seu projeto.',
        features: [
            'Copy-paste components (não é npm package)',
            'Radix UI + Tailwind CSS',
            'Totalmente customizável',
            'Acessibilidade nativa',
            'Dark mode',
            'TypeScript'
        ],
        useCases: [
            'Projetos React com Tailwind',
            'Design systems próprios',
            'Aplicações modernas',
            'Controle total sobre código'
        ],
        resources: [
            { name: 'Shadcn/ui', url: 'https://ui.shadcn.com/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'radix': {
        title: 'Radix UI (Headless)',
        category: 'Headless UI',
        description: 'Componentes UI sem estilo (headless) com acessibilidade completa, perfeitos para design systems customizados.',
        features: [
            'Headless (sem estilos)',
            'WAI-ARIA compliant',
            'Navegação por teclado',
            'Focus management',
            'Composable primitives',
            'Framework agnostic'
        ],
        useCases: [
            'Design systems customizados',
            'Componentes acessíveis do zero',
            'Controle total de estilos',
            'Produtos que exigem acessibilidade'
        ],
        resources: [
            { name: 'Radix UI', url: 'https://www.radix-ui.com/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'mui': {
        title: 'Material-UI (MUI)',
        category: 'Component Library',
        description: 'Biblioteca de componentes React baseada no Material Design do Google, rica e completa.',
        features: [
            'Material Design guidelines',
            'Componentes ricos (100+)',
            'Temas customizáveis',
            'Grid system robusto',
            'Data Grid avançado',
            'Documentação extensa'
        ],
        useCases: [
            'Dashboards empresariais',
            'Aplicações admin',
            'Produtos SaaS',
            'Projetos que seguem Material Design'
        ],
        resources: [
            { name: 'MUI', url: 'https://mui.com/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'chakra': {
        title: 'Chakra UI',
        category: 'Component Library',
        description: 'Biblioteca de componentes React modular, acessível e customizável com foco em developer experience.',
        features: [
            'Design system completo',
            'Style props (sx)',
            'Dark mode nativo',
            'Composable components',
            'Acessibilidade prioritária',
            'TypeScript'
        ],
        useCases: [
            'Aplicações React modernas',
            'Prototipação rápida',
            'Design systems',
            'Projetos que valorizam DX'
        ],
        resources: [
            { name: 'Chakra UI', url: 'https://chakra-ui.com/' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'antd': {
        title: 'Ant Design',
        category: 'Component Library',
        description: 'Sistema de design empresarial da Alibaba com componentes ricos para React, Vue e Angular.',
        features: [
            'Design language empresarial',
            'Componentes complexos (Table, Form)',
            'Internacionalização',
            'Temas customizáveis',
            'Icons library',
            'ProComponents para casos avançados'
        ],
        useCases: [
            'Aplicações empresariais',
            'Sistemas de gestão',
            'Dashboards complexos',
            'Admin panels'
        ],
        resources: [
            { name: 'Ant Design', url: 'https://ant.design/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    // CSS ARCHITECTURE
    'css-architecture': {
        title: 'Arquitetura CSS',
        category: 'Metodologia',
        description: 'Metodologias e padrões para organizar CSS de forma escalável e manutenível em projetos grandes.',
        features: [
            'Nomenclatura padronizada',
            'Modularização',
            'Reutilização de código',
            'Especificidade controlada',
            'Escalabilidade',
            'Manutenibilidade'
        ],
        useCases: [
            'Projetos de grande escala',
            'Equipes de múltiplos desenvolvedores',
            'Design systems',
            'Código CSS organizado'
        ],
        resources: [
            { name: 'CSS Guidelines', url: 'https://cssguidelin.es/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'bem': {
        title: 'BEM Methodology',
        category: 'Metodologia CSS',
        description: 'Block Element Modifier - metodologia de nomenclatura CSS que cria código reutilizável e manutenível.',
        features: [
            'Block__Element--Modifier syntax',
            'Evita conflitos de nomes',
            'Código auto-documentado',
            'Fácil de entender e manter',
            'Componentes reutilizáveis',
            'Baixa especificidade'
        ],
        useCases: [
            'Projetos de médio a grande porte',
            'Componentes reutilizáveis',
            'Colaboração em equipe',
            'Evitar CSS global'
        ],
        resources: [
            { name: 'BEM', url: 'https://getbem.com/' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '1 semana'
    },
    
    'css-modules': {
        title: 'CSS Modules',
        category: 'Metodologia CSS',
        description: 'Sistema que torna CSS modular por padrão, com escopo local automático para evitar conflitos.',
        features: [
            'Escopo local automático',
            'Class names únicos',
            'Composição de estilos',
            'Integração com bundlers',
            'Zero configuração',
            'Type-safe com TypeScript'
        ],
        useCases: [
            'Componentes React/Vue',
            'Evitar conflitos de CSS',
            'Modularização automática',
            'Projetos que usam Webpack/Vite'
        ],
        resources: [
            { name: 'CSS Modules', url: 'https://github.com/css-modules/css-modules' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '1 semana'
    },
    
    'utility-first': {
        title: 'Utility-First CSS',
        category: 'Abordagem CSS',
        description: 'Abordagem de escrever CSS usando classes utilitárias de propósito único ao invés de componentes semânticos.',
        features: [
            'Classes single-purpose',
            'Composição no HTML',
            'Menor CSS bundle',
            'Rápida prototipação',
            'Consistência visual',
            'Menos context switching'
        ],
        useCases: [
            'Tailwind CSS',
            'Prototipação rápida',
            'Consistência em design',
            'Projetos com mudanças frequentes'
        ],
        resources: [
            { name: 'Utility-First CSS', url: 'https://tailwindcss.com/docs/utility-first' }
        ],
        difficulty: 'Iniciante',
        learningTime: '1-2 semanas'
    },
    
    'design-systems': {
        title: 'Design Systems',
        category: 'Sistema',
        description: 'Coleção de componentes reutilizáveis, guias de estilo e padrões que garantem consistência em produtos.',
        features: [
            'Component library',
            'Design tokens',
            'Documentação de padrões',
            'Guias de estilo',
            'Acessibilidade guidelines',
            'Versionamento'
        ],
        useCases: [
            'Produtos com múltiplas plataformas',
            'Grandes empresas',
            'Consistência de marca',
            'Escalabilidade de design'
        ],
        resources: [
            { name: 'Design Systems Repo', url: 'https://designsystemsrepo.com/' }
        ],
        difficulty: 'Avançado',
        learningTime: '8-12 semanas (criação completa)'
    },
    
    // STATE MANAGEMENT & DATA FETCHING
    'client-state': {
        title: 'Estado do Cliente',
        category: 'State Management',
        description: 'Gerenciamento de estado local da aplicação (UI state, forms, cached data) no lado do cliente.',
        features: [
            'Global state management',
            'Local component state',
            'Computed values',
            'State persistence',
            'DevTools integration',
            'TypeScript support'
        ],
        useCases: [
            'Estado de UI (modals, sidebars)',
            'Formulários complexos',
            'Temas e preferências',
            'Estado compartilhado entre componentes'
        ],
        resources: [
            { name: 'State Management Guide', url: 'https://redux.js.org/introduction/getting-started' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-4 semanas'
    },
    
    'zustand': {
        title: 'Zustand',
        category: 'State Management',
        description: 'Solução minimalista de state management com API simples e performance excepcional.',
        features: [
            'API extremamente simples',
            'Sem boilerplate',
            'React hooks nativo',
            'Middleware support',
            'Persist, devtools',
            'TypeScript inferido'
        ],
        useCases: [
            'Projetos React de todos tamanhos',
            'Alternativa leve ao Redux',
            'Estado global simples',
            'Aplicações modernas'
        ],
        resources: [
            { name: 'Zustand', url: 'https://zustand-demo.pmnd.rs/' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '1 semana'
    },
    
    'jotai': {
        title: 'Jotai',
        category: 'State Management',
        description: 'State management atômico e primitivo para React, inspirado no Recoil.',
        features: [
            'Atomic state model',
            'API minimalista',
            'Derived atoms',
            'Async support nativo',
            'TypeScript first',
            'Sem boilerplate'
        ],
        useCases: [
            'Estado granular e específico',
            'Aplicações React com múltiplas fontes de estado',
            'Computed values complexos',
            'Performance otimizada'
        ],
        resources: [
            { name: 'Jotai', url: 'https://jotai.org/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'redux-toolkit': {
        title: 'Redux Toolkit',
        category: 'State Management',
        description: 'Forma oficial e recomendada de usar Redux, com menos boilerplate e melhores padrões.',
        features: [
            'createSlice API simplificada',
            'Immer para imutabilidade',
            'Redux DevTools integrado',
            'RTK Query para data fetching',
            'Middleware configurável',
            'TypeScript support'
        ],
        useCases: [
            'Aplicações React complexas',
            'Estado global grande',
            'Time-travel debugging',
            'Aplicações enterprise'
        ],
        resources: [
            { name: 'Redux Toolkit', url: 'https://redux-toolkit.js.org/' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '3-4 semanas'
    },
    
    'context-api': {
        title: 'Context API',
        category: 'State Management',
        description: 'API nativa do React para compartilhar dados entre componentes sem prop drilling.',
        features: [
            'Nativo do React',
            'Zero dependências externas',
            'Provider/Consumer pattern',
            'useContext hook',
            'Ideal para temas e autenticação',
            'Simples de implementar'
        ],
        useCases: [
            'Temas (dark/light mode)',
            'Autenticação de usuário',
            'Internacionalização (i18n)',
            'Estado compartilhado leve'
        ],
        resources: [
            { name: 'React Context', url: 'https://react.dev/reference/react/useContext' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '1 semana'
    },
    
    'signals-state': {
        title: 'Signals',
        category: 'State Management',
        description: 'Sistema de reatividade moderno e performático usado em frameworks como Solid.js e Angular 17+.',
        features: [
            'Reatividade fine-grained',
            'Auto-tracking de dependências',
            'Performance otimizada',
            'Computed values',
            'Effects declarativos',
            'Menor re-renderização'
        ],
        useCases: [
            'Estado reativo performático',
            'Aplicações com muita interatividade',
            'Otimização de renders',
            'Frameworks modernos'
        ],
        resources: [
            { name: 'Signals Proposal', url: 'https://github.com/tc39/proposal-signals' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'server-state': {
        title: 'Estado do Servidor',
        category: 'Data Fetching',
        description: 'Gerenciamento de dados assíncronos vindos do servidor (cache, sincronização, atualizações).',
        features: [
            'Cache automático',
            'Revalidação de dados',
            'Optimistic updates',
            'Infinite scroll',
            'Paginação',
            'Prefetching'
        ],
        useCases: [
            'Dados de APIs REST/GraphQL',
            'Sincronização com backend',
            'Dashboards em tempo real',
            'Aplicações data-driven'
        ],
        resources: [
            { name: 'TanStack Query', url: 'https://tanstack.com/query/latest' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'tanstack-query': {
        title: 'TanStack Query (React Query)',
        category: 'Data Fetching',
        description: 'Biblioteca poderosa para fetching, caching, sincronização e atualização de server state.',
        features: [
            'Cache inteligente',
            'Auto refetch',
            'Optimistic updates',
            'Infinite queries',
            'Prefetching',
            'DevTools integrado'
        ],
        useCases: [
            'Aplicações com muitas requisições',
            'Dashboards',
            'Listagens paginadas',
            'Real-time data'
        ],
        resources: [
            { name: 'TanStack Query', url: 'https://tanstack.com/query/latest' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'swr': {
        title: 'SWR',
        category: 'Data Fetching',
        description: 'React Hooks library para data fetching criada pela Vercel, focada em simplicidade.',
        features: [
            'Stale-While-Revalidate strategy',
            'Cache e revalidação',
            'Real-time updates',
            'Pagination e infinite loading',
            'Suspense support',
            'TypeScript ready'
        ],
        useCases: [
            'Projetos Next.js',
            'Fetching simples e rápido',
            'Real-time dashboards',
            'Aplicações Jamstack'
        ],
        resources: [
            { name: 'SWR', url: 'https://swr.vercel.app/' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'apollo': {
        title: 'Apollo Client (GraphQL)',
        category: 'GraphQL Client',
        description: 'Cliente GraphQL completo com cache inteligente, state management e DevTools.',
        features: [
            'Normalized cache',
            'Queries e Mutations',
            'Subscriptions para real-time',
            'Local state management',
            'Apollo DevTools',
            'Type generation'
        ],
        useCases: [
            'Aplicações GraphQL',
            'Apps com requisitos complexos de data',
            'Real-time features',
            'Estado local + remoto'
        ],
        resources: [
            { name: 'Apollo Client', url: 'https://www.apollographql.com/docs/react/' }
        ],
        difficulty: 'Avançado',
        learningTime: '4-6 semanas'
    },
    
    'rtk-query': {
        title: 'RTK Query',
        category: 'Data Fetching',
        description: 'Solução de data fetching e caching integrada ao Redux Toolkit.',
        features: [
            'Integração com Redux',
            'Auto-generated hooks',
            'Cache e invalidação',
            'Polling automático',
            'Optimistic updates',
            'Code generation'
        ],
        useCases: [
            'Projetos que já usam Redux',
            'APIs REST',
            'Cache centralizado',
            'Aplicações enterprise'
        ],
        resources: [
            { name: 'RTK Query', url: 'https://redux-toolkit.js.org/rtk-query/overview' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '2-3 semanas'
    },
    
    'data-flow': {
        title: 'Padrões de Fluxo de Dados',
        category: 'Arquitetura',
        description: 'Padrões e técnicas para gerenciar o fluxo de dados em aplicações frontend complexas.',
        features: [
            'Unidirectional data flow',
            'Props drilling solutions',
            'State lifting',
            'Component composition',
            'Event emitters',
            'State machines'
        ],
        useCases: [
            'Arquitetura de aplicações',
            'Organização de código',
            'Previsibilidade de estado',
            'Debugging facilitado'
        ],
        resources: [
            { name: 'React Data Flow', url: 'https://react.dev/learn/sharing-state-between-components' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '3-4 semanas'
    },
    
    'prop-drilling': {
        title: 'Soluções para Prop Drilling',
        category: 'Pattern',
        description: 'Técnicas para evitar passar props através de múltiplos níveis de componentes.',
        features: [
            'Context API',
            'Component composition',
            'Render props',
            'State management libraries',
            'Custom hooks',
            'Slots pattern'
        ],
        useCases: [
            'Componentes profundamente aninhados',
            'Estado compartilhado',
            'Simplificação de props',
            'Código mais limpo'
        ],
        resources: [
            { name: 'Avoiding Prop Drilling', url: 'https://kentcdodds.com/blog/prop-drilling' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'global-local': {
        title: 'Estado Global vs Local',
        category: 'Conceito',
        description: 'Entender quando usar estado global compartilhado versus estado local de componente.',
        features: [
            'Estado local (useState)',
            'Estado global (Redux, Zustand)',
            'Server state (React Query)',
            'URL state (Router)',
            'Form state',
            'Derived state'
        ],
        useCases: [
            'Decisões de arquitetura',
            'Performance optimization',
            'Organização de estado',
            'Escalabilidade'
        ],
        resources: [
            { name: 'State Colocation', url: 'https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'xstate': {
        title: 'State Machines (XState)',
        category: 'State Management',
        description: 'Biblioteca para criar state machines e statecharts, tornando lógica complexa previsível.',
        features: [
            'Finite state machines',
            'Statecharts hierárquicos',
            'Visualização de estados',
            'Previsibilidade',
            'Testabilidade',
            'Framework agnostic'
        ],
        useCases: [
            'Fluxos complexos (checkout, onboarding)',
            'Máquinas de estado',
            'Lógica de negócio complexa',
            'Processos multi-step'
        ],
        resources: [
            { name: 'XState', url: 'https://xstate.js.org/' },
            { name: 'Visualizer', url: 'https://stately.ai/viz' }
        ],
        difficulty: 'Avançado',
        learningTime: '4-6 semanas'
    },
    
    'optimistic': {
        title: 'Optimistic Updates',
        category: 'Pattern',
        description: 'Técnica de atualizar a UI imediatamente antes da confirmação do servidor, melhorando UX.',
        features: [
            'UI responsiva instantaneamente',
            'Rollback em caso de erro',
            'Melhor perceived performance',
            'Sincronização eventual',
            'Error handling',
            'Conflict resolution'
        ],
        useCases: [
            'Likes, favoritos',
            'Edição de formulários',
            'Comentários e posts',
            'Aplicações real-time'
        ],
        resources: [
            { name: 'Optimistic UI', url: 'https://www.apollographql.com/docs/react/performance/optimistic-ui/' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '2-3 semanas'
    },
    
    // PERFORMANCE & OPTIMIZATION
    'core-vitals': {
        title: 'Core Web Vitals',
        category: 'Performance',
        description: 'Métricas essenciais do Google para medir a experiência do usuário em páginas web.',
        features: [
            'LCP - Largest Contentful Paint',
            'FID/INP - Interatividade',
            'CLS - Cumulative Layout Shift',
            'Medição com Lighthouse',
            'Impacto no SEO',
            'Real User Monitoring (RUM)'
        ],
        useCases: [
            'Otimização de performance',
            'Melhoria de SEO',
            'Experiência do usuário',
            'Monitoramento de prod'
        ],
        resources: [
            { name: 'Web.dev Vitals', url: 'https://web.dev/vitals/' },
            { name: 'Core Web Vitals', url: 'https://web.dev/articles/vitals' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'lcp': {
        title: 'LCP (Largest Contentful Paint)',
        category: 'Performance Metric',
        description: 'Mede o tempo para renderizar o maior elemento visível da viewport.',
        features: [
            'Alvo: < 2.5 segundos',
            'Mede percepção de carregamento',
            'Afetado por imagens e texto',
            'Otimizável com lazy loading',
            'Impacto de CDN e caching',
            'Priorização de recursos'
        ],
        useCases: [
            'Otimização de landing pages',
            'E-commerce',
            'Sites de conteúdo',
            'Melhorias de SEO'
        ],
        resources: [
            { name: 'LCP Guide', url: 'https://web.dev/articles/lcp' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1 semana'
    },
    
    'fid': {
        title: 'FID (First Input Delay)',
        category: 'Performance Metric',
        description: 'Mede o tempo entre a primeira interação do usuário e a resposta do navegador.',
        features: [
            'Alvo: < 100 milissegundos',
            'Mede responsividade',
            'Afetado por JavaScript',
            'Code splitting ajuda',
            'Web Workers para tarefas pesadas',
            'Substituído por INP'
        ],
        useCases: [
            'Aplicações interativas',
            'Formulários',
            'SPAs',
            'Dashboards'
        ],
        resources: [
            { name: 'FID Guide', url: 'https://web.dev/articles/fid' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1 semana'
    },
    
    'cls': {
        title: 'CLS (Cumulative Layout Shift)',
        category: 'Performance Metric',
        description: 'Mede a estabilidade visual - mudanças inesperadas de layout durante o carregamento.',
        features: [
            'Alvo: < 0.1',
            'Mede estabilidade visual',
            'Reservar espaço para imagens',
            'Evitar inserção dinâmica',
            'Font loading strategies',
            'Skeleton screens'
        ],
        useCases: [
            'Sites de conteúdo',
            'Páginas com muitas imagens',
            'Ads e embeds',
            'Carregamento progressivo'
        ],
        resources: [
            { name: 'CLS Guide', url: 'https://web.dev/articles/cls' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1 semana'
    },
    
    'inp': {
        title: 'INP (Interaction to Next Paint)',
        category: 'Performance Metric',
        description: 'Nova métrica que substitui FID, medindo toda a latência de interações na página.',
        features: [
            'Alvo: < 200 milissegundos',
            'Mede todas interações',
            'Mais abrangente que FID',
            'Input delay + processing + rendering',
            'Métrica do Core Web Vitals',
            'Otimizável com debouncing'
        ],
        useCases: [
            'Aplicações altamente interativas',
            'Jogos web',
            'Editores online',
            'Dashboards complexos'
        ],
        resources: [
            { name: 'INP Guide', url: 'https://web.dev/articles/inp' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'optimization': {
        title: 'Técnicas de Otimização',
        category: 'Performance',
        description: 'Conjunto de técnicas para melhorar performance e velocidade de carregamento de aplicações.',
        features: [
            'Code splitting',
            'Lazy loading',
            'Tree shaking',
            'Minification',
            'Compression (gzip, brotli)',
            'Asset optimization'
        ],
        useCases: [
            'Redução de bundle size',
            'Tempo de carregamento',
            'Performance em mobile',
            'Economia de banda'
        ],
        resources: [
            { name: 'Web Performance', url: 'https://web.dev/fast/' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '4-6 semanas'
    },
    
    'code-splitting': {
        title: 'Code Splitting',
        category: 'Optimization',
        description: 'Técnica de dividir código em chunks menores carregados sob demanda.',
        features: [
            'Dynamic imports',
            'Route-based splitting',
            'Component-based splitting',
            'Vendor splitting',
            'Chunk optimization',
            'Preloading strategies'
        ],
        useCases: [
            'SPAs grandes',
            'Redução de initial bundle',
            'Lazy loading de rotas',
            'Otimização de performance'
        ],
        resources: [
            { name: 'Code Splitting Guide', url: 'https://webpack.js.org/guides/code-splitting/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'lazy-loading': {
        title: 'Lazy Loading',
        category: 'Optimization',
        description: 'Carregar recursos (imagens, componentes) apenas quando necessário.',
        features: [
            'Intersection Observer API',
            'React.lazy() e Suspense',
            'Native lazy loading (loading="lazy")',
            'Skeleton screens',
            'Progressive image loading',
            'Route-based lazy loading'
        ],
        useCases: [
            'Páginas com muitas imagens',
            'Infinite scroll',
            'SPAs com muitas rotas',
            'Mobile performance'
        ],
        resources: [
            { name: 'Lazy Loading', url: 'https://web.dev/articles/lazy-loading-images' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '1 semana'
    },
    
    'image-optimization': {
        title: 'Otimização de Imagens',
        category: 'Optimization',
        description: 'Técnicas para reduzir tamanho e melhorar carregamento de imagens.',
        features: [
            'Formatos modernos (WebP, AVIF)',
            'Responsive images (srcset)',
            'Lazy loading',
            'Image CDN',
            'Compression',
            'Blur-up/LQIP placeholders'
        ],
        useCases: [
            'Sites de conteúdo',
            'E-commerce',
            'Galerias',
            'Performance mobile'
        ],
        resources: [
            { name: 'Image Optimization', url: 'https://web.dev/articles/fast#optimize-your-images' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'bundle-analysis': {
        title: 'Análise de Bundle',
        category: 'Optimization',
        description: 'Ferramentas e técnicas para analisar e otimizar o tamanho dos bundles JavaScript.',
        features: [
            'Webpack Bundle Analyzer',
            'Source Map Explorer',
            'Bundle size tracking',
            'Dependency analysis',
            'Tree shaking verification',
            'Dead code elimination'
        ],
        useCases: [
            'Identificar dependências grandes',
            'Otimização de bundle',
            'Code review',
            'Performance audits'
        ],
        resources: [
            { name: 'Bundle Analyzer', url: 'https://github.com/webpack-contrib/webpack-bundle-analyzer' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1 semana'
    },
    
    'caching': {
        title: 'Estratégias de Cache',
        category: 'Optimization',
        description: 'Técnicas de caching para melhorar performance e reduzir requisições de rede.',
        features: [
            'HTTP caching headers',
            'Service Worker cache',
            'Memory cache',
            'LocalStorage/IndexedDB',
            'CDN caching',
            'Cache invalidation'
        ],
        useCases: [
            'PWAs',
            'Assets estáticos',
            'API responses',
            'Offline-first apps'
        ],
        resources: [
            { name: 'HTTP Caching', url: 'https://web.dev/articles/http-cache' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '2-3 semanas'
    },
    
    'perf-tools': {
        title: 'Ferramentas de Performance',
        category: 'Tools',
        description: 'Ferramentas essenciais para medir, monitorar e otimizar performance de aplicações web.',
        features: [
            'Lighthouse audits',
            'Chrome Performance tab',
            'WebPageTest',
            'Real User Monitoring',
            'Synthetic monitoring',
            'Performance budgets'
        ],
        useCases: [
            'Auditorias de performance',
            'Monitoramento contínuo',
            'Debugging de performance',
            'Comparação de métricas'
        ],
        resources: [
            { name: 'Lighthouse', url: 'https://developer.chrome.com/docs/lighthouse' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'lighthouse': {
        title: 'Lighthouse CI',
        category: 'Performance Tool',
        description: 'Ferramenta automatizada open-source para melhorar qualidade de páginas web.',
        features: [
            'Performance audits',
            'Accessibility checks',
            'SEO analysis',
            'Best practices',
            'PWA validation',
            'CI/CD integration'
        ],
        useCases: [
            'Auditorias automatizadas',
            'Quality gates em CI/CD',
            'Performance budgets',
            'Regression testing'
        ],
        resources: [
            { name: 'Lighthouse CI', url: 'https://github.com/GoogleChrome/lighthouse-ci' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'webpagetest': {
        title: 'WebPageTest',
        category: 'Performance Tool',
        description: 'Ferramenta de teste de performance web com análise detalhada de waterfall e métricas.',
        features: [
            'Real device testing',
            'Multiple locations',
            'Waterfall analysis',
            'Filmstrip view',
            'Connection throttling',
            'Comparison tools'
        ],
        useCases: [
            'Performance testing detalhado',
            'Análise de competitors',
            'Testes em diferentes regiões',
            'Mobile performance'
        ],
        resources: [
            { name: 'WebPageTest', url: 'https://www.webpagetest.org/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1 semana'
    },
    
    'vitals-monitoring': {
        title: 'Core Web Vitals Monitoring',
        category: 'Monitoring',
        description: 'Monitoramento contínuo de Core Web Vitals em produção com dados reais de usuários.',
        features: [
            'Real User Monitoring (RUM)',
            'Field data collection',
            'Analytics integration',
            'Alertas e thresholds',
            'Historical trends',
            'Segmentation by device/region'
        ],
        useCases: [
            'Monitoramento de produção',
            'Performance regressions',
            'A/B testing',
            'Business intelligence'
        ],
        resources: [
            { name: 'Web Vitals Library', url: 'https://github.com/GoogleChrome/web-vitals' }
        ],
        difficulty: 'Avançado',
        learningTime: '2-3 semanas'
    },
    
    'react-profiler': {
        title: 'React Profiler',
        category: 'Performance Tool',
        description: 'Ferramenta nativa do React para identificar componentes lentos e otimizar re-renders.',
        features: [
            'Component render timing',
            'Flamegraph visualization',
            'Commit analysis',
            'Identify expensive renders',
            'Props change tracking',
            'DevTools integration'
        ],
        useCases: [
            'Otimização de React apps',
            'Debugging de performance',
            'Identificar re-renders desnecessários',
            'Memoization strategies'
        ],
        resources: [
            { name: 'React Profiler', url: 'https://react.dev/reference/react/Profiler' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'chrome-perf': {
        title: 'Chrome Performance Tab',
        category: 'Performance Tool',
        description: 'Ferramenta avançada do Chrome DevTools para análise profunda de performance.',
        features: [
            'Timeline recording',
            'Frame analysis',
            'JavaScript profiling',
            'Memory leaks detection',
            'Rendering performance',
            'Network waterfall'
        ],
        useCases: [
            'Debugging de performance',
            'Identificar bottlenecks',
            'Análise de animações',
            'Memory profiling'
        ],
        resources: [
            { name: 'Performance Analysis', url: 'https://developer.chrome.com/docs/devtools/performance/' }
        ],
        difficulty: 'Avançado',
        learningTime: '3-4 semanas'
    },
    
    // TESTING STRATEGIES
    'unit-testing': {
        title: 'Testes Unitários',
        category: 'Testing',
        description: 'Testes de funções e componentes individuais isoladamente para garantir comportamento correto.',
        features: [
            'Test runners (Vitest, Jest)',
            'Assertion libraries',
            'Mocking e stubbing',
            'Code coverage',
            'Snapshot testing',
            'Test-Driven Development (TDD)'
        ],
        useCases: [
            'Testar lógica de negócio',
            'Componentes isolados',
            'Funções utilitárias',
            'Prevenir regressões'
        ],
        resources: [
            { name: 'Testing Library', url: 'https://testing-library.com/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '3-4 semanas'
    },
    
    'vitest': {
        title: 'Vitest',
        category: 'Test Runner',
        description: 'Test runner moderno e extremamente rápido, compatível com Vite e Jest API.',
        features: [
            'Extremamente rápido',
            'API compatível com Jest',
            'ESM, TypeScript nativo',
            'Watch mode inteligente',
            'UI mode para debugging',
            'Coverage com c8/istanbul'
        ],
        useCases: [
            'Projetos Vite',
            'Testes unitários modernos',
            'Projetos TypeScript',
            'Performance em CI/CD'
        ],
        resources: [
            { name: 'Vitest', url: 'https://vitest.dev/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'jest': {
        title: 'Jest',
        category: 'Test Runner',
        description: 'Framework de testes JavaScript completo e popular, criado pelo Facebook.',
        features: [
            'Zero config',
            'Snapshot testing',
            'Mocking poderoso',
            'Code coverage',
            'Parallel test execution',
            'Great error messages'
        ],
        useCases: [
            'Projetos React',
            'Node.js testing',
            'Testes de integração',
            'TDD/BDD'
        ],
        resources: [
            { name: 'Jest', url: 'https://jestjs.io/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'rtl': {
        title: 'React Testing Library',
        category: 'Testing Library',
        description: 'Biblioteca para testar componentes React da perspectiva do usuário.',
        features: [
            'User-centric testing',
            'Query por texto, role, label',
            'Evita detalhes de implementação',
            'Accessibility-first',
            'Async utilities',
            'Custom queries'
        ],
        useCases: [
            'Testes de componentes React',
            'Integration tests',
            'Validar comportamento do usuário',
            'Acessibilidade'
        ],
        resources: [
            { name: 'React Testing Library', url: 'https://testing-library.com/react' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'vtu': {
        title: 'Vue Test Utils',
        category: 'Testing Library',
        description: 'Biblioteca oficial para testar componentes Vue.js.',
        features: [
            'Mount components',
            'Trigger events',
            'Test props, emits, slots',
            'Vue 3 composition API support',
            'Mocking de dependências',
            'Shallow vs full mount'
        ],
        useCases: [
            'Testes de componentes Vue',
            'Unit tests',
            'Integration tests',
            'TDD com Vue'
        ],
        resources: [
            { name: 'Vue Test Utils', url: 'https://test-utils.vuejs.org/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'testing-library': {
        title: 'Testing Library',
        category: 'Testing Philosophy',
        description: 'Família de bibliotecas que promovem boas práticas de teste focadas no usuário.',
        features: [
            'User-centric approach',
            'Framework agnostic',
            'Accessible queries',
            'Evita implementation details',
            'Suporte para React, Vue, Angular, Svelte',
            'Guiding principles'
        ],
        useCases: [
            'Testes de qualquer framework',
            'Melhorar qualidade de testes',
            'Acessibilidade',
            'Testes mais resilientes'
        ],
        resources: [
            { name: 'Testing Library', url: 'https://testing-library.com/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'component-testing': {
        title: 'Testes de Componentes',
        category: 'Testing',
        description: 'Testar componentes UI em isolamento com ferramentas visuais e documentação.',
        features: [
            'Visual regression testing',
            'Component documentation',
            'Isolated development',
            'Snapshot testing',
            'Interaction testing',
            'Design system validation'
        ],
        useCases: [
            'Design systems',
            'Biblioteca de componentes',
            'Documentação viva',
            'Visual QA'
        ],
        resources: [
            { name: 'Component Testing', url: 'https://storybook.js.org/docs/react/writing-tests/introduction' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'storybook': {
        title: 'Storybook',
        category: 'Component Development',
        description: 'Ferramenta para desenvolver e documentar componentes UI em isolamento.',
        features: [
            'Component playground',
            'Documentação automática',
            'Addons ecosystem',
            'Visual testing',
            'Interaction testing',
            'Design system documentation'
        ],
        useCases: [
            'Desenvolvimento de componentes',
            'Documentação de design system',
            'Component library',
            'Visual regression testing'
        ],
        resources: [
            { name: 'Storybook', url: 'https://storybook.js.org/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'chromatic': {
        title: 'Chromatic',
        category: 'Visual Testing',
        description: 'Plataforma de visual testing e review para Storybook, detecta mudanças visuais.',
        features: [
            'Visual regression testing',
            'UI review workflow',
            'Cloud Storybook hosting',
            'Automated testing',
            'Collaboration tools',
            'CI/CD integration'
        ],
        useCases: [
            'Prevenir regressões visuais',
            'Code review de UI',
            'Design system validation',
            'Component library testing'
        ],
        resources: [
            { name: 'Chromatic', url: 'https://www.chromatic.com/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'visual-regression': {
        title: 'Visual Regression Testing',
        category: 'Testing',
        description: 'Detectar mudanças visuais não intencionais comparando screenshots.',
        features: [
            'Screenshot comparison',
            'Pixel-perfect diff',
            'Baseline management',
            'Responsive testing',
            'Cross-browser testing',
            'Automated workflows'
        ],
        useCases: [
            'Prevenir bugs visuais',
            'Validar refactoring',
            'Responsive design',
            'Cross-browser compatibility'
        ],
        resources: [
            { name: 'Percy', url: 'https://percy.io/' },
            { name: 'BackstopJS', url: 'https://github.com/garris/BackstopJS' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '2-3 semanas'
    },
    
    'cdd': {
        title: 'Component-Driven Development',
        category: 'Methodology',
        description: 'Metodologia de construir UI de baixo para cima, componente por componente.',
        features: [
            'Bottom-up development',
            'Component isolation',
            'Reusabilidade',
            'Testabilidade',
            'Documentação integrada',
            'Design system thinking'
        ],
        useCases: [
            'Design systems',
            'Componentes reutilizáveis',
            'UI consistency',
            'Desenvolvimento escalável'
        ],
        resources: [
            { name: 'Component Driven', url: 'https://www.componentdriven.org/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '3-4 semanas'
    },
    
    'e2e-testing': {
        title: 'Testes E2E',
        category: 'Testing',
        description: 'Testes end-to-end que simulam fluxos completos do usuário em um navegador real.',
        features: [
            'Real browser automation',
            'User flow testing',
            'Cross-browser testing',
            'CI/CD integration',
            'Screenshot/video recording',
            'Network interception'
        ],
        useCases: [
            'Testar fluxos críticos',
            'Smoke tests',
            'Regression testing',
            'Validação de releases'
        ],
        resources: [
            { name: 'E2E Testing', url: 'https://martinfowler.com/articles/practical-test-pyramid.html' }
        ],
        difficulty: 'Avançado',
        learningTime: '4-6 semanas'
    },
    
    'playwright': {
        title: 'Playwright',
        category: 'E2E Testing',
        description: 'Framework moderno de automação de testes E2E multi-browser da Microsoft.',
        features: [
            'Multi-browser (Chromium, Firefox, WebKit)',
            'Auto-wait e retry',
            'API moderna e poderosa',
            'Parallelização nativa',
            'Video/screenshot recording',
            'Network interception'
        ],
        useCases: [
            'Testes E2E modernos',
            'Cross-browser testing',
            'CI/CD pipelines',
            'Smoke tests'
        ],
        resources: [
            { name: 'Playwright', url: 'https://playwright.dev/' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '2-3 semanas'
    },
    
    'cypress': {
        title: 'Cypress',
        category: 'E2E Testing',
        description: 'Framework de testes E2E com grande developer experience e debugging poderoso.',
        features: [
            'Time-travel debugging',
            'Real-time reloading',
            'Automatic waiting',
            'Network stubbing',
            'Screenshot/video',
            'Component testing'
        ],
        useCases: [
            'E2E testing',
            'Integration testing',
            'Component testing',
            'API testing'
        ],
        resources: [
            { name: 'Cypress', url: 'https://www.cypress.io/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'puppeteer': {
        title: 'Puppeteer',
        category: 'Browser Automation',
        description: 'Biblioteca Node.js para controlar Chrome/Chromium via protocolo DevTools.',
        features: [
            'Headless Chrome control',
            'Screenshot generation',
            'PDF generation',
            'Performance testing',
            'Web scraping',
            'Automation tasks'
        ],
        useCases: [
            'Testes automatizados',
            'Web scraping',
            'Screenshot/PDF generation',
            'Performance testing'
        ],
        resources: [
            { name: 'Puppeteer', url: 'https://pptr.dev/' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '2-3 semanas'
    },
    
    // MODERN WEB CAPABILITIES
    'pwa': {
        title: 'Progressive Web Apps',
        category: 'Modern Web',
        description: 'Aplicações web que funcionam como apps nativos, com offline-first e instalação.',
        features: [
            'App-like experience',
            'Instalação no dispositivo',
            'Offline functionality',
            'Push notifications',
            'Background sync',
            'Add to home screen'
        ],
        useCases: [
            'Apps offline-first',
            'Mobile-first apps',
            'Performance crítica',
            'Reduzir dependência de app stores'
        ],
        resources: [
            { name: 'web.dev PWA', url: 'https://web.dev/progressive-web-apps/' },
            { name: 'PWA Builder', url: 'https://www.pwabuilder.com/' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '4-6 semanas'
    },
    
    'service-workers': {
        title: 'Service Workers',
        category: 'Modern Web',
        description: 'Scripts que rodam em background, permitindo funcionalidades offline e cache.',
        features: [
            'Proxy de rede',
            'Cache strategies',
            'Background sync',
            'Push notifications',
            'Offline functionality',
            'Performance optimization'
        ],
        useCases: [
            'Cache de assets',
            'Offline mode',
            'Background tasks',
            'PWA foundation'
        ],
        resources: [
            { name: 'Service Worker API', url: 'https://developer.mozilla.org/pt-BR/docs/Web/API/Service_Worker_API' }
        ],
        difficulty: 'Avançado',
        learningTime: '3-4 semanas'
    },
    
    'web-manifest': {
        title: 'Web App Manifest',
        category: 'Modern Web',
        description: 'Arquivo JSON que define como o app aparece ao usuário e como pode ser instalado.',
        features: [
            'App metadata',
            'Icons e splash screens',
            'Display mode',
            'Theme colors',
            'Orientation preferences',
            'Install prompt customization'
        ],
        useCases: [
            'PWA installation',
            'Branding do app',
            'App-like appearance',
            'Mobile optimization'
        ],
        resources: [
            { name: 'Web Manifest', url: 'https://developer.mozilla.org/en-US/docs/Web/Manifest' }
        ],
        difficulty: 'Iniciante',
        learningTime: '1 semana'
    },
    
    'offline-first': {
        title: 'Offline-First Architecture',
        category: 'Architecture',
        description: 'Arquitetura que prioriza funcionalidade offline, sincronizando quando online.',
        features: [
            'Local-first data',
            'Background sync',
            'Conflict resolution',
            'Cache strategies',
            'Optimistic UI',
            'Resilient networking'
        ],
        useCases: [
            'Apps para áreas sem conexão',
            'Performance crítica',
            'Mobile apps',
            'Reduzir latência'
        ],
        resources: [
            { name: 'Offline First', url: 'https://offlinefirst.org/' }
        ],
        difficulty: 'Avançado',
        learningTime: '4-6 semanas'
    },
    
    'web-apis-modern': {
        title: 'Modern Web APIs',
        category: 'Web Platform',
        description: 'APIs modernas do navegador: WebRTC, WebSockets, Notifications, Geolocation, etc.',
        features: [
            'Geolocation API',
            'Camera/Microphone access',
            'Battery Status',
            'Device Orientation',
            'Payment Request API',
            'Share API'
        ],
        useCases: [
            'Apps baseados em localização',
            'Video conferencing',
            'Mobile experiences',
            'Native-like features'
        ],
        resources: [
            { name: 'MDN Web APIs', url: 'https://developer.mozilla.org/pt-BR/docs/Web/API' }
        ],
        difficulty: 'Intermediário',
        learningTime: '3-4 semanas'
    },
    
    'web-components': {
        title: 'Web Components',
        category: 'Web Standards',
        description: 'Padrões nativos do navegador para criar componentes reutilizáveis e encapsulados.',
        features: [
            'Custom Elements',
            'Shadow DOM',
            'HTML Templates',
            'Framework agnostic',
            'Encapsulamento CSS',
            'Reusabilidade'
        ],
        useCases: [
            'Design systems',
            'Componentes cross-framework',
            'Micro frontends',
            'Widget libraries'
        ],
        resources: [
            { name: 'Web Components', url: 'https://developer.mozilla.org/en-US/docs/Web/Web_Components' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '3-4 semanas'
    },
    
    'websockets': {
        title: 'WebSockets',
        category: 'Real-Time',
        description: 'Protocolo para comunicação bidirecional em tempo real entre cliente e servidor.',
        features: [
            'Full-duplex communication',
            'Low latency',
            'Real-time updates',
            'Efficient protocol',
            'Event-driven',
            'Persistent connection'
        ],
        useCases: [
            'Chat applications',
            'Live notifications',
            'Collaborative editing',
            'Gaming',
            'Stock tickers'
        ],
        resources: [
            { name: 'WebSocket API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSocket' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'webrtc': {
        title: 'WebRTC',
        category: 'Real-Time Communication',
        description: 'Tecnologia para comunicação de vídeo, áudio e dados peer-to-peer no navegador.',
        features: [
            'Peer-to-peer communication',
            'Video/audio streaming',
            'Data channels',
            'Screen sharing',
            'Low latency',
            'Encryption nativa'
        ],
        useCases: [
            'Video conferencing',
            'Screen sharing',
            'File sharing P2P',
            'Gaming multiplayer'
        ],
        resources: [
            { name: 'WebRTC', url: 'https://webrtc.org/' }
        ],
        difficulty: 'Avançado',
        learningTime: '4-6 semanas'
    },
    
    'intersection-observer': {
        title: 'Intersection Observer',
        category: 'Web API',
        description: 'API para observar quando elementos entram/saem da viewport de forma eficiente.',
        features: [
            'Lazy loading eficiente',
            'Infinite scroll',
            'Animations on scroll',
            'Analytics tracking',
            'Performance otimizado',
            'Assíncrono'
        ],
        useCases: [
            'Lazy loading de imagens',
            'Infinite scroll',
            'Trigger animations',
            'Ad viewability tracking'
        ],
        resources: [
            { name: 'Intersection Observer', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'advanced-features': {
        title: 'Advanced Web Features',
        category: 'Modern Web',
        description: 'Recursos avançados: WebAssembly, Web Workers, IndexedDB, Storage APIs.',
        features: [
            'WebAssembly para performance',
            'Web Workers para multithreading',
            'IndexedDB para storage',
            'Cache API',
            'Background Fetch',
            'Credential Management'
        ],
        useCases: [
            'Performance crítica',
            'Computação pesada',
            'Offline data storage',
            'Background processing'
        ],
        resources: [
            { name: 'MDN Advanced', url: 'https://developer.mozilla.org/en-US/docs/Web' }
        ],
        difficulty: 'Avançado',
        learningTime: '6-8 semanas'
    },
    
    'wasm': {
        title: 'WebAssembly (WASM)',
        category: 'Performance',
        description: 'Formato binário de baixo nível que roda no navegador com performance próxima ao nativo.',
        features: [
            'Near-native performance',
            'Compile from C/C++/Rust',
            'Portable',
            'Secure sandbox',
            'Interop com JavaScript',
            'Small binary size'
        ],
        useCases: [
            'Jogos no navegador',
            'Edição de vídeo/imagem',
            'Compressão/criptografia',
            'Scientific computing'
        ],
        resources: [
            { name: 'WebAssembly', url: 'https://webassembly.org/' }
        ],
        difficulty: 'Avançado',
        learningTime: '6-8 semanas'
    },
    
    'web-workers': {
        title: 'Web Workers',
        category: 'Performance',
        description: 'Threads em background para executar JavaScript sem bloquear a UI.',
        features: [
            'Multithreading no navegador',
            'Processamento em background',
            'Não bloqueia UI',
            'Message passing',
            'Shared workers',
            'Service workers'
        ],
        useCases: [
            'Cálculos pesados',
            'Image processing',
            'Data parsing',
            'Background tasks'
        ],
        resources: [
            { name: 'Web Workers', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '2-3 semanas'
    },
    
    'indexeddb': {
        title: 'IndexedDB',
        category: 'Storage',
        description: 'Banco de dados NoSQL no navegador para armazenamento de grandes volumes de dados.',
        features: [
            'Large storage capacity',
            'Transactional database',
            'Indexes e queries',
            'Assíncrono',
            'Structured data',
            'Offline storage'
        ],
        useCases: [
            'Offline-first apps',
            'Cache de dados complexos',
            'Local database',
            'PWA data storage'
        ],
        resources: [
            { name: 'IndexedDB', url: 'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '3-4 semanas'
    },
    
    // DEPLOYMENT & DEVOPS
    'hosting': {
        title: 'Plataformas de Hosting',
        category: 'Deployment',
        description: 'Serviços para hospedar aplicações web modernas com deploy automatizado.',
        features: [
            'Deploy automático',
            'CDN global',
            'SSL gratuito',
            'Preview deployments',
            'Edge functions',
            'Analytics integrado'
        ],
        useCases: [
            'Deploy de apps',
            'Sites estáticos',
            'SSR/ISR',
            'Serverless functions'
        ],
        resources: [
            { name: 'Jamstack Hosting', url: 'https://jamstack.org/generators/' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'vercel': {
        title: 'Vercel',
        category: 'Hosting Platform',
        description: 'Plataforma de deploy otimizada para Next.js e frameworks modernos.',
        features: [
            'Zero config deployment',
            'Edge Network',
            'Serverless Functions',
            'Preview URLs',
            'Analytics & Speed Insights',
            'Git integration'
        ],
        useCases: [
            'Deploy Next.js',
            'JAMstack sites',
            'Frontend apps',
            'Edge computing'
        ],
        resources: [
            { name: 'Vercel', url: 'https://vercel.com/' }
        ],
        difficulty: 'Iniciante',
        learningTime: '1 semana'
    },
    
    'netlify': {
        title: 'Netlify',
        category: 'Hosting Platform',
        description: 'Plataforma all-in-one para web apps com build, deploy e serverless.',
        features: [
            'Continuous deployment',
            'Netlify Functions',
            'Forms & Identity',
            'Split testing',
            'Edge handlers',
            'Build plugins'
        ],
        useCases: [
            'JAMstack deployment',
            'Sites estáticos',
            'Serverless backends',
            'A/B testing'
        ],
        resources: [
            { name: 'Netlify', url: 'https://www.netlify.com/' }
        ],
        difficulty: 'Iniciante',
        learningTime: '1 semana'
    },
    
    'cloudflare': {
        title: 'Cloudflare Pages',
        category: 'Hosting Platform',
        description: 'Plataforma de deploy na edge network da Cloudflare com Workers.',
        features: [
            'Edge deployment',
            'Cloudflare Workers',
            'Unlimited bandwidth',
            'Web Analytics',
            'DDoS protection',
            'Fast builds'
        ],
        useCases: [
            'Sites estáticos',
            'Edge computing',
            'High performance',
            'Global distribution'
        ],
        resources: [
            { name: 'Cloudflare Pages', url: 'https://pages.cloudflare.com/' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'aws': {
        title: 'AWS (S3, CloudFront, Amplify)',
        category: 'Cloud Platform',
        description: 'Serviços AWS para hosting: S3 para storage, CloudFront CDN, Amplify para full-stack.',
        features: [
            'S3 static hosting',
            'CloudFront CDN',
            'Amplify CI/CD',
            'Lambda functions',
            'Scalability ilimitada',
            'Pay-as-you-go'
        ],
        useCases: [
            'Enterprise applications',
            'Scalable infrastructure',
            'Full-stack apps',
            'Microservices'
        ],
        resources: [
            { name: 'AWS Amplify', url: 'https://aws.amazon.com/amplify/' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '4-6 semanas'
    },
    
    'cicd': {
        title: 'CI/CD Pipelines',
        category: 'DevOps',
        description: 'Continuous Integration e Continuous Deployment para automatizar builds e deploys.',
        features: [
            'Automated testing',
            'Build automation',
            'Deploy automation',
            'Environment management',
            'Rollback capabilities',
            'Monitoring integration'
        ],
        useCases: [
            'Deploy automático',
            'Quality assurance',
            'Continuous delivery',
            'Team collaboration'
        ],
        resources: [
            { name: 'CI/CD Basics', url: 'https://www.redhat.com/en/topics/devops/what-is-ci-cd' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '3-4 semanas'
    },
    
    'github-actions': {
        title: 'GitHub Actions',
        category: 'CI/CD',
        description: 'Plataforma de automação nativa do GitHub para workflows de CI/CD.',
        features: [
            'YAML workflows',
            'Matrix builds',
            'Marketplace de actions',
            'Secrets management',
            'Integração GitHub',
            'Free para repos públicos'
        ],
        useCases: [
            'Automated testing',
            'Deploy automation',
            'Release automation',
            'Code quality checks'
        ],
        resources: [
            { name: 'GitHub Actions', url: 'https://github.com/features/actions' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'gitlab-ci': {
        title: 'GitLab CI/CD',
        category: 'CI/CD',
        description: 'Sistema de CI/CD integrado ao GitLab com pipelines poderosos.',
        features: [
            'Built-in CI/CD',
            'Auto DevOps',
            'Container Registry',
            'Review apps',
            'Security scanning',
            'Pipeline graphs'
        ],
        useCases: [
            'GitLab workflows',
            'DevSecOps',
            'Container deployment',
            'Enterprise CI/CD'
        ],
        resources: [
            { name: 'GitLab CI/CD', url: 'https://docs.gitlab.com/ee/ci/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'jenkins': {
        title: 'Jenkins',
        category: 'CI/CD',
        description: 'Servidor de automação open-source tradicional e altamente extensível.',
        features: [
            'Extensible com plugins',
            'Distributed builds',
            'Pipeline as code',
            'Blue Ocean UI',
            'Multi-branch pipelines',
            'Self-hosted'
        ],
        useCases: [
            'Enterprise CI/CD',
            'Legacy systems',
            'Complex workflows',
            'On-premise deployment'
        ],
        resources: [
            { name: 'Jenkins', url: 'https://www.jenkins.io/' }
        ],
        difficulty: 'Avançado',
        learningTime: '4-6 semanas'
    },
    
    'monitoring': {
        title: 'Monitoring & Error Tracking',
        category: 'DevOps',
        description: 'Ferramentas para monitorar performance, erros e comportamento de apps em produção.',
        features: [
            'Error tracking',
            'Performance monitoring',
            'User analytics',
            'Alerting',
            'Session replay',
            'Source maps'
        ],
        useCases: [
            'Detectar bugs em produção',
            'Performance insights',
            'User behavior',
            'Debugging produção'
        ],
        resources: [
            { name: 'Monitoring Overview', url: 'https://sentry.io/for/performance/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'sentry': {
        title: 'Sentry',
        category: 'Error Tracking',
        description: 'Plataforma líder de error tracking e performance monitoring.',
        features: [
            'Real-time error tracking',
            'Source maps support',
            'Release tracking',
            'Performance monitoring',
            'Session replay',
            'Breadcrumbs'
        ],
        useCases: [
            'Error monitoring',
            'Crash reporting',
            'Performance issues',
            'User feedback'
        ],
        resources: [
            { name: 'Sentry', url: 'https://sentry.io/' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'datadog': {
        title: 'Datadog',
        category: 'Monitoring Platform',
        description: 'Plataforma completa de monitoring para infraestrutura, apps e logs.',
        features: [
            'Full-stack observability',
            'APM (Application Performance)',
            'Log management',
            'Infrastructure monitoring',
            'Real User Monitoring (RUM)',
            'Dashboards customizáveis'
        ],
        useCases: [
            'Enterprise monitoring',
            'Full-stack visibility',
            'DevOps workflows',
            'Performance optimization'
        ],
        resources: [
            { name: 'Datadog', url: 'https://www.datadoghq.com/' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '3-4 semanas'
    },
    
    'analytics': {
        title: 'Web Analytics',
        category: 'Monitoring',
        description: 'Ferramentas para rastrear comportamento do usuário e métricas de negócio.',
        features: [
            'User behavior tracking',
            'Conversion funnels',
            'Custom events',
            'Real-time data',
            'Privacy-friendly options',
            'Dashboard visualization'
        ],
        useCases: [
            'Product analytics',
            'User insights',
            'A/B testing',
            'Business metrics'
        ],
        resources: [
            { name: 'Google Analytics', url: 'https://analytics.google.com/' },
            { name: 'Plausible', url: 'https://plausible.io/' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '2-3 semanas'
    },
    
    // MOBILE DEVELOPMENT
    'cross-platform': {
        title: 'Cross-Platform Mobile',
        category: 'Mobile',
        description: 'Desenvolvimento mobile multiplataforma usando tecnologias web.',
        features: [
            'Single codebase',
            'iOS + Android',
            'Native performance',
            'Shared business logic',
            'Platform-specific UI',
            'Hot reload'
        ],
        useCases: [
            'Apps mobile reutilizando código web',
            'Startups com recursos limitados',
            'Prototipagem rápida',
            'Apps empresariais'
        ],
        resources: [
            { name: 'Cross-Platform Guide', url: 'https://reactnative.dev/' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '6-8 semanas'
    },
    
    'react-native': {
        title: 'React Native',
        category: 'Mobile Framework',
        description: 'Framework do Facebook para criar apps nativos usando React.',
        features: [
            'React para mobile',
            'Native components',
            'Hot reloading',
            'Expo ecosystem',
            'Large community',
            'Platform-specific code'
        ],
        useCases: [
            'Apps iOS e Android',
            'Compartilhar código com web',
            'Apps empresariais',
            'MVPs mobile'
        ],
        resources: [
            { name: 'React Native', url: 'https://reactnative.dev/' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '6-8 semanas'
    },
    
    'flutter': {
        title: 'Flutter',
        category: 'Mobile Framework',
        description: 'Framework do Google usando Dart para criar apps nativos com performance excepcional.',
        features: [
            'Dart language',
            'Hot reload',
            'Custom rendering engine',
            'Material Design nativo',
            'iOS, Android, Web, Desktop',
            'Performance nativa'
        ],
        useCases: [
            'Apps high-performance',
            'UI complexas e customizadas',
            'Apps multiplataforma',
            'Games mobile'
        ],
        resources: [
            { name: 'Flutter', url: 'https://flutter.dev/' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '6-8 semanas'
    },
    
    'ionic': {
        title: 'Ionic',
        category: 'Mobile Framework',
        description: 'Framework híbrido para criar apps mobile com tecnologias web (HTML/CSS/JS).',
        features: [
            'Web technologies',
            'Framework agnostic (React, Vue, Angular)',
            'Capacitor/Cordova',
            'UI components',
            'Native functionality',
            'Progressive Web Apps'
        ],
        useCases: [
            'Apps híbridos',
            'Aproveitar skills web',
            'Protótipos rápidos',
            'Enterprise apps'
        ],
        resources: [
            { name: 'Ionic', url: 'https://ionicframework.com/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '4-6 semanas'
    },
    
    'pwa-mobile': {
        title: 'PWA for Mobile',
        category: 'Mobile PWA',
        description: 'Progressive Web Apps otimizadas para mobile com experiência app-like.',
        features: [
            'Install prompt',
            'Offline functionality',
            'Push notifications',
            'Home screen icon',
            'Splash screens',
            'App-like navigation'
        ],
        useCases: [
            'Apps sem app store',
            'Low-friction onboarding',
            'Content-focused apps',
            'E-commerce mobile'
        ],
        resources: [
            { name: 'PWA Mobile', url: 'https://web.dev/progressive-web-apps/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '3-4 semanas'
    },
    
    'app-install': {
        title: 'App Installation & Engagement',
        category: 'Mobile UX',
        description: 'Estratégias para promover instalação de PWAs e aumentar engajamento.',
        features: [
            'Install prompts',
            'Add to home screen',
            'App banners',
            'Re-engagement strategies',
            'Push notifications',
            'Badges e shortcuts'
        ],
        useCases: [
            'Aumentar instalações',
            'User retention',
            'App-like experience',
            'Mobile engagement'
        ],
        resources: [
            { name: 'App Installation', url: 'https://web.dev/customize-install/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'push-notifications': {
        title: 'Push Notifications',
        category: 'Mobile Engagement',
        description: 'Notificações push para re-engajamento de usuários em PWAs e apps nativos.',
        features: [
            'Push API',
            'Notification API',
            'Service Worker integration',
            'User permissions',
            'Rich notifications',
            'Action buttons'
        ],
        useCases: [
            'Re-engagement',
            'Real-time updates',
            'Marketing campaigns',
            'User retention'
        ],
        resources: [
            { name: 'Push API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Push_API' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '2-3 semanas'
    },
    
    'native-integration': {
        title: 'Native Integration',
        category: 'Mobile',
        description: 'Integração com funcionalidades nativas do dispositivo em apps híbridos.',
        features: [
            'Camera access',
            'Geolocation',
            'Sensors',
            'File system',
            'Biometric auth',
            'Native modules'
        ],
        useCases: [
            'Apps com recursos nativos',
            'Hybrid apps',
            'Device capabilities',
            'Platform-specific features'
        ],
        resources: [
            { name: 'Capacitor', url: 'https://capacitorjs.com/' }
        ],
        difficulty: 'Intermediário a Avançado',
        learningTime: '3-4 semanas'
    },
    
    'capacitor': {
        title: 'Capacitor',
        category: 'Native Bridge',
        description: 'Runtime moderno para transformar web apps em apps nativos iOS/Android.',
        features: [
            'Web to native bridge',
            'Plugin ecosystem',
            'Native APIs',
            'Live reload',
            'PWA support',
            'Cross-platform'
        ],
        useCases: [
            'Web to mobile',
            'Ionic apps',
            'PWA enhancement',
            'Native functionality'
        ],
        resources: [
            { name: 'Capacitor', url: 'https://capacitorjs.com/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'cordova': {
        title: 'Apache Cordova',
        category: 'Native Bridge',
        description: 'Framework tradicional para criar apps mobile usando HTML, CSS e JavaScript.',
        features: [
            'Web technologies',
            'Plugin architecture',
            'Native API access',
            'Cross-platform',
            'Mature ecosystem',
            'CLI tools'
        ],
        useCases: [
            'Legacy hybrid apps',
            'Enterprise mobile',
            'Simple native wrappers',
            'Plugin-based apps'
        ],
        resources: [
            { name: 'Cordova', url: 'https://cordova.apache.org/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '3-4 semanas'
    },
    
    // WORKFLOW & COLLABORATION
    'version-control': {
        title: 'Controle de Versão',
        category: 'Workflow',
        description: 'Sistemas para rastrear mudanças no código e colaborar em equipe.',
        features: [
            'Git fundamentals',
            'Branching strategies',
            'Merge workflows',
            'History tracking',
            'Collaboration',
            'Code review'
        ],
        useCases: [
            'Team collaboration',
            'Code history',
            'Feature development',
            'Release management'
        ],
        resources: [
            { name: 'Git Guide', url: 'https://git-scm.com/book/pt-br/v2' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '3-4 semanas'
    },
    
    'git': {
        title: 'Git',
        category: 'Version Control',
        description: 'Sistema de controle de versão distribuído mais popular do mundo.',
        features: [
            'Distributed VCS',
            'Branching e merging',
            'Staging area',
            'Lightweight',
            'Fast performance',
            'Industry standard'
        ],
        useCases: [
            'Source control',
            'Team collaboration',
            'Code backup',
            'Version history'
        ],
        resources: [
            { name: 'Pro Git Book', url: 'https://git-scm.com/book/pt-br/v2' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'github': {
        title: 'GitHub',
        category: 'Git Platform',
        description: 'Plataforma de hospedagem de código com colaboração, CI/CD e comunidade.',
        features: [
            'Git repository hosting',
            'Pull requests',
            'Issues & Projects',
            'GitHub Actions',
            'Discussions & Wiki',
            'Security scanning'
        ],
        useCases: [
            'Open source projects',
            'Team collaboration',
            'Code review',
            'Project management'
        ],
        resources: [
            { name: 'GitHub', url: 'https://github.com/' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'gitlab': {
        title: 'GitLab',
        category: 'Git Platform',
        description: 'Plataforma DevOps completa com Git, CI/CD, registry e mais.',
        features: [
            'Built-in CI/CD',
            'Container registry',
            'Issue tracking',
            'Auto DevOps',
            'Security scanning',
            'Self-hosted option'
        ],
        useCases: [
            'Enterprise DevOps',
            'Self-hosted Git',
            'Complete CI/CD',
            'Security-focused teams'
        ],
        resources: [
            { name: 'GitLab', url: 'https://gitlab.com/' }
        ],
        difficulty: 'Intermediário',
        learningTime: '3-4 semanas'
    },
    
    'project-mgmt': {
        title: 'Project Management',
        category: 'Workflow',
        description: 'Ferramentas para gerenciar projetos, tarefas e sprints em equipes de desenvolvimento.',
        features: [
            'Task tracking',
            'Sprint planning',
            'Kanban boards',
            'Roadmaps',
            'Time tracking',
            'Reporting'
        ],
        useCases: [
            'Agile development',
            'Team coordination',
            'Sprint management',
            'Project planning'
        ],
        resources: [
            { name: 'Agile Guide', url: 'https://www.atlassian.com/agile' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'jira': {
        title: 'Jira',
        category: 'Project Management',
        description: 'Ferramenta enterprise para gerenciamento ágil de projetos e issues.',
        features: [
            'Scrum & Kanban boards',
            'Sprint management',
            'Custom workflows',
            'Advanced reporting',
            'Integrations',
            'Enterprise features'
        ],
        useCases: [
            'Agile teams',
            'Enterprise projects',
            'Bug tracking',
            'Release planning'
        ],
        resources: [
            { name: 'Jira', url: 'https://www.atlassian.com/software/jira' }
        ],
        difficulty: 'Intermediário',
        learningTime: '2-3 semanas'
    },
    
    'linear': {
        title: 'Linear',
        category: 'Project Management',
        description: 'Ferramenta moderna de issue tracking focada em velocidade e simplicidade.',
        features: [
            'Fast & beautiful UI',
            'Keyboard shortcuts',
            'Git integration',
            'Roadmaps',
            'Cycles & sprints',
            'API & integrations'
        ],
        useCases: [
            'Modern dev teams',
            'Fast-paced startups',
            'Issue tracking',
            'Sprint planning'
        ],
        resources: [
            { name: 'Linear', url: 'https://linear.app/' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '1-2 semanas'
    },
    
    'trello': {
        title: 'Trello',
        category: 'Project Management',
        description: 'Ferramenta visual de organização usando quadros Kanban.',
        features: [
            'Kanban boards',
            'Cards & lists',
            'Labels & checklists',
            'Power-Ups',
            'Simple interface',
            'Mobile apps'
        ],
        useCases: [
            'Visual planning',
            'Small teams',
            'Personal organization',
            'Simple workflows'
        ],
        resources: [
            { name: 'Trello', url: 'https://trello.com/' }
        ],
        difficulty: 'Iniciante',
        learningTime: '1 semana'
    },
    
    'collaboration': {
        title: 'Team Collaboration',
        category: 'Workflow',
        description: 'Ferramentas de comunicação e documentação para equipes de desenvolvimento.',
        features: [
            'Real-time messaging',
            'Video conferencing',
            'Documentation',
            'Knowledge sharing',
            'Integrations',
            'Async communication'
        ],
        useCases: [
            'Team communication',
            'Remote work',
            'Documentation',
            'Knowledge base'
        ],
        resources: [
            { name: 'Collaboration Tools', url: 'https://slack.com/' }
        ],
        difficulty: 'Iniciante',
        learningTime: '1-2 semanas'
    },
    
    'slack': {
        title: 'Slack',
        category: 'Communication',
        description: 'Plataforma de comunicação em equipe com channels, integrations e workflows.',
        features: [
            'Channels & threads',
            'Direct messages',
            'File sharing',
            'App integrations',
            'Workflows & bots',
            'Video calls'
        ],
        useCases: [
            'Team communication',
            'Project channels',
            'Integrations hub',
            'Remote collaboration'
        ],
        resources: [
            { name: 'Slack', url: 'https://slack.com/' }
        ],
        difficulty: 'Iniciante',
        learningTime: '1 semana'
    },
    
    'discord': {
        title: 'Discord',
        category: 'Communication',
        description: 'Plataforma de voz, vídeo e texto popular em comunidades de desenvolvedores.',
        features: [
            'Voice & video',
            'Text channels',
            'Screen sharing',
            'Bots & integrations',
            'Communities',
            'Free tier generoso'
        ],
        useCases: [
            'Developer communities',
            'Open source projects',
            'Study groups',
            'Gaming teams'
        ],
        resources: [
            { name: 'Discord', url: 'https://discord.com/' }
        ],
        difficulty: 'Iniciante',
        learningTime: '1 semana'
    },
    
    'notion': {
        title: 'Notion',
        category: 'Documentation',
        description: 'Workspace all-in-one para documentação, wikis, databases e project management.',
        features: [
            'Rich text editor',
            'Databases',
            'Templates',
            'Collaboration',
            'Wiki pages',
            'API & integrations'
        ],
        useCases: [
            'Team documentation',
            'Knowledge base',
            'Project planning',
            'Personal organization'
        ],
        resources: [
            { name: 'Notion', url: 'https://www.notion.so/' }
        ],
        difficulty: 'Iniciante a Intermediário',
        learningTime: '1-2 semanas'
    },
};

// ============================================
// GERENCIAMENTO DE ESTADO E PROGRESSO
// ============================================

class RoadmapManager {
    constructor() {
        this.completedTechs = new Set();
        this.studyingTechs = new Set();
        this.modal = document.getElementById('techModal');
        this.modalBody = document.getElementById('modalBody');
        this.progressFill = document.getElementById('progressFill');
        this.progressText = document.getElementById('progressText');
        
        // Focus mode state
        this.focusMode = false;
        this.focusIndex = 0;
        this.focusTechs = [];
        
        this.init();
    }
    
    init() {
        this.loadProgress();
        this.attachEventListeners();
        this.updateProgress();
        this.loadTheme();
    }
    
    loadProgress() {
        const savedCompleted = localStorage.getItem(STORAGE_KEYS.PROGRESS);
        const savedStudying = localStorage.getItem('roadmap-studying');
        
        if (savedCompleted) {
            this.completedTechs = new Set(JSON.parse(savedCompleted));
        }
        if (savedStudying) {
            this.studyingTechs = new Set(JSON.parse(savedStudying));
        }
        
        this.applyCompletedState();
    }
    
    saveProgress() {
        localStorage.setItem(
            STORAGE_KEYS.PROGRESS,
            JSON.stringify([...this.completedTechs])
        );
        localStorage.setItem(
            'roadmap-studying',
            JSON.stringify([...this.studyingTechs])
        );
    }
    
    applyCompletedState() {
        this.completedTechs.forEach(tech => {
            const node = document.querySelector(`[data-tech="${tech}"]`);
            if (node) {
                node.classList.add('completed');
                node.classList.remove('studying');
            }
        });
        
        this.studyingTechs.forEach(tech => {
            const node = document.querySelector(`[data-tech="${tech}"]`);
            if (node) {
                node.classList.add('studying');
                node.classList.remove('completed');
            }
        });
    }
    
    attachEventListeners() {
        // Click em nodes
        document.querySelectorAll('.node').forEach(node => {
            node.addEventListener('click', (e) => {
                const tech = e.currentTarget.dataset.tech;
                if (tech) {
                    this.showTechDetails(tech);
                }
            });
            
            // Double click para marcar como completo
            node.addEventListener('dblclick', (e) => {
                e.stopPropagation();
                const tech = e.currentTarget.dataset.tech;
                if (tech) {
                    this.toggleComplete(tech);
                }
            });
        });
        
        // Modal close buttons (todos)
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal');
                if (modal) {
                    modal.classList.remove('active');
                    // Se for o modal focado e o modo estiver ativo, desativar
                    if (modal.id === 'focusModal' && this.focusMode) {
                        this.toggleFocusMode();
                    }
                }
            });
        });
        
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
        
        // Tecla ESC para fechar modais
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Fechar modal de tecnologia
                if (this.modal.classList.contains('active')) {
                    this.closeModal();
                }
                // Fechar modal de estatísticas
                const statsModal = document.getElementById('statsModal');
                if (statsModal && statsModal.classList.contains('active')) {
                    statsModal.classList.remove('active');
                }
                // Fechar modal de modo focado
                const focusModal = document.getElementById('focusModal');
                if (focusModal && focusModal.classList.contains('active')) {
                    focusModal.classList.remove('active');
                    if (this.focusMode) {
                        this.toggleFocusMode();
                    }
                }
            }
        });
        
        // Modo Focado
        const focusModeBtn = document.getElementById('toggleFocusMode');
        if (focusModeBtn) {
            focusModeBtn.addEventListener('click', () => this.toggleFocusMode());
        }
        
        const focusPrevBtn = document.getElementById('focusPrev');
        if (focusPrevBtn) {
            focusPrevBtn.addEventListener('click', () => this.focusNavigate('prev'));
        }
        
        const focusNextBtn = document.getElementById('focusNext');
        if (focusNextBtn) {
            focusNextBtn.addEventListener('click', () => this.focusNavigate('next'));
        }
        
        // Fechar modal focado com botão X
        const focusModal = document.getElementById('focusModal');
        if (focusModal) {
            focusModal.addEventListener('click', (e) => {
                if (e.target === focusModal) {
                    focusModal.classList.remove('active');
                    if (this.focusMode) {
                        this.toggleFocusMode();
                    }
                }
            });
        }
        
        // Tema
        document.getElementById('toggleTheme').addEventListener('click', () => {
            this.toggleTheme();
        });
        
        // Estatísticas
        document.getElementById('showStats').addEventListener('click', () => {
            this.showStatistics();
        });
        
        // Exportar JSON
        document.getElementById('exportJSON').addEventListener('click', () => {
            this.exportJSON();
        });
        
        // Exportar PDF
        document.getElementById('exportPDF').addEventListener('click', () => {
            this.exportPDF();
        });
        
        // Reset
        document.getElementById('resetProgress').addEventListener('click', () => {
            if (confirm('Tem certeza que deseja resetar todo o progresso?')) {
                this.resetProgress();
            }
        });
        
        // Busca/Filtro
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filterTechnologies(e.target.value);
            });
        }
    }
    
    showTechDetails(techId) {
        const tech = techData[techId];
        if (!tech) {
            this.modalBody.innerHTML = `
                <h2>🚧 Em Desenvolvimento</h2>
                <p>Informações sobre esta tecnologia serão adicionadas em breve.</p>
            `;
            this.modal.classList.add('active');
            return;
        }
        
        const isCompleted = this.completedTechs.has(techId);
        const isStudying = this.studyingTechs.has(techId);
        
        const html = `
            <div class="tech-header">
                <h2>${tech.title}</h2>
                <span class="tech-badge">${tech.category}</span>
                ${tech.difficulty ? `<span class="tech-badge">${tech.difficulty}</span>` : ''}
                ${tech.learningTime ? `<span class="tech-badge">⏱️ ${tech.learningTime}</span>` : ''}
            </div>
            
            <p>${tech.description}</p>
            
            ${tech.features ? `
                <h3>✨ Principais Recursos</h3>
                <ul>
                    ${tech.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            ` : ''}
            
            ${tech.useCases ? `
                <h3>🎯 Casos de Uso</h3>
                <ul>
                    ${tech.useCases.map(u => `<li>${u}</li>`).join('')}
                </ul>
            ` : ''}
            
            ${tech.resources ? `
                <h3>📚 Recursos de Aprendizado</h3>
                <div class="tech-links">
                    ${tech.resources.map(r => `
                        <a href="${r.url}" target="_blank" rel="noopener" class="tech-link">
                            📖 ${r.name}
                        </a>
                    `).join('')}
                </div>
            ` : ''}
            
            <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid var(--border-color); display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button 
                    onclick="roadmap.toggleStudying('${techId}')" 
                    class="tech-link ${isStudying ? 'btn-studying-active' : ''}"
                    style="flex: 1; justify-content: center; background: ${isStudying ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' : ''}; color: ${isStudying ? 'white' : ''};"
                >
                    ${isStudying ? '📖 Estudando' : '📖 Marcar como Estudando'}
                </button>
                <button 
                    onclick="roadmap.toggleComplete('${techId}')" 
                    class="tech-link ${isCompleted ? 'btn-completed-active' : ''}"
                    style="flex: 1; justify-content: center; background: ${isCompleted ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : ''}; color: ${isCompleted ? 'white' : ''};"
                >
                    ${isCompleted ? '✓ Concluído' : '✓ Marcar como Concluído'}
                </button>
            </div>
        `;
        
        this.modalBody.innerHTML = html;
        this.modal.classList.add('active');
    }
    
    closeModal() {
        this.modal.classList.remove('active');
    }
    
    toggleComplete(techId) {
        const node = document.querySelector(`[data-tech="${techId}"]`);
        if (!node) return;
        
        if (this.completedTechs.has(techId)) {
            this.completedTechs.delete(techId);
            node.classList.remove('completed');
        } else {
            this.completedTechs.add(techId);
            this.studyingTechs.delete(techId); // Remove de estudando se estava
            node.classList.add('completed');
            node.classList.remove('studying');
        }
        
        this.saveProgress();
        this.updateProgress();
        
        // Atualizar modal se estiver aberto
        if (this.modal.classList.contains('active')) {
            this.showTechDetails(techId);
        }
    }
    
    toggleStudying(techId) {
        const node = document.querySelector(`[data-tech="${techId}"]`);
        if (!node) return;
        
        if (this.studyingTechs.has(techId)) {
            this.studyingTechs.delete(techId);
            node.classList.remove('studying');
        } else {
            this.studyingTechs.add(techId);
            this.completedTechs.delete(techId); // Remove de concluído se estava
            node.classList.add('studying');
            node.classList.remove('completed');
        }
        
        this.saveProgress();
        this.updateProgress();
        
        // Atualizar modal se estiver aberto
        if (this.modal.classList.contains('active')) {
            this.showTechDetails(techId);
        }
    }
    
    updateProgress() {
        const totalNodes = document.querySelectorAll('.node').length;
        const completedNodes = this.completedTechs.size;
        const percentage = totalNodes > 0 ? Math.round((completedNodes / totalNodes) * 100) : 0;
        
        this.progressFill.style.width = `${percentage}%`;
        this.progressText.textContent = `Progresso: ${percentage}% (${completedNodes}/${totalNodes})`;
    }
    
    filterTechnologies(searchTerm) {
        const term = searchTerm.toLowerCase().trim();
        const allNodes = document.querySelectorAll('.node');
        const allGroups = document.querySelectorAll('.node-group');
        const allSections = document.querySelectorAll('.roadmap-section');
        const searchResults = document.getElementById('searchResults');
        
        // Se não há busca, mostrar tudo
        if (!term) {
            allNodes.forEach(node => node.classList.remove('hidden', 'search-match'));
            allGroups.forEach(group => group.classList.remove('hidden'));
            allSections.forEach(section => section.classList.remove('hidden'));
            searchResults.textContent = '';
            return;
        }
        
        let matchCount = 0;
        
        // Filtrar nodes
        allNodes.forEach(node => {
            const techId = node.dataset.tech;
            if (!techId) return;
            
            const tech = techData[techId];
            if (!tech) return;
            
            const title = tech.title.toLowerCase();
            const category = tech.category.toLowerCase();
            const description = tech.description.toLowerCase();
            
            const matches = title.includes(term) || 
                          category.includes(term) || 
                          description.includes(term);
            
            if (matches) {
                node.classList.remove('hidden');
                node.classList.add('search-match');
                matchCount++;
            } else {
                node.classList.add('hidden');
                node.classList.remove('search-match');
            }
        });
        
        // Ocultar grupos vazios
        allGroups.forEach(group => {
            const visibleNodes = group.querySelectorAll('.node:not(.hidden)');
            if (visibleNodes.length === 0) {
                group.classList.add('hidden');
            } else {
                group.classList.remove('hidden');
            }
        });
        
        // Ocultar seções vazias
        allSections.forEach(section => {
            const visibleGroups = section.querySelectorAll('.node-group:not(.hidden)');
            if (visibleGroups.length === 0) {
                section.classList.add('hidden');
            } else {
                section.classList.remove('hidden');
            }
        });
        
        // Atualizar contador de resultados
        if (matchCount === 0) {
            searchResults.textContent = 'Nenhum resultado encontrado';
        } else if (matchCount === 1) {
            searchResults.textContent = '1 tecnologia encontrada';
        } else {
            searchResults.textContent = `${matchCount} tecnologias encontradas`;
        }
    }
    
    resetProgress() {
        this.completedTechs.clear();
        this.studyingTechs.clear();
        document.querySelectorAll('.node.completed').forEach(node => {
            node.classList.remove('completed');
        });
        document.querySelectorAll('.node.studying').forEach(node => {
            node.classList.remove('studying');
        });
        this.saveProgress();
        this.updateProgress();
    }
    
    exportJSON() {
        const exportData = {
            version: '1.1',
            exportDate: new Date().toISOString(),
            totalTechnologies: document.querySelectorAll('.node').length,
            completedTechnologies: this.completedTechs.size,
            completedList: [...this.completedTechs].map(techId => {
                const tech = techData[techId];
                return {
                    id: techId,
                    title: tech ? tech.title : techId,
                    category: tech ? tech.category : 'Unknown',
                    difficulty: tech ? tech.difficulty : 'Unknown'
                };
            })
        };
        
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `roadmap-progresso-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
    
    exportPDF() {
        // Criar versão print-friendly
        const printWindow = window.open('', '_blank');
        const completedTechs = [...this.completedTechs].map(techId => {
            const tech = techData[techId];
            return tech ? {
                title: tech.title,
                category: tech.category,
                difficulty: tech.difficulty,
                learningTime: tech.learningTime
            } : null;
        }).filter(Boolean);
        
        const totalTechs = document.querySelectorAll('.node').length;
        const percentage = Math.round((this.completedTechs.size / totalTechs) * 100);
        
        const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Meu Progresso - Frontend Roadmap 2025</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            padding: 40px;
            max-width: 900px;
            margin: 0 auto;
        }
        h1 {
            color: #1f2937;
            border-bottom: 4px solid #3b82f6;
            padding-bottom: 16px;
            margin-bottom: 24px;
        }
        .stats {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            color: white;
            padding: 24px;
            border-radius: 8px;
            margin-bottom: 32px;
        }
        .stats h2 {
            margin-bottom: 16px;
            font-size: 1.5rem;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
        }
        .stat-item {
            text-align: center;
        }
        .stat-value {
            font-size: 2rem;
            font-weight: bold;
            display: block;
        }
        .stat-label {
            font-size: 0.875rem;
            opacity: 0.9;
        }
        h3 {
            color: #1f2937;
            margin: 32px 0 16px;
            font-size: 1.25rem;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 32px;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #e5e7eb;
        }
        th {
            background: #f3f4f6;
            font-weight: 600;
            color: #374151;
        }
        tr:hover {
            background: #f9fafb;
        }
        .badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 600;
        }
        .badge-iniciante { background: #d1fae5; color: #065f46; }
        .badge-intermediario { background: #fef3c7; color: #92400e; }
        .badge-avancado { background: #fee2e2; color: #991b1b; }
        .footer {
            margin-top: 48px;
            padding-top: 24px;
            border-top: 2px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
            font-size: 0.875rem;
        }
        @media print {
            body { padding: 20px; }
            .no-print { display: none; }
        }
    </style>
</head>
<body>
    <h1>🗺️ Meu Progresso no Frontend Roadmap 2025</h1>
    
    <div class="stats">
        <h2>📊 Estatísticas de Progresso</h2>
        <div class="stats-grid">
            <div class="stat-item">
                <span class="stat-value">${percentage}%</span>
                <span class="stat-label">Conclusão</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">${this.completedTechs.size}</span>
                <span class="stat-label">Concluídas</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">${totalTechs - this.completedTechs.size}</span>
                <span class="stat-label">Restantes</span>
            </div>
        </div>
    </div>
    
    <h3>✅ Tecnologias Concluídas (${completedTechs.length})</h3>
    <table>
        <thead>
            <tr>
                <th>Tecnologia</th>
                <th>Categoria</th>
                <th>Dificuldade</th>
                <th>Tempo de Aprendizado</th>
            </tr>
        </thead>
        <tbody>
            ${completedTechs.map(tech => `
                <tr>
                    <td><strong>${tech.title}</strong></td>
                    <td>${tech.category}</td>
                    <td>
                        <span class="badge badge-${tech.difficulty.toLowerCase().replace(' ', '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}">
                            ${tech.difficulty}
                        </span>
                    </td>
                    <td>${tech.learningTime}</td>
                </tr>
            `).join('')}
        </tbody>
    </table>
    
    <div class="footer">
        <p><strong>Frontend Development Roadmap 2025</strong></p>
        <p>Gerado em: ${new Date().toLocaleString('pt-BR')}</p>
        <p class="no-print" style="margin-top: 16px;">
            <button onclick="window.print()" style="padding: 12px 24px; background: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 1rem;">
                🖨️ Imprimir / Salvar como PDF
            </button>
        </p>
    </div>
</body>
</html>
        `;
        
        printWindow.document.write(html);
        printWindow.document.close();
    }
    
    showStatistics() {
        const statsModal = document.getElementById('statsModal');
        const statsBody = document.getElementById('statsBody');
        
        // Calcular estatísticas gerais
        const allNodes = document.querySelectorAll('.node');
        const total = allNodes.length;
        const completed = this.completedTechs.size;
        const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
        
        // Calcular estatísticas por categoria
        const categoryStats = {};
        const sections = document.querySelectorAll('.roadmap-section');
        
        sections.forEach(section => {
            const sectionName = section.querySelector('.section-title')?.textContent || 'Unknown';
            const sectionNodes = section.querySelectorAll('.node');
            const sectionCompleted = Array.from(sectionNodes).filter(node => 
                this.completedTechs.has(node.dataset.tech)
            ).length;
            
            categoryStats[sectionName] = {
                total: sectionNodes.length,
                completed: sectionCompleted,
                percentage: sectionNodes.length > 0 ? Math.round((sectionCompleted / sectionNodes.length) * 100) : 0
            };
        });
        
        // Gerar HTML com gráficos
        const html = `
            <h2 style="margin-bottom: 2rem; color: var(--text-primary);">📊 Estatísticas Detalhadas de Progresso</h2>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <span class="stat-value">${percentage}%</span>
                    <span class="stat-label">Conclusão Total</span>
                </div>
                <div class="stat-card">
                    <span class="stat-value">${completed}</span>
                    <span class="stat-label">Tecnologias Concluídas</span>
                </div>
                <div class="stat-card">
                    <span class="stat-value">${total - completed}</span>
                    <span class="stat-label">Ainda Faltam</span>
                </div>
                <div class="stat-card">
                    <span class="stat-value">${total}</span>
                    <span class="stat-label">Total de Tecnologias</span>
                </div>
            </div>
            
            <h3 style="margin: 2rem 0 1rem; color: var(--text-primary);">📈 Progresso por Categoria</h3>
            <div class="category-chart">
                ${Object.entries(categoryStats).map(([category, stats]) => `
                    <div class="category-item">
                        <div class="category-header">
                            <span class="category-name">${category}</span>
                            <span class="category-stats">${stats.completed}/${stats.total} (${stats.percentage}%)</span>
                        </div>
                        <div class="progress-bar-chart">
                            <div class="progress-bar-fill" style="width: ${stats.percentage}%">
                                ${stats.percentage > 15 ? stats.percentage + '%' : ''}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div style="margin-top: 2rem; padding-top: 2rem; border-top: 2px solid var(--border-color); text-align: center;">
                <p style="color: var(--text-secondary); margin-bottom: 1rem;">
                    Continue aprendendo! 🚀 Cada tecnologia concluída te deixa mais próximo de se tornar um desenvolvedor Frontend completo.
                </p>
            </div>
        `;
        
        statsBody.innerHTML = html;
        statsModal.classList.add('active');
    }
    
    toggleFocusMode() {
        this.focusMode = !this.focusMode;
        const btn = document.getElementById('toggleFocusMode');
        
        if (this.focusMode) {
            btn.classList.add('active');
            btn.textContent = '✓ Modo Focado Ativo';
            this.startFocusMode();
        } else {
            btn.classList.remove('active');
            btn.textContent = '🎯 Modo Focado';
            this.exitFocusMode();
        }
    }
    
    startFocusMode() {
        // Coletar todas as tecnologias na ordem do roadmap
        this.focusTechs = [];
        const allNodes = document.querySelectorAll('.node[data-tech]');
        allNodes.forEach(node => {
            const techId = node.dataset.tech;
            if (techData[techId]) {
                this.focusTechs.push(techId);
            }
        });
        
        // Prioridade: primeira "estudando", senão primeira não concluída, senão primeira
        let startIndex = this.focusTechs.findIndex(id => this.studyingTechs.has(id));
        if (startIndex === -1) {
            startIndex = this.focusTechs.findIndex(id => !this.completedTechs.has(id));
        }
        if (startIndex === -1) {
            startIndex = 0;
        }
        
        this.focusIndex = startIndex;
        this.showFocusTech();
    }
    
    exitFocusMode() {
        const focusModal = document.getElementById('focusModal');
        focusModal.classList.remove('active');
    }
    
    showFocusTech() {
        const focusModal = document.getElementById('focusModal');
        const focusBody = document.getElementById('focusBody');
        const focusCounter = document.getElementById('focusCounter');
        const prevBtn = document.getElementById('focusPrev');
        const nextBtn = document.getElementById('focusNext');
        
        const techId = this.focusTechs[this.focusIndex];
        const tech = techData[techId];
        const isCompleted = this.completedTechs.has(techId);
        const isStudying = this.studyingTechs.has(techId);
        
        const html = `
            <div class="focus-tech-header">
                <div class="focus-tech-info">
                    <h2>${tech.title}</h2>
                    <div class="focus-tech-badges">
                        <span class="tech-badge">${tech.category}</span>
                        ${tech.difficulty ? `<span class="tech-badge">${tech.difficulty}</span>` : ''}
                        ${tech.learningTime ? `<span class="tech-badge">⏱️ ${tech.learningTime}</span>` : ''}
                    </div>
                </div>
                <div style="display: flex; gap: 0.5rem;">
                    <button 
                        onclick="roadmap.toggleStudying('${techId}'); roadmap.showFocusTech();" 
                        class="focus-complete-btn ${isStudying ? 'studying' : ''}"
                    >
                        ${isStudying ? '📖 Estudando' : '📖 Estudando'}
                    </button>
                    <button 
                        onclick="roadmap.toggleComplete('${techId}'); roadmap.showFocusTech();" 
                        class="focus-complete-btn ${isCompleted ? 'completed' : ''}"
                    >
                        ${isCompleted ? '✓ Concluído' : '☐ Concluído'}
                    </button>
                </div>
            </div>
            
            <p style="font-size: 1.125rem; line-height: 1.75; color: var(--text-primary); margin-bottom: 2rem;">
                ${tech.description}
            </p>
            
            ${tech.features ? `
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--text-primary);">✨ Principais Recursos</h3>
                <ul style="margin-bottom: 2rem; font-size: 1rem; line-height: 1.75;">
                    ${tech.features.map(f => `<li style="margin-bottom: 0.5rem;">${f}</li>`).join('')}
                </ul>
            ` : ''}
            
            ${tech.useCases ? `
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--text-primary);">🎯 Casos de Uso</h3>
                <ul style="margin-bottom: 2rem; font-size: 1rem; line-height: 1.75;">
                    ${tech.useCases.map(u => `<li style="margin-bottom: 0.5rem;">${u}</li>`).join('')}
                </ul>
            ` : ''}
            
            ${tech.resources ? `
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--text-primary);">📚 Recursos de Aprendizado</h3>
                <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
                    ${tech.resources.map(r => `
                        <a href="${r.url}" target="_blank" rel="noopener" 
                           style="padding: 1rem; background: var(--node-bg); border: 2px solid var(--border-color); 
                                  border-radius: var(--radius-md); text-decoration: none; color: var(--accent-primary); 
                                  font-weight: 600; transition: all 0.2s; display: block;">
                            📖 ${r.name}
                        </a>
                    `).join('')}
                </div>
            ` : ''}
        `;
        
        focusBody.innerHTML = html;
        focusCounter.textContent = `${this.focusIndex + 1} / ${this.focusTechs.length}`;
        
        // Atualizar estado dos botões
        prevBtn.disabled = this.focusIndex === 0;
        nextBtn.disabled = this.focusIndex === this.focusTechs.length - 1;
        
        focusModal.classList.add('active');
    }
    
    focusNavigate(direction) {
        if (direction === 'prev' && this.focusIndex > 0) {
            this.focusIndex--;
            this.showFocusTech();
        } else if (direction === 'next' && this.focusIndex < this.focusTechs.length - 1) {
            this.focusIndex++;
            this.showFocusTech();
        }
    }
    
    toggleTheme() {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem(STORAGE_KEYS.THEME, isDark ? 'dark' : 'light');
        
        const btn = document.getElementById('toggleTheme');
        btn.textContent = isDark ? '☀️ Tema Claro' : '🌙 Tema Escuro';
    }
    
    loadTheme() {
        const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            document.getElementById('toggleTheme').textContent = '☀️ Tema Claro';
        }
    }
}

// ============================================
// INICIALIZAÇÃO
// ============================================

let roadmap;

document.addEventListener('DOMContentLoaded', () => {
    roadmap = new RoadmapManager();
    
    console.log('%c🗺️ Frontend Roadmap 2025', 'font-size: 20px; font-weight: bold; color: #3b82f6;');
    console.log('%cDica: Dê duplo clique em qualquer tecnologia para marcar como concluída!', 'color: #10b981;');
});
