<template>
  <div>
    <ul>
      <li v-for="(item, idx) in props.attrs" :key="idx">
        <Input :attr="item" @setValue="setValue" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Input from "./Input.vue";

const props = defineProps<{
  attrs: Array<{
    label?: string;
    type: string;
    placeholder?: string;
    value?: string;
  }>;
}>();

const setValue = (content: string) => {
  console.log(content);
};
</script>

<style></style>
