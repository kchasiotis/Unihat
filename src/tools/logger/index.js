class Logger {
    static log(msg) {
        console.log('[ log ] ' + msg);
    }

    static debug(msg) {
        console.debug('[debug] ' + msg);
    }

    static info(msg) {
        console.info('[info ] ' + msg);
    }

    static warn(msg) {
        console.warn('[warn ] ' + msg);
    }

    static error(msg) {
        console.error('[error] ' + msg);
    }
}

export {Logger};