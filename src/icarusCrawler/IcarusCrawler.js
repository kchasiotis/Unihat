let cheerio = require('cheerio-without-node-native');
let axios = require('axios');
let iconv = require('iconv-lite');
// import cheerio from 'cheerio';

export default class IcarusCrawler {
    static fetchPage(onLoad) {
        axios.interceptors.response.use(function (response) {
            var ctype: string = response.headers["content-type"];
            response.data = ctype.includes("charset=iso-8859-7") ?
                iconv.decode(response.data, 'gb2312') :
                iconv.decode(response.data, 'utf-8');
            return response;
        });

        axios({
            url: 'https://icarus-icsd.aegean.gr/authentication.php',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: JSON.stringify({
                username: 'icsd11175',
                pwd: 'G#4jfczsu',
            })
        }).then(function (response) {
            let text = response.data;
            // console.log('webpage2\n ' + text);
            // console.log('aaaa');
            // console.log('Ελληνικά');
            let $ = cheerio.load(text, {decodeEntities: false});

            // $.html();
            console.log('sdf\n ' + $.html());
            console.log('-----------');
            console.log('msgsdf\n ' + $('#header_login_msg').html());
            onLoad($('#header_login_msg').html());

        });

    }

    static fetchPage2(onLoad) {

        fetch('https://icarus-icsd.aegean.gr/authentication.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                username: 'icsd11175',
                pwd: 'G#4jfczsu',
            })
        })
            .then(function (response) {
                // console.log('sdf2\n ' + response.status);
                response.text().then(function (text) {
                    // console.log('webpage2\n ' + text);
                    // console.log('aaaa');
                    // console.log('Ελληνικά');
                    let $ = cheerio.load(text, {decodeEntities: false});

                    // $.html();
                    console.log('sdf\n ' + $.html());
                    console.log('-----------');
                    console.log('msgsdf\n ' + $('#header_login_msg').html());
                    onLoad($('#header_login_msg').html());

                });
            });

    }
}