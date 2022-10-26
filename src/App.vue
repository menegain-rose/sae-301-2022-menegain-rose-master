<template>
  <header class="bg-darkgray">
    <div>
      <RouterLink to="/" class="flex h-full items-center">
      <img src="/Logo/TIK•TAK.svg" class="w-auto h-14" alt="Logo TIK•TAK">
      </RouterLink>
    </div>

    <nav>
      <h4 class="text-xl">
        <Bars3Icon class="inline-block h-5 w-5 text-blue-500" />
        menu (dans <code class="font-mono">/src/App.vue</code>)
      </h4>
      <ul>
        <li>
          <router-link class="text-red-600 underline" to="/">
            lien vers
            <code class="font-mono">/src/pages/index.vue</code>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>



<nav class="flex pr-8 pl-5 h-full">
  <div class="pr-5 h-full flex items-center">
    <RouterLink to="/Apropos">
        <h3>A propos</h3>
    </RouterLink>
  </div>

  
  <div class="relative z-50 h-full flex items-center">
    <Bouton class=" m-3">
      <a href="https://rearts.leopold-ohnimus.fr"> 
        S'inscrire
      </a>
    </Bouton>
  </div>
</nav>

  <!-- Affiche les pages -->
  <Suspense>
    <router-view class="m-2 border-2 p-2" />
  </Suspense>
</template>

<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/20/solid";
</script>
