const request = require('request');
const cheerio = require('cheerio');

const url = 'https://www.google.com.tw/?hl=zh_TW';

request(url, function(error, response, html) {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    const title = $('title').text();
    console.log(title);
  }
});