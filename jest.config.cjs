module.exports = {
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
