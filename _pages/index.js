var yo = require('yo-yo')
var layout = require('../_layouts/default')

module.exports = function (props) {
  return layout(props, yo`<div>Hello World</div>`)
}
