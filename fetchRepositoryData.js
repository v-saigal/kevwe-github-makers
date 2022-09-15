const got = require('got');




const fetchRepositoryInfo = (urlEnd, callbackFunction) =>{
    const url = 'https://api.github.com/repos/'+urlEnd
    got(url).then((response)=>{
        callbackFunction(JSON.parse(response.body));
    });
}

fetchRepositoryInfo('sinatra/sinatra', (receivedResponse)=>{
    console.log(receivedResponse);
})
