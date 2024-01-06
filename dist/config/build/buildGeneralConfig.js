var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import buildPlugins from "./buildParams/general/buildPlugins";
import buildRules from "./buildParams/general/buildRules";
import buildResolvers from "./buildParams/general/buildResolvers";
import buildDevConfig from "./buildDevConfig";
function buildGeneralConfig(options) {
    var mode = options.mode, paths = options.paths;
    return __assign({ mode: mode.name, entry: paths.entry, output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        }, plugins: buildPlugins(options), module: {
            rules: buildRules(),
        }, resolve: buildResolvers() }, buildDevConfig(options));
}
export default buildGeneralConfig;
