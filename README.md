# codeceptjs_loginTwitter
Uma aplicação de teste automatizado na plataforma web do Twitter desenvolvida com o framework [CodeceptJS](https://codecept.io/).
> **⚠ Observação:** Neste projeto poderá conter algumas informações divergentes e más práticas referente ao framework devido ao fato de eu estar iniciando o estudos a respeito do CodeceptJS
 
 # Sobre o Projeto
Este projeto está sendo desenvolvido como meio de estudo do framework [CodeceptJS](https://codecept.io/). Um framework de teste end to end com uma sintaxe similar ao BDD (Behavior Driven Development).
Para este projeto foi utilizado o helper do WebDriver.

### Estrutura

    .
    ├── features                # Cenário de teste escrito em gherkin
    ├── pages                   # Mapeamento de elementos e os métodos que serão utilizados
    ├── step_definitions        # Escrita dos nossos steps
 
 ## Execução
 Para execução desse projeto se faz necessário:
 1. Clonar este projeto em sua máquina com 
    ```bash
    git clone
    ```
 2. no arquivo .\features\basic.feature modificar a informação de "user" e "password" para uma informação válida a modo que o login seja executado com êxito
 3. Executar o comando 
    ```bash 
    npx codeceptjs run --features --steps
    ```
# Sobre o CodeceptJS
> [Comunidade do CodeceptJS para compartilhamento de conhecimento](https://codecept.discourse.group/)

## Instalação
1. Dentro da pasta que deseja criar o projeto de automação execute
   ```bash
   npm init -y
   ```
2. ```bash
   npm install codeceptjs webdriverio --save-dev
   ```
3. ```bash
   npx codeceptjs init
   ```
4. ```bash
   npm install @wdio/selenium-standalone-service --save-dev
   ```
5. Dentro do arquivo codecept.conf.js que foi criado com os passos anteriores, dentro do bloco de código plugins, adicione o bloco de código abaixo

    ```jsx
    wdio: { 
          enabled: true,
          services: ['selenium-standalone'] 
        }
    ```

6. Para executar em modo headless execute o comando
   ```bash
   npx codeceptjs run
   ```
7. Para executar através da UI deveremos primeiro instalar a UI do CodeceptJS através do comando
   ```bash
   npm i @codeceptjs/ui --save
   ```
8. E executar o comando
   ```bash
   npx codecept-ui --app
   ```
   
É possível verificar outras formas de instalação através do [manual de instação](https://github.com/codeceptjs/create-codeceptjs) fornecido pelo CodeceptJS.

## Packages utilizados
- [codeceptjs-chai](https://www.npmjs.com/package/codeceptjs-chai): Utilizado para realização de asserções
- [@wdio/selenium-standalone-service](https://www.npmjs.com/package/@wdio/selenium-standalone-service): Auxilia para não precisar execular o selenium a parte do projeto
