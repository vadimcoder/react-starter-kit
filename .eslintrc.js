module.exports = {
    'parserOptions': {
        'ecmaVersion': 8,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true,
            'experimentalObjectRestSpread': true
        }
    },
    'rules': {
        // Possible Errors (http://eslint.org/docs/rules/#possible-errors):
        'valid-jsdoc': ['warn', {
            'prefer': {
                'return': 'returns'
            }
        }],


        // Best Practices (http://eslint.org/docs/rules/#best-practices):
        'consistent-return': ['warn'],
        'curly': ['warn'],
        'dot-location': ['warn', 'property'],
        'dot-notation': ['warn'],
        'eqeqeq': ['warn'],
        'no-alert': ['warn'],
        'no-caller': ['warn'],
        'no-else-return': ['warn'],
        'no-empty-function': ['warn'],
        'no-empty-pattern': ['warn'],
        'no-eq-null': ['warn'],
        'no-eval': ['warn'],
        'no-extend-native': ['warn'],
        'no-extra-bind': ['warn'],
        'no-extra-label': ['warn'],
        'no-fallthrough': ['warn'],
        'no-floating-decimal': ['warn'],
        'no-implicit-coercion': ['warn', {
            'boolean': false
        }],
        'no-implicit-globals': ['warn'],
        'no-implied-eval': ['warn'],
        'no-invalid-this': ['warn'],
        'no-iterator': ['warn'],
        'no-labels': ['warn'],
        'no-lone-blocks': ['warn'],
        'no-loop-func': ['warn'],
        'no-magic-numbers': ['warn'],
        'no-multi-spaces': ['warn'],
        'no-native-reassign': ['warn'],
        'no-new-func': ['warn'],
        'no-new-wrappers': ['warn'],
        'no-proto': ['warn'],
        'no-redeclare': ['warn'],
        'no-return-assign': ['warn'],
        'no-script-url': ['warn'],
        'no-self-assign': ['warn'],
        'no-self-compare': ['warn'],
        'no-sequences': ['warn'],
        'no-unmodified-loop-condition': ['warn'],
        'no-unused-expressions': ['warn'],
        'no-unused-labels': ['warn'],
        'no-useless-call': ['warn'],
        'no-useless-concat': ['warn'],
        'no-useless-escape': ['warn'],
        'no-with': ['warn'],
        'require-await': ['warn'],
        'wrap-iife': ['warn'],
        'yoda': ['warn'],


        // Strict Mode (http://eslint.org/docs/rules/#strict-mode):
        'strict': ['warn'],


        // Variables (http://eslint.org/docs/rules/#variables):
        'no-catch-shadow': ['warn'],
        'no-delete-var': ['warn'],
        'no-label-var': ['warn'],
        'no-shadow': ['warn'],
        'no-shadow-restricted-names': ['warn'],
        'no-undef-init': ['warn'],
        'no-use-before-define': ['warn'],


        // Node.js and CommonJS (http://eslint.org/docs/rules/#nodejs-and-commonjs):
        'global-require': ['warn'],
        'no-mixed-requires': ['warn'],
        'no-path-concat': ['warn'],
        'no-sync': ['warn'],


        // Stylistic Issues (http://eslint.org/docs/rules/#stylistic-issues):
        'array-bracket-spacing': ['warn'],
        'block-spacing': ['warn'],
        'brace-style': ['warn', '1tbs', {'allowSingleLine': true}],
        'camelcase': ['warn', {'properties': 'never'}],
        'comma-dangle': ['warn', 'never'],
        'comma-spacing': ['warn', {'before': false, 'after': true}],
        'comma-style': ['warn', 'last'],
        'computed-property-spacing': ['warn', 'never'],
        'consistent-this': ['warn', 'that'],
        'func-style': ['warn', 'declaration'],
        'indent': ['warn', 4, {'SwitchCase': 1}],
        'key-spacing': ['warn'],
        'keyword-spacing': ['warn'],
        'linebreak-style': ['warn', 'unix'],
        'max-depth': ['warn', 10],
        'max-len': ['warn', {'code': 140, 'ignoreUrls': true}],
        'max-nested-callbacks': ['warn', 5],
        'max-params': ['warn', 5],
        'max-statements-per-line': ['warn', {'max': 10}],
        'new-cap': ['warn'],
        'new-parens': ['warn'],
        'no-lonely-if': ['warn'],
        'no-mixed-spaces-and-tabs': ['warn'],
        'no-nested-ternary': ['warn'],
        'no-new-object': ['warn'],
        'no-spaced-func': ['warn'],
        'no-trailing-spaces': ['warn'],
        'no-underscore-dangle': ['warn', {'allowAfterThis': true}],
        'no-unneeded-ternary': ['warn'],
        'no-whitespace-before-property': ['warn'],
        'object-curly-spacing': ['warn', 'never'],
        'one-var-declaration-per-line': ['warn'],
        'operator-assignment': ['warn'],
        'operator-linebreak': ['warn', 'after'],
        'padded-blocks': ['warn', {'blocks': 'never', 'switches': 'never', 'classes': 'never'}],
        'quote-props': ['warn', 'as-needed'],
        'quotes': ['warn', 'single'],
        'semi': ['warn', 'always'],
        'semi-spacing': ['warn', {'before': false, 'after': true}],
        'space-before-blocks': ['warn'],
        'space-before-function-paren': ['warn', 'never'],
        'space-in-parens': ['warn', 'never'],
        'space-infix-ops': ['warn'],
        'space-unary-ops': ['warn', {'words': true, 'nonwords': false}],
        'spaced-comment': ['warn', 'always'],


        // ECMAScript2015 (http://eslint.org/docs/rules/#ecmascript-6):
        'arrow-body-style': ['warn', 'as-needed'],
        'arrow-parens': ['warn'],
        'arrow-spacing': ['warn', {'before': true, 'after': true}],
        'constructor-super': ['warn'],

        'generator-star-spacing': ['warn', {'before': true, 'after': true}],
        'yield-star-spacing': ['warn', {'before': true, 'after': true}],

        'no-class-assign': ['warn'],
        'no-confusing-arrow': ['warn', {'allowParens': true}],
        'no-const-assign': ['warn'],
        'no-dupe-class-members': ['warn'],
        'no-duplicate-imports': ['warn'],
        'no-new-symbol': ['warn'],
        'no-this-before-super': ['warn'],
        'no-useless-constructor': ['warn'],
        'no-var': ['warn'],
        'object-shorthand': ['warn', 'always'],
        'prefer-arrow-callback': ['warn'],
        'prefer-const': ['warn'],
        'prefer-reflect': ['warn'],
        'prefer-rest-params': ['warn'],
        'prefer-spread': ['warn'],
        'prefer-template': ['warn'],
        'require-yield': ['warn'],
        'template-curly-spacing': ['warn', 'never']
    },
    'env': {
        'browser': true,
        'commonjs': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'plugins': [
        'react'
    ]
};