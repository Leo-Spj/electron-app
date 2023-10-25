// todo lo relacionado con electron

const {BrowserWindow} = require('electron');

function createWindow () {
  
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 700
    });

    mainWindow.loadURL('http://github.com');
}

module.exports = {createWindow};