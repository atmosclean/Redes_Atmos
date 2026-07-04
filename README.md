# Lobby de links — Atmos Clean

Página de bio/link hub feita apenas com HTML, CSS e JavaScript puro. Não exige instalação, build, framework ou CDN.

## Visualizar localmente

Abra `index.html` diretamente no navegador. Se preferir um servidor local:

```powershell
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Onde editar

- **Nome, slogan e descrição:** procure por `DADOS EDITÁVEIS DA MARCA` em `index.html`.
- **Links:** edite somente as variáveis `social-link-whatsapp`, `social-link-instagram` e `social-link-facebook` no topo do `index.html`. Cada valor é aplicado automaticamente ao atalho e ao cartão correspondente.
- **Textos dos botões:** edite o texto diretamente em cada bloco `.link-card`.
- **Logo:** os arquivos oficiais da Atmos Clean já estão em `assets/brand/`; substitua-os mantendo os nomes ou altere o caminho no HTML.
- **Favicon e fundo:** ficam em `assets/brand/`.
- **Cores e aparência:** altere as variáveis no início de `css/style.css`.
- **Adicionar/remover rede:** copie ou apague um bloco `<a class="link-card">` no HTML e crie a variável `social-link-*` correspondente.

Os endereços atuais são placeholders. Enquanto não forem substituídos, o JavaScript bloqueia o redirecionamento e informa que o canal ainda não foi configurado. Troque o número `5500000000000` e os perfis vazios antes de publicar. A página usa sempre o tema claro.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos e pastas deste projeto.
3. Abra **Settings > Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main`, a pasta `/ (root)` e clique em **Save**.
6. Aguarde o GitHub gerar o endereço público.

## Estrutura

```text
.
├── index.html
├── README.md
├── assets
│   ├── brand
│   │   ├── logo.svg
│   │   ├── logo-horizontal.svg
│   │   ├── logo.png
│   │   ├── favicon.svg
│   │   ├── favicon.png
│   │   └── background.svg
│   └── icons
├── css
│   └── style.css
└── js
    └── main.js
```

## Acessibilidade

O projeto inclui foco visível, link de salto, textos alternativos, navegação por teclado, contraste responsivo ao tema e suporte a `prefers-reduced-motion`.
