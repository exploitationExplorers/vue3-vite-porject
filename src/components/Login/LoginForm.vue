<template>
    <ElForm class="login-form" ref="loginRef" :model="loginParam" :rules="loginRules">
        <h1 class="login-title">登录</h1>
        <ElFormItem prop="username">
            <ElInput placeholder="请输入账号" :prefix-icon="User" v-model="loginParam.username" size="large"></ElInput>
        </ElFormItem>
        <ElFormItem prop="password">
            <ElInput placeholder="请输入密码" show-password :prefix-icon="Lock" v-model="loginParam.password" size="large"></ElInput>
        </ElFormItem>
        <ElFormItem>
            <ElButton type="primary" class="login-btn" size="large" @click="submit(loginRef)">登录</ElButton>
        </ElFormItem>
    </ElForm>
</template>

<script setup lang="ts">
import { User ,Lock} from '@element-plus/icons-vue';
import { LoginReq } from '@/interface/user'; 
import {reactive,ref} from 'vue'
import { FormInstance,FormRules } from 'element-plus';
const loginParam:LoginReq=reactive({
    username:"",
    password:""
})

const loginRef=ref<FormInstance>()
const loginRules:FormRules=reactive({
    username:[{required:true,message:"账号不能为空",trigger:'blur'}],
    password:[{required:true,message:"密码不能为空",trigger:'blur'}]
})
const submit=(formEl: FormInstance | undefined)=>{
    if(!formEl){
        return false
    }
    formEl.validate(async(validate:boolean)=>{
        if(validate){
            console.log("开始做登录的逻辑");            
        }else{
            return false;
        }
    })
}
</script>

<style scoped>
.login-form{
    grid-column: 1;
    grid-row: 1;
    opacity: 1;
    transition: 1s ease-in-out;
    transition-delay: 0.5s;
    /* 上下 | 左右 */
    padding: 1% 25%;
    z-index: 1;
}
.login-form.sign-up-model{
    opacity: 0;
    transition: 1s ease-in-out;
    z-index: 0;
}
.login-title{
    text-align: center;
    color:#444;
}
.login-btn{
    width: 100%;
    font-size: 18px;
}
</style>
