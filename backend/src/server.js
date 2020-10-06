const express = require('express')
const cors = require('cors');
const app = express();
const server = require('http').Server(app);
const routes = require('./routes')

app.use(express.json());
app.use(cors());
app.use(routes)

server.listen(4003);
