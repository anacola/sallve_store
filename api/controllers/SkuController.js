
const database = require('../models')

class SkuController{
    static async showAllSkus(req, res){
        try {
            const allSkus = await database.Sku.findAll()
            return res.status(200).json(allSkus)
        } catch(error){
            res.status(500).json(error.message)
        }
    }

    static async showOneSku(req, res){
        const { sku } = req.params
        try {
            const oneSku = await database.Sku.findByPk(sku)
            return res.status(200).json(oneSku)

        } catch (error){
            return res.status(500).json(error.message)
        }
    }

   
}

module.exports = SkuController

