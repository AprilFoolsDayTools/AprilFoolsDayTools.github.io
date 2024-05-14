<script setup>
  import headpage from '@/components/header.vue'
  import { useRoute } from 'vue-router'
  const route = useRoute()
</script>

<template>
  <div class="tablet+:ts-container mobile-:is-fluid">
    <div class="tablet+ts-content is-vertically-padded">
      <headpage />
      <div class="tablet+:ts-divider has-vertically-spaced"></div>
      <div class="mobile-:ts-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style src="@/css/home.css"></style>