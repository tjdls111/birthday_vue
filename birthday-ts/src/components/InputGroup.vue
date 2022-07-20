<template>
  <div>
    <ul>
      <li v-for="(item, idx) in props.attrs" :key="idx" ref="inputsRef">
        <Input
          :groupIndex="props.index"
          :itemIndex="idx"
          :attr="item"
          @setValue="setValue"
        />
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
</script>
