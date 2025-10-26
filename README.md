# 🗺️ Frontend Development Roadmap 2025

Um roadmap interativo e abrangente para desenvolvimento Frontend moderno, inspirado no [roadmap.sh](https://roadmap.sh), com todas as informações em **Português Brasileiro**.

![Frontend Roadmap](https://img.shields.io/badge/Frontend-Roadmap-3b82f6)
![Tecnologias](https://img.shields.io/badge/Tecnologias-100%2B-10b981)
![Português BR](https://img.shields.io/badge/Idioma-Portugu%C3%AAs%20BR-yellow)

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Características](#-características)
- [Tecnologias Cobertas](#-tecnologias-cobertas)
- [Como Usar](#-como-usar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Instalação](#-instalação)
- [Estatísticas](#-estatísticas)
- [Roadmap de Desenvolvimento](#-roadmap-de-desenvolvimento)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

Este projeto é um **roadmap interativo** para desenvolvedores Frontend que desejam aprender ou se atualizar nas tecnologias mais modernas do mercado. Com mais de **100 tecnologias documentadas** em português brasileiro, o roadmap oferece:

- ✅ **Informações detalhadas** sobre cada tecnologia
- ✅ **Rastreamento de progresso** pessoal
- ✅ **Organização lógica** em categorias e subcategorias
- ✅ **Recursos de aprendizado** para cada tópico
- ✅ **Interface visual** inspirada no roadmap.sh
- ✅ **Modo claro/escuro** para melhor experiência
- ✅ **Persistência local** usando localStorage

---

## ✨ Características

### 🖱️ Interatividade
- **Clique simples**: Abre um modal com informações detalhadas da tecnologia
- **Duplo clique**: Marca/desmarca a tecnologia como concluída
- **Barra de progresso**: Visualize seu avanço em tempo real
- **Botão de reset**: Limpe todo o progresso quando quiser recomeçar

### 🔍 Busca e Filtros (v1.1)
- **Busca em tempo real**: Digite e veja resultados instantaneamente
- **Busca inteligente**: Procura por nome, categoria ou descrição
- **Highlight de resultados**: Tecnologias encontradas ficam destacadas
- **Contador dinâmico**: Veja quantas tecnologias correspondem à busca
- **Ocultação automática**: Seções sem resultados são escondidas

### 🎯 Modo de Estudo Focado (Novo na v1.2!)
- **Estudo sem distrações**: Veja UMA tecnologia por vez
- **Navegação sequencial**: Botões Previous/Next para navegar
- **Início inteligente**: Prioriza tecnologias marcadas como "Estudando"
- **Contador de progresso**: Acompanhe quantas faltam (ex: "5 / 165")
- **Dois botões**: "Estudando" (laranja) e "Concluído" (verde)
- **Informações completas**: Descrição, recursos, casos de uso e links
- **Atalhos de teclado**: Tecla ESC para sair do modo focado

### 📖 Sistema de Status "Estudando" (Novo na v1.2!)
- **Três estados**: Não Iniciado → Estudando → Concluído
- **Badge visual**: Ícone 📖 laranja no canto superior direito
- **Destaque especial**: Borda laranja brilhante com shadow
- **Persistência**: Salvo separadamente no localStorage
- **Exclusão mútua**: Não pode estar "Estudando" e "Concluído" ao mesmo tempo
- **Prioridade**: Modo focado começa pelas tecnologias que você está estudando
- **Fácil transição**: Botões lado a lado nos modais

### 📊 Estatísticas e Análises (v1.1)
- **Dashboard visual**: Gráficos de progresso por categoria
- **4 métricas principais**: % conclusão, concluídas, restantes, total
- **Barras de progresso**: Visual claro do progresso em cada categoria
- **Modal dedicado**: Estatísticas completas em tela ampla

### 📤 Exportação de Dados (v1.1)
- **Exportar JSON**: Download direto com todos os dados
- **Exportar PDF**: Preview profissional pronto para impressão
- **Metadados completos**: Versão, data, lista detalhada
- **Design otimizado**: Tabelas e badges organizados

###  Responsividade
- Design totalmente responsivo
- Adaptado para desktop, tablet e mobile
- Interface otimizada para diferentes tamanhos de tela
- **Header compacto**: Redesenhado na v1.2 para ocupar menos espaço

### 🎨 Temas
- Modo claro e modo escuro
- Troca de tema com um clique
- Preferência salva automaticamente

### 💾 Persistência
- Progresso salvo automaticamente no localStorage
- Tema preferido é lembrado
- Dados persistem entre sessões

---

## 🚀 Tecnologias Cobertas

O roadmap está organizado em **12 categorias principais**:

### 1️⃣ **Core Foundations** (Fundamentos Essenciais)
- HTML5 (Semantic HTML, Forms, Accessibility, SEO)
- CSS3 (Layouts, Animations, Responsive Design, CSS Grid/Flexbox)
- JavaScript (ES6+, Async/Await, DOM, APIs)

### 2️⃣ **React Ecosystem** (Ecossistema React)
- React 18 (Hooks, Concurrent Features, Server Components)
- Next.js (App Router, SSR, ISR, Server Actions)
- Remix (Nested Routes, Progressive Enhancement)
- Zustand, Jotai, Redux Toolkit

### 3️⃣ **Vue Ecosystem** (Ecossistema Vue)
- Vue 3 (Composition API, Script Setup, Reactivity)
- Nuxt 3 (SSR, Auto-imports, Server Routes)
- Pinia (State Management)
- Vue Router

### 4️⃣ **Angular Ecosystem** (Ecossistema Angular)
- Angular 17 (Signals, Standalone Components)
- RxJS (Reactive Programming)
- NgRx (State Management)

### 5️⃣ **Emerging Frameworks** (Frameworks Emergentes)
- Svelte & SvelteKit
- Solid.js
- Qwik (Resumability)
- Astro (Content-focused)

### 6️⃣ **Build Tools & Package Managers**
- Vite, Webpack, Parcel, Turbopack
- npm, yarn, pnpm
- Dev Tools (VS Code, Chrome DevTools, ESLint, Prettier)

### 7️⃣ **Styling Solutions**
- CSS Frameworks (Tailwind CSS, UnoCSS, Panda CSS)
- CSS-in-JS (Styled Components, Emotion)
- UI Libraries (Shadcn/ui, Radix UI, Material UI, Chakra UI, Ant Design)
- CSS Architecture (BEM, CSS Modules, Utility-first, Design Systems)

### 8️⃣ **State Management**
- Client State (Zustand, Jotai, Redux Toolkit, Context API, Signals)
- Server State (TanStack Query, SWR, Apollo Client, RTK Query)
- Data Flow Patterns (Prop Drilling, Global vs Local, XState, Optimistic Updates)

### 9️⃣ **Performance & Optimization**
- Core Web Vitals (LCP, FID, CLS, INP)
- Optimization Techniques (Code Splitting, Lazy Loading, Image Optimization, Bundle Analysis, Caching)
- Performance Tools (Lighthouse, WebPageTest, Vitals Monitoring, React Profiler, Chrome Performance)

### 🔟 **Testing Strategies**
- Unit Testing (Vitest, Jest, React Testing Library, Vue Test Utils)
- Component Testing (Storybook, Chromatic, Visual Regression, CDD)
- E2E Testing (Playwright, Cypress, Puppeteer)

### 1️⃣1️⃣ **Modern Web Capabilities**
- PWA (Service Workers, Web Manifest, Offline-First)
- Modern Web APIs (WebSockets, WebRTC, Intersection Observer)
- Advanced Features (WebAssembly, Web Workers, IndexedDB)

### 1️⃣2️⃣ **Deployment & DevOps**
- Hosting Platforms (Vercel, Netlify, Cloudflare Pages, AWS)
- CI/CD (GitHub Actions, GitLab CI, Jenkins)
- Monitoring (Sentry, Datadog, Analytics)

### 1️⃣3️⃣ **Mobile Development**
- Cross-Platform (React Native, Flutter, Ionic)
- PWA Mobile (App Installation, Push Notifications)
- Native Integration (Capacitor, Cordova)

### 1️⃣4️⃣ **Workflow & Collaboration**
- Version Control (Git, GitHub, GitLab)
- Project Management (Jira, Linear, Trello)
- Collaboration (Slack, Discord, Notion)

---

## 📖 Como Usar

### 🖱️ Navegação Básica

1. **Visualizar Detalhes de uma Tecnologia**
   - Dê um **clique simples** em qualquer nó (caixa) de tecnologia
   - Um modal será aberto com:
     - 📝 Descrição completa
     - ⚡ Principais características
     - 💼 Casos de uso
     - 📚 Recursos de aprendizado
     - 📊 Nível de dificuldade
     - ⏱️ Tempo estimado de aprendizado
     - 📖 Botão "Marcar como Estudando" (v1.2)
     - ✓ Botão "Marcar como Concluído"

2. **Marcar como Estudando** (Novo na v1.2!)
   - Clique em uma tecnologia para abrir o modal
   - Clique no botão **📖 Marcar como Estudando**
   - O nó ficará com:
     - 🟠 Borda laranja brilhante
     - 📖 Badge laranja no canto superior direito
     - ✨ Efeito de destaque visual
   - Use para tecnologias que você está atualmente estudando

3. **Marcar como Concluído**
   - Clique em uma tecnologia para abrir o modal
   - Clique no botão **✓ Marcar como Concluído**
   - Ou dê um **duplo clique** direto no nó
   - O nó ficará com fundo verde e terá um ✓ indicando conclusão
   - Seu progresso será atualizado automaticamente na barra superior
   - Nota: Marcar como concluído remove automaticamente o status "Estudando"

4. **Desmarcar Status**
   - Clique novamente no mesmo botão no modal
   - Ou dê outro **duplo clique** no nó já marcado
   - O nó voltará ao estado "Não Iniciado"

5. **Alternar Tema**
   - Clique no botão **🌙 Tema Escuro** / **☀️ Tema Claro** no topo da página
   - Sua preferência será salva automaticamente

6. **Modo de Estudo Focado** (Novo na v1.2!)
   - Clique no botão **🎯 Modo Focado** no header
   - Um modal abre mostrando UMA tecnologia por vez
   - Use os botões ⬅️ **Previous** e **Next** ➡️ para navegar
   - Veja o contador (ex: "5 / 165") para acompanhar seu progresso
   - Marque como "Estudando" ou "Concluído" diretamente no modal
   - Pressione **ESC** ou clique no **X** para sair
   - O modo focado prioriza tecnologias marcadas como "Estudando"

7. **Resetar Progresso**
   - Clique no botão **🔄 Resetar Progresso**
   - Confirme a ação
   - Todo o progresso será limpo (Estudando + Concluído)

8. **Buscar Tecnologias** (v1.1)
   - Digite no campo de busca no topo da página
   - Resultados aparecem em tempo real
   - Tecnologias correspondentes ficam destacadas em azul
   - Seções sem resultados são ocultadas automaticamente

9. **Ver Estatísticas** (v1.1)
   - Clique no botão **📊 Estatísticas**
   - Veja gráficos de progresso por categoria
   - Visualize métricas gerais (% conclusão, concluídas, restantes)
   - Feche com ESC ou clique no X

10. **Exportar Progresso** (v1.1)
   - **JSON**: Clique em **📄 Exportar JSON** para download imediato
   - **PDF**: Clique em **📑 Exportar PDF** para preview profissional
     - No preview, clique em "Imprimir / Salvar como PDF"
     - Selecione "Salvar como PDF" no diálogo de impressão

### 📊 Acompanhando seu Progresso

- A **barra de progresso** no topo mostra:
  - Percentual de tecnologias concluídas
  - Número absoluto (ex: 25/165)
  - Barra visual colorida

- **Estados visuais**:
  - ⚪ **Não Iniciado**: Cinza padrão
  - 🟠 **Estudando**: Borda laranja com badge 📖
  - 🟢 **Concluído**: Fundo verde com badge ✓

### 💡 Dicas

- Marque como **"Estudando"** as tecnologias que você está aprendendo ativamente
- Use o **Modo Focado** para estudar sem distrações
- Comece pelas **Core Foundations** se você é iniciante
- Escolha um **framework principal** (React, Vue ou Angular) e aprofunde-se
- Não tente aprender tudo de uma vez - seja estratégico
- Use os **recursos de aprendizado** fornecidos em cada tecnologia
- Considere o **tempo estimado** e **dificuldade** ao planejar seus estudos

---

## 📁 Estrutura do Projeto

```
Frontend-roadmap/
├── index.html               # Estrutura HTML principal
├── frontend_roadmap.css     # Estilos e temas
├── frontend_roadmap.js      # Lógica e dados das tecnologias
└── README.md                # Documentação (este arquivo)
```

### 📄 Detalhamento dos Arquivos

#### `index.html` (~1000 linhas)
- Estrutura semântica com HTML5
- 12 seções principais do roadmap
- Mais de 100 nós de tecnologias organizados hierarquicamente
- Sistema de modal para detalhes
- Header com controles (tema, reset, progresso)
- Footer com informações

#### `frontend_roadmap.css` (~700 linhas)
- Sistema de temas com CSS Variables
- Design inspirado no roadmap.sh
- Animações e transições suaves
- Responsividade para mobile, tablet e desktop
- Estilos para nós principais e sub-nós
- Modal overlay e componentes

#### `frontend_roadmap.js` (~3500 linhas)
- Classe `RoadmapManager` para gerenciar funcionalidades
- Objeto `techData` com 100+ tecnologias documentadas em português
- Cada tecnologia contém:
  - `title`: Nome da tecnologia
  - `category`: Categoria/tipo
  - `description`: Descrição detalhada
  - `features[]`: Lista de características principais
  - `useCases[]`: Casos de uso práticos
  - `resources[]`: Links para documentação e tutoriais
  - `difficulty`: Nível de dificuldade (Iniciante, Intermediário, Avançado)
  - `learningTime`: Tempo estimado de aprendizado
- Integração com localStorage para persistência
- Event listeners para interatividade

---

## 🎨 Funcionalidades

### Modal de Informações
- **Design responsivo** e acessível
- **Tecla ESC** para fechar
- **Click fora** do modal para fechar
- **Scroll** interno para conteúdo extenso
- **Links clicáveis** para recursos externos

### Sistema de Progresso
- **Cálculo automático** de percentual
- **Atualização em tempo real**
- **Persistência** entre sessões
- **Visual feedback** com barra colorida

### Temas Claro/Escuro
- **Troca instantânea** sem reload
- **Persistência** da preferência
- **Cores otimizadas** para cada tema
- **Accessibility** respeitada em ambos os temas

### Responsividade
- **Desktop** (>768px): Layout completo com 2-3 colunas
- **Tablet** (480px-768px): Layout adaptado com 1-2 colunas
- **Mobile** (<480px): Layout em coluna única, otimizado para touch

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos modernos com variables, grid, flexbox, animations
- **JavaScript ES6+**: Classes, arrow functions, template literals, async/await

### APIs do Navegador
- **localStorage API**: Persistência de dados
- **DOM API**: Manipulação de elementos
- **Event Listeners**: Interatividade
- **CSS Variables**: Sistema de temas dinâmico

### Metodologias
- **Mobile-First**: Design responsivo começando pelo mobile
- **Progressive Enhancement**: Funcionalidades adicionadas progressivamente
- **Acessibilidade**: Semântica HTML, ARIA labels, navegação por teclado
- **Performance**: Lazy loading, event delegation, otimização de repaints

---

## 📦 Instalação

### Opção 1: Download Direto

1. Faça o download dos arquivos:
   - `index.html`
   - `frontend_roadmap.css`
   - `frontend_roadmap.js`

2. Coloque todos os arquivos na **mesma pasta**

3. Abra o arquivo `index.html` em seu navegador

### Opção 2: Git Clone

```bash
# Clone o repositório
git clone <url-do-repositório>

# Entre na pasta
cd Frontend-roadmap

# Abra o arquivo HTML no navegador
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Opção 3: Live Server (Recomendado para desenvolvimento)

Se você usa **VS Code**:

1. Instale a extensão **Live Server**
2. Clique com botão direito em `index.html`
3. Selecione **"Open with Live Server"**

---

## 📊 Estatísticas

### Números do Projeto

- 📚 **100+ Tecnologias** documentadas
- 🗂️ **12 Categorias** principais
- 📝 **~5.200 linhas** de código total
- 🌐 **100% em Português Brasileiro**
- 🎨 **2 Temas** (Claro e Escuro)
- 📱 **3 Breakpoints** responsivos
- 💾 **2 Tipos** de persistência (progresso + tema)

### Distribuição por Categoria

| Categoria | Tecnologias |
|-----------|-------------|
| Core Foundations | 15 |
| React Ecosystem | 8 |
| Vue Ecosystem | 4 |
| Angular Ecosystem | 4 |
| Emerging Frameworks | 4 |
| Build Tools | 7 |
| Styling Solutions | 13 |
| State Management | 16 |
| Performance | 17 |
| Testing | 15 |
| Modern Web | 13 |
| Deployment & DevOps | 13 |
| Mobile Development | 10 |
| Workflow & Collaboration | 12 |

### Níveis de Dificuldade

- 🟢 **Iniciante**: ~20 tecnologias
- 🟡 **Intermediário**: ~50 tecnologias
- 🔴 **Avançado**: ~30 tecnologias

---

## 🗓️ Roadmap de Desenvolvimento

### ✅ Versão 1.0 (Lançada)
- [x] Estrutura HTML completa
- [x] Sistema de estilos com temas
- [x] 100+ tecnologias documentadas
- [x] Sistema de progresso
- [x] Persistência localStorage
- [x] Modal de informações
- [x] Design responsivo
- [x] Documentação completa

### ✅ Versão 1.1 (Lançada - 16/10/2025)
- [x] Sistema de busca/filtro de tecnologias
- [x] Exportar progresso (JSON/PDF)
- [x] Gráficos de progresso por categoria
- [x] Correção de bugs (HTML entities)
- [x] Modal de estatísticas detalhadas
- [x] Preview PDF profissional

### ✅ Versão 1.2 (Atual - 16/10/2025)
- [x] Modo de estudo focado (uma tecnologia por vez)
- [x] Sistema de status "Estudando" com badge laranja 📖
- [x] Navegação sequencial (Previous/Next) no modo focado
- [x] Início inteligente: prioriza tecnologias "Estudando"
- [x] Dois botões nos modais: "Estudando" e "Concluído"
- [x] Redesign do header (mais compacto e centralizado)
- [x] Correção do botão X no modal focado
- [x] Alinhamento centralizado da barra de pesquisa
- [x] Persistência separada para status "Estudando"
- [x] Visual aprimorado com bordas e badges
- [ ] Integração com GitHub para salvar progresso
- [ ] Sugestões de ordem de aprendizado baseadas em objetivos

### 🔜 Versão 1.3 (Próximas features)
- [ ] Integração com GitHub para salvar progresso
- [ ] Sugestões de ordem de aprendizado baseadas em objetivos
- [ ] Sistema de metas e prazos
- [ ] Notificações de progresso
- [ ] Importar progresso de JSON

### 🎯 Versão 2.0 (Futuro)
- [ ] Backend para sincronização multi-dispositivo
- [ ] Sistema de badges e gamificação
- [ ] Comunidade e fórum de discussão
- [ ] Planos de estudo personalizados
- [ ] Integração com plataformas de cursos
- [ ] Roadmaps adicionais (Backend, DevOps, Mobile)

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Aqui estão algumas formas de contribuir:

### 🐛 Reportar Bugs
- Abra uma **issue** descrevendo o problema
- Inclua prints e passos para reproduzir

### 💡 Sugerir Novas Features
- Abra uma **issue** com a tag `enhancement`
- Descreva a feature e o valor que ela traz

### 📝 Melhorar Documentação
- Correções de português
- Adicionar exemplos
- Melhorar explicações

### 🆕 Adicionar Tecnologias
1. Fork o projeto
2. Adicione a tecnologia no objeto `techData` em `frontend_roadmap.js`
3. Adicione o nó HTML correspondente em `index.html`
4. Teste localmente
5. Abra um Pull Request

### Formato para Nova Tecnologia

```javascript
'nome-da-tech': {
    title: 'Nome Completo',
    category: 'Categoria',
    description: 'Descrição detalhada em português...',
    features: [
        'Característica 1',
        'Característica 2',
        'Característica 3'
    ],
    useCases: [
        'Caso de uso 1',
        'Caso de uso 2'
    ],
    resources: [
        { name: 'Documentação Oficial', url: 'https://...' }
    ],
    difficulty: 'Iniciante|Intermediário|Avançado',
    learningTime: 'X semanas'
}
```

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👨‍💻 Autor

Criado com ❤️ para a comunidade de desenvolvedores Frontend brasileiros.

---

## 🙏 Agradecimentos

- **[roadmap.sh](https://roadmap.sh)** - Inspiração para o design e estrutura
- **Comunidade Frontend BR** - Feedback e suporte
- **MDN Web Docs** - Referência técnica
- **Todos os contribuidores** - Obrigado por melhorar este projeto!

---

## 📞 Contato & Suporte

- 🐛 **Issues**: Para bugs e sugestões
- 💬 **Discussions**: Para perguntas e ideias
- ⭐ **Star**: Se este projeto foi útil, deixe uma estrela!

---

<div align="center">

**[⬆ Voltar ao topo](#-frontend-development-roadmap-2025)**

Made with ❤️ and ☕ in Brasil

![GitHub stars](https://img.shields.io/github/stars/seu-usuario/frontend-roadmap?style=social)
![GitHub forks](https://img.shields.io/github/forks/seu-usuario/frontend-roadmap?style=social)

</div>
