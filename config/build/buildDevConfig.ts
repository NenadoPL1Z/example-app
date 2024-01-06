import {BuildOptions} from "./types/config";
import {BuildConfiguration} from "./types/build";
import buildDevServer from "./buildParams/dev/buildDevServer";

function buildDevConfig (options: BuildOptions): BuildConfiguration {
    const {mode} = options;
    if (!mode.IS_DEV) return {};

    return {
        devtool: "inline-source-map",
        devServer: buildDevServer(options),
    }
}

export default buildDevConfig;