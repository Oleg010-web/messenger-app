<template>
    <header class="w-full h-28 bg-custom-whatsapp-2 flex items-end p-4 text-white">
        <div class="flex items-center">
            <ArrowLeftIcon class="w-6 cursor-pointer" @click="onBack"/>
            <div class="font-semibold text-lg ml-4">{{ props.text }}</div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { SidebarView, useGlobalStore } from '../../../stores/globalStore';
import { ArrowLeftIcon } from '@heroicons/vue/24/solid';

interface Props {
    text: string
    backPath: any
}


const props = defineProps<Props>()
const globalStore = useGlobalStore()
const onBack = () => {
    globalStore.showSidebarView(props.backPath)
}
</script>
