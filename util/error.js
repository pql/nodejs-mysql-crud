'use strict'
exports.errorHanding = function(err, callback) {
  if(err) {
    res.send(err)
  } else {
    callback()
  }
}