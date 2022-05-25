<template>
  <div class="container">
    <!-- <vue-typed-js :strings="['First text', 'Second Text']">
      <h1 class="typing"></h1>
    </vue-typed-js> -->
    <img src="../assets/main.png" alt="" />
  </div>
</template>

<script lang="ts">
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      typingTexts: [
        " There are many ways to correct a mistake ,",
        " And the ultimate solution to a mistake , Just don't give it a chance to happen .",
      ],
    };
  },
  methods: {},
};
</script>

<style></style>
