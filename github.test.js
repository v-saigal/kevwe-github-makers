const Github = require('./github');
const GithubApi = require('./githubApi')

describe('Github', () => {
    test('', () => {
        const api = new GithubApi;
        const github = new Github(api);

        github.fetch('sinatra/sinatra');
        let result = github.getRepoData();
        expect(result).toContain({id:8312});
    });


});
