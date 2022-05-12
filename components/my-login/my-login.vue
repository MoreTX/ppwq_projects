<template>
	<view>
		  <view class="login-container">
		    <!-- 提示登录的图标 -->
		    <uni-icons type="contact-filled" size="100" color="#AFAFAF"></uni-icons>
		    
			<!-- 登录按钮 -->
			<!-- #ifdef MP-WEIXIN -->
			<button type="primary" class="btn-login" @click="getUserProfile" >一键登录</button>
			<!-- #endif -->
			<!-- #ifndef MP-WEIXIN -->
			<button type="primary" class="btn-login" open-type="getUserInfo" @getuserinfo="getUserinfo()">一键登录</button>
			<!-- #endif -->
		    
			<!-- 登录提示 -->
		    <view class="tips-text">登录后尽享更多权益</view>
		  </view>
	</view>
</template>

<script>
	import {mapMutations} from "vuex"
	export default {
		name:"my-login",
		data() {
			return {
				
			};
		},
		methods:{
			...mapMutations('m_user',['updateUserinfo']),
			 // 获取微信用户的基本信息
			  getUserinfo(e) {
			    // 判断是否获取用户信息成功
			    if (e.detail.errMsg === 'getUserInfo:fail auth deny') return uni.$showMsg('您取消了登录授权！')
			
			    // 获取用户信息成功， e.detail.userInfo 就是用户的基本信息
			    console.log(e.detail.userInfo)
			  },
			    getUserProfile(e) {
			      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
			      // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
			      uni.getUserProfile({
			        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
			        //调用成功之后的回调函数
					success: (res) => {
						console.log(res)
						this.updateUserinfo(res.userInfo)
			        },
					fail() {
						uni.$showMsg('您取消了登录授权！')
					}
			      })
			    }
		}
	}
</script>

<style lang="scss">
.login-container {
  // 登录盒子的样式
  height: 750rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  position: relative;
  overflow: hidden;

  // 绘制登录盒子底部的半椭圆造型
  &::after {
    content: ' ';
    display: block;
    position: absolute;
    width: 100%;
    height: 40px;
    left: 0;
    bottom: 0;
    background-color: white;
    border-radius: 100%;
    transform: translateY(50%);
  }

  // 登录按钮的样式
  .btn-login {
    width: 90%;
    border-radius: 100px;
    margin: 25px 0;
    background-color: #c00000;
  }

  // 按钮下方提示消息的样式
  .tips-text {
    font-size: 12px;
    color: gray;
  }
}
</style>