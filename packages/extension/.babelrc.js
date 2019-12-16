module.exports = {
  presets: [
    [
      require.resolve('@babel/preset-env'),
      {
        targets: {
          electron: '6'
        }
      }
    ],
    require.resolve('@babel/preset-typescript')
  ],
  plugins: [
    // require.resolve('@babel/plugin-proposal-numeric-separator'),
    require.resolve('@babel/plugin-proposal-class-properties'),
    // require.resolve('@babel/plugin-proposal-object-rest-spread'),
  ]
}