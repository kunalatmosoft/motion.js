const path = require('path');

module.exports = {
    entry: './src/motionLibrary.js',
    output: {
        filename: 'motionLibrary.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'MotionLibrary',
        libraryTarget: 'umd',
    },
    mode: 'production',
};
