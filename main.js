const { app, BrowserWindow, } = require ('electron')

app.whenReady()
    .then(() => {
        const minhaJanela = new BrowserWindow({
            width: 450,
            height: 1000,
            webPreferences: {
                nodeIntegration: true
            }
        })

        minhaJanela.setMenu(null)
        minhaJanela.loadFile('index.html')
    })
    app.disableHardwareAcceleration()