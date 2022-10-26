<script setup lang="ts">
import Bouton from "@/components/bouton.vue"

</script>

<template>
  <section>
    <div class="grid grid-cols-3 bg-imageaccueil">
      <div class="flex items-center m-10">
        <h2 class="text-OffWhite">
          14 600 personnes l’ont adopté, <br>
          pourquoi pas vous ?
        </h2>
      </div>
      <div>
        <img src="/Montres/Montre_Noir.png" alt="Montre noir">
      </div>
      <div class="">
        <div class="flex">
          <h2 class="text-red-600 font-bold mr-3">
            -25% 
          </h2>
          <h2>
            en ce moment !
          </h2>
        </div>
        <Bouton class=" text-OffWhite flex">
          <h3>
            Personnaliser
          </h3>
        </Bouton>
        <h2 class="text-OffWhite">
          Personnalisez votre montre,pour qu’elle vous ressemble !
        </h2>
      </div>
    </div>

  </section>
</template>