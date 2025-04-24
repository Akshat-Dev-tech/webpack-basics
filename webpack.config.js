//To resolve path for dist file , using rquire since ecmap script won't support here.
const path = require('path')


//this is the min webpack configuration
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
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
        use: ['style-loader', 'css-loader'], // Processes CSS files and injects them into the DOM
      },
    ],
  },
}