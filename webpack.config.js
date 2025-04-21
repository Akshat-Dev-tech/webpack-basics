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
    mode:'none'
}