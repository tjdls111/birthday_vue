<template>
  <input
    :name="props.attr.label"
    :type="props.attr.type"
    :placeholder="props.attr.placeholder"
    :value="props.attr.value"
    @input="(event) => setValue(event)"
    ref="inputEl"
  />
</template>

<script setup lang="ts">
import { ref, inject, onMounted, watch } from "vue";

const emit = defineEmits(["setValue"]);

const props = defineProps<{
  groupIndex?: number;
  itemIndex?: number;
  attr: {
    label?: string;
    type: string;
    placeholder?: string;
    value?: string;
    index?: number;
  };
}>();

const inputValue = ref<string>("");
const inputEl = ref<HTMLInputElement | null>(null);

const setValue = (event: InputEvent | Event): void => {
  const target: HTMLInputElement = event.target as HTMLInputElement;
  inputValue.value = target.value;
  emit("setValue", inputValue.value);
};

const targetGroupIndex = inject("targetGroupIndex");
const targetItemIndex = inject("targetItemIndex");

const focusOnTargetInputEl = () => {
  if (
    targetGroupIndex === props.groupIndex &&
    targetItemIndex === props.itemIndex
  ) {
    inputEl.value?.focus();
  }
};

onMounted(() => {
  focusOnTargetInputEl();
});
</script>

<style lang="scss" scoped>
input {
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px;
  margin: 4px;
}
</style>
