<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="user.add">{{ user.count }}</button>
    <router-view></router-view>
  </div>
</template>

<script lang='ts' setup>
  import { ref, Ref } from 'vue'
  import { useUserStore } from './stores/user'
  const user = useUserStore()
  // export default {
    // setup() {
      const msg: Ref<number> = ref(1)
      setInterval(() => {
        msg.value++
      }, 1000);
      // return { msg }
    // }
  // }
</script>

<style scoped>
  h1 {
    color:red
  }
</style>