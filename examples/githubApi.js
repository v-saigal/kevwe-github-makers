const got = require('got');
class GithubApi{

      async fetchRepositoryInfo(urlEnd) {
        const url = 'https://api.github.com/repos/' + urlEnd;
        const response = await got(url);
        return JSON.parse(response.body);
        }

    }

module.exports = GithubApi;
