// .storybook/main.js

const path = require('path')
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin')

module.exports = {
  stories: ['../stories/*.@(js|mdx|jsx)'],
  addons: ['@storybook/addon-postcss', 
  '@storybook/addon-info',
  // '@storybook/addon-docs/register',
  // {
  //   name: '@storybook/addon-docs/preset',
  //   options: {
  //     configureJSX: true,
  //     babelOptions: {},
  //     sourceLoaderOptions: null,
  //   },
  // },
  ],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      // exclude: /node_modules(?!\/@storybook\/addon-info)/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // config.module.rules.push({
    //   // 2a. Load `.stories.mdx` / `.story.mdx` files as CSF and generate
    //   //     the docs page from the markdown
    //   test: /\.mdx$/,
    //   use: [
    //     {
    //       loader: 'babel-loader',
    //       // may or may not need this line depending on your app's setup
    //       options: {
    //         plugins: ['@babel/plugin-transform-react-jsx'],
    //       },
    //     },
    //     {
    //       loader: '@mdx-js/loader',
    //       options: {
    //         compilers: [createCompiler({})],
    //       },
    //     },
    //   ],

    // });


    // config.module.rules.push({	
    //   test: /\.mdx$/,	
    //   exclude: /node_modules/,	
    //   use: [	
    //     // {	
    //     //   loader: require.resolve('babel-loader'),	
    //     // },	
    //     {	
    //       loader: require.resolve('@mdx-js/loader'),	
    //       options: {	
    //         compilers: [createCompiler({})],	
    //       },	
    //     },	
    //   ],	
    // });

    // config.module.rules.push({
    //   test: /\.(stories|story)\.[tj]sx?$/,
    //   loader: require.resolve("@storybook/source-loader"),
    //   exclude: [/node_modules/],
    //   enforce: "pre",
    // });
    // config.resolve.extensions.push(".ts", ".tsx", ".js", ".jsx", ".mdx");

    // Return the altered config

    // config.module.rules = config.module.rules.filter(f => f?.test?.toString() !== '/\\.css$/')

    // config.module.rules.push({
    //   test: /\.css$/,
    //   exclude: /node_modules(?!\/@storybook\/addon-info)/,
    //   loaders: ['style-loader', 'css-loader', 'postcss-loader'],
    //   include: path.resolve(__dirname, '../src'),
    // })
    config.resolve.extensions.push(".ts", ".tsx", ".js", ".jsx", ".scss", ".css");
    return config;
  },
};