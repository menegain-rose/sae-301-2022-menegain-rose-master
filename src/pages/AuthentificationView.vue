<script setup lang="ts">
// import { Bars3Icon } from "@heroicons/vue/20/solid";
import Bouton from "@/components/bouton.vue"
import { supabase, user } from '../supabase';

</script>


<template>
  <main class="my-20 mx-20">
    <section v-if="user">
      <Bouton @pointerdown="supabase.auth.signOut()">
                    Se déconnecter ({{user.email}})
      </Bouton>
    </section>

    <section  v-else class="bg-MediumBeige px-10 pb-10 rounded-lg">
      <div class=" grid grid-cols-2">
        <div>
          <p class="bg-LightBeige py-3 px-6 my-10 rounded-sm">
            Email
          </p>
          <p class="bg-LightBeige py-3 px-6 my-10 rounded-sm">
            Mot de passe
          </p>
        </div>
        <div class="ml-10">
          <div class="py-3 px-6 my-10 rounded-sm bg-[#3B5998] text-white flex">
            <img src="/Images/IconFacebook.png" class="w-auto h-6 mr-6" alt="Icon Facebook">
            <p>
              Continuer avec Facebook
            </p>
          </div>
          <div class="py-3 px-6 my-10 rounded-sm bg-white text-black flex" @pointerdown="supabase.auth.signIn({ provider: 'google' })">
            <img src="/Images/IconGoogle.png" class="w-auto h-6 mr-6" alt="Icon Google">
            <p>
              Continuer avec Google
            </p>
          </div>
        </div>  
      </div>

      <div class="flex justify-center">
        <Bouton class="text-OffWhite flex items-center">
          <img src="/Icons/IconProfil.svg" class="mr-4" alt="Icon Profil">
          <h3>
            Connection
          </h3>
        </Bouton>

      </div>
    </section>



  </main>
  </template>