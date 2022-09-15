const got = require('got');

const handleReceivedResponse = (response) => {
    const stringResponse = response.body;
    const objectResponse = JSON.parse(stringResponse);

    console.log(objectResponse);
}


