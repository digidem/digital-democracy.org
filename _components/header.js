var yo = require('yo-yo')

module.exports = function (props) {
  return yo`<header>
    <h1><a href="/">Digital Democracy</a></h1>
    <nav>
      <button>Menu</button>
      <ul>
        <li><a href="/ourwork/">Our Work</a></li>
        <li><a href="/blog/">Blog</a></li>
        <li><a href="/aboutus/">About Us</a></li>
        <li>
          <a href="/donate/" target="_blank">Donate</a>
        </li>
      </ul>
    </nav>
  </header>`
}
