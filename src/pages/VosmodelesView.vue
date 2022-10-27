<script setup lang="ts">
import { supabase } from "@/supabase";
import Montre from "@/components/Montre.vue";

const props = defineProps<{
    max?: number;
}>();
const { data: montre, error } = await supabase
    .from("montre")
    .select("*")
    .limit(props.max ?? 100);
if (error) {
    console.log("n'a pas pu récupérer les montres", { error });
}
</script>

<template>
  <section class="mx-40 my-20">
    <h2 class="text-DarkGray">
      Les montres que vous avez déjà confectionner
    </h2>

    <ul>
      <li v-for="m in montre" :key="m.id_montre">
        <Montre class="w-64" v-bind="m" />
      </li>
    </ul>

  </section>
</template>

