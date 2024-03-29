### Testing
https://formidable.com/blog/2016/02/08/unit-testing-react-native-with-mocha-and-enzyme/
http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/

# Error solutions

## Error: Solve bridge connection problem
```bash
react-native run-android
react-native start --reset-cache
```

## Error: react native com.android.dex.DexException: Multiple dex files define
```bash
cd android && ./gradlew clean
```

## Watchman limits
```bash
echo 256 | sudo tee -a /proc/sys/fs/inotify/max_user_instances
echo 32768 | sudo tee -a /proc/sys/fs/inotify/max_queued_events
echo 65536 | sudo tee -a /proc/sys/fs/inotify/max_user_watches
watchman shutdown-server
```

# Useful links
## Chart components
https://github.com/FormidableLabs/victory-native
https://github.com/FormidableLabs/victory
https://github.com/tomauty/react-native-chart
https://github.com/capitalone/react-native-pathjs-charts
https://github.com/wuxudong/react-native-charts-wrapper

## Login components
https://github.com/ryanmcdermott/react-native-login
https://github.com/dwicao/react-native-login-screen

# Better listviews
https://facebook.github.io/react-native/blog/2017/03/13/better-list-views.html

# Useful commands
```bash
react-native unlink $package

react-native-git-upgrade

react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/ && cd android && ./gradlew assembleRelease
```

## Clean project
```bash
rm -rf node_modules && npm install
cd android && ./gradlew clean
```
