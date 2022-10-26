<script setup lang="ts">
import Bouton from "@/components/bouton.vue"



</script>

<template>
    <section>
      <div class="flex justify-center">
        <div class="bg-MediumBeige  py-2 inline-flex px-4  justify-center mb-12">
          <p class="mr-3">
            ENCORE
          </p>
          <p class="mr-3 text-red-600 font-semibold">
            1 1 H 3 5
          </p>
          <p class="mr-3">
            avant la fin de la réduction à
          </p>
          <p class="text-red-600 font-semibold">
            -25%
          </p>
        </div>
      </div>


      <div class="grid grid-cols-3">
        <div>
          <img src="/Montres/SVGMontre.svg" alt="svg montre">
          <p>
            2 150 €
          </p>
          <p>
            1 612 €
          </p>
          <div class="bg-imagebras w-80 h-96 m-10">
            <img src="/Montres/MontreSVG_Small.svg" class="relative left-16 top-[230px]" alt="svg montre sur poignet">
          </div>
        </div>
        <div>
          <h2>
            TIK•TAK les montres réfléchies pour vous
          </h2>
          <h5>
            Couleurs
          </h5>
          <p>
            Cadre
          </p>
          <p>
            Bracelet
          </p>
          <p>
            Ecran
          </p>
          <div>
            <Bouton class="text-OffWhite ">
              <h3>
                Acheter
              </h3>
            </Bouton>
            <Bouton class="text-OffWhite">
              <h3>
                Sauvegarder
              </h3>
            </Bouton>
          </div>
        </div>
        <div>
          <h5>
            Matériaux
          </h5>
          <div>
            <p>
              Cadre
            </p>
            <p>
              Cuir
            </p>
            <p>
              OUT OF STOCK
            </p>
            <p>
              Plastique
            </p>
          </div>
          <div>
            <p>
              Bracelet
            </p>
            <p>
              Cuir
            </p>
            <p>
              OUT OF STOCK
            </p>
            <p>
              Plastique
            </p>
          </div>
        </div>
      </div>

      <div class="mx-36 mb-28">
        <div>
          <div class="mt-24">
            <h2>
              Les montres TIK•TAK sont réfléchies pour vous convenir le mieux possible
            </h2>
            <Bouton class="text-OffWhite">
              <h3>
                Découvrir
              </h3>
            </Bouton>
          </div>
        
          <div class="flex justify-center gap-10 mt-5">
            <router-link to="/AthenaView">
              <img src="/Images/ComposantMontreBeige.png" class="" alt="Composant Montre Beige">
            </router-link>
            <img src="/Images/ComposantMontreViolet.png" class="" alt="Composant Montre Violet">
            <img src="/Images/ComposantMontreVerte.png" class="" alt="Composant Montre Verte">
            <img src="/Images/ComposantMontreBleu.png" class="" alt="Composant Montre Bleu">
          </div>
        </div>

        <div class="mt-24">
          <h2>
            Nos clients on donnés leurs avis.
          </h2>
          <div class="grid grid-cols-2 gap-10 mt-5">
            <div>
              <div class="bg-MediumBeige rounded-xs inline-flex items-center py-2 px-4 mb-12 w-full">
                <img src="/Icons/IconUtilisateur.svg" class="mr-2" alt="Icon utilisateur">
                <p class="">
                  Ces montres sont vraiment incroyable ! On sent le savoir faire.
                </p>
              </div>
              <div class="bg-MediumBeige rounded-xs inline-flex items-center py-2 px-4 mb-12 w-full">
                <img src="/Icons/IconUtilisateur.svg" class="mr-2" alt="Icon utilisateur">
                <p class="">
                  Un raport qualité/prix vraiment super !
                </p>
              </div>
              <div class="bg-MediumBeige rounded-xs inline-flex items-center py-2 px-4 mb-12 w-full">
                <img src="/Icons/IconUtilisateur.svg" class="mr-2" alt="Icon utilisateur">
                <p class="">
                  Ces montres sont comme on en a jamais vu, vraiment les meilleurs.
                </p>
              </div>
            </div>
  
            <div>
              <div class="bg-MediumBeige rounded-xs inline-flex items-center py-2 px-4 mb-12 w-full">
                <img src="/Icons/IconUtilisateur.svg" class="mr-2" alt="Icon utilisateur">
                <p class="">
                  Je l’ai offerte à mon mari, j’en veut une aussi maintenant !
                </p>
              </div>
              <div class="bg-MediumBeige rounded-xs inline-flex items-center py-2 px-4 mb-12 w-full">
                <img src="/Icons/IconUtilisateur.svg" class="mr-2" alt="Icon utilisateur">
                <p class="">
                  J’en ai acheté plusieurs, elles offrent un charisme en plus à mes tenues.
                </p>
              </div>
              <div class="bg-MediumBeige rounded-xs inline-flex items-center py-2 px-4 mb-12 w-full">
                <img src="/Icons/IconUtilisateur.svg" class="mr-2" alt="Icon utilisateur">
                <p class="">
                  J’adore le fait qu’elles sois water proof, une qualité en plus !
                </p>
              </div>
            </div>
  
          </div>
        </div>

      </div>
    </section>
  </template>