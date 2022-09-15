const Github = require('./github');
const GithubApi = require('./githubApi')
describe('github', () => {
    test('fetch returns data', async() => {
        const api = new GithubApi;
        const github = new Github(api);
        await github.fetch('sinatra/sinatra')

        expect(github.getRepoData().id).toBe(106995)

        });

    });



