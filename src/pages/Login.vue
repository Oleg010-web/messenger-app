<template>
  <section class="w-full h-full flex flex-col items-center justify-center">
    <div class="w-80 flex flex-col items-center">
      <img />
      <h1 class="text-3xl mt-2 font-bold">Login to your account</h1>
      <p>
        Or
        <span class="text-green-500"
          ><RouterLink to="/register">create a new one</RouterLink></span
        >
      </p>
      <Input
        type="text"
        label="Email"
        placeholder="someone@gmail.com"
        class="w-full mt-10"
        v-model="email"
      />
      <Input
        type="password"
        label="Password"
        placeholder="Password.."
        class="w-full mt-5"
        v-model="password"
      />
      <Button text="Login" class="mt-10 w-full" @click="login"></Button>
    </div>
  </section>
</template>

<script setup lang="ts">
//imports
import { ref } from 'vue'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import { auth } from '@/api/auth'
import { useRouter } from 'vue-router'

//data
const email = ref()
const password = ref()
const router = useRouter()

//methods
const login = async () => {
  await auth(email.value, password.value)
  router.push({ name: 'application' })
}
</script>
