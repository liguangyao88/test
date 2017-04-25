var index1 = require('./index1.json')
var index2 = require('./index2.json')
var index3 = require('./index3.json')
var index4 = require('./index4.json')
var index5 = require('./index5.json')
//1和3是相同的

module.exports = function () {
  return {
    'index1': index1,
    'index2': index2,
    'index3': index3,
    'index4': index4,
    'index5': index5
  }
}
