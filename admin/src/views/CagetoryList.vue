<template>
  <div class="">
      <h1>分类列表</h1>
   <el-table :data="items">
        <el-table-column prop="_id" label="ID" width="220">
        </el-table-column>
        <el-table-column prop="parent.name" label="上级分类" width="220">
        </el-table-column>
        <el-table-column prop="name" label="分类名称" >
        </el-table-column>
        <el-table-column prop="name" label="操作" >
            <template slot-scope="scope">
        <el-button @click="$router.push(`/categories/edit/${scope.row._id}`)" type="text" size="small">编辑</el-button>
         <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
      </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
        items:[]
    }
  },
  created(){
this.fetch()
  },
  methods:{
      async fetch(){
         const res = await this.$http.get('categories')
         this.items = res.data
        
      },
      async remove(row){
           this.$confirm(`此操作将删除分类${row.name}, 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async() => {
            const res = await this.$http.delete(`categories/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.fetch()
        });
 
      }
  }
 }
</script>

<style lang="less" scoped>

</style>