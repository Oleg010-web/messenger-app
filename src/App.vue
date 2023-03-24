<template>
  <h1>Welcome, yo</h1>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { account } from './api'
import { ID } from 'appwrite'

onMounted(() => {
  // Register User
  account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe').then(
    response => {
      console.log(response)
    },
    error => {
      console.log(error)
    }
  )
})
</script>
