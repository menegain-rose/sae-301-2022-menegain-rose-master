<script setup lang="ts">
// import { Bars3Icon } from "@heroicons/vue/20/solid";
import { user } from './supabase';

import Athena from "@/pages/AthenaView.vue"
import Authentification from "@/pages/AuthentificationView.vue"
import Personnalisation from "@/pages/PersonnalisationView.vue"
import Vosmodeles from "@/pages/VosmodelesView.vue"
import BoutonAut from "@/components/boutonaut.vue"

import Facebook from "@/components/Icons/IconFacebook.vue"
import Instagram from "@/components/Icons/IconInstagram.vue"
import Youtube from "@/components/Icons/IconYoutube.vue"
import Pinterest from "@/components/Icons/IconPinterest.vue"


</script>


<template>
  <header class="bg-DarkGray px-10">

    <div class="flex justify-between">
      <div>
      <RouterLink to="/" class="flex h-full items-center">
      <img src="/Logo/TIK•TAK.svg" class="w-auto h-4" alt="Logo TIK•TAK">
      </RouterLink>
    </div>
    
    <div>
      <nav>
        <ul class="flex items-center">
          
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
              <BoutonAut class="bg-opacity-25 text-OffWhite flex">
                <img src="/Icons/IconProfil.svg" class="mr-2" alt="Icon Profil">
                <h3 v-if="!user">
                  Connection
                </h3>
                <h3 v-else>
                  Profil
                </h3>
              </BoutonAut>
            </router-link>
          </li>
  
          <li class="m-3">
            <img src="/Icons/IconFavoris.svg" class="mr-2" alt="Icon Favoris">
          </li>
  
          <li class="m-3 flex">
            <img src="/Icons/IconPanier.svg" class="mr-2" alt="Icon Panier">
            <h4 class="text-OffWhite ">
              0.00€
            </h4>
          </li>
  
        </ul>
      </nav>

    </div>
    </div>
  </header>


  <!-- Affiche les pages -->
  <main class="bg-OffWhite">
    <Suspense>
      <router-view/>
    </Suspense>
  </main>


<footer class="bg-DarkGray py-8">
  <section>
    <div class="flex justify-center">
      <RouterLink to="/" class="flex h-full items-center">
      <img src="/Logo/TIK•TAK.svg" class="w-auto h-6" alt="Logo TIK•TAK">
      </RouterLink>
    </div>

  <div class="grid grid-cols-3 mt-8 mx-48">
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
      <div class="flex items-center -mt-2">
        <Facebook class="mr-2"></Facebook>
        <h3>
          Facebook
        </h3>
      </div>
      <div class="flex items-center -mt-2">
        <Instagram class="mr-2"></Instagram>
        <h3>
          Instagram
        </h3>
      </div>
      <div class="flex items-center -mt-2">
        <Youtube class="mr-2"></Youtube>
        <h3>
          Youtube
        </h3>
      </div>
      <div class="flex items-center -mt-2">
        <Pinterest class="mr-2"></Pinterest>
        <h3>
          Pinterest
        </h3>
      </div>
    </div>
  </div>

    </section>
</footer>

</template>


