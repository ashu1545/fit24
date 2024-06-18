module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            src: './src',
            '@assets': './assets',
            '@component': './src/component',
            '@context_api': './src/context_api',
            '@screen': './src/screen',
          },
        }
      ],
      [
        "module:react-native-dotenv",
        {
          "moduleName": "@env",
          "path": ".env",
          "blacklist": null,
          "whitelist": null,
          "safe": false,
          "allowUndefined": true
        }
      ]
    ]
  };
};
