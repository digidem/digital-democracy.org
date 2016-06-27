var yo = require('yo-yo')
var header = require('../_components/header.js')
var footer = require('../_components/footer.js')

module.exports = function body (props, children) {
  return yo`<body>
    <div>
      ${header(props)}
      <header>
        <img src="${props.page.image}">
      </header>
      <article>
        ${children}
      </article>
      ${footer(props)}
    </div>
  </body>`
}
