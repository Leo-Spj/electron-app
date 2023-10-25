// todo lo relacionado con electron

const {BrowserWindow, Menu, app} = require('electron');

function createWindow () {
  
    const mainWindow = new BrowserWindow({ width: 800, height: 700 });
    const mainMenu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(mainMenu);

    mainWindow.loadFile('src/gui/html/index.html');
}

//Custom main menu
const template = [
    {
        label: 'Inicio',
        submenu: [
            {
                label: 'Exit',
                accelerator: 'Ctrl+Q',
                click() {
                    app.quit();
                }
            },
            {
                label: 'About',
                accelerator: 'Ctrl+A',
                click() {
                    console.log('About');
                }
            }
        ]
    },
    {
        label: 'Herramientas',
        submenu: [
            {
                label: 'DevTools',
                accelerator: 'Ctrl+D',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            }
        ]
    }
];

module.exports = {createWindow};