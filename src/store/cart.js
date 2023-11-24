import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart',{
    state:()=> {
        return {
            cartList: []
        }
    },
    getters: {
        //总数量
        totalCount:(state) => {
            return state.cartList.reduce((total,cur) => total + cur.count,0 )
        },
        //总金额
        totalAmount:(state) => {
            return state.cartList.reduce((total,cur) => total + cur.count * cur.product_uprice, 0).toFixed(2)
        }
    },
    actions: {
        addItem(item) {
            //去重判断
            if(this.cartList.length > 0) {
                const rep = this.cartList.filter(v => v.product_id === item.product_id)
                if(rep.length > 0) {
                    rep[0].count +=1
                    return
                }else {
                    this.cartList.push(item)
                }
            } else {
                this.cartList.push(item)
            }
        },
        delItem(item) {
            this.cartList = this.cartList.filter(v => v.product_id !== item.product_id)
        }
    },
    persist: {
        enabled:true, // 开启
        strategies: [
            {
                key: 'cart', //默认当前 Store的id
                storage: sessionStorage, //存储的方式
                paths: ['cartList'] //可以选择持久化的的字段
            }
        ]
    }
})