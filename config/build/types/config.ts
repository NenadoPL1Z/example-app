import webpack from "webpack";

export type BuildModeName = Pick<webpack.Configuration, "mode">["mode"];

export type BuildMode = {
    name: BuildModeName,
    IS_PROD: boolean;
    IS_DEV: boolean;
};
export type BuildPort = number;

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface BuildEnv {
    mode: BuildModeName;
    port: BuildPort;
}

export interface BuildOptions {
    mode: BuildMode;
    port: BuildPort;
    paths: BuildPaths;
}