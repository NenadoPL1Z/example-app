import {BuildLoaders} from "../../types/build";

function buildRules(): BuildLoaders  {

    const sassLoader =       {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
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