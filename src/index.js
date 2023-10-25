// se lo pasamos a electron para que la apliacion se ejecute

const {app} = require('electron');
const {createWindow} = require('./main');

app.whenReady().then(createWindow);