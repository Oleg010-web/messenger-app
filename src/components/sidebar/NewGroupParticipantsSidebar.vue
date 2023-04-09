<template>
  <main class="h-full w-full relative">
    <SidebarHeader
      text="Add group participants"
      :backPath="SidebarView.NEW_CHAT"
    />
    <section class="px-4 py-2 border-b border-b-gray-300">
      <div class="mb-2 space-x-2 space-y-2">
        <Badge
          v-for="invitee in groupStore.newGroup.invitees"
          :text="invitee"
          @click="groupStore.removeNewGroupInvitee(invitee)"
        />
      </div>
      <Input
        type="text"
        v-model="search"
        placeholder="Type contact name"
        @keyup.enter="onEnter"
      />
    </section>
    <section class="absolute bottom-0 w-full h-28 bg-gray-100 flex items-center justify-center">
      <div class="bg-custom-whatsapp-1 w-12 h-12 rounded-full text-white flex items-center justify-center cursor-pointer">
        <ArrowRightIcon class="w-6" @click="showGroupInfoView"/>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
//impots
import SidebarHeader from './elemants/SidebarHeader.vue'
import { SidebarView, useGlobalStore } from '@/stores/globalStore'
import { useGroupStore } from '@/stores/groupeStore'
import Input from '@/components/Input.vue'
import { ref } from 'vue'
import Badge from './Badge.vue'
import { ArrowRightIcon } from '@heroicons/vue/24/solid'

//data
const search = ref('')
const groupStore = useGroupStore()
const globalStore = useGlobalStore()

//methods
const onEnter = () => {
  groupStore.addNewGroupInvitee(search.value)
  search.value = ''
}

const showGroupInfoView = () => {
  globalStore.showSidebarView(SidebarView.NEW_GROUP_INFO)
}
</script>
