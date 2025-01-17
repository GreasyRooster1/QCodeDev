const path = require('path');

module.exports = {
    mode:"development",
    entry:{
        adminConsole: "./src/adminConsole/index.js",
        adminLogin: "./src/adminLogin/index.js",
        editor: "./src/editor/index.js",
        exec: "./src/exec/index.js",
        index: "./src/index/index.js",
        lessons: "./src/lessons/index.js",
        login: "./src/login/js/index.js",
        shareBoard: "./src/shareBoard/index.js",
        sharedProject: "./src/sharedProject/index.js",
    },
    output: {
        filename: 'bundles/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};