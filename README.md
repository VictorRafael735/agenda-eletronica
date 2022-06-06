# Agena Eletrônica Web

## Sobre
Esta é uma aplicação web desenvolvida por mim, de uma agenda eletrônica na qual possui uma tela de cadastro de contatos, 
grupos de contatos, e criação de eventos , como teste para uma vaga de desenvolvedor em que participei.

## Tecnologias Utilizadas
* [Node.js](https://nodejs.org/en/)
* [MySQL](https://www.mysql.com)
* [Sequelize](https://sequelize.org)

### Frameworks
* [Express](https://expressjs.com/pt-br/)
* [Bootstrap](https://getbootstrap.com/)

### IDE
* [Visual Studio Code](https://code.visualstudio.com/)

## Como Utilizar
### Passo 1
Primeiramente devemos instalar as dependências do projeto. Abra o terminal do Visual Studio Code (ou Powershell no Windows) e digite 'npm i express cors mysql2 sequelize-cli nodemon' e pressione enter.

### Passo 2
Devemos iniciar o servidor. Para isso abra o terminal do Visual Studio Code (ou Powershell no Windows) e digite 'npm run start'. 

### Passo 3
Agora devemos iniciar/criar o banco de dados e migrar os modelos presentes no projeto. Para isso abra o terminal do Visual Studio Code (ou Powershell no Windows) e digite 'npx sequelize-cli db:create' e pressione enter. Após, digite 'npx sequelize-cli db:migrate', e pressione enter.

### Passo 4
Abra o arquivo index.html.

## O que foi implementado
* É possível fazer o cadastro de novos contatos, grupos de contatos e eventos.
* O usuário pode visualizar sua lista completa de contatos, grupos e eventos.
* O usuário pode adicionar contatos aos grupos e eventos criados.
* O usuário pode deletar contatos de sua lista de contatos.
* O usuário pode deletar grupos e eventos criados.
* As listas de contatos, grupos e eventos estão ordenadas por ordem alfabética.

## O que falta implementar
* Ainda não é possível editar contatos, entretanto o back-end da aplicação já está preparado para receber essas implementações.
* Ainda não é possível visualizar os participantes de um grupo ou evento, assim como alterá-los.
* Rotina de envio de e-mail para os participantes do evento.

