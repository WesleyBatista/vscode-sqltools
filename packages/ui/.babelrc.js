module.exports = {
  presets: [
    require.resolve('@babel/preset-env'),
    require.resolve('@babel/preset-react'),
    [require.resolve('@babel/preset-typescript'), { 'allExtensions': true, 'isTSX': true }]
  ],
  plugins: [
    [require.resolve('@babel/plugin-proposal-class-properties'), { loose : true }],
    // require.resolve('@babel/plugin-proposal-numeric-separator'),
    // require.resolve('@babel/plugin-proposal-object-rest-spread'),
    require.resolve('@babel/plugin-syntax-dynamic-import'),
  ]
}