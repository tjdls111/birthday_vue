<template>
  <div class="text-center">
    <button type="button" class="btn btn-warning" @click="onClickRedirect">
      우리들의 추억 보러 가기~~
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "PhotoView",
  components: {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  data: function () {},
  methods: {
    onClickRedirect: function () {
      window.open(`https://forms.gle/49T3xNGyyxVWoB3g8`, "_blank");
    },
  },
};
</script>

<style></style>
