import webpack from "webpack";

export type BuildMode = Pick<webpack.Configuration, "mode">["mode"];

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
}