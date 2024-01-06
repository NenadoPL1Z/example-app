import buildDevServer from "./buildParams/dev/buildDevServer";
function buildDevConfig(options) {
    var mode = options.mode;
    if (!mode.IS_DEV)
        return {};
    return {
        devtool: "inline-source-map",
        devServer: buildDevServer(options),
    };
}
export default buildDevConfig;
