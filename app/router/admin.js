// 后台路由
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 生成守卫
  const adminauth = app.middleware.adminauth();
  router.get('/admin/index', controller.admin.main.index);
  router.post('/admin/checkLogin', controller.admin.main.checkLogin); // 登录
  router.get(
    '/admin/getTypeInfo',
    // adminauth,
    controller.admin.main.getTypeInfo
  ); // 获取 文章类型
  router.post('/admin/addArticle', adminauth, controller.admin.main.addArticle);
  router.post(
    '/admin/updateArticle',
    adminauth,
    controller.admin.main.updateArticle
  );
  router.get(
    '/admin/getArticleList',
    adminauth,
    controller.admin.main.getArticleList
  );
  router.get(
    "/admin/delArticle/:id",
    adminauth,
    controller.admin.main.delArticle
  );
  router.get(
    "/admin/getArticleById/:id",
    adminauth,
    controller.admin.main.getArticleById
  );
};
