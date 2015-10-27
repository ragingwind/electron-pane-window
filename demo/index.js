'use strict';
const app = require('app');
const PaneBrowserWindow = require('../');

// report crashes to the Electron project
require('crash-reporter').start();

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// prevent window being garbage collected
let mainWindow;

function onClosed() {
	// dereference the window
	// for multiple windows store them in an array
	mainWindow = null;
}

var win;

function createMainWindow() {
	 win = new PaneBrowserWindow({
		side: 'left',
		'always-on-top': false,
		width: 600
	});

	win.loadUrl(`file://${__dirname}/index.html`);
	win.on('closed', onClosed);

	win.setPositionTo('right');
	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate-with-no-open-windows', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
});
