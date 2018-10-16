var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;

app.on('ready', function () {
    var appWindow, infoWindow;
    appWindow = new BrowserWindow();
    appWindow.loadURL('https://snoopbobb.com');

    infoWindow = new BrowserWindow({
        width: 400,
        height: 300,
        transparent: true,
        frame: false
    });

    infoWindow.loadURL('file://' + __dirname + '/info.html');
});