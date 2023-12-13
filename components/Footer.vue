<script setup>
import moment from "moment"
import { EMAIL, SKILLS } from "~/constants/common"

const year = moment().year()
</script>

<template>
  <footer class="fixed inset-x-0 bottom-0 bg-primary-700/5 text-sm text-surface-700">
    <div class="mx-auto flex max-w-[1280px] flex-col gap-4 px-4 py-8">
      <div class="mb-8">
        <p class="mb-4 text-xs">{{ $t("footer.skill_hint") }}</p>
        <div class="flex gap-2">
          <Tag v-for="skill in SKILLS" :key="skill" :value="skill" rounded />
        </div>
      </div>

      <div>
        <span>{{ `${$t("label.email")}: ` }}</span>
        <a :href="`mailto:${EMAIL}`" class="underline">{{ EMAIL }}</a>
      </div>

      <hr />

      <div class="text-surface-500">{{ $t("footer.copyright", { year }) }}</div>
    </div>
  </footer>
</template>
