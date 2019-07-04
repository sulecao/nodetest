import axios from 'axios'
// 可以使用自定义配置新建一个 axios 实例
const http = axios.create({
    baseURL: 'http://localhost:3000/admin/api',
  });

  export default http