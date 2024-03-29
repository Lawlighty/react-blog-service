'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // const result = await this.app.mysql.get('blog_contents', {});
    ctx.body = "lawlight hi";
  }

  async getArticleList() {
    const sql =
      "SELECT article.id as id," +
      "article.title as title," +
      "article.introduce as introduce," +
      "article.add_time as add_time," +
      "article.view_count as view_count ," +
      "article.stick as stick ," +
      "article.tags as tags ," +
      ".type.typeName as typeName " +
      "FROM article LEFT JOIN type ON article.type_id = type.Id" +
      " ORDER BY stick DESC, article.id DESC";

    const results = await this.app.mysql.query(sql);

    this.ctx.body = {
      data: results,
    };
  }

  async getArticleById() {
    // 先配置路由的动态传值，然后再接收值
    const id = this.ctx.params.id;

    const sql =
      "SELECT article.id as id," +
      "article.title as title," +
      "article.introduce as introduce," +
      "article.article_content as article_content," +
      "article.add_time as add_time," +
      "article.stick as stick ," +
      "article.tags as tags ," +
      "article.view_count as view_count ," +
      "type.typeName as typeName ," +
      "type.id as typeId " +
      "FROM article LEFT JOIN type ON article.type_id = type.Id " +
      "WHERE article.id=" +
      id;

    const result = await this.app.mysql.query(sql);

    this.ctx.body = { data: result };
  }

  // 得到类别名称和编号
  async getTypeInfo() {
    const sql = "SELECT * from type ORDER BY orderNum asc";
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }

  // 根据类别ID获得文章列表
  async getListById() {
    const id = this.ctx.params.id;
    const sql =
      "SELECT article.id as id," +
      "article.title as title," +
      "article.introduce as introduce," +
      "article.add_time as add_time," +
      "article.view_count as view_count ," +
      "article.stick as stick ," +
      "article.tags as tags ," +
      "type.typeName as typeName " +
      "FROM article LEFT JOIN type ON article.type_id = type.Id " +
      "WHERE type_id=" +
      id +
      " ORDER BY stick DESC, article.id DESC";
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }
}


module.exports = HomeController;
