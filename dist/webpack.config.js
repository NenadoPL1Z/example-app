import buildGeneralConfig from "./config/build/buildGeneralConfig";
import getPathDirname from "./config/helpers/getPathFromDirname";
export default (function (env) {
    //? MODE VARIABLES
    var modeName = env.mode || "development";
    var IS_PROD = modeName === "production";
    var IS_DEV = modeName === "development";
    //? PORT VARIABLES
    var port = env.port || 3000;
    //? RESULTS CONFIG VARIABLES
    var mode = {
        name: modeName,
        IS_PROD: IS_PROD,
        IS_DEV: IS_DEV,
    };
    var paths = {
        entry: getPathDirname("src", "buildGeneralConfig.ts"),
        build: getPathDirname("build"),
        html: getPathDirname("public", "index.html")
    };
    return buildGeneralConfig({
        mode: mode,
        port: port,
        paths: paths,
    });
});
