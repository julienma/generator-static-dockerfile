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

## Make sure that your build / dist folder is NOT .gitignore'd!

If you've used a generator to bootstrap your site, there's 90% chance the static output folder is listed in `.gitignore` (e.g. Yeoman with the `dist` folder).
So remove that folder from your `.gitignore` and make sure it is commited.

If you don't consider this a best-practice (and you'd be right), then you'll have to find a way to get the content of that static output folder pushed into your Docker container.

## Getting To Know Yeoman

Yeoman has a heart of gold. He&#39;s a person with feelings and opinions, but he&#39;s very easy to work with. If you think he&#39;s too opinionated, he can be easily convinced. Feel free to [learn more about him](http://yeoman.io/).

## License

MIT © [Julien M.]()


[npm-image]: https://badge.fury.io/js/generator-static-dockerfile.svg
[npm-url]: https://npmjs.org/package/generator-static-dockerfile
