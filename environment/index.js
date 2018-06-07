import config from '../src/tools/api/.config'

const env = {
    debug: false,
    serverUrl: config.serverUrl,
    logger: false,
    backgroundCheck: true
};

export default env;