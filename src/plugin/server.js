// @flow
import {createPlugin, type Context} from 'fusion-core';

export default createPlugin({
  middleware() {
    return (ctx: Context, next: () => Promise<*>): Promise<*> => {
      console.log('Hello server!');
      return next();
    };
  },
});
