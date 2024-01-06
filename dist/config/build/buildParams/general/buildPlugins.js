import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
function buildPlugins(options) {
    var paths = options.paths;
    return [
        new HtmlWebpackPlugin({ template: paths.html }),
        new webpack.ProgressPlugin(),
    ];
}
export default buildPlugins;
