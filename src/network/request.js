import axios from 'axios'
//方法1
export function request(config) {
  //1-创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //2-axios的拦截器
  //拦截请求
  instance.interceptors.request.use(config => {
    return config         //拦截后再还回去，不然没数据了
  }), err => {
    //console.log(err)      //发送失败才会执行
  }
  //拦截响应
  instance.interceptors.response.use(res => {
    return res.data       //对响应的信进行过滤只取data信息
  }, err => {
    console.log(err)
  })

  //3-发送真正的网络请求
  return instance(config)  //这个返回值就是一个Promise
}
