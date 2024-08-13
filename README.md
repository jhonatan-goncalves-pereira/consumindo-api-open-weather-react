
# 🌤️ Criativo com React: Criando App de Previsão do Tempo do Zero!

Bem-vindo ao projeto "Criativo com React"! Neste repositório, você encontrará um guia completo para criar um aplicativo de previsão do tempo do zero usando React e Vite. Através deste projeto, você aprenderá como consumir APIs, trabalhar com componentes React, e construir uma interface moderna e responsiva. Vamos juntos transformar suas ideias em realidade!

## 🚀 Visão Geral do Projeto

Este projeto tem como objetivo ensinar a você, desenvolvedor(a), como construir um aplicativo web que exibe a previsão do tempo para diferentes localidades. Usaremos a [API OpenWeatherMap](https://openweathermap.org) para obter os dados climáticos em tempo real.

### Principais Funcionalidades

- 🔍 **Consulta de Previsão do Tempo:** Permita que os usuários pesquisem e visualizem a previsão do tempo para qualquer cidade.
- 🕒 **Dados em Tempo Real:** Exiba informações atualizadas sobre temperatura, condições climáticas, umidade, e muito mais.
- 🌍 **Localização Dinâmica:** Use a geolocalização para mostrar a previsão do tempo baseada na localização atual do usuário.
- 📱 **Design Responsivo:** Interface totalmente responsiva, adaptando-se perfeitamente a qualquer tamanho de tela, seja em desktop, tablet ou smartphone.
- 🎨 **Totalmente Personalizável:** O projeto foi desenvolvido com flexibilidade em mente, permitindo que você personalize cada aspecto do app, desde o design até a forma como os dados são apresentados.

## 🛠️ Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite:** Ferramenta de build rápida para projetos modernos de front-end.
- **Axios:** Cliente HTTP para fazer requisições à API.
- **CSS3:** Para estilização e layout responsivo.
- **OpenWeatherMap API:** Fonte de dados para previsões climáticas em tempo real.

## 📚 Guia de Configuração e Execução

Siga as etapas abaixo para configurar e executar o projeto em sua máquina local:

1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/jhonatan-goncalves-pereira/consumindo-api-open-weather-react.git
   cd consumindo-api-open-weather-react
   ```

2. **Instale as Dependências:**
   ```bash
   npm install
   ```

3. **Crie um Arquivo `.env`:**
   - Na raiz do projeto, crie um arquivo chamado `.env`.
   - Adicione a chave de API do OpenWeatherMap ao arquivo `.env`:
     ```env
     VITE_WEATHER_API_KEY=your_api_key_here
     ```

4. **Obtenha sua Chave de API do OpenWeatherMap:**
   - Crie uma conta gratuita em [OpenWeatherMap](https://openweathermap.org).
   - Gere uma chave de API e adicione-a no arquivo `.env` criado na etapa anterior.

5. **Execute o Projeto:**
   ```bash
   npm run dev
   ```

6. **Acesse o App:**
   - Abra seu navegador e acesse `http://localhost:5173` (ou o endereço fornecido no terminal) para ver o aplicativo em funcionamento.

## 🎨 Design Responsivo: A Base para um Projeto de Sucesso

O design responsivo é uma habilidade essencial para qualquer desenvolvedor web. Ele permite que suas páginas se ajustem automaticamente a diferentes tamanhos de tela, oferecendo uma experiência perfeita em qualquer dispositivo. Com este projeto, você aprenderá a:

- **Estruturar layouts responsivos:** Entenda como organizar seus elementos de forma flexível.
- **Usar media queries:** Ajuste estilos com base no tamanho da tela do usuário.
- **Trabalhar com Flexbox e Grid:** Torne seu design mais intuitivo e fácil de manter.

## 🛡️ Licença

Este projeto está licenciado sob a Licença MIT. Sinta-se à vontade para usar, modificar e distribuir conforme necessário.
