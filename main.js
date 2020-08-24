const { app, BrowserWindow, } = require ('electron')

require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
})

app.whenReady()
    .then(() => {
        const minhaJanela = new BrowserWindow({
            height:720,
            width:1100,
            webPreferences: {
                webSecurity: process.env.NODE_ENV !== 'development',
                nodeIntegration: true
            }
        })

        minhaJanela.setMenu(null)
        minhaJanela.loadFile(__dirname + '/pages/index.html')
    })
    app.disableHardwareAcceleration()