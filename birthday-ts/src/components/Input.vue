<template>
  <input
    :name="props.attr.label"
    :type="props.attr.type"
    :placeholder="props.attr.placeholder"
    :value="props.attr.value"
    @input="(event) => setValue(event)"
  />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const emit = defineEmits(["setValue"]);

const props = defineProps<{
  attr: {
    label?: string;
    type: string;
    placeholder?: string;
    value?: string;
    index?: number;
  };
}>();

const inputValue = ref<string>("");
const setValue = (event: InputEvent | Event): void => {
  const target: HTMLInputElement = event.target as HTMLInputElement;
  inputValue.value = target.value;
  emit("setValue", inputValue.value);
};
</script>

<style lang="scss" scoped>
input {
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px;
  margin: 4px;
}
</style>
