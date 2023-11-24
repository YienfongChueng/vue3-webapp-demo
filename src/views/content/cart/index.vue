<template>
    <div class="basket main">
        <ul>
            <li v-for="v in cartList" :key="v.product_id">
            <div class="basket-img">
                <img :src="v.product_img_url"/>
            </div>
            <div class="basket-list">
                <span>{{ v.product_name }}</span>
                <span>￥{{ v.product_uprice }}</span>
                <span>数量：{{ v.count }}</span>
            </div>
            </li>
        </ul>
        <div class="basket-total">
        共计：<span>{{totalAmount}}</span>元
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import { useCartStore } from '@/store/cart'
import { storeToRefs } from 'pinia'
const muCartStore = useCartStore()
const { cartList, totalAmount } = storeToRefs(muCartStore)
</script>