module.exports = {
    plugins: [
      require("postcss-preset-env")({
        autoprefixer: { grid: true },
        stage: 0,
        browsers: "last 2 versions"
      }),
      require("postcss-font-magician")({
        variants: {
          Raleway: {
            "300": [],
            "400": [],
            "700": [],
            "900": []
          },
          "Source Sans Pro": {
            "300": []
          }
        },
        foundries: ["google"]
      }),
      require("rfs")(),
      require("cssnano")()
    ]
  };
