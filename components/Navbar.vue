<script setup>
import { PrimeIcons } from "primevue/api"
import { IMAGES, LINKS } from "~/constants/common"
import { ROUTES } from "~/constants/routes"

const { t } = useI18n()
const wrapperRef = ref(null)
const routes = [ROUTES.ABOUT, ROUTES.PROJECTS, ROUTES.CONTACT].map(route => ({
  to: `/${route}`,
  label: t(`routes.${route}`),
}))

const openResumeFile = () => {
  navigateTo(
    {
      path: LINKS.RESUME,
    },
    {
      open: {
        target: "_blank",
      },
    },
  )
}

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
        <NuxtImg
          :src="IMAGES.LOGO"
          width="40"
          height="40"
          class="hover:outline-primary-800/40 rounded-full hover:outline hover:outline-[3px] hover:outline-offset-0"
          placeholder />
        <div class="text-primary-950 text-xl font-bold">{{ $t("general.logo") }}</div>
      </NuxtLink>

      <div class="flex items-center gap-3">
        <div class="flex items-center">
          <NavLink v-for="{ to, label } in routes" :key="to" :to="to" :label="label" />
        </div>
        <Button
          :label="$t('button.resume')"
          outlined
          rounded
          :icon="PrimeIcons.EXTERNAL_LINK"
          icon-pos="right"
          @click="openResumeFile" />
      </div>
    </div>
  </nav>
</template>
