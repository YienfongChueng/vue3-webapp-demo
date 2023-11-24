import { defineStore } from 'pinia'

export const useBaseStore = defineStore('base',{
    state: ()=> {
        return {
            isShowNav:true, //底部导航显示或隐藏
        }
    }

})