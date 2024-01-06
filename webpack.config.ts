import buildConfig from "./config/build";
import {BuildEnv, BuildMode, BuildModeName, BuildPaths} from "./config/build/types/config";
import getPathDirname from "./config/helpers/getPathFromDirname";


export default (env: BuildEnv) => {
    //? MODE VARIABLES
    const modeName: BuildModeName = env.mode || "development";
    const IS_PROD = modeName === "production"
    const IS_DEV = modeName === "development"

    //? PORT VARIABLES
    const port = env.port || 3000;

    //? RESULTS CONFIG VARIABLES
    const mode: BuildMode = {
        name: modeName,
        IS_PROD,
        IS_DEV,
    }
    const paths: BuildPaths = {
        entry: getPathDirname("src", "index.ts"),
        build: getPathDirname("build"),
        html: getPathDirname("public", "index.html")
    }

    return buildConfig({
        mode,
        port,
        paths,
    })
}