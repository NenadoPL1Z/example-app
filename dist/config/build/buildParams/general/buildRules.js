function buildRules() {
    var typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    return [
        typescriptLoader
    ];
}
export default buildRules;
