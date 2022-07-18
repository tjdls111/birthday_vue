<template>
  <div>
    <h1>메시지</h1>
    <InputGroup :attrs="inputAttrs" />
    <hr />
    <InputGroup :attrs="inputAttrs2" />
  </div>
</template>

<script lang="ts" setup>
import InputGroup from "@/components/InputGroup.vue";
const inputAttrs = [
  {
    label: "nickname",
    type: "text",
    placeholder: "nickname을 입력하세요",
    value: "",
  },
  {
    label: "message",
    type: "text",
    placeholder: "message을 입력하세요",
    value: "",
  },
];

const inputAttrs2 = [
  {
    label: "email",
    type: "text",
    placeholder: "email을 입력하세요",
    value: "",
  },
  {
    label: "mbti",
    type: "text",
    placeholder: "mbti를 입력하세요",
    value: "",
  },
];
</script>

<style></style>
