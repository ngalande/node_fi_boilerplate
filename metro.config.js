/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules: {
      crypto: require.resolve("react-native-crypto"),
      stream: require.resolve("stream-browserify"),
      assert: require.resolve("assert"),
      http: require.resolve("@tradle/react-native-http"),
      https: require.resolve("https-browserify"),
      // os: require.resolve("react-native-os"),
      url: require.resolve("url"),
      net: require.resolve("react-native-tcp-socket"),
      zlib: require.resolve("zlib-browserify"),
      fs: require.resolve("react-native-level-fs"),
      
    }
  }
};
