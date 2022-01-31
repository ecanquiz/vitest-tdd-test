<template>
  <label>
    {{ label }}
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<script>
// To use it you do
// <custom-input v-model="input" label="Text Input" class="text-input" />
export default {
  name: 'CustomInput',

  props: ['modelValue', 'label']
}
</script>
