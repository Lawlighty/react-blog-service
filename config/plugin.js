'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
// 设置跨域
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
