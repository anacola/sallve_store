const bodyParser = require('body-parser')
const products = require('./productsRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(products)
}