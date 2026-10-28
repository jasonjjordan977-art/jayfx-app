module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // Hermes cannot parse oRPC's destructured rest parameters; lower that syntax.
    plugins: ['@babel/plugin-transform-parameters'],
  };
};