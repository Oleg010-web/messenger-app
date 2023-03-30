<template>
  <div>
    <label class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <div class="mt-1">
      <input
        :type="props.type"
        class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
        :placeholder="props.placeholder"
        v-model="props.modelValue"
        @input="onUpdate"
      />
    </div>
  </div>
</template>

<script setup lang="ts">


interface Props {
  label?: string
  type: string
  placeholder?: string
  modelValue: string
}

const emit = defineEmits(["update: modelValue"])
const props = defineProps<Props>()

const onUpdate = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update: modelValue", target.value)
}
</script>
