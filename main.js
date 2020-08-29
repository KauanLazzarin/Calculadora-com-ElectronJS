const { app, BrowserWindow, } = require ('electron')

require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
})

app.whenReady()
    .then(() => {
        const homePage = new BrowserWindow({
            height:720,
            width:510,
            webPreferences: {
                nodeIntegration: true
            }
        })
        
        homePage.maximize()
        // homePage.setMenu(null)
        homePage.loadFile(__dirname + '/pages/index.html')
    })
app.disableHardwareAcceleration()