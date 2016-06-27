var yo = require('yo-yo')

module.exports = function (props) {
  var posts = props.categories.blog
  var projects = props.categories.projects
  var aboutPages = props.categories.aboutus

  return yo`<footer>
    <div class="row">
      <div class="columns">
        <ul class="small-block-grid-1 medium-block-grid-2 large-block-grid-4">
          <li>
            <a href="/ourwork/">Our Work</a>
            <ul>
              ${projects.map(function (project) {
                return yo`<li>
                  <a href="${project.permalink}">${project.short_title || project.title}</a>
                </li>`
              })}
            </ul>
          </li>
          <li>
            <a href="/blog/">Blog</a>
            <ul>
              ${posts.slice(0, 4).map(function (post) {
                return yo`<li>
                  <a href="${post.permalink}">${post.title}</a>
                </li>`
              })}
            </ul>
          </li>
          <li>
            <a href="/aboutus/">About Us</a>
            <ul>
              ${aboutPages.map(function (page) {
                return yo`<li>
                  <a href="${page.permalink}">${page.title}</a>
                </li>`
              })}
            </ul>
          </li>
          <li>
            Find Us
            <ul>
              <li><a href="https://www.facebook.com/digidemocracy">On Facebook</a></li>
              <li><a href="https://twitter.com/digidem">On Twitter @digidem</a></li>
              <li><a href="mailto:info@digital-democracy.org">Email info@ddem.us</a></li>
              <li>2323 Broadway<br>
              Oakland<br>
              CA 94612<br>
              USA</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </footer>`
}
