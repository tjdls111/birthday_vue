<template>
  <div>
    <ul>
      <li v-for="(item, idx) in props.attrs" :key="idx" ref="inputsRef">
        <Input :attr="item" @setValue="setValue" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watchEffect } from "vue";
import Input from "./Input.vue";

const props = defineProps<{
  index?: number;
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
const inputsRef = ref([]);
onMounted(() => {
  console.log(inputsRef.value);
});

watchEffect(() => {
  if (inputsRef.value) {
    console.log(inputsRef.value[2]);
    // inputsRef.value.focus();
  } else {
    // not mounted yet, or the element was unmounted (e.g. by v-if)
  }
});
defineExpose({
  inputsRef,
});
</script>

<style></style>
