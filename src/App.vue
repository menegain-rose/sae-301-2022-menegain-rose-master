<script setup lang="ts">
// import { Bars3Icon } from "@heroicons/vue/20/solid";

import Authentification from "@/pages/AuthentificationView.vue"
import Personnalisation from "@/pages/PersonnalisationView.vue"
import Vosmodeles from "@/pages/VosmodelesView.vue"

import Bouton from "@/components/bouton.vue"

</script>

<template>
  <header class="bg-DarkGray flex px-10">
    <div>
      <RouterLink to="/" class="flex h-full items-center">
      <img src="/Logo/TIK•TAK.svg" class="w-auto h-4" alt="Logo TIK•TAK">
      </RouterLink>
    </div>

    <nav>
      <ul  class="flex ">

        <li class="m-3">
          <router-link to="/VosmodelesView">
            <h3>
              Vos Modèles
            </h3>
          </router-link>
        </li>

        <li class="m-3">
          <h3>
            Nos modèles
          </h3>
        </li>

        <li class="m-3">
          <router-link to="/personnalisationview">
            <h3>
              Personnalisation
            </h3>
          </router-link>
        </li>

        <li class="m-3">
          <h3>
            Contact
          </h3>
        </li>

        <li class="m-3">
          <router-link to="/authentificationview">
            <Bouton class="bg-opacity-25 text-OffWhite flex">
              <img src="/Icons/IconProfil.svg" class="mr-2" alt="">
              Connection
            </Bouton>
          </router-link>
        </li>

        <li class="m-3">
          <img src="/Icons/IconFavoris.svg" class="mr-2" alt="">
        </li>

        <li class="m-3">
          <img src="/Icons/IconPanier.svg" class="mr-2" alt="">
        </li>




      </ul>
    </nav>
  </header>


  <!-- Affiche les pages -->
  <main class="bg-OffWhite">
    <router-view/>
  </main>


<footer class="bg-DarkGray py-8">
  <section>
    <div class="flex justify-center">
      <RouterLink to="/" class="flex h-full items-center">
      <img src="/Logo/TIK•TAK.svg" class="w-auto h-6" alt="Logo TIK•TAK">
      </RouterLink>
    </div>

  <div class="flex grid-cols-3 mt-8 mx-48">
    <div>
      <h3>
        A PROPOS
      </h3>
      <h3>
        Mentions légales
      </h3>
      <h3>
        Conditions d’utilisation
      </h3>
      <h3>
        Politique de confidentialité
      </h3>
      <h3>
        Cookies
      </h3>
    </div>

    <div>
      <h3>
        SERVICE CLIENT
      </h3>
      <h3>
        Nous contacter
      </h3>
      <h3>
        Service retour
      </h3>
      <h3>
        Information sur la taille
      </h3>
      <h3>
        Bon d’achat
      </h3>
    </div>

    <div class="">   
      <div>
        <h3>
          REJOINGNEZ-NOUS
        </h3>
      </div>
      <div class="flex ">
        <img src="/Icons/IconFacebook.svg" class="w-auto h-6" alt="Icon Facebook">
        <h3>
          Facebook
        </h3>
      </div>
      <div class="flex ">
        <img src="Icons/IconInstagram.svg" class="w-auto h-6" alt="Icon Instagram">
        <h3>
          Instagram
        </h3>
      </div>
      <div class="flex ">
        <img src="Icons/IconYoutube.svg" class="w-auto h-6" alt="Icon Youtube">
        <h3>
          Youtube
        </h3>
      </div>
      <div class="flex ">
        <img src="Icons/IconPinterest.svg" class="w-auto h-6" alt="Icon Pinterest">
        <h3>
          Pinterest
        </h3>
      </div>
    </div>
  </div>

    </section>
</footer>

</template>


