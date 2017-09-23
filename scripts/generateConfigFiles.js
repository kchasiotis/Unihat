let fs = require('fs');

if (!fs.existsSync("./src/tools/crawler/icarusCrawler/.user.js")) {
    fs.writeFile("./src/tools/crawler/icarusCrawler/.user.js", "export default user = {username:'', password:''}", function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
}


if (!fs.existsSync("./src/tools/crawler/sefCrawler/.user.js")) {
    fs.writeFile("./src/tools/crawler/sefCrawler/.user.js", "export default user = {username:'', password:''}", function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
}


if (!fs.existsSync("./src/tools/api/.config.js")) {
    fs.writeFile("./src/tools/api/.config.js", "export default config = {serverUrl: 'http://192.168.1.12:3000/lesson'}", function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
}


