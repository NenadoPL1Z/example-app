import {BuildOptions} from "./types/config";
import {BuildConfiguration} from "./types/build";
import buildPlugins from "./buildPlugins";
import buildRules from "./buildRules";
import buildResolvers from "./buildResolvers";

function buildConfig (options: BuildOptions): BuildConfiguration {
    const {mode, paths} = options;

    return {
        mode,
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
    }
}

export default buildConfig;