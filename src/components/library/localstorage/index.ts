import { StorageCls,Key,expire,Data,Result } from "./type";

import { Dictionaries } from "./enum";

export class Storage implements StorageCls {
    public set<T = any>(key:Key,value:T,expire:expire=Dictionaries.permanent){
        const data = {
            value,
            [Dictionaries.expire]:expire
        }

        localStorage.setItem(key,JSON.stringify(data))
    }
    public get<T = any>(key:Key):Result<T | null> {
        const value = localStorage.getItem(key)
        if(value){
            const obj: Data<T> = JSON.parse(value)
            const now = new Date().getTime()

            if(typeof obj[Dictionaries.expire] == 'number'  &&obj[Dictionaries.expire] < now) {
                this.remove(key)
                return {
                    message:`您的${key}已过期`,
                    value:null
                 }
            }
            else {
                return {
                    message:"成功读取",
                    value: obj.value
                }
            }
        }
        else {
             //否则key值无效
             console.warn('key值无效')
             return {
                 message:`key值无效`,
                 value:null
              }
        }
    } 

    public remove(key: Key) {
        localStorage.removeItem(key)
    }
    //清空所有值
    public clear() {
        localStorage.clear()
     }
}