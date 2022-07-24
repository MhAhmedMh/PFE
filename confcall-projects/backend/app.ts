
import {app as callController} from './controllers/CallController';
import { SERVER_PORT, OPENVIDU_URL, OPENVIDU_SECRET, CALL_OPENVIDU_CERTTYPE } from './config';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv/config');
var bodyParser = require('body-parser');

//dbConnection
require('./app/config/dbConnection');

//routes definition
const api = process.env.API_URL;
const usersRoutes = require('./routes/users');
const teamsRoutes = require('./routes/teams');

//Initialize the app
const app = express();

//middleware
app.use(cors());
app.options('*', cors());

// app.use(authJwt());
app.use('/api/v1/uploads', express.static('uploads'));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/uploads', express.static(__dirname + '/uploads'));
//routes
app.use(`${api}/teams`, teamsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use('/call', callController);

// Accept selfsigned certificates if CALL_OPENVIDU_CERTTYPE=selfsigned
if (CALL_OPENVIDU_CERTTYPE === 'selfsigned') {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
}

app.listen(SERVER_PORT, () => {
    console.log("---------------------------------------------------------");
    console.log(" ")
    console.log(`OPENVIDU URL: ${OPENVIDU_URL}`);
    console.log(`OPENVIDU SECRET: ${OPENVIDU_SECRET}`);
    console.log(`CALL OPENVIDU CERTTYPE: ${CALL_OPENVIDU_CERTTYPE}`);
    console.log(`OpenVidu Call Server is listening on port ${SERVER_PORT}`);
    console.log(" ")
    console.log("---------------------------------------------------------");
});