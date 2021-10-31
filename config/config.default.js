/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1633584224542_3908";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // config/config.${env}.js
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'react_blog',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [
      "http://localhost:3001",
      "http://localhost:3000",
      "http://127.0.0.1:7001",
      "https://cn.bing.com",
      "http://blog.lawlighty.top",
      // "http://47.96.105.70:8889",
      // "http://47.96.105.70:8890",
      // "http://47.96.105.70:8891",
      // "http://47.96.105.70:7001",
      // "http://47.96.105.70:3000",
    ],
  };
  config.cors = {
    // 如果你只想让http://localhost:3000来进行接口方案，就可以设置成下面的代码。
    // origin: "http://localhost:3000", //只允许这个域进行访问接口
    // credentials: true, // 开启认证
    // origin: '*',
    // origin: 'http://localhost:3000',
    credentials: true, // 允许cookie 跨域 
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS', // 可以跨域访问的请求
  };

  return {
    ...config,
    ...userConfig,
  };
};
