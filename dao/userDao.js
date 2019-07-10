'use strict'
const mysql = require('mysql')
const dbConf = require('../conf/db')
const errorUtil = require('../util/error')
const sql = require('./userSqlMapping')

let pool = mysql.createPool(dbConf.mysql)

// 向前台返回JSON方法的简单封装
let jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

module.exports = {
  add: function (req, res, result) {
    pool.getConnection(function(err, connection) {
      // 获取前台页面传过来的参数
      var param = req.body
      // 建立连接， 向表中插入值
      connection.query(sql.insert,[param.name, param.age], function(err, result) {
        errorUtil.errorHanding(err, function() {
          if(result) {
            result = {
              code: 200,
              msg: '增加成功'
            }
          }
          // 以json形式，把操作结果返回给前台页面
          jsonWrite(res, result)
          // 释放连接
          connection.release()
        })
      })
    })
  },
  deleteById: function(req, res, next) {
    var id = +req.query.id
    pool.getConnection(function(err, connection) {
      connection.query(sql.delete, id, function(err, result) {
        errorUtil.errorHanding(err, function() {
          jsonWrite(res, result)
          connection.release()
        })
      })
    })
  },
  updateUser: function(req, res, next) {
    var param = req.body
    pool.getConnection(function(err, connection) {
      connection.query(sql.update, [param.name, param.age, param.id], function(err, result) {
        errorUtil.errorHanding(err, function() {
          jsonWrite(res, result)
          connection.release()
        })
      })
    })
  },
  queryById: function(req, res, next) {
    var id = +req.query.id;
    pool.getConnection(function(err, connection) {
      connection.query(sql.queryById, id, function(err, result) {
        errorUtil.errorHanding(err, function() {
          jsonWrite(res, result)
          connection.release()
        })
      })
    })
  },
  queryAll: function(req, res, next) {
    pool.getConnection(function(err, connection) {
      connection.query(sql.queryAll, function(err, result) {
        errorUtil.errorHanding(err, function() {
          jsonWrite(res, result);
          connection.release()
        })
      })
    })
  }
}
