<template>
  <main class="w-full h-full flex">
     <Sidebar>
      <ContactsSidebar />
     </Sidebar>
     <!-- Main content -->
  </main>
</template>

<script setup lang="ts">
  import ContactsSidebar from '../components/sidebar/ContactsSidebar.vue';
import Sidebar from '../components/sidebar/Sidebar.vue';
</script>
