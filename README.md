# Template Clínica & Saúde — React + Vite

Template profissional para clínicas, consultórios e profissionais de saúde.

## 🚀 Como rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

## 🏗️ Como fazer o build de produção

```bash
npm run build
```

Os arquivos finais estarão na pasta `dist/`. Use `npm run preview` para testar antes de subir.

## ☁️ Como publicar no Vercel (recomendado)

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Instale o CLI: `npm i -g vercel`
3. Rode `vercel` na pasta do projeto e siga os passos
4. Resultado: URL pública grátis em segundos!

Ou simplesmente conecte o repositório GitHub no painel do Vercel.

## ✏️ Como personalizar

1. Abra `src/App.tsx`
2. Substitua todos os `[colchetes]` pelo conteúdo real do cliente
3. Em `vite.config.ts`, `index.html` e `src/index.css`, ajuste cores e fontes
4. Troque as variáveis CSS em `src/index.css` para mudar toda a paleta de cores

## 📁 Estrutura

```
src/
 ├── App.tsx      ← Conteúdo e componentes da página
 ├── index.css    ← Estilos (customize as variáveis CSS no :root)
 └── main.tsx     ← Entry point React (não precisa editar)
index.html         ← SEO (título, meta description)
```

## 🎨 Variáveis de cor principais (em `src/index.css`)

| Variável | O que controla |
|----------|---------------|
| `--primary` | Cor principal (botões, destaques) |
| `--primary-dark` | Hover/gradientes |
| `--primary-light` | Fundos suaves |

---
*Template desenvolvido pela [Capybara Holding](https://capybaraholding.com.br)*
