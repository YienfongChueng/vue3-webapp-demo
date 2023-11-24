<template>
    <div class="footer-seat">
        <div class="footer-lists">
            <ul>
                <li v-for="v in navTabData" :key="v.path">
                    <router-link :to="v.path" active-class="selected">
                        <i :class="['iconfont',v.icon]"></i>
                        <span>{{v.title}}</span>
                    </router-link>
                    <span class="count" v-show="v.path === '/cart'">{{totalCount}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { navTabData } from '@/utils/common.js'
import { useCartStore } from '@/store/cart'
import { storeToRefs } from 'pinia'
const myCartStore = useCartStore()
const { totalCount } = storeToRefs(myCartStore)
</script>