Includes only the latest and greatest web technologies. Use it for your next heroic SPA project because you can't go wrong with it. Contains minimal viable "hello, world" code just to proof it works. Remove hello world and write your own great project.

# 🎁 What’s Inside?

Name | Type | Vendor description | Example Config | Notes
---- | ---- | ------------------ | -------------- | -----
[React](https://facebook.github.io/react/) | View library | a javascript library for building user interfaces | | Redux not included
[Webpack 2](https://webpack.js.org/) | Build tool | a module bundler for modern javascript applications (bundling, minification, watch mode, ect.) | [webpack.config.js](https://github.com/vinogradov/react-starter-kit/blob/master/webpack.config.js) | Includes: ([babel-loader](https://github.com/babel/babel-loader), [eslint-loader](https://github.com/MoOx/eslint-loader) and [sass-loader](https://github.com/webpack-contrib/sass-loader) 
[Babel](https://babeljs.io/) | Transpiler | ES2015/2016/2017 support | [.babelrc](https://github.com/vinogradov/react-starter-kit/blob/master/.babelrc)
[ESLint](http://eslint.org/) | Linter | the pluggable linting utility for JavaScript and JSX | [.eslintrc.js](https://github.com/vinogradov/react-starter-kit/blob/master/.eslintrc.js)
[SASS](http://sass-lang.com/) | CSS Preprocessor | CSS with superpowers
[whatwg-fetch](https://github.com/github/fetch) | Polyfill | A window.fetch JavaScript polyfill | | From GitHub. Implements the [spec](https://fetch.spec.whatwg.org/)

# 👨🏼‍💻 Usage
`npm install`

for development purposes (watch mode with automatic browser refresh): `npm start` and go to http://localhost:8080/

for distribution purposes (generate public static files): `npm run dist`

![](http://vinogradov.github.io/react-starter-kit/screenshot.png)