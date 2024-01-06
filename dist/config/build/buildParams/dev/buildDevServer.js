function buildDevServer(options) {
    var port = options.port;
    return {
        port: port,
        open: true,
    };
}
export default buildDevServer;
