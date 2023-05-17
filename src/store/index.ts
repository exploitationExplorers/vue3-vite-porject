import { defineStore } from "pinia";

import {Name} from './store-name'

import { getApiList } from "@/api";

import type{Children} from './type'

type User = {
    name: string,
    age: number
}

// let result: User = {
//     name: '张三',
//     age:  123
// }

const Login= ():Promise<User>=> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                name: '李四',
                age: 13
            })
        },2000)
    })
}


export const userTestStore = defineStore(Name.TEST,{
    state:()=>{
        return {
            curret:1,
            name: '小明',
           
            user:<User>{}
        }
    },
    getters:{
        newName():string {
            return `${this.name}`
        }
    },
    actions: {
        setcurrent(){
            this.curret = 99
        },
        // setUser(){
        //     this.user = result
        // },
        async setUser(){
            const result = await Login()
            this.user = result
            this.setName('王五')
        },
        setName(name:string){
            this.name = name
        }
    }
    // methods 可以做同步 也可以做异步 提交state
})

const Logins = ():Promise<User> =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                name: 'zhangsang',
                age: 23
            })
        },2000)
    })
}

export const testStore = defineStore('test',{
    state:()=>{
        return {
            list: {
                a:  {
                    c:1
                }
            },
            user:<User>{}
        }
    },

    actions: {
        async changeLogins(){
            let result = await Logins()
            this.user = result
        }
    }
})

export const userCounterStore = defineStore({
    id: 'counter',
    state: ()=> ({
        list: {},
        item:<Children[]>[],
    }),

    actions: {
        async getList(){
            const result = await getApiList()
            console.log(result);
            
        }
    }

})