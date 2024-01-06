import {BuildConfiguration} from "./config/build/types/build";
import buildConfig from "./config/build";
import {BuildMode, BuildPaths} from "./config/build/types/config";
import getPathDirname from "./config/helpers/getPathFromDirname";
import * as process from "process";

const mode: BuildMode = (process.env.NODE_ENV as BuildMode) || "none";

const paths: BuildPaths = {
    entry: getPathDirname("src", "index.ts"),
    build: getPathDirname("build"),
    html: getPathDirname("public", "index.html")
}

const config: BuildConfiguration = buildConfig({
    mode,
    paths,
})

export default config