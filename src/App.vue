<script setup lang="ts">
// import { Bars3Icon } from "@heroicons/vue/20/solid";

import Authentification from "@/pages/AuthentificationView.vue"
import Personnalisation from "@/pages/PersonnalisationView.vue"
import Athena from "@/pages/AthenaView.vue"
import Vosmontres from "@/pages/VosmontresView.vue"
</script>

<template>
  <header class="bg-DarkGray">
    <div>
      <RouterLink to="/" class="flex h-full items-center">
      <img src="/Logo/TIK•TAK.svg" class="w-auto h-6" alt="Logo TIK•TAK">
      </RouterLink>
    </div>

    <nav>
      <ul class="">
        <li>
          <router-link class="text-OffWhite " to="/authentificationview">
            <h3>
              Authentification
            </h3>
          </router-link>
        </li>
        <li>
          <router-link class="text-OffWhite " to="/personnalisationview">
            <h3>
              Personnalisation
            </h3>
          </router-link>
        </li>
        <li>
          <router-link class="text-OffWhite " to="/athenaview">
            <h3>
              Athena
            </h3>
          </router-link>
        </li>
        <li>
          <router-link class="text-OffWhite " to="/vosmontresview">
            <h3>
              Vosmontres
            </h3>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>


  <!-- Affiche les pages -->
  <main>
    <router-view/>
  </main>

</template>


