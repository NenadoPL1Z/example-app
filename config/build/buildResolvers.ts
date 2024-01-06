import {BuildResolve} from "./types/build";

const buildResolvers = (): BuildResolve => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}

export default buildResolvers;