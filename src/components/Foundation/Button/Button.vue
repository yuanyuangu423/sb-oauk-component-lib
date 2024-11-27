<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    <span v-if="isIconBtn" :class="['icon', { 'icon-white': btnType !== 'default' }]"></span>
    {{ label }}
    </button>
</template>

<script lang="ts" setup>
import './button.scss';
import { computed } from 'vue';
const props = withDefaults(defineProps<{
  /**
   * The label of the button
   */
  label: string,
  isIconBtn?: boolean,
  btnType?: 'primary' | 'danger' | 'default',
  isDisable?: boolean,
  isMid?: boolean,
  /**
   * background color of the button
   */
  backgroundColor?: string,

}>(), { isIconBtn: false, isDisable: false, isMid: false });

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

const classes = computed(() => ({
  'oauk-button': !props.isIconBtn,
  'oauk-icon-button': props.isIconBtn,
  // 'oauk-button-primary': props.btnType === 'primary',
  // 'oauk-button-default': props.btnType === 'default',
  // 'oauk-button-danger':  props.btnType === 'danger',
  'mid': props.isMid === true,
  'oauk-disabled': props.isDisable,
  [`oauk-button-${props.btnType}`]: props.btnType,
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor
}));

const onClick = () => {
  emit("click", 1)
};

</script>
<style lang="scss" scoped>
.icon {
  background: url("../../../assets/images/add.svg") center no-repeat;
}
.icon-white {
  background: url("../../../assets/images/add-white.svg") center no-repeat;
}
</style>