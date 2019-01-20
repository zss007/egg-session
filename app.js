'use strict';

module.exports = function(app) {
  // 将自定义 session 加入到中间件列表组
  app.config.coreMiddleware.push('session');

  // listen on session's events 监听 session 事件
  app.on('session:missed', ({ ctx, key }) => {
    ctx.coreLogger.warn('[session][missed] key(%s)', key);
  });
  app.on('session:expired', ({ ctx, key, value }) => {
    ctx.coreLogger.warn('[session][expired] key(%s) value(%j)', key, value);
  });
  app.on('session:invalid', ({ ctx, key, value }) => {
    ctx.coreLogger.warn('[session][invalid] key(%s) value(%j)', key, value);
  });
};
