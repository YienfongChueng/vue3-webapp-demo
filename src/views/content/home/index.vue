<template>
    <div class="main ">
        <Category />
        <List :listData="data"/>
        
    </div>
</template>
<script setup>
import Category from './category.vue'
import List from  './list.vue'
import { ref,onMounted } from 'vue'
import { apiGetList } from '@/api'
let data = ref([])
onMounted(async() => {
    const res = await apiGetList({page:1,pageSize:10})
    data.value = res.data.data
})
</script>