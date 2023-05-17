<template>
  <div class="data-page">
   <header>
     <h1>大数据可视化页面</h1>
     <h1>{{ Test.name }}</h1>
     <h1>{{ Test.curret }}</h1>
     <h1>{{ Test.user }}</h1>
     <h1>{{ Test.newName }}</h1>
     <h1>{{ Test1.list.a.c }}</h1>
     <h1>{{ Test1.user }}</h1>
     <button @click="change">change</button>
     <button @click="reset">reset</button>
   </header>
  </div>
</template>

<script setup lang="ts">
import { userTestStore } from '@/store';

import { testStore } from '@/store';
const Test = userTestStore()
 
const Test1 = testStore()

const change = () =>{
  Test1.list.a.c ++
  //1  Test.curret ++
  // 2 Test.$patch({
  //   name: '张三',
  //   curret:  3434
  // })
  //3
  //  Test.$patch((state)=>{
  //   state.curret = 233
  //   state.name = '李四'
  // })
  //4  缺点是需要修改全部的值
  // Test.$state = {
  //   curret: 23,
  //   name: 'avc'
  // }
  //5
  Test.setcurrent()
  Test.setUser()
  Test1.changeLogins()
}

const reset =()=>{
  Test.$reset()
  Test1.$reset()
}

Test.$subscribe((args,state)=>{
  console.log(args,'args');
  console.log(state);
  
})
Test1.$subscribe((arg)=>{
  console.log(arg,'test1');
  
})
</script>

<style>
.data-page  {
    background: url("@/assets/1.jpg") top center no-repeat;
    width: 100%;
    height:800px
}
</style>
