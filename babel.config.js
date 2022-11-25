const config = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin'],
    [
      "module-resolver",
      {
        "root": [
          "./src"
        ],
        "extensions": [
          ".tsx",
          ".ts",
          ".js",
          ".json"
        ],
        "alias": {
          "@screens": "./src/screens",
          "@router": "./src/router",
          "@utils": "./src/utils",
          "@api": "./src/api",
          "@constants": "./src/constants",
          "@assets": "./src/assets",
          "@components": "./src/components",
        }
      }
    ] 
  ],
};

module.exports = (api) => {
  api.cache(true);
  return config;
};
