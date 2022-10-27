<script setup lang="ts">
import { colors } from "@/types";
defineProps<{
    name?: string;
    label?: string;
}>();
</script>
<template>
    <FormKit :name="name" :label="label" value="#FFFFFF" type="radio" :options="colors" :sections-schema="{
        inner: { $el: null },
        decorator: { $el: null }
    }" input-class="peer sr-only" options-class="flex gap-7 flex-wrap  mb-8 mt-3" :classes="{
    legend: 'text-DarkGray '
}">
        <template #label="context">
            <div class="h-6 w-6 rounded-[7px] border-2 border-transparent peer-checked:border-white"
                :style="{ backgroundColor: context.option.value }" />
            <span class="sr-only">{{ context.option.label }}</span>
        </template>
    </FormKit>
</template>