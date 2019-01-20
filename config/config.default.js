'use strict';

// 默认 session 配置
exports.session = {
  maxAge: 24 * 3600 * 1000, // ms
  key: 'EGG_SESS',
  httpOnly: true,
  encrypt: true,
};
