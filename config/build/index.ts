import {BuildOptions} from "./types/config";
import {BuildConfiguration} from "./types/build";
import buildPlugins from "./buildPlugins";
import buildRules from "./buildRules";
import buildResolvers from "./buildResolvers";
import buildDevServer from "./buildDevServer";

function buildConfig (options: BuildOptions): BuildConfiguration {
    const {mode, paths} = options;

    return {
        mode: mode.name,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildRules(),
        },
        resolve: buildResolvers(),
        devtool: mode.IS_DEV ? 'inline-source-map' : undefined,
        devServer: mode.IS_DEV ? buildDevServer(options) : undefined,
    }
}

export default buildConfig;