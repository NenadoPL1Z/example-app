import type {Configuration} from "webpack-dev-server";
import {BuildOptions} from "../../types/config";

function buildDevServer(options: BuildOptions): Configuration {
    const {port} = options;

    return {
        port,
        open: true,
        historyApiFallback: true,

    };
}

export default buildDevServer;