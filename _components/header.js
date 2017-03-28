var yo = require('yo-yo')
var css = require('sheetify')

var styles = css`
  .header {
    width: 100%;
    margin: 20px 0;
    background: rgba(57,82,123,0.9);
  }
  .header a {
    color: white;
    text-decoration: none;
    line-height: 3rem;
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .inner {
    display: flex;
  }
  .logo {
    margin: 0;
    font-weight: bold;
    flex: 0 0 auto;
  }
  .nav {
    font-weight: bold;
    flex: 1 0 auto;
  }
  .nav li, .nav ul, .nav {
    display: block;
    padding: 0;
    margin: 0;
  }
  .nav ul {
    display: flex;
    justify-content: flex-end;
  }
  .nav li {
    flex: 1;
    outline: 0.5px solid red;
    max-width: 5rem;
    text-align: center;
  }
  .nav button {
    display: none;
  }
  .menu-item:hover a, .logo:hover a {
    background-color: rgba(41,59,88,0.8);
  }
  .donate a {
    background-color: #e09602;
  }
  .donate:hover a {
    background-color: #b37802;
  }
`

var menuItems = [
  {href: '/ourwork/', title: 'Our Work'},
  {href: '/blog/', title: 'Blog'},
  {href: '/aboutus/', title: 'About Us'}
]

module.exports = function (props) {
  return yo`<header class="vw-100 mv3-ns b-color-primary">
    <div class="site-width center flex">
      <a class="link white flex-auto" href="/">Digital Democracy</a>
      <nav class="flex-auto">
        <button class="dn-ns">Menu</button>
        <div class="dn dib-ns">
          ${menuItems.map(i => yo`
            <a class="link white dib b pv2-m pv3-l hover" href="${i.href}">
              ${i.title}
            </a>
          `)}
          <a class="${styles.donate}" href="/donate/" target="_blank">
            Donate
          </a>
        </div>
      </nav>
    </div>
  </header>`
}
