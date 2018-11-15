const electron = require('electron');
const url = require('url');
const path = require('path');

//get app and browserWindow from electron
const {app, BrowserWindow} = electron;


//create a window
let mainWindow;

//listen for the app to be ready

app.on('ready', function(){
  //create new mainWindow
  mainWindow = new BrowserWindow({});
  //load html into main
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file:',
    slashes: true
  }));

  
});


//create menu template
const mainMenuTemplate = [
{
  label: 'File'
}
];
