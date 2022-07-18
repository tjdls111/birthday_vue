/* eslint-disable prettier/prettier */
<template>
  <div class="container random">
    <h2 class="text-center">선물 추천 ^_^</h2>
    <ul class="row">
      <li class="mt-5 col-sm" v-for="item in items" v-bind:key="item.name">
        <button
          type="button"
          class="btn btn-info"
          @click="onClickRedirect(item.name)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="pink"
            class="bi bi-gift-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z"
            />
          </svg>
        </button>
      </li>
    </ul>
    <p id="today"></p>
    <div id="pi" class="alert alert-primary"></div>
    <py-script>
      <!-- import datatime as dt;
      pyscript.write('today', '오늘은')

      def compute_pi(n):
          pi = 2
          for i in range(1,n):
              pi *= 4 * i ** 2 / (4 * i ** 2 - 1)
          return pi

      pi = compute_pi(100000)
      pyscript.write('pi', f'π is approximately {pi:.3f}') -->
    </py-script>
  </div>
</template>

<script lang="ts">
export default {
  name: "RandomView",
  data: function () {
    return {
      items: [
        {
          name: "73388276-02ff-4251-a51d-70022f3d3c4b",
        },
        { name: "c6d9f322-10d8-4123-ac7e-b6bdc6b307aa" },
        { name: "8a888238-7ce9-4eed-bfdb-58f4829ba5f6" },
        { name: "f4b55567-42a8-471e-9d5a-e969e7e54260" },
        { name: "029e491b-ffc5-47de-a6bf-d81a18da671f" },
      ],
    };
  },
  methods: {
    onClickRedirect: function (name: string) {
      window.open(`https://www.idus.com/w/product/${name}`, "_blank");
    },
  },
};
</script>

<style>
ul {
  list-style: none;
}
</style>
