import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = (): Configuration => {
  return {
    mode: 'production', // could be development and production
    entry: path.resolve(__dirname, './src/index.tsx'), // your app entry point
    output: {
      path: path.resolve(__dirname, './dist/'), // the build folder you wanted
      filename: '[name].js', // build entry file name
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/i,
          exclude: [/node_modules/, /\.(spec|test).(ts|js)x?$/i],
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            compact: true,
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
      alias: {
        src: path.resolve(__dirname, './src/'),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
        inject: true,
      }),
    ],
  };
};

export default config;
