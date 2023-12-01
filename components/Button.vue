<script setup>
const props = defineProps({
  label: { type: String, required: false, default: undefined },
  type: { type: String, required: false, default: "filled" }, // filled | rounded | outlined | text
  size: { type: String, required: false, default: "normal" }, // small | normal | large
  leadingIcon: { type: String, required: false, default: undefined },
  trailingIcon: { type: String, required: false, default: undefined },
  rounded: { type: Boolean, required: false },
})

const typeVariants = {
  filled: "border-2 border-emerald-700 bg-emerald-700 font-medium text-white hover:bg-emerald-800",
  outlined: "border-2 border-current bg-white font-semibold text-emerald-700 hover:bg-emerald-50",
  text: "border-2 border-white bg-white font-semibold text-emerald-700 hover:bg-emerald-100",
}

const sizeVariants = {
  small: props.label ? "gap-1 px-2.5 py-1.5 text-xs leading-4" : "p-1.5 leading-4",
  normal: props.label ? "gap-2 px-4 py-2 text-sm leading-5" : "p-2 leading-5",
  large: props.label ? "gap-2 px-4 py-2 text-md leading-6" : "p-3 leading-6",
}

const iconSizeVariants = {
  small: "0.875rem",
  normal: "1rem",
  large: "1.125rem",
}

const roundedVariants = {
  rounded: "rounded-full",
  small: "rounded-md",
  normal: "rounded-lg",
  large: "rounded-lg",
}

const currentConfig = {
  [typeVariants[props.type || "filled"]]: true,
  [sizeVariants[props.size || "normal"]]: true,
  [roundedVariants[(props.rounded && "rounded") || props.size || "normal"]]: true,
}
</script>

<template>
  <button
    :class="['inline-flex items-center justify-center transition duration-200', currentConfig]">
    <template v-if="leadingIcon">
      <Icon :name="leadingIcon" :size="iconSizeVariants[size]" />
    </template>
    <template v-if="label">
      <div>{{ label }}</div>
    </template>
    <slot v-else />
    <template v-if="trailingIcon">
      <Icon :name="trailingIcon" :size="iconSizeVariants[size]" />
    </template>
  </button>
</template>

<style scoped></style>
