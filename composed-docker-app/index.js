const express = require('express')
const redis = require('redis')

const app = express()
const client = redis.createClient({
	host: 'redis-db',
	port: 6379
})

client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        client.set('visits', parseInt(visits) + 1)
        res.send('Number of visits is: ' + visits)
    })
})

app.listen(8081, ()=>{
    console.log('Listening on port 8081')
})
