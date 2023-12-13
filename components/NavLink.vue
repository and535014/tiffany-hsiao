<script setup>
const props = defineProps({
  to: { type: String, required: true },
  label: { type: String, required: true },
})

const route = useRoute()
const isActive = computed(() => route.path === props.to)
</script>

<template>
  <NuxtLink :to="to" class="relative px-4 py-3">
    <div
      :class="[
        ' text-center text-xl font-bold tracking-wide',
        {
          'text-surface-950': isActive,
          'hover:text-primary-800/60 text-surface-400': !isActive,
        },
      ]">
      {{ label }}
    </div>
    <transition name="slide" mode="out-in">
      <div
        v-show="isActive"
        class="bg-primary-800/60 absolute inset-x-4 bottom-1.5 h-1 rounded-full"></div>
    </transition>
  </NuxtLink>
</template>
