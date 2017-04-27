var index1 = require('./index1.json')
var index2 = require('./index2.json')
var index3 = require('./index3.json')
var index4 = require('./index4.json')
var index5 = require('./index5.json')
//1和3是相同的

var classification1 = require('./categories.json')
var classification2 = require('./channels_all.json')
var classification3 = require('./main_channels.json')

module.exports = function () {
  return {
    'index1': index1,
    'index2': index2,
    'index3': index3,
    'index4': index4,
    'index5': index5,
    'classification1': classification1,
    'classification2': classification2,
    'classification3': classification3
  }
}
