<template>
  <header>
    <nav class="shadow-sm bg-white">
      <div class="container mx-auto p-4 flex justify-between">
        <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt Training</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
        </ul>
      </nav>
      </div>
    </nav>
  </header>

  <Sidebar />
</template>
