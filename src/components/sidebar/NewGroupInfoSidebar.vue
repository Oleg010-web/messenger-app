<template>
  <SidebarHeader :backPath="SidebarView.NEW_GROUP_PARTICIPANTS" text="" />
  <div class="w-full flex mt-10 items-center justify-center">
    <div
      class="w-44 h-44 bg-gray-500 rounded-full flex items-center justify-center relative"
    >
      <div
        class="flex flex-col items-center justify-center text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <CameraIcon class="w-6" />
        <div>Add group icon.</div>
      </div>
      <UserGroupIcon class="w-28 text-gray-300 opacity-10" />
    </div>
  </div>
  <section class="p-2 my-4">
    <Input
      type="text"
      v-model="groupStore.newGroup.name"
      placeholder="Group name."
    />
  </section>
  <section
    v-if="groupStore.newGroup.name.length > 0"
    class="flex w-full justify-center mt-20"
  >
    <div
      class="bg-custom-whatsapp-1 w-12 h-12 rounded-full flex items-center text-white justify-center cursor-pointer"
    >
      <CheckIcon class="w-6" @click="createGroup" />
    </div>
  </section>
</template>

<script setup lang="ts">
//imports
import { SidebarView } from '@/stores/globalStore'
import SidebarHeader from './elemants/SidebarHeader.vue'
import { CameraIcon, CheckIcon, UserGroupIcon } from '@heroicons/vue/24/solid'
import Input from '../Input.vue'
import { useGroupStore } from '@/stores/groupeStore'

//data
const groupStore = useGroupStore()

//methods
const createGroup = () => {
  groupStore.createGroup()
}
</script>
