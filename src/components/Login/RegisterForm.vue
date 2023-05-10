<template>
    <ElForm class="register-form" ref="registerRef" :model="registerParam" :rules="registerRules">
        <h1 class="register-title">注册</h1>
        <ElFormItem prop="username">
            <ElInput placeholder="请输入账号" :prefix-icon="User" v-model="registerParam.username" size="large"></ElInput>
        </ElFormItem>
        <ElFormItem prop="password">
            <ElInput placeholder="请输入密码" show-password :prefix-icon="Lock" v-model="registerParam.password" size="large"></ElInput>
        </ElFormItem>
        <ElFormItem prop="email">
            <ElInput placeholder="请输入邮箱" :prefix-icon="Message" v-model="registerParam.email" size="large"></ElInput>
        </ElFormItem>
        <ElFormItem>
            <ElButton type="primary" class="register-btn" size="large" @click="submit(registerRef)">注册</ElButton>
        </ElFormItem>
    </ElForm>
</template>

<script setup lang="ts">
import { User, Lock, Message } from '@element-plus/icons-vue';
import { RegisterReq } from '@/interface/user';
import {reactive,ref} from 'vue'
import { FormInstance,FormRules } from 'element-plus';
const registerParam:RegisterReq=reactive({
    username:"",
    password:"",
    email:""
})
const registerRef=ref<FormInstance>()
const registerRules:FormRules=reactive({
    username:[{required:true,message:"账号不能为空",trigger:'blur'}],
    password:[{required:true,message:"密码不能为空",trigger:'blur'}
    ,{required:true,message:"密码是6~20位",min:6,max:20 ,trigger:'blur'}],
    email:[{required:true,message:"邮箱不能为空",trigger:'blur'}]
})
const submit=(formEl: FormInstance | undefined)=>{
    if(!formEl){
        return false
    }
    formEl.validate(async (validate:boolean)=>{
        if(validate){
            console.log("开始做注册的逻辑");
        }else{
            return false;
        }
    })
    }
</script>

<style scoped>
.register-form {
    grid-row: 1;
    grid-column: 1;
    opacity: 0;
    transition: 1s ease-in-out;
    /* 上下 | 左右 */
    padding: 1% 25%;
    z-index: 0;
}

.register-form.sign-up-model {
    opacity: 1;
    transition: 1s ease-in-out;
    transition-delay: 0.5s;
    z-index: 1;
}

.register-title{
    text-align: center;
    color: #444;
}
.register-btn{
    width: 100%;
    font-size: 18px;
}
</style>
