//To resolve path for dist file , using rquire since ecmap script won't support here.
const path = require('path')


//this is the min webpack configuration
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        // path:'./dist' this will fail
        path:path.resolve(__dirname , './dist')
    },
    mode:'none',
     // ... other config
  module: {
    //Defining rules to tell webpack to import .jpg files
    //by default webpack knows to import js or json files,
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',  // there will be diffrent assests type that we can use here , considering reource for image.
      },
    ],
  },
}