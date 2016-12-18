import { app, BrowserWindow } from 'electron';

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
      width: 800,
      height: 500,
      'min-width': 500,
      'min-height': 200,
      'accept-first-mouse': true,
      'title-bar-style': 'hidden',
      frame: false,
      transparent: true
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  //mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
