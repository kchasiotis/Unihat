import env from '../../../environment'

const logOnFalse = env.debug && env.logger;

class Logger {
    static log(msg) {
        logOnFalse || console.log(  '[log]:   ' + msg);
    }

    static debug(msg) {
        logOnFalse || console.debug('[debug]: ' + msg);
    }

    static info(msg) {
        logOnFalse || console.info( '[info]:  ' + msg);
    }

    static warn(msg) {
        logOnFalse || console.warn( '[warn]:  ' + msg);
    }

    static error(msg) {
        logOnFalse || console.error('[error]: ' + msg);
    }
}

export {Logger};