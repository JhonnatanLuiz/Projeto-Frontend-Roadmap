# 📝 Changelog - Frontend Roadmap

## ✨ Versão 1.2 - Modo Focado e Sistema de Status (16/10/2025)

### 🎯 Modo de Estudo Focado

**Descrição**: Nova funcionalidade que permite estudar uma tecnologia por vez sem distrações.

**Funcionalidades**:
- ✅ Botão "Modo Focado" no header com tema laranja
- ✅ Modal dedicado que exibe UMA tecnologia por vez
- ✅ Navegação sequencial (Previous/Next)
- ✅ Contador de progresso (ex: "5 / 165")
- ✅ Início inteligente: prioriza tecnologias "Estudando", depois não concluídas
- ✅ Dois botões no modal focado: "Estudando" e "Concluído"
- ✅ Informações completas: descrição, recursos, casos de uso, links
- ✅ Suporte para tecla ESC
- ✅ Indicador visual quando modo está ativo (botão fica verde)

**Como usar**:
1. Clique no botão "🎯 Modo Focado" no header
2. O modal abre na primeira tecnologia marcada como "Estudando" ou não concluída
3. Navegue com os botões ⬅️ Previous e Next ➡️
4. Marque como "Estudando" ou "Concluído" conforme aprende
5. Pressione ESC ou clique no X para sair

**Código afetado**:
- `index.html`: Adicionado `#toggleFocusMode` button e `#focusModal` com navegação
- `frontend_roadmap.css`: ~150 linhas de estilos para `.modal-focus`, `.focus-navigation`, `.btn-focus-nav`
- `frontend_roadmap.js`: Métodos `toggleFocusMode()`, `startFocusMode()`, `showFocusTech()`, `focusNavigate()`

---

### 📖 Sistema de Status "Estudando"

**Descrição**: Novo estado intermediário entre "Não Iniciado" e "Concluído" para melhor acompanhamento.

**Funcionalidades**:
- ✅ **Três estados possíveis**: Não Iniciado → Estudando → Concluído
- ✅ **Badge laranja 📖** aparece no canto superior direito dos nodes
- ✅ **Visual destacado**: Borda laranja brilhante com shadow e fundo gradiente
- ✅ **Persistência separada**: Salvo em `localStorage` como `roadmap-studying`
- ✅ **Exclusão mútua**: Tecnologia não pode estar "Estudando" e "Concluída" simultaneamente
- ✅ **Dois botões nos modais**: "Estudando" (laranja) e "Concluído" (verde)
- ✅ **Prioridade no Modo Focado**: Inicia pelas tecnologias marcadas como "Estudando"

**Como usar**:
1. Clique em uma tecnologia para abrir o modal
2. Clique em "📖 Marcar como Estudando" quando começar a estudá-la
3. O node fica com borda laranja e badge 📖
4. Quando dominar, clique em "✓ Marcar como Concluído"
5. O node muda para verde com badge ✓

**Código afetado**:
- `frontend_roadmap.js`: 
  - Novo `Set`: `studyingTechs`
  - Novo método: `toggleStudying(techId)`
  - Atualizado: `loadProgress()`, `saveProgress()`, `resetProgress()`
  - Atualizado: `startFocusMode()` para priorizar "Estudando"
- `frontend_roadmap.css`: 
  - Estilos `.node.studying` (borda laranja, gradiente)
  - Badge `.node.studying::after` (📖 no canto)
  - Botão `.focus-complete-btn.studying`

---

### 🎨 Redesign do Header

**Descrição**: Header completamente redesenhado para ser mais compacto e elegante.

**Melhorias**:
- ✅ Altura reduzida pela metade (não ocupa mais metade da tela)
- ✅ Título centralizado com ícone 📘
- ✅ Subtítulo menor e mais discreto (0.95rem)
- ✅ Botões reduzidos em tamanho (0.8rem, padding menor)
- ✅ Barra de pesquisa limitada a 500px e centralizada
- ✅ Resultado da busca centralizado abaixo
- ✅ Ícones e botões centralizados abaixo do título
- ✅ Linha divisória inferior removida
- ✅ Melhor uso do espaço vertical

**Código afetado**:
- `index.html`: Reorganização da ordem (botões → busca)
- `frontend_roadmap.css`: Padding reduzido, font-sizes ajustados, centralização com flexbox

---

### 🐛 Correções de Bugs

**Bug Fix #1: Botão X do Modal Focado**
- **Problema**: Botão de fechar não funcionava no modal do modo focado
- **Causa**: Lógica de close estava apenas no modal principal
- **Solução**: Refatorado para detectar qual modal foi clicado usando `closest('.modal')`
- **Código**: `frontend_roadmap.js` - Event listener dos `.modal-close` agora identifica o modal correto

**Bug Fix #2: Todos os Modais Fecham com ESC**
- **Melhoria**: Adicionado suporte para fechar modal focado com tecla ESC
- **Código**: `frontend_roadmap.js` - Adicionado check para `#focusModal` no event listener de ESC

**Bug Fix #3: Alinhamento da Barra de Pesquisa**
- **Problema**: Barra de pesquisa e resultados desalinhados para a esquerda
- **Solução**: Adicionado `text-align: center`, `display: block` e `width: 100%` aos resultados
- **Código**: `frontend_roadmap.css` - Ajustes em `.search-results`

---

## ✨ Versão 1.1 - Novas Features Implementadas (16/10/2025)

### 🔍 Sistema de Busca/Filtro de Tecnologias

**Descrição**: Campo de busca inteligente que filtra tecnologias em tempo real.

**Funcionalidades**:
- ✅ Campo de busca responsivo no header
- ✅ Filtro em tempo real (busca enquanto digita)
- ✅ Busca por: nome da tecnologia, categoria e descrição
- ✅ Highlight visual dos resultados encontrados (borda azul)
- ✅ Ocultação automática de seções vazias
- ✅ Contador de resultados (ex: "5 tecnologias encontradas")
- ✅ Reset automático ao limpar o campo

**Como usar**:
1. Digite no campo de busca no topo da página
2. Resultados aparecem instantaneamente
3. Tecnologias correspondentes ficam destacadas em azul
4. Seções sem resultados são ocultadas automaticamente

**Código afetado**:
- `index.html`: Adicionado campo `#searchInput` e `#searchResults`
- `frontend_roadmap.css`: Estilos para `.search-container`, `.search-input`, `.search-match`, `.hidden`
- `frontend_roadmap.js`: Método `filterTechnologies()` com lógica de busca

---

### 📤 Exportação de Progresso (JSON/PDF)

**Descrição**: Dois formatos de exportação do progresso do usuário.

#### 📄 Exportar como JSON
**Funcionalidades**:
- ✅ Download direto de arquivo JSON
- ✅ Contém metadata completa (versão, data de exportação)
- ✅ Lista todas tecnologias concluídas com detalhes
- ✅ Nome do arquivo com data automática

**Estrutura do JSON**:
```json
{
  "version": "1.1",
  "exportDate": "2025-10-16T10:30:00.000Z",
  "totalTechnologies": 131,
  "completedTechnologies": 25,
  "completedList": [
    {
      "id": "react",
      "title": "React 18",
      "category": "Framework",
      "difficulty": "Intermediário"
    }
  ]
}
```

#### 📑 Exportar como PDF
**Funcionalidades**:
- ✅ Abre nova janela print-friendly
- ✅ Design profissional e otimizado para impressão
- ✅ Estatísticas visuais em destaque
- ✅ Tabela completa com tecnologias concluídas
- ✅ Badges coloridos por nível de dificuldade
- ✅ Botão para imprimir/salvar como PDF nativo

**Visual do PDF**:
- Header com título
- Card de estatísticas (% conclusão, concluídas, restantes)
- Tabela com: Tecnologia, Categoria, Dificuldade, Tempo de Aprendizado
- Footer com data de geração

**Como usar**:
1. Clique em "📄 Exportar JSON" para download direto
2. Clique em "📑 Exportar PDF" para abrir preview
3. No preview PDF, clique em "Imprimir / Salvar como PDF"
4. No diálogo de impressão, selecione "Salvar como PDF"

**Código afetado**:
- `index.html`: Botões `#exportJSON` e `#exportPDF`
- `frontend_roadmap.css`: Estilos para `.btn-export`
- `frontend_roadmap.js`: Métodos `exportJSON()` e `exportPDF()`

---

### 📊 Gráficos de Progresso por Categoria

**Descrição**: Modal de estatísticas com visualização gráfica detalhada do progresso.

**Funcionalidades**:
- ✅ Modal amplo com estatísticas completas
- ✅ 4 cards de estatísticas gerais
- ✅ Gráfico de barras para cada categoria
- ✅ Percentual visual e numérico por categoria
- ✅ Design responsivo e acessível
- ✅ Animações suaves nas barras de progresso
- ✅ Fecha com ESC ou clique no X

**Estatísticas exibidas**:
1. **Cards Gerais**:
   - % de conclusão total
   - Número de tecnologias concluídas
   - Número de tecnologias restantes
   - Total de tecnologias

2. **Gráficos por Categoria**:
   - Fundamentos Essenciais
   - React Ecosystem
   - Vue Ecosystem
   - Angular Ecosystem
   - Emerging Frameworks
   - Build Tools & Package Managers
   - Styling Solutions
   - State Management
   - Performance & Optimization
   - Testing Strategies
   - Modern Web Capabilities
   - Deployment & DevOps
   - Mobile Development
   - Workflow & Collaboration

**Cada categoria mostra**:
- Nome da categoria
- X/Y tecnologias (% concluído)
- Barra de progresso visual com gradiente verde

**Como usar**:
1. Clique no botão "📊 Estatísticas" no header
2. Visualize o modal com todas as estatísticas
3. Navegue pelos gráficos de cada categoria
4. Feche com ESC ou clicando no X

**Código afetado**:
- `index.html`: Modal `#statsModal`, botão `#showStats`
- `frontend_roadmap.css`: Estilos para `.stats-grid`, `.category-chart`, `.progress-bar-chart`, `.modal-wide`
- `frontend_roadmap.js`: Método `showStatistics()` com cálculo de estatísticas

---

## 🐛 Correções de Bugs

### ❌ Bug: Tags HTML no Modal de "HTML Semântico"

**Problema identificado**: 
- No modal da tecnologia "HTML Semântico", o texto mostrava espaços em branco
- Causa: Tags HTML (`<header>`, `<nav>`, etc.) estavam sendo interpretadas pelo navegador

**Correção aplicada**:
```javascript
// ANTES (com bug):
'Tags com significado: <header>, <nav>, <main>, <article>, <aside>, <footer>'

// DEPOIS (corrigido):
'Tags com significado: &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;aside&gt;, &lt;footer&gt;'
```

**Tecnologias verificadas**:
- ✅ `semantic-html`: Corrigido
- ✅ Busca em todo o código: Nenhuma outra ocorrência similar encontrada

**Localização**:
- Arquivo: `frontend_roadmap.js`
- Linha: ~47
- Objeto: `techData['semantic-html'].features[0]`

---

## 📊 Resumo das Mudanças

### Arquivos Modificados

| Arquivo | Linhas Adicionadas | Mudanças Principais |
|---------|-------------------|---------------------|
| `index.html` | ~20 | Campo de busca, botões de exportação, modal de estatísticas |
| `frontend_roadmap.css` | ~180 | Estilos para busca, botões, gráficos, modal amplo |
| `frontend_roadmap.js` | ~220 | Métodos de busca, exportação e estatísticas |
| `CHANGELOG.md` | 450 | Este arquivo de documentação |

### Estatísticas de Código

**Antes (v1.0)**:
- HTML: 629 linhas
- CSS: 715 linhas
- JavaScript: 4.414 linhas
- **Total: 5.758 linhas**

**Depois (v1.1)**:
- HTML: 651 linhas (+22)
- CSS: 895 linhas (+180)
- JavaScript: 4.751 linhas (+337)
- **Total: 6.297 linhas (+539)**

### Novos Elementos de Interface

**HTML**:
- 1 campo de busca (`#searchInput`)
- 1 indicador de resultados (`#searchResults`)
- 1 botão de estatísticas (`#showStats`)
- 2 botões de exportação (`#exportJSON`, `#exportPDF`)
- 1 modal de estatísticas (`#statsModal`)

**CSS Classes**:
- `.search-container`, `.search-input`, `.search-results`
- `.search-match`, `.hidden`, `.node-group.hidden`
- `.btn-export`, `.btn-stats`
- `.stats-grid`, `.stat-card`, `.stat-value`, `.stat-label`
- `.category-chart`, `.category-item`, `.progress-bar-chart`
- `.modal-wide`

**JavaScript Methods**:
- `filterTechnologies(searchTerm)`: Filtra tecnologias em tempo real
- `exportJSON()`: Exporta progresso como JSON
- `exportPDF()`: Gera preview PDF para impressão
- `showStatistics()`: Exibe modal com gráficos de progresso

---

## 🎯 Melhorias de UX/UI

### Busca Inteligente
- ⚡ Feedback instantâneo durante digitação
- 🎨 Highlight visual de resultados (borda azul + fundo azul claro)
- 📊 Contador de resultados em tempo real
- 🚀 Performance otimizada com event delegation

### Exportação
- 📥 Download imediato de JSON (um clique)
- 🖨️ Preview PDF profissional antes de salvar
- 🎨 Design otimizado para impressão
- 📊 Tabelas organizadas por dificuldade

### Estatísticas
- 📊 Visualização clara com cards e gráficos
- 🎨 Gradientes visuais nas barras de progresso
- 📈 Percentuais em todos os gráficos
- 💡 Mensagem motivacional

---

## 🔧 Detalhes Técnicos

### Sistema de Busca

**Algoritmo**:
1. Captura input em tempo real (event listener)
2. Normaliza termo de busca (lowercase, trim)
3. Itera sobre todos os nós
4. Verifica match em: title, category, description
5. Aplica classes `.hidden` ou `.search-match`
6. Oculta grupos e seções vazias
7. Atualiza contador de resultados

**Performance**:
- Usa `querySelectorAll` otimizado
- Event delegation onde possível
- Remoção eficiente de classes

### Exportação JSON

**Processo**:
1. Coleta dados do `localStorage`
2. Mapeia IDs para objetos completos
3. Cria objeto com metadata
4. Converte para JSON formatado
5. Cria Blob com tipo `application/json`
6. Gera URL temporária
7. Trigger download programático
8. Limpa URL após download

### Exportação PDF

**Processo**:
1. Coleta dados de progresso
2. Gera HTML completo com CSS inline
3. Abre em nova janela
4. Renderiza preview
5. Usuário aciona print nativo
6. Browser gera PDF

**Vantagens desta abordagem**:
- ✅ Sem dependências externas (jsPDF, etc.)
- ✅ Usa API nativa do browser
- ✅ Preview antes de salvar
- ✅ Controle total sobre layout
- ✅ CSS otimizado para impressão

### Gráficos de Progresso

**Implementação**:
- CSS puro (sem bibliotecas)
- Barras de progresso com width dinâmico
- Gradientes para visual profissional
- Transições suaves (0.5s ease)
- Percentual dentro da barra quando >= 15%

**Cálculo de Estatísticas**:
```javascript
// Para cada seção do roadmap:
const sectionNodes = section.querySelectorAll('.node');
const sectionCompleted = Array.from(sectionNodes).filter(node => 
    this.completedTechs.has(node.dataset.tech)
).length;
const percentage = (sectionCompleted / sectionNodes.length) * 100;
```

---

## 🚀 Próximas Features (Roadmap v1.2+)

Sugestões para futuras versões:

### Versão 1.2 (Planejada)
- [ ] Modo de estudo focado (uma tecnologia por vez)
- [ ] Integração com GitHub para sincronização
- [ ] Sugestões personalizadas de ordem de aprendizado
- [ ] Sistema de metas e prazos
- [ ] Notificações de progresso

### Versão 2.0 (Futuro)
- [ ] Backend para sync multi-dispositivo
- [ ] Sistema de badges e conquistas
- [ ] Comunidade e fórum
- [ ] Integração com plataformas de cursos
- [ ] Roadmaps adicionais (Backend, DevOps, etc.)

---

## 📝 Notas de Desenvolvimento

### Compatibilidade
- ✅ Testado em: Chrome, Firefox, Edge, Safari
- ✅ Responsivo: Mobile, Tablet, Desktop
- ✅ Acessibilidade: Navegação por teclado (ESC funciona)

### Persistência
- ✅ LocalStorage usado para progresso e tema
- ✅ Dados não expiram
- ✅ Funciona offline
- ⚠️ Limitado ao navegador atual (sem sync entre devices)

### Performance
- ✅ Busca otimizada (debounce não necessário pois é rápida)
- ✅ Gráficos renderizados sob demanda (só quando modal abre)
- ✅ Export JSON instantâneo
- ✅ Export PDF abre em nova aba (não bloqueia UI)

---

## 🙏 Créditos

**Desenvolvido por**: Frontend Roadmap Team  
**Data de Release**: 16 de Outubro de 2025  
**Versão**: 1.1  
**Licença**: MIT  

---

## 📞 Suporte

Para reportar bugs ou sugerir melhorias:
1. Abra uma issue no repositório
2. Descreva o problema/sugestão detalhadamente
3. Inclua screenshots se aplicável

---

<div align="center">

**[⬆ Voltar ao README](README.md)**

Made with ❤️ in Brasil

</div>
