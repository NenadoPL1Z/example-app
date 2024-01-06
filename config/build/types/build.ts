import build from "webpack";


//? CONFIG
export type BuildConfiguration = build.Configuration;

//? KEY IN CONFIG
export type BuildPlugins = build.WebpackPluginInstance[]
export type BuildLoaders = build.RuleSetRule[]
export type BuildResolve = build.ResolveOptions