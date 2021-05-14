import express from 'express';
import { createClient } from 'redis';

const app = express()
const client = createClient({
	host: 'redis-server',
	port: 6379
})

client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visits is: ' + visits + 1)
        client.set('visits', parseInt(visits) + 1)
    })
})

app.listen(8081, ()=>{
    console.log('Listening on port 8081')
})
