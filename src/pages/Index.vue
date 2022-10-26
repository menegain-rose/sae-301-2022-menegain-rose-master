<script setup lang="ts">
import Athena from "@/pages/AthenaView.vue"
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
      <div class="flex flex-col justify-center">
        <div>
          <h2 class="text-center">
            <span class="text-red-600 font-bold mr-3">
              -25%
            </span> 
            en ce moment !
          </h2>
        </div>
        <Bouton class=" text-OffWhite w-max">
          <h3>
            Personnaliser
          </h3>
        </Bouton>
        <h2 class="text-OffWhite">
          Personnalisez votre montre, <br>
          pour qu’elle vous ressemble !
        </h2>
      </div>
    </div>
    <div>
      <div>
        <h2>
          Les montres TIK•TAK sont réfléchies pour vous convenir le mieux possible
        </h2>
        <p>
          Découvrez nos modèles conçu par nos meilleurs designers. <br>
          Les montres TIK•TAK sont des montres professionnelles, simples et vous conviendrons très certainement.
        </p>
        <Bouton class=" text-OffWhite flex">
          <h3>
            Découvrir
          </h3>
        </Bouton>
      </div>
      <div class="flex gap-10">
        <router-link to="/AthenaView">
          <img src="/Images/ComposantMontreBeige.png" class="" alt="Composant Montre Beige">
        </router-link>
        <img src="/Images/ComposantMontreViolet.png" class="" alt="Composant Montre Violet">
        <img src="/Images/ComposantMontreVerte.png" class="" alt="Composant Montre Verte">
        <img src="/Images/ComposantMontreBleu.png" class="" alt="Composant Montre Bleu">
      </div>
      <div>
        <h2>
          Nos montres waterproof !
        </h2>
        <p>
          Nos montres sont water proof; Vous voulez rester à la mode même en vous baignant ? <br>
          N’ayez plus d’hésitation et adoptez les montres TIK•TAK ! 
        </p>
        <Bouton class=" text-OffWhite flex">
            <h3>
              Découvrir
            </h3>
          </Bouton>
      </div>
      <div class="flex">
        <img src="/Images/Image_SousMarins.png" class="mr-5" alt="Image Sous Marins">
      </div>
    </div>

  </section>
</template>