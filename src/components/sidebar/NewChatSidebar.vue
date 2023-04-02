<template>
  <SidebarHeader text="New chat" :backPath="SidebarView.CONTACTS" />
  <section class="p-2 border-b border-b-gray-300">
    <Input type="text" placeholder="Search contacts" v-model="search" />
  </section>
  <section class="py-2">
    <div
      class="h-16 w-full py-4 flex items-center px-2 hover:bg-gray-100 cursor-pointer"
      @click="showCreateGroupView"
    >
      <div
        class="h-12 w-12 rounded-full bg-custom-whatsapp-1 flex items-center justify-center"
      >
        <UserIcon class="h-6 w-6 text-white" />
      </div>
      <div class="text-lg ml-2">New group</div>
    </div>
  </section>
</template>

<script setup lang="ts">
//imports
import { ArrowLeftIcon, UserIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'
import { SidebarView, useGlobalStore } from '../../stores/globalStore'
import Input from '../Input.vue'
import SidebarHeader from './elemants/SidebarHeader.vue'

//data
const globalStore = useGlobalStore()
const search = ref('')

//methods
const showCreateGroupView = () => {
  globalStore.showSidebarView(SidebarView.NEW_GROUP_PARTICIPANTS)
}
</script>
