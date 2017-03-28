var yo = require('yo-yo')

module.exports = function (props) {
  return yo`<li><a href="${props.href}">${props.name}</a></li>`
}
