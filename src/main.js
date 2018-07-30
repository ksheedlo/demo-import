// @flow
import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import UniversalEventsPlugin, {UniversalEventsToken} from 'fusion-plugin-universal-events';
import UniversalLogger from 'fusion-plugin-universal-logger';
import {FetchToken, LoggerToken} from 'fusion-tokens';
import Plugin from './plugin';

import root from './root.js';

export default () => {
  const app = new App(root);
  if (__BROWSER__) {
    app.register(FetchToken, window.fetch);
  }
  app.register(Styletron);
  app.register(Router);
  app.register(UniversalEventsToken, UniversalEventsPlugin);
  app.register(LoggerToken, UniversalLogger);
  app.register(Plugin);
  return app;
};
