export default {
  // 开启命名空间
  namespaced: true,

  // state 数据
  state: () => ({
    // 收货地址

    // 登录成功之后的 token 字符串
    token: '',
	//用户的信息对象
	userinfo:JSON.parse(uni.getStorageSync('userinfo')||'{}')
  }),
  mutations:{  
	updateUserinfo(state,userinfo){
	  state.userinfo = userinfo
	  this.commit('m_user/saveUserInfoToStorage')
  },
	saveUserInfoToStorage(state){
	  uni.setStorageSync('userinfo',JSON.stringify((state.userinfo)))
  }
}

  // 省略其它代码
}