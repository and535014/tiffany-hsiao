<script setup>
const wrapperRef = ref(null)
const windowScrollY = ref(0)
const navbarRef = ref(null)
const navbarHeight = ref(0)
const wrapperStyle = computed(() => ({
  paddingTop: `${navbarHeight.value}px`,
}))

onMounted(() => {
  if (navbarRef.value?.wrapperRef) {
    const rect = navbarRef.value.wrapperRef.getBoundingClientRect()
    navbarHeight.value = rect.height
  }

  process.client &&
    window.addEventListener("scroll", () => {
      windowScrollY.value = window.scrollY
    })
})
</script>

<template>
  <div class="text-surface-950 pt-3 font-body">
    <Navbar
      ref="navbarRef"
      :class="{
        'scale-100 shadow-[0_1px_24px_0_rgba(0,0,0,0.1)]': windowScrollY > 0,
        'scale-95': windowScrollY === 0,
      }" />
    <div ref="wrapperRef" :style="wrapperStyle" class="px-4 text-center">
      <slot />
    </div>
    <Footer />
  </div>
</template>
