[See in action](https://vinogradov.github.io/react-starter-kit)

Includes only the latest and greatest web technologies (dependencies updated at 8 June 2017). Use it for your next heroic SPA project because you can't go wrong with it. Contains minimal viable "hello, world" code just to proof it works. Remove hello world and write your own great project.

# Principles
1. Using plain [ES2015](https://babeljs.io/docs/plugins/preset-es2015/)/[16](https://babeljs.io/docs/plugins/preset-es2016/)/[17](https://babeljs.io/docs/plugins/preset-es2017/). Minimizing use of [experimental Stage-X](https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-) javascript features. Only [stage-3](https://babeljs.io/docs/plugins/preset-stage-3/)/4 features are supported, because they're relatively stable
1. Using tests (by [jest](https://github.com/facebook/jest), [example](https://github.com/vinogradov/react-starter-kit/blob/master/src/examples/react/__tests__/hello.test.js))
1. Using linting (by [airbnb eslint config](https://github.com/airbnb/javascript))
1. Using git [pre-push hook](https://git-scm.com/book/gr/v2/Customizing-Git-Git-Hooks) to force run tests and linting before push

# Suitable for
1. Education
1. Small pet projects/prototypes
1. Production

# 🎁 What’s Inside?

**If you don't need some library then just don't use it. Its source code will _NOT_ be included in the final bundle**

Name | Library Type | Original Description | Example Config | Notes
---- | ---- | ------------------ | -------------- | -----
[react](https://facebook.github.io/react/) | View layer | A javascript library for building user interfaces
[react-router](https://github.com/ReactTraining/react-router) | Routing | Declarative routing for React 
[redux](https://github.com/reactjs/redux/) | Data management | Predictable state container for JavaScript apps
[react-redux](https://github.com/reactjs/react-redux) | Data management | Official React bindings for Redux
[redux-thunk](https://github.com/gaearon/redux-thunk) | Data management | Thunk middleware for Redux
[redux-saga](https://github.com/redux-saga/redux-saga) | Data management | An alternative side effect model for Redux apps | | An alternative to [redux-thunk](https://github.com/gaearon/redux-thunk). You need to `import "regenerator-runtime/runtime";` for using generators/`yield`
[redux-logger](https://github.com/evgenyrodionov/redux-logger) | Utils | Logger for Redux
[jest](https://github.com/facebook/jest) | Test framework | Painless JavaScript Testing
[webpack 2](https://webpack.js.org/) | Build/Bundler | A module bundler for modern javascript applications (bundling, minification, watch mode, ect.) | [webpack.config.js](https://github.com/vinogradov/react-starter-kit/blob/master/webpack.config.js) | Loaders: [babel-loader](https://github.com/babel/babel-loader), [eslint-loader](https://github.com/MoOx/eslint-loader), [sass-loader](https://github.com/webpack-contrib/sass-loader) 
[babel](https://babeljs.io/) | Transpiler | ES2015/2016/2017 support | [.babelrc](https://github.com/vinogradov/react-starter-kit/blob/master/.babelrc) | Plugins: [transform-object-rest-spread](http://babeljs.io/docs/plugins/transform-object-rest-spread/) (spreads are currently [at STAGE 3](https://github.com/sebmarkbage/ecmascript-rest-spread))
[eslint](http://eslint.org/) | Linter | The pluggable linting utility for JavaScript and JSX | [.eslintrc.js](https://github.com/vinogradov/react-starter-kit/blob/master/.eslintrc.js)
[sass](http://sass-lang.com/) | CSS Preprocessor | CSS with superpowers
[isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) | Polyfill | Isomorphic WHATWG Fetch API, for Node & Browserify | | [whatwg-fetch](https://github.com/github/fetch) from GitHub on client,  [node-fetch](https://github.com/bitinn/node-fetch) on server
[yarn](https://yarnpkg.com/) | Package management | Fast, reliable, and secure dependency management

# 👨🏼‍💻 Usage
1. install dependencies with:  
`yarn`

1. run in development mode (watch changes in the files and refresh your browser automatically):  
`yarn start` (then go http://localhost:8080/ and you should see [this](https://vinogradov.github.io/react-starter-kit/))

1. would like to publish the project as a website? Then make a distribution build by generating static files:  
`yarn dist` (then go to `dist` folder)

1. run tests:  
`yarn test`

1. run linting:  
`yarn lint`

If you have problems with running it please [file an issue](https://github.com/vinogradov/react-starter-kit/issues) or [contact me](https://www.facebook.com/vadim.vinogradov) on Facebook. Thanks!

![](http://vinogradov.github.io/react-starter-kit/screenshot.png)
https://vinogradov.github.io/react-starter-kit

# Examples

1. [examples/react](https://github.com/vinogradov/react-starter-kit/tree/master/src/examples/react) - trivial hello world using React
1. [examples/redux/one-file](https://github.com/vinogradov/react-starter-kit/tree/master/src/examples/redux/one-file) - the simplest redux example, all in one file (for fast prototyping)
1. [examples/redux/separate-files](https://github.com/vinogradov/react-starter-kit/tree/master/src/examples/redux/separate-files) - counter example with `redux` and `redux-saga`
