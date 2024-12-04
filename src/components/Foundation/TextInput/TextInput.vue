<template>
  <input :placeholder="placeholder" :type="type" onblur="onBlur"/>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  placeholder?: string,
  type: string

}>(), { type: 'text'});

const emit = defineEmits<{
  (e: 'blur'): void;
}>();


const onBlur = () => {
  emit("blur")
};

</script>
<style lang="scss" scoped>
</style>