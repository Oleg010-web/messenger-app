<template>
    <main class="h-full w-full relative">
        <SidebarHeader text="Add group participants" :backPath="SidebarView.NEW_CHAT"/>
        <section class="px-4 py-2 border-b border-b-gray-300">
            <div class="mb-2 space-x-2 space-y-2"></div>
            <Input type="text" v-model="search" placeholder="Type contact name" @keyup.enter="onEnter"/>
        </section>
    </main>
</template>

<script setup lang="ts">
import SidebarHeader from './elemants/SidebarHeader.vue';
import { SidebarView } from '../../stores/globalStore';
import Input from '../Input.vue';
import { ref } from 'vue';

const search = ref("")

const onEnter = () => {
    
}
</script>
