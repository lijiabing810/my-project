<template>
  <div class="login-warp">
		<div class="login-content">
			 <h1 class="login-title">调试系统维护中心</h1>
      <el-form ref="form" :model="form"  class="login-form">
       <el-form-item >
        <el-input v-model="form.name"><i slot="prepend" class="el-icon-user-solid"></i></el-input>
       	</el-form-item>
       	<el-form-item >
        <el-input v-model="form.name"> <i slot="prepend" class="el-icon-lock"></i></el-input>
       	</el-form-item>
       	<el-form-item >
 				<el-button type="primary" @click="loginSubmit" class="login-submit-btn">登录</el-button>
      	</el-form-item>
     	</el-form> 
		</div>
  </div>
</template>

<script>
export default {
    data(){
    	return {
				form:{
					userName:"",
					password:"",
				}

        }
    },
		methods:{
			loginSubmit(){
        this.$router.push({
					name:"home",
					query:{
						id:"登录成功"
					}
				})
			}
		}

}
</script>

<style  scoped>
  .login-warp{
		background:url('../../assets/imgs/login-bc.png') no-repeat center center;
		background-size:cover;
    background-attachment:fixed;
    background-color: #CCCCCC;
		height: 100vh;
		position: relative;
	}
	.login-content{
    position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		right: 0px;
		background: white;
		border-radius: 10px;
		padding: 20px;
		width: 400px;
	}
	.login-title{
		text-align: center;
	}
	.login-form{
	
	
	}
	.login-submit{
		display: flex;
		justify-content: space-around;
	}
	.login-submit-btn{
		width: 100%;
	}
</style>