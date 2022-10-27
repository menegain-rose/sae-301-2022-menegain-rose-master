<script setup lang="ts">
import type { montre } from '@/types';
import { reactive, ref } from 'vue';
import { supabase } from "@/supabase";
import Montre from './Montre.vue';
import { colors, materiaux } from '@/types';
import FormKitListColors from '@/components/FormKitListColors.vue'

import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps<{
    data?: montre;
    id?: string;
}>();

const montres = ref<montre>(props.data ?? {});

    if (props.id) {
    // On charge les données de la Montre   
    let { data, error } = await supabase
        .from("Montre")
        .select("*")
        .eq("id", props.id);
    if (error || !data)
        console.log("n'a pas pu charger le table Montre :", error);
    else Montre.value = data[0];
}

// @ts-ignore
async function upsertMontre(dataForm, node) {
    const { data, error } = await supabase.from("montre").upsert(dataForm);
    if (error) node.setErrors([error.message]);
    else {
        node.setErrors([]);
        router.push({ name: "ListeMontre", params: { id: data[0].id } });
    }
}
</script>

<template>
    <div class="p-2 flex flex-col md:flex-row items-center" v-bind="$attrs">
        <Montre class="-mr-72" v-bind=montres id="profil" />

        <div class="bg-DarkerGray p-16 rounded-xl">
            <FormKit type="form" v-model="montres" @submit="upsertMontre" :submit-attrs="{
                inputClass: 'text-OffWhite bg-MediumGray font-athiti font-light text-lg py-2 px-10 rounded-xs m-5 hover:border-blue-300',
            }">
                <FormKitListColors name="bracelet" label="bracelet" />
                <FormKitListColors name="ecran" label="ecran" />
                <FormKitListColors name="boitier" label="boitier" />
                <FormMateriaux name="materiaux" label="materiaux" />
            </FormKit>
        </div>
    </div>
</template>