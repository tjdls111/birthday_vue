<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Happy UMU Day</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <RouterLink class="a nav-link" to="/">홈</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="a nav-link" to="/random"
                  >선물이 고민된다면? 🎁</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink class="a nav-link" to="/photo"
                  >우리의 추억 🥳</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink class="a nav-link" to="/message"
                  >따듯한 메시지 💕</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<script setup lang="ts"></script>

<style>
@import "@/assets/base.css";
.a {
  text-decoration: none;
}
</style>
