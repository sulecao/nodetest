const express = require('express')

const app = express()
//处理跨域
app.use(require('cors')())
// 处理post？
app.use(express.json())


require('./plugins/db')(app)
require('./routes/admin/index')(app)



app.listen(3000,function(){
    console.log('服务器启动')
})