<template>
  <main class="w-full h-full flex">
     <Sidebar>
      <ContactsSidebar v-if="sidebarView === SidebarView.CONTACTS" />
     </Sidebar>
     <!-- Main content -->
  </main>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
import ContactsSidebar from '../components/sidebar/ContactsSidebar.vue';
import Sidebar from '../components/sidebar/Sidebar.vue';
import { useGlobalStore, SidebarView } from '../stores/globalStore';

const globalStore = useGlobalStore();
const sidebarView = computed(()=> globalStore.sidebarView)
</script>
