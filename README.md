<p align="center">
<img src="./docs/recipage.svg" alt="recipage" width="200">
</p>

<h1 align="center">recipage</h1>

> :page_with_curl: reci(pe)page: Turn a markdown file into one simple page

[![npm](https://img.shields.io/npm/v/recipage.svg?style=flat-square)](https://www.npmjs.com/package/recipage)
[![Author](https://img.shields.io/badge/Author-Sukka-b68469.svg?style=flat-square)](https://skk.moe)
[![npm](https://img.shields.io/npm/l/recipage.svg?style=flat-square)](./LICENSE)
[![size](https://img.badgesize.io/SukkaW/recipage/master/dist/recipage.js?style=flat-square&compression=gzip)](https://github.com/SukkaW/recipage/tree/master/dist)
[![Travis](https://img.shields.io/travis/SukkaW/recipage.svg?style=flat-square)](https://travis-ci.org/SukkaW/recipage)
[![devDependency Status](https://img.shields.io/david/dev/SukkaW/recipage.svg?style=flat-square)](https://david-dm.org/SukkaW/recipage#info=devDependencies)
[![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/recipage/badge)](https://www.jsdelivr.com/package/npm/recipage)

## Intro

**recipage** generates your one page website using markdown on the fly. Unlike GitBook or Jekyll, it does not generate static html files. Unlike docsify or docute, it only support one page. To start using it, all you need to do is create an `index.html` and deploy to anywhere you want.

## Demo

- https://suka.js.org/recipage/

## Usage

Manually create `index.html`

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Recipage</title>
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <meta name="theme-color" content="#f5f5f5">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/recipage/dist/recipage.min.css">
</head>

<body>
    <div id="app"></div>
</body>

<script>
    window.$recipage = {
        // Config here...
    }
</script>

<script src="https://cdn.jsdelivr.net/npm/recipage"></script>

</html>
```

## Configurations

```javascript
window.$recipage = {
    url: './README.md', // The URL of markdown file
    github: 'https://github.com/SukkaW/recipage', // The github-corner link (not necessary)
    footer: { // The footer config (not necessary)
        title: 'Recipage', // The title of the page that will be show at the footer
        logo: 'https://cdn.jsdelivr.net/npm/skx@0.0.1' // A small image that will be show at the footer
    },
    callback: function() { // The callback function after rendering. For highlight or MathJax (not necessary)
        console.log('Hey')
    }
}
```

## Author

**recipage** © [Sukka](https://github.com/SukkaW), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Sukka with help from contributors ([list](https://github.com/SukkaW/recipage/graphs/contributors)).

> [Personal Website](https://skk.moe) · [Blog](https://blog.skk.moe) · GitHub [@SukkaW](https://github.com/SukkaW) · Telegram Channel [@SukkaChannel](https://t.me/SukkaChannel) · Twitter [@isukkaw](https://twitter.com/isukkaw) · Keybase [@sukka](https://keybase.io/sukka)
