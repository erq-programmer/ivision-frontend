module.exports = {
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [
              ':srcset',
              ':data-srcset',
              'img:data-src',
              'img:src',
              'audio:src',
              'video:src',
              'track:src',
              'embed:src',
              'source:src',
              'input:src',
              'object:data',
              'script:src',
            ],
          },
        },
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'images',
          },
        },
      },
    ],
  },
};
