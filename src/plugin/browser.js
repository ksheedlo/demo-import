// @flow
import {createPlugin, type Context} from 'fusion-core';
import {LoggerToken} from 'fusion-tokens';

export default createPlugin({
  deps: {logger: LoggerToken},
  middleware({logger}) {
    return (ctx: Context, next: () => Promise<*>): Promise<*> => {
      logger.info('Hello browser!');
      return next();
    };
  },
});
