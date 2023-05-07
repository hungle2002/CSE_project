module.exports = {
  content: [
    "./src/**.{js,jsx}",
    "./src/component/**.{js,jsx}",
    "./src/screens/**.{js,jsx}",
    "./src/component/DeviceItem/**.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("lightningcss")],
  corePlugins: require("tailwind-rn/unsupported-core-plugins"),
};
