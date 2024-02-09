<script setup>
//currentRoute
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div class="flex">
    <!-- <Navigation/> -->
    <Sidebar />

    <div class="container mx-auto p-4 bg-gray-50">
      <h1 class="font-bold">
        {{ route.name === "index" ? "HOME" : route.name.toLocaleUpperCase() }}
      </h1>
      <div class="border-2 border-gray-800"></div>

      <div class="mt-5">
        <slot />
      </div>
    </div>
  </div>
</template>
