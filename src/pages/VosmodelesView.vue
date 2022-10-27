<script setup lang="ts">
import { supabase } from "@/supabase";
import Montre from "../components/Montre.vue";

</script>

<template>
  <section class="mx-40 my-20">
    <h2 class="text-DarkGray">
      Les montres que vous avez déjà confectionner
    </h2>

    <div class="border-black border-2 ">
      <p v-for="m in montre" :key="m.id_montre">
        <Montre class="w-64" v-bind="m" />
      </p>
    </div>

  </section>
</template>

