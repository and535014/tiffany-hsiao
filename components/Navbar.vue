<script setup>
import { IMAGES } from "~/constants/common"

const { t } = useI18n()
const wrapperRef = ref(null)
const routes = [
  {
    to: "/about",
    label: t("routes.about"),
  },
  {
    to: "/projects",
    label: t("routes.projects"),
  },
  {
    to: "/contact",
    label: t("routes.contact"),
  },
]

defineExpose({
  wrapperRef,
})
</script>

<template>
  <nav
    ref="wrapperRef"
    class="fixed inset-x-0 top-0 z-10 mx-4 my-3 rounded-full bg-white p-4 transition duration-500">
    <div class="mx-auto flex max-w-[1280px] items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-4">
        <img
          :src="IMAGES.LOGO"
          width="40"
          height="40"
          class="rounded-full hover:outline hover:outline-[3px] hover:outline-offset-0 hover:outline-emerald-800/40" />
        <div class="text-xl font-bold text-emerald-950">{{ $t("general.logo") }}</div>
      </NuxtLink>

      <div class="flex items-center">
        <template v-for="{ to, label } in routes" :key="to">
          <NavLink :to="to" :label="label" />
        </template>
      </div>
    </div>
  </nav>
</template>
