# digital-democracy.org

A WIP re-write of the [Digital Democracy][1] website using [`yo-static`][2] instead of [jekyll][3]

[1]: http://www.digital-democracy.org
[2]: https://github.com/gmaclennan/yo-static
[3]: https://jekyllrb.com

To start editing locally:

```
git clone https://github.com/digidem/digital-democracy.org.git
npm install
npm start
```

Everything in `_pages` is a function that receives props and returns a `<body>` DOM node. Everything in `_content` is a markdown files and available to pages as `props.categories`.

Content markdown defines a layout in yaml-front-matter. All layouts are in `_layouts`. `_layouts/default.js` is used if no layout is defined in the front-matter.

`npm run build` will build the complete site as static files in `_site`. Once any of these files loads, it becomes a single-page app that dynamically loads content as needed.
