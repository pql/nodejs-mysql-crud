'use strict'
const express = require('express')
const router = express.Router()
const userDao = require('../dao/userDao')

// 添加用户
router.post('/addUser', function(req, res, next) {
  userDao.add(req, res, next)
})

// 获取单个用户
router.get('/query', function(req, res, next) {
  userDao.queryById(req, res, next)
})

// 获取所有用户
router.get('/queryAll', function(req, res, next) {
  userDao.queryAll(res, res, next)
})

// 删除用户
router.delete('/deleteUser', function(req, res, next) {
  userDao.deleteById(req, res, next)
})

// 更新用户
router.post('/updateUser', function(req, res, next) {
  userDao.updateUser(req, res, next)
})

module.exports = router