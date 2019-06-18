# React quick Guide

Quick Start:
1.    npx create-react-app my-app
2.    cd my-app
3.    npm install --save react-router-dom
4.    code . (opens Visual Studio Code) 
5.    npm start

Commands:
If you need React Router, run: npm install --save react-router-dom
Rcc = React Class Component
Rfc = React function Component

Bootstrap: 
npm install react-bootstrap bootstrap
Add: import "bootstrap/dist/css/bootstrap.min.css";

How to add Font Awesome:
Public folder -> index.html -> add:
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">

Deploy on Github:
1. Create repository on Github
2. Create .gitignore (Is created automatic - but check if it is there)
3. In your import of 'react-router-dom' make sure to use HashRouter
    -   git init 
    -   git add --all 
    -   git commit -m "first commit" 
    -   git remote add origin https://github.com/KimHotDK/NAME_OF_YOUR_REPOSITORY.git 
    -   git push -u origin master
4. npm i gh-pages
5. Tilføj til package.json
    -   Under private -> "homepage": "https://kimhotdk.github.io/exam-react",
    -   Under script -> "deploy": "npm run build&&gh-pages -d build",
6. npm run deploy
DEPLOYED -> https://kimhotdk.github.io/exam-react


\{^_^}/ Have fun!

Kim P. Pedersen - testprogram.dk © 2019 


More commands:
npm start
Starts the development server.

npm run build
Bundles the app into static files for production.

npm test
Starts the test runner.

npm run eject
Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!
