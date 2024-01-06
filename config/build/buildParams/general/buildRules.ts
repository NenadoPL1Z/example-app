import {BuildLoaders} from "../../types/build";

function buildRules(): BuildLoaders  {

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        typescriptLoader
    ]
}

export default buildRules