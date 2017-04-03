Includes only the latest and greatest web technologies. Use it for your next heroic SPA project because you can't go wrong with it. Contains minimal viable "hello, world" code just to proof it works. Remove hello world and write your own great project.

Suitable for:
1. Education
2. Small pet projects/protorypes
3. Production

**If you don't need some library then just don't use it. Its source code will _NOT_ be included in the final bundle.**

# 🎁 What’s Inside?

Name | Type | Original Description | Example Config | Notes
---- | ---- | ------------------ | -------------- | -----
[react](https://facebook.github.io/react/) | View library | A javascript library for building user interfaces
[react-router](https://github.com/ReactTraining/react-router) | Routing | Declarative routing for React 
[redux](https://github.com/reactjs/redux/) | Data management | Predictable state container for JavaScript apps
[react-redux](https://github.com/reactjs/react-redux) | Data management | Official React bindings for Redux
[redux-thunk](https://github.com/gaearon/redux-thunk) | Data management | Thunk middleware for Redux
[redux-saga](https://github.com/redux-saga/redux-saga) | Data management | An alternative side effect model for Redux apps | | An alternative to [redux-thunk](https://github.com/gaearon/redux-thunk). You need to `import "regenerator-runtime/runtime";` for using generators/`yield`
[redux-logger](https://github.com/evgenyrodionov/redux-logger) | Utils | Logger for Redux
[webpack 2](https://webpack.js.org/) | Build tool | A module bundler for modern javascript applications (bundling, minification, watch mode, ect.) | [webpack.config.js](https://github.com/vinogradov/react-starter-kit/blob/master/webpack.config.js) | Loaders: [babel-loader](https://github.com/babel/babel-loader), [eslint-loader](https://github.com/MoOx/eslint-loader), [sass-loader](https://github.com/webpack-contrib/sass-loader) 
[babel](https://babeljs.io/) | Transpiler | ES2015/2016/2017 support | [.babelrc](https://github.com/vinogradov/react-starter-kit/blob/master/.babelrc) | Plugins: [transform-object-rest-spread](http://babeljs.io/docs/plugins/transform-object-rest-spread/) (spreads are currently [at STAGE 3](https://github.com/sebmarkbage/ecmascript-rest-spread))
[eslint](http://eslint.org/) | Linter | The pluggable linting utility for JavaScript and JSX | [.eslintrc.js](https://github.com/vinogradov/react-starter-kit/blob/master/.eslintrc.js)
[sass](http://sass-lang.com/) | CSS Preprocessor | CSS with superpowers
[isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) | Polyfill | Isomorphic WHATWG Fetch API, for Node & Browserify | | [whatwg-fetch](https://github.com/github/fetch) from GitHub on client,  [node-fetch](https://github.com/bitinn/node-fetch) on server
[yarn](https://yarnpkg.com/) | Package management | Fast, reliable, and secure dependency management

# 👨🏼‍💻 Usage
1. install dependencies with:  
`yarn`

1. run in development mode (watch changes in the files and refresh your browser automatically):  
`yarn start` (then go http://localhost:8080/)

1. would like to publish the project as a website? Then make a distribution build by generating static files:  
`yarn dist`

If you have problems with running it please [file an issue](https://github.com/vinogradov/react-starter-kit/issues) or [contact me](https://www.facebook.com/vadim.vinogradov) on Facebook

![](http://vinogradov.github.io/react-starter-kit/screenshot.png)