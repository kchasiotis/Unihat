import Crawler from '../crawler'
import {CredentialStorage, LocalStorage} from '../../tools/localStorage';
import {Logger, LogFormat} from '../../tools/logger';

let PushNotification = require('react-native-push-notification');
let crawler = new Crawler();

const jobNames = {newGradeCheck: {wifi: 'newGradeCheckWifi', mobile: 'newGradeCheckMobile'}};

const newGradeCheckJob = (jobName) => {
    return {
        jobKey: jobName,
        job: () => {
            Logger.info('Running ' + jobName, LogFormat.HEADER);

            CredentialStorage.load((error, username, password) => {
                    if (error) {
                        Logger.log(error);
                        return;
                    }

                    crawler.fetchPage(username, password, (error, logged, serverGrades) => {
                        if (error) {
                            Logger.error(error);
                            return;
                        }

                        if (logged) {
                            LocalStorage.loadGrades((error, storedGrades) => {
                                if (error) {
                                    Logger.error(error);
                                    return;
                                }

                                let storedExGrades = storedGrades.exGrades;
                                let serverExGrades = serverGrades.exGrades.filter((lesson) => lesson.grade !== null);

                                for (let i = 0; i < storedExGrades.length; i++) {
                                    for (let j = 0; j < serverExGrades.length; j++) {
                                        if (storedExGrades[i].code === serverExGrades[j].code && storedExGrades[i].grade !== serverExGrades[j].grade) {
                                            PushNotification.localNotification({
                                                title: "Νέα βαθμολογία", // (optional, for iOS this is only used in apple watch, the title will be the app name on other iOS devices)
                                                message: serverExGrades[j].title + ' ' + serverExGrades[j].grade.toString(), // (required)
                                                playSound: true, // (optional) default: true
                                                soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
                                            });
                                            LocalStorage.setGrades(serverGrades);
                                            LocalStorage.setRefreshGradesCond(true);
                                        }
                                    }
                                }
                            })
                        }
                    })
                }
            )
        }
    }
};

export {newGradeCheckJob, jobNames};