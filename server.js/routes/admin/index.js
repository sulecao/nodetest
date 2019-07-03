module.exports = function(app){

const express = require('express')
const router = express.Router()

const   Category  = require('../../models.js/Category')
console.log(Category)
router.post('/categories',async (req,res)=>{
    const model = await Category.create(req.body)
    res.send(model)
})
router.put('/categories/:id',async (req,res)=>{
   await Category.findByIdAndUpdate(req.params.id,req.body)
    res.send({
        success:true
    })
})
router.delete('/categories/:id',async (req,res)=>{
    const model = await Category.findByIdAndDelete(req.params.id,req.body)
    res.send(model)
})
router.get('/categories',async (req,res)=>{
    const items = await Category.find().populate('parent').limit(10)
    res.send(items)
})
router.get('/categories/:id',async (req,res)=>{
    const model = await Category.findById(req.params.id)
    res.send(model)
})
// ??
app.use('/admin/api',router)    
}