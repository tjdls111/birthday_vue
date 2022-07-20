<template>
  <div>
    <h1 class="text-center">메시지</h1>
    <section class="text-center">
      <InputGroup :index="0" :attrs="inputAttrs" ref="inputsRef1" />
      <hr />
      <InputGroup :index="1" :attrs="inputAttrs2" ref="inputsRef2" />
      <li>
        <input type="text" ref="input" />
      </li>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, provide } from "vue";

import InputGroup from "@/components/InputGroup.vue";
const inputAttrs = [
  {
    label: "nickname",
    type: "text",
    placeholder: "nickname을 입력하세요",
    value: "",
    index: 0,
  },
  {
    label: "message",
    type: "text",
    placeholder: "message을 입력하세요",
    value: "",
    index: 1,
  },
];

const inputAttrs2 = [
  {
    label: "email",
    type: "text",
    placeholder: "email을 입력하세요",
    value: "",
    index: 0,
  },
  {
    label: "mbti",
    type: "text",
    placeholder: "mbti를 입력하세요",
    value: "",
    index: 1,
  },
];

const targetGroupIndex = ref<number>(0);
const targetItemIndex = ref<number>(1);

provide("targetGroupIndex", targetGroupIndex.value);
provide("targetItemIndex", targetItemIndex.value);
</script>

<style></style>
