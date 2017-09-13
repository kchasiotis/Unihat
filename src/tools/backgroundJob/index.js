import {AsyncStorage} from 'react-native'
import Crawler from '../crawler'
import credentialStorage from '../credentialStorage'

let PushNotification = require('react-native-push-notification');
let crawler = new Crawler();

const jobNames = {newGradeCheck: {wifi: 'newGradeCheckWifi', mobile: 'newGradeCheckMobile'}};

const newGradeCheckJob = (jobName) => {
    return {
        jobKey: jobName,
        job: () => {
            credentialStorage.load((username, password) => {
                    crawler.fetchPage(username, password, (logged, serverGrades) => {
                        if (logged) {
                            AsyncStorage.getItem('grades', (err, storedGrades) => {
                                if (err) {
                                    console.log(err);
                                    return;
                                }

                                let storedExGrades = JSON.parse(storedGrades).exGrades;
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
                                            AsyncStorage.setItem('grades', JSON.stringify(serverGrades));
                                            AsyncStorage.setItem('refresh', JSON.stringify({shouldRefresh: true}));
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