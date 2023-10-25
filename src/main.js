// todo lo relacionado con electron

const {BrowserWindow} = require('electron');

function createWindow () {
  
    const mainWindow = new BrowserWindow({ width: 800, height: 700 });

    mainWindow.loadFile('src/gui/html/index.html');
}

module.exports = {createWindow};