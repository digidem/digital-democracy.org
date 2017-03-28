var yo = require('yo-yo')

module.exports = function head (props) {
  return yo`<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta property="fb:admins" content="${props.site.fb_admins}" />
    <title>
      ${props.page.title ? `[${props.site.short_title}] ${props.page.title}` : props.site.title}
    </title>
    <link
      rel="alternate"
      type="application/rss+xml"
      title="${props.site.title}"
      href="${props.site.url}/feed.xml">
  </head>`
}
