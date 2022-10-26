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
    </section>
  </template>