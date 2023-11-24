<template>
    <div class="c-wrap bgwhite">
        <ul>
            <li v-for="v in listData" :key="v.product_id">
            <div class="c-wrap-img">
                <router-link :to="`/detail/${v.product_id}`">
                    <img :src="v.product_img_url"/>
                </router-link>
                <h4>{{v.product_name}}</h4>
                <div class="c-wrap-info">
                    <i class="red line-through">￥<span>{{v.product_price}}</span></i>
                    <i>￥</i>
                    <b>{{v.product_uprice}}</b>
                    <span class="shoppingCart" @click="addProduct(v)">
                        <i class="iconfont icon-gouwuche"></i>
                    </span>
                </div>
            </div>
            </li>
        </ul>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import { useCartStore } from '@/store/cart'
const myCartStore = useCartStore()

const {listData} = defineProps({
    listData: {
        type:Array,
        default: ()=>[{}]
    }
})
const addProduct = (item) => {
    myCartStore.addItem({...item,count:1})
}
</script>