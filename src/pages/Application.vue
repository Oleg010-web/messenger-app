<template>
  <main class="w-full h-full flex">
    <Sidebar>
      <ContactsSidebar v-if="sidebarView === SidebarView.CONTACTS" />
      <NewChatSidebar  v-if="sidebarView === SidebarView.NEW_CHAT"/>
      <NewGroupParticipantsSidebar  v-if="sidebarView === SidebarView.NEW_GROUP_PARTICIPANTS"/>
      <NewGroupInfoSidebar v-if="sidebarView === SidebarView.NEW_GROUP_INFO"/>
    </Sidebar>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ContactsSidebar from '@/components/sidebar/ContactsSidebar.vue'
import Sidebar from "@/components/sidebar/Sidebar.vue"
import { useGlobalStore, SidebarView } from '@/stores/globalStore'
import NewChatSidebar from '@/components/sidebar/NewChatSidebar.vue';
import NewGroupParticipantsSidebar from '@/components/sidebar/NewGroupParticipantsSidebar.vue';
import NewGroupInfoSidebar from '@/components/sidebar/NewGroupInfoSidebar.vue';

const globalStore = useGlobalStore()
const sidebarView = computed(() => globalStore.sidebarView)
</script>
