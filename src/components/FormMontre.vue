<script setup lang="ts">
import type { montre } from '../types';
import { reactive, ref } from 'vue';
import { supabase } from "../supabase";
import Montre from './Montre.vue';
import { colors } from '../types';
import { materiaux } from '../types';
import FormKitListColors from '../components/FormKitListColors.vue'
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps<{
    data?: montre;
    id?: string;
}>();

const chaussure = ref<montre>(props.data ?? {});

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
    <div class="p-2 flex flex-col md:flex-row gap-16 mt-40 items-center" v-bind="$attrs">
        <Montre class="-mr-96" v-bind=chaussure id="profil" />

        <div class="bg-DarkerGray w-96 p-16 rounded-xl">
            <FormKit type="form" v-model="chaussure" @submit="upsertMontre" :submit-attrs="{
                inputClass: 'text-white border-2 border-white p-3 rounded-md hover:border-blue-300',
            }">
                <FormKitListColors name="bracelet" label="bracelet" />
                <FormKitListColors name="ecran" label="ecran" />
                <FormKitListColors name="boitier" label="boitier" />
                <FormMateriaux name="materiaux" label="materiaux" />
            </FormKit>
        </div>
    </div>
</template>