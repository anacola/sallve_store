const bodyParser = require('body-parser')
const express = require('express')
const route = require('./route')
const cors = require('cors')


module.exports = app => {
    app.use(bodyParser.json())
    app.use(express.json())
    app.use(cors());
    app.use(route)

}