# generator-static-dockerfile [![NPM version][npm-image]][npm-url]
> Easily add a Dockerfile to serve your static site with standard Nginx. 
> Choose your base directory to be served (e.g. dist or build).

## Installation

First, install [Yeoman](http://yeoman.io) and generator-static-dockerfile using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-static-dockerfile
```

Then generate the Dockerfile in an existing project:

```bash
yo static-dockerfile [folder]
```

If you don't pass [folder] when calling yo, you will be prompted to give it. You can leave it blank, if you want to serve files from your current root folder.

## Getting To Know Yeoman

Yeoman has a heart of gold. He&#39;s a person with feelings and opinions, but he&#39;s very easy to work with. If you think he&#39;s too opinionated, he can be easily convinced. Feel free to [learn more about him](http://yeoman.io/).

## License

MIT © [Julien M.]()


[npm-image]: https://badge.fury.io/js/generator-static-dockerfile.svg
[npm-url]: https://npmjs.org/package/generator-static-dockerfile
[travis-image]: https://travis-ci.org/julienma/generator-static-dockerfile.svg?branch=master
[travis-url]: https://travis-ci.org/julienma/generator-static-dockerfile
[daviddm-image]: https://david-dm.org/julienma/generator-static-dockerfile.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/julienma/generator-static-dockerfile
