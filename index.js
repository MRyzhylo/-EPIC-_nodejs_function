
const request = require("request");

const options = {
    method: 'GET',
    url: 'https://api.trello.com/1/members/mryzhylo/cards',
    qs: {
        json: true,
        filter: 'all',
        key: 'cfcc3b3e399c10cedb3b8ff3053624b2',
        token: '7c7caa6513248502b1b89e9c9fba45d1c9a6bd308b5e074e7e64ad50e3affa14'
    }
};

function callback(error, response, body) {
    if (error) { return console.log(error); }

    const info = JSON.parse(body);
    
    function findCard(info) {
        let taskName = '[EPIC] nodejs function';
        if (info.name === taskName) {
            return {}
        } else {
            return false
        }
    }

    let card = info.find(findCard);
    console.log(card.desc);
    
}

request(options, callback);
