const express = require('express')

const app = express()
//处理跨域
app.use(require('cors')())
// 处理post？
app.use(express.json())
// 开放静态资源
app.use('/uploads',express.static(__dirname+'/uploads'))

require('./plugins/db')(app)
require('./routes/admin/index')(app)



app.listen(3000,function(){
    console.log('服务器启动')
})