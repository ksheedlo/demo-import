// @flow
import BrowserPlugin from './browser';
import ServerPlugin from './server';

export default __NODE__ ? ServerPlugin : BrowserPlugin;

