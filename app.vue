<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* fade transition start */
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-300;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}

.fade-enter-to,
.fade-leave-from {
  @apply opacity-100;
}
/* fade transition end */

/* slide transition start */
.slide-enter-active {
  @apply origin-left transition duration-500 ease-out;
}

.slide-enter-from {
  @apply -translate-x-4 scale-x-0 opacity-0;
}

.slide-enter-to {
  @apply translate-x-0 scale-x-100 opacity-100;
}

.slide-leave-from,
.slide-leave-to {
  @apply opacity-0;
}
/* slide transition end */
</style>
