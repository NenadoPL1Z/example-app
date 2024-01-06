import path from 'path';

function getPathDirname(...entry: string[]): string {
    return path.resolve(__dirname, "../", "../", ...entry)
}

export default getPathDirname