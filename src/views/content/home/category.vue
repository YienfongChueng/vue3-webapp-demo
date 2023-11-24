<template>
    <div class="nav bgwhite" >
        <ul>
            <li v-for="v in categoryData" :key="v.id">
            <img :src="`/src/assets/image/${v.img}`" />
            <p>{{v.title}}</p>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { categoryData } from '@/utils/common.js'

</script>