const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host:'redis-server',
    port:6379 //default port number
});

client.set('visits', 0 );

app.get('/', (req, res) => {
    client.get('visits',(err,visits)=>{ res.send('Number of Vistors : ' + visits);
    client.set('visits',parseInt(visits)+1);});
 });

app.listen(8083, () => {
  console.log('Listening on port 8083');
});
