<script setup>
import NavTab from '@/views/navTab/index.vue'
import { useBaseStore } from '@/store/base'
import { storeToRefs } from 'pinia'
const myBaseStore = useBaseStore()
const { isShowNav } = storeToRefs(myBaseStore)
</script>

<template>
  <router-view />
  <NavTab v-if="isShowNav"/>
</template>

<style scoped>

</style>
