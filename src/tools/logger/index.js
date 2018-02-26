import env from '../../../environment'

const logOn = env.logger;

class Logger {
    static formatter(logType, message, logFormat) {
        let prefix;
        switch (logType) {
            case LogType.log:
                prefix = '[log]:   ';
                break;
            case LogType.debug:
                prefix = '[debug]: ';
                break;
            case LogType.info:
                prefix = '[info]:  ';
                break;
            case LogType.warn:
                prefix = '[warn]:  ';
                break;
            case LogType.error:
                prefix = '[error]: ';
                break;
            default:
                prefix = '';
        }
        if (LogFormat.HEADER === logFormat) message = '---' + message + '---';
        return prefix + message;
    }

    static log(msg, logFormat) {
        if (logOn === false) return;
        let message = this.formatter(LogType.log, msg, logFormat);
        console.log(message);
    }

    static debug(msg, logFormat) {
        if (logOn === false) return;
        let message = this.formatter(LogType.debug, msg, logFormat);
        console.debug(message);
    }

    static info(msg, logFormat) {
        if (logOn === false) return;
        let message = this.formatter(LogType.info, msg, logFormat);
        console.info(message);
    }

    static warn(msg, logFormat) {
        if (logOn === false) return;
        let message = this.formatter(LogType.warn, msg, logFormat);
        console.warn(message);
    }

    static error(msg, logFormat) {
        if (logOn === false) return;
        let message = this.formatter(LogType.error, msg, logFormat);
        console.error(message);
    }
}

const LogType = {
    log: 1,
    debug: 2,
    info: 3,
    warn: 4,
    error: 5
};

const LogFormat = {
    HEADER: 1
};

export {Logger, LogFormat};