const got = require('got');



class GithubApi{

    async fetchRepositoryInfo = (urlEnd) =>{
        const url = 'https://api.github.com/repos/'+urlEnd
        got(url).then((response)=>{
            console.log(response.body)
            callbackFunction(JSON.parse(response.body));
        });
    }
}
// fetchRepositoryInfo('sinatra/sinatra', (receivedResponse)=>{
//     console.log(receivedResponse);
// })
// }

// const api = new GithubApi();

// api.fetchRepositoryInfo('sinatra/sinatra', (repositoryData) => {
//   console.log(repositoryData);
// });
module.exports = GithubApi;
