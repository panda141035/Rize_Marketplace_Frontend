const nodeExternals = require("webpack-node-externals");

module.exports = (config, context) => {
  return {
    ...config,
    target: "node",
    externals: [nodeExternals()],
    node: {
      global: true,
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          enforce: "pre",
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                // Prefer `dart-sass`
                implementation: require("sass"),
              },
            },
            "source-map-loader",
          ],
        },
      ],
    },
    ignoreWarnings: [/Failed to parse source map/],
  };
};