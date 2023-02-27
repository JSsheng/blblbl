import axios from 'axios'
import store from '../store'
import router from '../router'

// 设置请求拦截器
axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = store.state.token
    return config // 处理完后返回，然后向后端发送请求
  },
  (error) => {
    // 错误执行的代码
    return Promise.reject(error)
  }
)

// 定义响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 响应状态码为 2xx 时触发成功的回调
    return response
  },
  function (error) {
    // 响应状态码不是 2xx 时触发失败的回调
    if (error.response.status === 401) {
      // 无效的 token
      // 把 Vuex 中的 token 重置为空，并跳转到登录页面
      // 1.清空token
      store.commit('updateToken', '')
      // 2.跳转登录页
      router.push('/login')
    }
    return Promise.reject(error)
  }
)
