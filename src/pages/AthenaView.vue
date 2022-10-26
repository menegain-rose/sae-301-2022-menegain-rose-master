<script setup lang="ts">
import Favoris from "@/components/Icons/IconFavoris.vue"
import Bouton from "@/components/bouton.vue"
</script>

<template>
  <main>
    <section>
      <div class="flex bg-ImageFondAthena px-36 py-10">
        <div>
          <img src="/Montres/Montre_Beige_Big.png" alt="">
        </div>

        <div class="pl-20">
          <h2>
            - - - ATHENA - - -
          </h2>
          <p>
            Une montre créé par notre designer Amme. <br>
            Une couleur nude, qui restera discrête mais éléguante à votre poignet. <br>
            Des foctionnalités toujours aussi intéréssante, et le water proof pour une touche moderne même en vous baignant. <br>
            4321 personnes l’ont adoptées !
          </p>
          <div class="flex flex-wrap gap-3 pt-10">
            <span class="block h-10 w-10 bg-[#CABF97] rounded-xs"></span>
            <span class="block h-10 w-10 bg-[#4C4737] rounded-xs"></span>
            <span class="block h-10 w-10 bg-[#DAAF82] rounded-xs"></span>
          </div>
          <Bouton class=" text-OffWhite flex mt-10">
            <h3>
              Acheter
            </h3>
          </Bouton>
          <div class="flex mt-10">
            <p>
              5
            </p>
            <Favoris class="mr-2"></Favoris>
          </div>
        </div>
      </div>
      <div class="mx-36 my-10">
        <div class="mt-20">
          <h2>
            ATHENA historiquement
          </h2>
          <div class="grid grid-cols-2 gap-14">
            <div>
              <p>
                La création de la montre ATHENA commença en 2014, <br> <br>
                Son créateur Amme BERN, l’a entièrement réfléchie pour qu’elle soit parfaite <br>
                au poignet de ses utilisateurs.<br> <br>
                A. BERNE, travaillait dans le domaine du design et de la technologie depuis 15 ans, <br>
                et ce devais de penser à la montre qui ce démarquera de notre marque. <br>
                Il travaillait depuis 10 ans dans l’entreprise TIK•TAK. <br> <br>
                TIK•TAK est composé des meilleurs designers, informatitiens et ingénieurs du pays. <br>
                Notre entreprise créé des montre depuis 2010, et continue aujourd’hui, avec à la tête de notre entreprise la montre ATHENA, qui se démarque des autres.
              </p>
            </div>
            <div>
              <img src="/Images/Imagehistoire.png" alt="">
            </div>
          </div>
        </div>
  
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

  </main>
  </template>