<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">홈</RouterLink>
          <RouterLink to="/random">선물이 고민된다면?</RouterLink>
          <RouterLink to="/photo">우리의 추억</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>
