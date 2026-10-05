# 👨‍🍳 Chef Claude

Uma aplicação web interativa em **React** + **Vite** que utiliza Inteligência Artificial para sugerir receitas personalizadas com base nos ingredientes que você tem disponíveis em casa.

---

## 🚀 Demonstração

[Acesse a aplicação online na Vercel](https://SEU-USUARIO-VERCEL.vercel.app) *(substitua pelo seu link da Vercel)*

---

## ✨ Funcionalidades

- **Adição Dinâmica de Ingredientes:** Monte sua lista de ingredientes de forma simples e intuitiva.
- **Geração de Receitas por IA:** Integração com a API da Hugging Face utilizando o modelo LLM `Qwen/Qwen2.5-72B-Instruct`.
- **Formatação em Markdown:** Visualização da receita organizada com títulos, modo de preparo e lista de ingredientes usando `react-markdown`.
- **Interface Responsiva:** Layout centralizado e otimizado para navegação em dispositivos móveis e desktops.
- **Feedback Visual de Carregamento:** Indicador animado (*spinner*) enquanto a IA gera a resposta.

---

## 🛠️ Tecnologias Utilizadas

- **[React 19](https://react.dev/):** Biblioteca principal para a interface.
- **[Vite](https://vitejs.dev/):** Build tool rápida para desenvolvimento frontend.
- **[Hugging Face Inference API](https://huggingface.co/docs/api-inference/index):** Chamadas ao modelo de linguagem para geração das receitas.
- **[react-markdown](https://github.com/remarkjs/react-markdown):** Renderização estilizada da resposta em Markdown.
- **CSS3:** Estilização personalizada com suporte a Flexbox, transições e animações.

---

## 📦 Como Rodar o Projeto Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- Uma conta na **[Hugging Face](https://huggingface.co/)** para obter um token de acesso de API (*Inference API Token*).

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU_USUARIO/chef-claude.git](https://github.com/SEU_USUARIO/chef-claude.git)
   cd chef-claude