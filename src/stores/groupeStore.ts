import { createGroup } from '@/api/teams'
import { defineStore } from 'pinia'

export interface Group {
  id?: string
  name: string
}

export interface NewGroup {
  name: string
  invitees: string[]
}

interface State {
  newGroup: NewGroup
}

export const useGroupStore = defineStore('groupStore', {
  state: () => {
    return {
      newGroup: {
        name: '',
        invitees: []
      }
    } as State
  },
  actions: {
    updateNewGroupName (name: string) {
      this.newGroup.name = name
    },
    addNewGroupInvitee (member: string) {
      this.newGroup.invitees.push(member)
    },
    removeNewGroupInvitee (member: string) {
      this.newGroup.invitees = this.newGroup.invitees.filter(
        invitee => invitee !== member
      )
    },
    setNewGroupInvitee (invitees: string[]) {
      this.newGroup.invitees = invitees
    },
    async createGroup() {
      const team = await createGroup(this.newGroup.name)
    }
  }
})
