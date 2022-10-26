<template>
  <header class="bg-DarkGray">
    <div>
      <RouterLink to="/Accueil" class="flex h-full items-center">
      <img src="/Logo/TIK•TAK.svg" class="w-auto h-6" alt="Logo TIK•TAK">
      </RouterLink>
    </div>

    <nav>
      <ul class="">
        <li>
          <router-link class="text-OffWhite " to="/Authentification">
            <h3>
              Authentification
            </h3>
          </router-link>
        </li>
        <li>
          <router-link class="text-OffWhite " to="/Personnalisation">
            <h3>
              Personnalisation
            </h3>
          </router-link>
        </li>
        <li>
          <router-link class="text-OffWhite " to="/Athena">
            <h3>
              Athena
            </h3>
          </router-link>
        </li>
        <li>
          <router-link class="text-OffWhite " to="/Vosmontres">
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

<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/20/solid";
</script>
