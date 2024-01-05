import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

type WebpackConfiguration = webpack.Configuration;

const pathFindFiles = (...entry: string[]) => {
    return path.resolve(__dirname, ...entry)
}

const config: WebpackConfiguration = {
    mode: "production",
    entry: pathFindFiles("src", "index.ts"),
    output: {
        filename: "[name].[contenthash].js",
        path: pathFindFiles("build"),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({ template: pathFindFiles("public", "index.html") }),
        new webpack.ProgressPlugin(),
    ],
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
    resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    },
}

export default config