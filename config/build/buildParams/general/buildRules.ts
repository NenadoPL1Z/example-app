import {BuildLoaders} from "../../types/build";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "../../types/config";

function buildRules(options: BuildOptions): BuildLoaders  {

    const {mode} = options;
    const {IS_DEV} = mode;

    const sassLoader =       {
        test: /\.s[ac]ss$/i,
        use: [
            IS_DEV ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes(".module."),
                        localIdentName: IS_DEV ? "[path][name]__[local]-[hash:base64:3]" : "[hash:base64:8]",
                    },
                }
            },
            "sass-loader",
        ],
    }


    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        sassLoader,
        typescriptLoader,
    ]
}

export default buildRules