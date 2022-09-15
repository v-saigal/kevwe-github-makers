class Github{
    constructor(api){
        this.api = api;
        this.repoData = null;
    }

    fetch(url){
        this.api.fetchRepositoryInfo(url, (reponse) =>{
            this.repoData = reponse;
        });
        console.log('===========================')
        console.log(this.repoData)

    }

    setRepositoryData(value){
        this.repoData = value;
    }

    getRepoData(){
        return this.repoData;
    }
}

module.exports = Github;
