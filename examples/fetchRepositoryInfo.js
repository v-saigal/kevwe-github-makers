const got = require('got');


const fetchRepositoryInfo = (urlEnd, callBackFunction) => {
    const url = 'https://api.github.com/repos/' + urlEnd;
    got(url).then((response) => {
        callBackFunction(JSON.parse(response.body));
    })

}

// fetchRepositoryInfo('sinatra/sinatra', (receivedResponse) => {
//     console.log(receivedResponse);
//   });
