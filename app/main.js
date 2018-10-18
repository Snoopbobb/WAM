var electron = require("electron");
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;
var ipc = electron.ipcMain;

app.on("ready", function () {
    var appWindow, infoWindow;
    appWindow = new BrowserWindow({
        show: false
    });
    appWindow.loadURL("file://" + __dirname + "/index.html");

    infoWindow = new BrowserWindow({
        height: 300,
        frame: false,
        show: false,
        title: "Website Analysis Machine",
        transparent: true,
        width: 400
    });

    infoWindow.loadURL("file://" + __dirname + "/info.html");

    appWindow.once("ready-to-show", function () {
        appWindow.show();
        // setTimeout(() => {
        //     // infoWindow.show();
        //     //   setTimeout(() => {
        //     //    infoWindow.hide();
        //     //  }, 3000);
        // }, 1000);
    });

    ipc.on('closeInfoWindow', function (event, arg) {
        event.returnValue = '';
        infoWindow.hide();
    });
});
