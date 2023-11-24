<template>
    <div class="details">
       <div class="other-header">
            <button class="go-back" @click="back">返回</button>
        </div>
        <div class="other-title">
            <div class="title-text" v-for="v in detailInfo" :key="v.product_id">
                <img :src="v.product_img_url" alt="" />
                <p><i>￥</i>{{ v.product_uprice }}</p>
                <p>{{ v.product_name }}</p>
                <p>{{ v.product_detail }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref,onMounted,onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { apiGetDetail } from '@/api'
import { useBaseStore } from '@/store/base'
const myBaseStore = useBaseStore()
const route = useRoute()
const router = useRouter()
let detailInfo = ref([])

onMounted(async() => {
    const { data } = await apiGetDetail({mId:route.params.id })
    detailInfo.value = data[1]
    myBaseStore.$patch(state => {
        state.isShowNav = false //  //进入详情页时变量false
    })
})
onUnmounted(() => {
    myBaseStore.$patch(state => {
        state.isShowNav = true //  //退出详情页时变量true
    })
})
const back = ()=> {
    router.push('/home')
}

</script>
