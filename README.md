# VSCode WebC
VSCode Syntax Highlighting for [WebC](https://github.com/11ty/webc) templates and components.
Works by extending the built-in HTML syntax highlighting.

> ⚠️ Warning
> 
> I don't really know what I'm doing, I'm figuring this out as I go.
> You probably shouldn't use this. 
### Feedback and comments
[PR's, comments, requests, suggestions are welcome](https://github.com/dwkns/vscode-webc/issues). Please be gentle, this is first thing I've releases to the world. 


## Features
- Detects and highlights:
  - WebC attributes `webc:*`, properties `@*` and dynamic attributes `:*`
  - YAML, JS & JSON frontmatter. 
  - HTML, CSS and JS 
  - Nunjucks
- Keeps HTML, CSS & JS formatting and IntelliSense
- Basic Nunjucks formatting (if you use Prettier).
- Nunjucks snippets
- Opinionated Theme `webc-dark` which will highlight the above (or let you know the scopes to add to your settings).

## Usage
Search `WebC` in the Extensions Pane of VSCode and click install. Or check it out in the [Marketplace](https://marketplace.visualstudio.com/items?itemName=dwkns.webc).

Map `.webc` files to HTML by editing your preferences. You might want to associate `.njk` files too. 

```json
"files.associations": {
  "*.webc": "html",
  "*.njk": "html"
}
```

## Known Issues
- Nunjucks formatting is iffy. You get better (but not perfect) results if you use [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). We probably need a Prettier plugin. 
- WebC attributes and properties are wildcards right now. We should probably detect valid/invalid values (maybe when WebC gets to 1.0?) 
- WebC attributes, properties and dynamic attributes are detected everywhere. Should restrcit this to within html tags: `<` and `>`
- Strings after properties or attributes are marked as `invalid.illegal.character-not-allowed-here` needs to detect these properly.
- Comments are HTML comments. These may be better as Nunjucks comments? Or can we make Nunjucks support HTML comments?
- Comments don't work properly in YAML frontmatter.
- Formatting may not be working properly in front-matter

### To do

- [x] Detect WebC attributes
- [x] Detect WebC properties
- [x] Detect WebC dynamic attributes
- [x] Add Nunjucks support
- [x] Basic Theme
- [ ] Add WebC snippets
- [ ] Impliment language server (for WebC & Nunjucks IntelliSense)
- [ ] Nunjucks formatting support (Create a Prietier Plugin?)
- [ ] So many other things


## Credits
- [Zach Leatherman](https://twitter.com/zachleat) For Creating [Eleventy](https://www.11ty.dev) and [WebC](https://github.com/11ty/webc).
- [Better Nunjucks](https://marketplace.visualstudio.com/items?itemName=ginfuru.better-nunjucks) from whom I stole the Nunjucks support.
- [Copilot](https://github.com/features/copilot) → `//the regex for...` is a revelation.
