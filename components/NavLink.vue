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
          'text-slate-950': isActive,
          'text-gray-400 hover:text-emerald-800/60': !isActive,
        },
      ]">
      {{ label }}
    </div>
    <transition name="slide" mode="out-in">
      <div
        v-show="isActive"
        class="absolute inset-x-4 bottom-1.5 h-1 rounded-full bg-emerald-800/60"></div>
    </transition>
  </NuxtLink>
</template>
