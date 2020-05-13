module.exports = {
    "presets": ["@babel/preset-env", "@babel/react"],
    "plugins": ["@babel/plugin-proposal-class-properties"],
    "env": {
        "test": {
          "plugins": ["@babel/plugin-transform-modules-commonjs"]
        }
    }
};