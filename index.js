'use strict';

const oassign = require('object-assign');
const BrowserWindow = require('browser-window');

var PaneBrowserWindow = class PaneBrowserWindow {
	constructor(opts) {
		const screen = require('screen').getPrimaryDisplay().bounds;

		opts = oassign({
			side: 'left',
			'always-on-top': false
		}, opts, {
			x: 0,
			y: 0,
			frame: false,
			'title-bar-style': 'hidden',
			'enable-larger-than-screen': true
		});

		if (/left|right/.test(opts.side)) {
			opts.width = opts.width || Math.floor(screen.width / 3);
			opts.height = screen.height;
			opts.x = /left/.test(opts.side) ? 0 : screen.width - opts.width;
		} else {
			opts.height = opts.height || Math.floor(screen.height / 3);
			opts.width = screen.width;
			opts.y = /top/.test(opts.side) ? 0 : screen.height - opts.height;
		}

		const win = new BrowserWindow(opts);

		win.setPositionTo = function (side) {
			const screen = require('screen').getPrimaryDisplay().workAreaSize;
			const bound = this.getBounds();

			if (side === 'left') {
				bound.x = 0;
			} else if (side === 'right') {
				bound.x = screen.width - bound.width;
			} else if (side === 'top') {
				bound.y = 0;
			} if (side === 'bottom') {
				bound.y = screen.height - bound.height;
			}

			this.setPosition(bound.x, bound.y);
		};

		return win;
	}
};

module.exports = PaneBrowserWindow;
