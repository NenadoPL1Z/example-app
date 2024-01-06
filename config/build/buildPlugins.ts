import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildPlugins} from "./types/build";
import {BuildOptions} from "./types/config";

function buildPlugins(options: BuildOptions): BuildPlugins {
    const {paths} = options;

    return [
        new HtmlWebpackPlugin({ template: paths.html }),
        new webpack.ProgressPlugin(),
    ]
}

export default buildPlugins