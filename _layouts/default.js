var yo = require('yo-yo')
var header = require('../_components/header.js')
var footer = require('../_components/footer.js')
var css = require('sheetify')
var csjs = require('csjs')

module.exports = function body (props, children) {
  css('tachyons')
  css('../_styles/site.css')

  return yo`<div class="sans-serif lh-copy debug">
    ${header(props)}
    ${props.page.image && yo`
      <header>
        <img src="${props.page.image}">
      </header>`
    }
    <div class="center site-width">
      <article class="measure">
        ${children}
      </article>
    </div>
    ${footer(props)}
  </div>`
}
