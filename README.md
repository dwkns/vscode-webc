# WebC

Syntax Highlighting for [WebC](https://github.com/11ty/webc) templates and components.
Works by extending the built-in HTML syntax highlighting.

> ⚠️ Warning
> 
> I don't really know what I'm doing, I'm figuring this out as I go.
> You probably shouldn't use this. 


## Features
- Detects YAML, JS & JSON frontmatter for syntax highlighting. 
- HTML, CSS and JS detection, syntax highlighting, formatting and IntelliSense.
- Nunjucks detection and syntax highlighting. 
- Opinionated Theme (webc-dark) which will (mostly) highlight the above.

## Usage

Map `.webc` files to HTML by editing your preferences. You might want to associate `.njk` files too. 

```json
"files.associations": {
  "*.webc": "html",
  "*.njk": "html"
}
```

## Known Issues

- Nunjucks formatting is iffy. You get better (but not perfect) results if you use [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

### To do

- [ ] Detect WebC attributes
- [ ] Add WebC snippets
- [x] Add Nunjucks support
- [ ] Impliment a basic language server
- [ ] Improve the built in Theme
- [ ] Nunjucks formatting support (Create a Prietier Plugin?)
- [ ] So many other things


## Credits
- [Zach Leatherman](https://twitter.com/zachleat) For Creating [Eleventy](https://www.11ty.dev) and [WebC](https://github.com/11ty/webc)
- Nunjucks support stolen from the brilliant [Better Nunjucks](https://marketplace.visualstudio.com/items?itemName=ginfuru.better-nunjucks).