const got = require('got');

const fetchJson = (url, callBackFunction) => {
    got(url).then((response) => {
        callBackFunction(JSON.parse(response.body));
    })
}

fetchJson('https://jsonplaceholder.typicode.com/todos', (response) => {
  console.log(response);
})

