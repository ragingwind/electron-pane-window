# electron-pane-window

> Create a pane style window, no frame, no titlebar, stick the window on the sides of screen

## Install

```
$ npm install --save electron-pane-window
```

## Usage

```js
const PaneBrowserwindow = require('electron-pane-window');

win = new PaneBrowserWindow({
 side: 'left',
 'always-on-top': false,
 width: 600
});
```

## API

### PaneBrowserwindow(options)

#### options

Type: `object`

Almost same with [options of Browser Window of Electron](https://github.com/atom/electron/blob/master/docs/api/browser-window.md#new-browserwindowoptions). Here is additional options for this:

- `side`: which side of screen to stick to. `top`, `left`, 'right' and 'bottom'

### setPositionTo(side)

Set position of window to on side of screen

- `side`: which side of screen to stick to. `top`, `left`, 'right' and 'bottom'

## Run demo

```
$ npm start
```

## License

MIT © [ragingwind](http://ragingwind.md)
