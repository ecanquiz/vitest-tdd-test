<template>
  <CustomInput v-model="input" label="Text Input" class="text-input" />
</template>

<script>
import CustomInput from './CustomInput.vue'

export default {
  components: {
      CustomInput
  },
  data() {
    return {
      input: ''
    }
  },
}
</script>
