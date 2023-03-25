<template>
  <section class="w-full h-full flex flex-col items-center justify-center">
    <div class="w-80 flex flex-col items-center">
      <img />
      <h1 class="text-3xl mt-2 font-bold">Create your account</h1>
      <p>
        Or
        <span class="text-green-500"
          ><RouterLink to="/login">loggin to your account</RouterLink></span
        >
      </p>
      <Input
        type="text"
        label="Name"
        placeholder="Enter your name"
        class="w-full mt-10"
        v-model="name"
      />
      <Input
        type="text"
        label="Email"
        placeholder="someone@gmail.com"
        class="w-full mt-5"
        v-model="email"
      />
      <Input
        type="password"
        label="Password"
        placeholder="Password.."
        class="w-full mt-5"
        v-model="password"
      />
      <Button text="Register" class="mt-10 w-full" @click="register"></Button>
    </div>
  </section>
</template>

<script setup lang="ts">
//imports
import { ref } from 'vue'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
import { registerUser, auth } from '../api/auth'
import { useRouter } from 'vue-router'

//data
const name = ref()
const email = ref()
const password = ref()
const router = useRouter()

//methods
const register = async () => {
  if (!email.value || !password.value ) return
  await registerUser(email.value, password.value, name.value)
  await auth(email.value,password.value)
  router.push({ name: 'application' })
}
</script>
