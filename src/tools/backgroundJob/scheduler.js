import {jobNames} from "./index";
import BackgroundJob from "react-native-background-job";
import env from "../../../environment";

export default class Scheduler {
    static run() {
        let newGradeCheckScheduleWifi = {
            jobKey: jobNames.newGradeCheck.wifi,
            timeout: 15000,
            period: 60 * 60 * 1000,
            override: true,
            allowExecutionInForeground: true,
            networkType: BackgroundJob.NETWORK_TYPE_UNMETERED
        };

        // todo: (priority 2) change networkType to mobile
        let newGradeCheckScheduleMobile = {
            jobKey: jobNames.newGradeCheck.mobile,
            timeout: 15000,
            period: env.debug && env.shortSchedule ? 5 * 1000 : 12 * 60 * 60 * 1000,
            override: true,
            allowExecutionInForeground: true,
            networkType: BackgroundJob.NETWORK_TYPE_ANY
        };
        BackgroundJob.schedule(newGradeCheckScheduleWifi);
        BackgroundJob.schedule(newGradeCheckScheduleMobile);
    };

    static cancelAll() {
        BackgroundJob.cancelAll();
    }
}