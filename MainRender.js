// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


const {app, BrowserWindow} = require('electron')
const electron = require('electron')
//const Quagga = require('quagga').default

const ipc = electron.ipcRenderer


let SignIn_Button = document.getElementById('SignIn')
let Scan_Button = document.getElementById('Scan')

// let StudentID_Input = document.getElementById('StudentID')

SignIn_Button.addEventListener('click', function()
{
    ipc.send('show-SignIn')
})
Scan_Button.addEventListener('click', function()
{
    ipc.send('show-Scan')
})

