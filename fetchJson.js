const got = require('got')


const fetchJson = (url, callbackFunction) => {
    got(url).then((response) =>{
        let responseObject = JSON.parse(response.body);
        callbackFunction(responseObject)

    });


}

fetchJson('https://jsonplaceholder.typicode.com/todos', (response) => {
  console.log(response);
})
