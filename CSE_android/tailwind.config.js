module.exports = {
  content: [
    "./src/**.{js,jsx}",
    "./src/layouts/**.{js,jsx}",
    "./src/component/**.{js,jsx}",
    "./src/screens/**.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require("tailwind-rn/unsupported-core-plugins"),
};
