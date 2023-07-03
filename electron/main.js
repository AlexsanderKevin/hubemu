const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const { syncDatabase } = require('./database')
const { initRoutes } = require('./routes/routes')

function createWindow() {
  const win = new BrowserWindow ({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname + '/preload.js')
    }
  })

  syncDatabase()
  initRoutes()
  win.loadURL('http://localhost:3000')
}

app.whenReady().then(createWindow)
