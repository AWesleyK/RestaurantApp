const fetch = require('node-fetch');

fetch('https://api.ipify.org?format=json')
.then(res => res.json())
.then(json => console.log(json));
