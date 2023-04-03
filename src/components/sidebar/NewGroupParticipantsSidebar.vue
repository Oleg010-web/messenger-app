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
  </main>
</template>

<script setup lang="ts">
//impots
import SidebarHeader from './elemants/SidebarHeader.vue'
import { SidebarView } from '@/stores/globalStore'
import { useGroupStore } from '@/stores/groupeStore'
import Input from '../Input.vue'
import { ref } from 'vue'
import Badge from './Badge.vue'

//data
const search = ref('')
const groupStore = useGroupStore()

//methods
const onEnter = () => {
  groupStore.addNewGroupInvitee(search.value)
  search.value = ''
}
</script>
