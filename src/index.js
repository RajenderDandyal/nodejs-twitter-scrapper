const puppeteer = require('puppeteer');
const twitter = require('./twitter');

(async () => {
  
  const USERNAME = 'RajenderDandyal';
  const PASSWORD = 'Hello';
  
  await twitter.initialize();
  
  //let tweets = await twitter.getTweets('altumcode', 50);

  await twitter.login(USERNAME, PASSWORD);
  debugger
  // let details = await twitter.getUser('Udemy');

  // await twitter.postTweet('Hello world, this is just a test message.');


  // await browser.close();

})();