# WebC

Syntax Highlighting for `.webc` files. 

Works by extending the built-in HTML syntax highlighting.

Doesn't support much right now. Suggestions and comments welcome on the Repo.

## About WebC

[WebC](https://github.com/11ty/webc)  is a compiler for Single File Web Components. 

## Features
- Detects YAML front matter for syntax highlighting. 
- HTML, CSS and JS detection, syntax highlighting, formatting and IntelliSense
- Opinionated Theme (webc-dark)

## Usage

Map `.webc` files to HTML by editing your preferences.

```json
"files.associations": {
  "*.webc": "html",
  "*.njk": "html"
}
```

## Known Issues

- Formatting is iffy. You get better (but not perfect) results if you use [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).



### To do

- [ ] Detect WebC attributes
- [ ] Add some WebC snippets
- [x] Add Nunjucks support
- [ ] Create a basic language server
- [ ] So many other things


## Credits
- [Zach Leatherman](https://twitter.com/zachleat) For Creating [Eleventy](https://www.11ty.dev) and [WebC](https://github.com/11ty/webc)
- [Nunjucks VSCode extension](https://marketplace.visualstudio.com/items?itemName=ronnidc.nunjucks) for inspiration