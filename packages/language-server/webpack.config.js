const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

const outdir = path.resolve(__dirname, '..', '..', '..', 'dist');

const babelOptions = require(path.join(__dirname, '.babelrc'));

module.exports = function getLanguageServerConfig() {
  let config = {
    name: 'ls',
    target: 'node',
    entry: {
      languageserver: path.join(__dirname, 'index.ts'),
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)$/,
          use: [{
            loader: 'babel-loader',
            options: babelOptions
          }],
          exclude: /(node_modules|\.test\..+)/i,
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js', '.json'],
      alias: {
        'pg-native': path.join(__dirname, '../../', 'node_modules/pg/lib/native/index.js'),
      },
      modules: ['node_modules', path.join(__dirname, '..', '..', 'node_modules')],
    },
    output: {
      filename: '[name].js',
      path: outdir,
      libraryTarget: 'commonjs2',
    },
    externals: {
      ibm_db: 'commonjs ibm_db',
      sqlite3: 'commonjs sqlite3',
      oracledb: 'commonjs oracledb',
      '@sap/hana-client': 'commonjs @sap/hana-client'
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        tsconfig: path.resolve(__dirname, 'tsconfig.json')
      }),
    ]
  };

  return config;
};
