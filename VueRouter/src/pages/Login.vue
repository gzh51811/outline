<template>
  <div>
    <h1>登录</h1>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }
        ]
      }
    }
  },
  methods:{
      login(){
          this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            // 保存用户名密
            localStorage.setItem('username',this.ruleForm.username);

            // this.$router.push('/home');
            if(this.$route.params.from){
                this.$router.push(this.$route.params.from);
            }else{
                this.$router.push('/home');
            }


          } else {
            return false;
          }
        });
      }
  },
//   created(){
//       let username = localStorage.getItem('username')
//       if(username){
//           this.$router.push('/home')
//       }
//   }
//   beforeRouteUpdate(to,from,next){
//       console.log('login:',to,from,next)
//       next();
//   }
}
</script>
