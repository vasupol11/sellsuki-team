<template>
  <router-view :key="$route.fullPath"></router-view>
</template>

<script>
  export default {
    name: 'profile-index'
  }
</script>

<style scoped></style>