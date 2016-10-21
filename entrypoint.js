/**
 *  Controller for electron
 *
 */

const {app, BrowserWindow} = require('electron');

let win, worker;

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600});
  win.loadURL(`file://${__dirname}/build/bundled/index.html`);
  win.on('closed', () => {
    win = null;
    worker = null;
  });

}

app.on('window-all-closed', () => {
  app.quit();
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
  win.webContents.openDevTools();
})

app.on('ready', createWindow);
