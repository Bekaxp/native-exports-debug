const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { resolver } = config;

  config.resolver = {
    ...resolver,
    unstable_enableSymlinks: true,
    unstable_enablePackageExports: true,
    unstable_conditionNames: ["import", "require"],
  };

  config.watchFolders = [".."];

  return config;
})();
