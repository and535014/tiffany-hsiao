<script setup>
definePageMeta({
  middleware: [
    to => {
      if (to.fullPath === "/") {
        return navigateTo("/about")
      }
    },
  ],
})
</script>

<template>
  <div></div>
</template>
