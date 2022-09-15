const GithubApi = require('./githubApi');

class Github{
    constructor(api){
        this.githubApi = api;
        this._repoData = {};
    };
        async fetch(urlEnd){
        this._repoData = await this.githubApi.fetchRepositoryInfo(urlEnd);

    }
    // setRepoData(value){
    //     this._repoData = value;
    // }
    getRepoData(){
        return this._repoData
    }
}const api = new GithubApi;
const gh = new Github(api);
gh.fetch('sinatra/sinatra');
console.log(gh.getRepoData());


module.exports = Github;

