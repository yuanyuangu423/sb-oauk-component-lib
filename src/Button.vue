<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }} + {{ number }} + {{ number }} + {{ number }} </button>
</template>

<script lang="ts" setup>
import './stories/button.scss';
import { computed, ref } from 'vue';
let number = ref(8)
const props = withDefaults(defineProps<{
  /**
   * The label of the button
   */
  label: string,
  /**
   * primary or secondary button
   */
  primary?: boolean,
  /**
   * size of the button
   */
  size?: 'small' | 'medium' | 'large',
  /**
   * background color of the button
   */
  backgroundColor?: string,
  mid?: boolean

}>(), { primary: false });

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

const classes = computed(() => ({
  'oauk-button': true,
  'oauk-button-primary': props.primary,
  'oauk-button-default': !props.primary,
  'mid': props.mid || false
  // [`storybook-button--${props.size || 'medium'}`]: true,
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor
}));

const onClick = () => {
  emit("click", 1)
};

</script>