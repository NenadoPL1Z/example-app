import {BuildOptions} from "./types/config";
import type {Configuration} from "webpack-dev-server";

function buildDevServer(options: BuildOptions): Configuration {
    const {port} = options;

    return {
        port,
        open: true,

    };
}

export default buildDevServer;