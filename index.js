const request = require('request');

const options = {
    method: 'GET',
    url: 'https://api.trello.com/1/members/mryzhylo/cards',
    qs: {
        json: true,
        filter: 'visible',
        key: 'cfcc3b3e399c10cedb3b8ff3053624b2',
        token: '7c7caa6513248502b1b89e9c9fba45d1c9a6bd308b5e074e7e64ad50e3affa14'
    }
};


request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log(body);
  });
