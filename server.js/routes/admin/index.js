module.exports = function(app){

const express = require('express')
const router = express.Router({
    // 合并url参数
 mergeParams:true
})

// 写通用接口，不再单独引入模块
// const   Category  = require('../../models.js/Category')

router.post('/',async (req,res)=>{
    console.log(req.Model)
    const model = await req.Model.create(req.body)
    res.send(model)
})
router.put('/:id',async (req,res)=>{
   await req.Model.findByIdAndUpdate(req.params.id,req.body)
    res.send({
        success:true
    })
})
router.delete('/:id',async (req,res)=>{
    const model = await req.Model.findByIdAndDelete(req.params.id,req.body)
    res.send(model)
})
router.get('/',async (req,res)=>{
    // 特别的路由需求需要判断
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(10)
    res.send(items)
})
router.get('/:id',async (req,res)=>{
    const model = await req.Model.findById(req.params.id)
    res.send(model)
})
// ??
app.use('/admin/api/rest/:resource',async(req,res,next)=>{
// inflection插件将复数小写转化为大写类型名
const modelName = require('inflection').classify(req.params.resource)
req.Model = require(`../../models.js/${modelName}`)
next()
},router)    
}