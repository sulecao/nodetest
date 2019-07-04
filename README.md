# nodetest



用id关联父子级关系，水平存储各个 数据，而不是嵌套数据结构存储。
子级关联父级的名称，通过id查询对应的中文名，而不是直接存储父级名。这样更改中文名就只要改一次即可，不用每个数据都去改对应的父级名称。

通过设置路由路径和中间件处理函数，对路径拦截加载对应的数据模型，写出通用的crud接口。

```
app.use('/admin/api/rest/:resource',async(req,res,next)=>{
// inflection插件将复数小写转化为大写类型名
const modelName = require('inflection').classify(req.params.resource)
将获得的模块挂载到req产数上，后面每个路由都可以使用
req.Model = require(`../../models.js/${modelName}`)
next()
},router)    
}
```