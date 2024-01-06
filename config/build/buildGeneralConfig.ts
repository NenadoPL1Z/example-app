import {BuildOptions} from "./types/config";
import {BuildConfiguration} from "./types/build";
import buildPlugins from "./buildParams/general/buildPlugins";
import buildRules from "./buildParams/general/buildRules";
import buildResolvers from "./buildParams/general/buildResolvers";
import buildDevConfig from "./buildDevConfig";

function buildGeneralConfig (options: BuildOptions): BuildConfiguration {
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
            rules: buildRules(options),
        },
        resolve: buildResolvers(),
        ...buildDevConfig(options)
    }
}

export default buildGeneralConfig;