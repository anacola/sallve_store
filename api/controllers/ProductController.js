const database = require('../models')
const { QueryTypes } = require('sequelize');
const SkuController = require('./SkuController');

class ProductController{
    static async showAllProducts(req, res){
        try {
            const allProducts = await database.Product.findAll()
            console.log(allProducts)
            return res.status(200).json(allProducts)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }



    static async showOneProduct(req, res){
        const { id } = req.params
        try {
            const oneProduct = await database.Product.findOne( {
                where: { 
                    id: Number(id) 
                }
            })
            return res.status(200).json(oneProduct)

        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async createProduct(req, res){
        const newProduct = req.body
        try {
            const creatNewProduct = await database.Product.create(newProduct)
            return res.status(200).json(creatNewProduct)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async updateProduct(req, res){
        const newInfos = req.body
        const { id } = req.params
        try{
            await database.Product.update(newInfos, { where: { id: Number(id) }})
            const updatedProduct = await database.Product.findOne({where: { id: Number(id) }})
            return res.status(200).json(updatedProduct)

        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async deleteProduct(req, res){
        const { id } = req.params
        try{
            await database.Product.destroy({ where: { id: Number(id) }})
            return res.status(200).json({mensagem: `id ${id} foi deletado`})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }
    
    static async getOneProduct(req, res){
        try {
            const pega = await database.Product.findAll({
                raw: true,
                attributes: attributes,
                include:[{
                    model: database.sku,
                    required: true,
                    attributes: ['ProductId'],
                }],
            })
            console.log(pega)
            return res.status(200).json(pega)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }


}


module.exports = ProductController