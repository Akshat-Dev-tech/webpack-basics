//To resolve path for dist file , using rquire since ecmap script won't support here.
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');
const MinicssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//this is the min webpack configuration
module.exports = {
    entry:'./src/index.js',
    output:{

        //this is the output file name
        //this will create a file with name bundle.[hashvalue].js in dist folder
        //so every time there is a change in code it will create a new file with new hash value.
        //if no change , it will refer the cached file and won't generate the new file.
        //this is used to cache the file in browser. 
        filename:'bundle.[contenthash].js',
        // path:'./dist' this will fail
        path:path.resolve(__dirname , './dist'),

        //In webPack 5 it will be auto and work for simpler cases without specifying anything (image will get loaded) , for older webpack u need to specify other wise it will give empty ''.
        //publicPath is used to specify where it will load and also if you want to append url initals before hand like 'https/@/' + img 
        publicPath:'dist/'
    },
    mode:'none',
     // ... other config
  module: {
    //Defining rules to tell webpack to import .jpg files
    //by default webpack knows to import js or json files,
    rules: [
    //   {
    //     test: /\.(png|jpe?g|gif)$/i,
    //     type: 'asset/resource',  // there will be diffrent assests type that we can use here , considering reource for image.
    //   },

    //this won't generate new file like resouce but it will inject base 64 representation in js bundle.
    //it will be useful for smaller assests , since injecting it in bundle wil increase the bundle size.
    //   {
    //     test: /\.(png|jpe?g|gif)$/i,
    //     type: 'asset/inline',  // there will be diffrent assests type that we can use here , considering reource for image.
    //   },


    //this is combi of both , if the assets is less than 8kb it will acts as inline , else it will acts as resource.
    //if you want it to chnage 8 kb check , webpack give options to change that as well. 
    //  {
    //     test: /\.(png|jpe?g|gif)$/i,
    //     type: 'asset',  // there will be diffrent assests type that we can use here , considering reource for image.

    //     //changing it from 8kb to 4kb
    //     //less then 4 kb , it will be inline asset
    //     //more then 4 kb , it will be resource asset
    //     parser:{
    //         dataUrlCondition:{
    //             maxSize: 4*1024 //2kb
    //         }
    //     }
    //   },


      //for txt files to read it as JS string and inject it in main bundle
      // {
      //   test: /\.txt/,
      //   type: 'asset/source'
      // },
      // {
      //   test: /\.txt/,
      //   type: 'asset/source'
      // },

      // For JS files
      // babel-loader is used to transpile modern JavaScript to older versions for compatibility
      // This is used to load JavaScript files in your project
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     use: {
    //         loader: 'babel-loader',
    //         options: {
    //             presets: ['@babel/preset-env'],
    //         },
    //     },
    // },
      // For CSS files
      // style-loader injects CSS into the DOM
      // css-loader resolves CSS imports into JS
      // This is used to load CSS files in your JavaScript
      {
        test: /\.css$/,
        use: [MinicssExtractPlugin.loader, 'css-loader'], // Processes CSS files and injects them into the DOM
      },
    ],
  },

  plugins: [
  // For minification of output bundle
  // This is used to optimize the output bundle
  // In Webpack 5, we don't install this plugin as TerserPlugin is included by default.
    new TerserPlugin(),

    // For extracting CSS into separate files
    // This is used to extract CSS into separate files
    new MinicssExtractPlugin({
      //adding content hashing to css file name
      //this will create a file with name bundle.[hashvalue].css in dist folder
      //so every time there is a change in code it will create a new file with new hash value.
      //if no change , it will refer the cached file and won't generate the new file.
      //this is used to cache the file in browser.
      filename: '[name].[contenthash].css',
    }),
    //content hash will generating a new file but not cleaning the old file , hence we are getting multiple files for bundles and css.
    // clean web pack plugin is used for cleaning the output directory before each build.
    // This is used to clean the output directory before each build
    new CleanWebpackPlugin()

  ]
}