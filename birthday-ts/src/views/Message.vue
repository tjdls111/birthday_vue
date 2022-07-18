<template>
  <div>
    <h1 class="text-center">메시지</h1>
    <section class="text-center">
      <InputGroup :attrs="inputAttrs" ref="inputsRef1" />
      <hr />
      <InputGroup :attrs="inputAttrs2" ref="inputsRef2" />
      <li>
        <input type="text" ref="input" />
      </li>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watchEffect } from "vue";
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

const inputsRef1 = ref(null);
const inputsRef2 = ref(null);
onMounted(() => {
  console.log("target", inputsRef1.value);
});

watchEffect(() => {
  if (inputsRef1.value) {
    console.log(inputsRef1.value[1]);
    inputsRef1.value.inputsRef?.value[1].focus();
  } else {
    // not mounted yet, or the element was unmounted (e.g. by v-if)
  }
});
</script>

<style></style>
