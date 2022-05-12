<template>
	<view>
		<my-login v-if="!token"></my-login>
		<my-usrinfo v-else>用户信息</my-usrinfo>
	</view>
</template>

<script>
	//从 vuex 中按需导入 mapState 辅助函数
//
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
