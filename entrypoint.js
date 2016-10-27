/**
 *  Controller for electron
 *
 */

const {app, BrowserWindow} = require('electron');
const client = require('electron-connect').client;

let win, worker;

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600});
  win.loadURL(`file://${__dirname}/dist/index.html`);
  win.on('closed', () => {
    win = null;
    worker = null;
  });
  client.create(win);
  win.webContents.openDevTools();
}

app.on('window-all-closed', () => {
  app.quit();
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('ready', createWindow);
