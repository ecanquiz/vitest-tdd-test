<template>
  <div>
    <input v-model="password">
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  props: {
    minLength: {
      type: Number
    },
    maxLength: {
      type: Number
    }
  },
  data() {
    return {
      password: ''
    }
  },
  computed: {
    error() {
      if (this.password.length < this.minLength) {
        return `Password must be at least ${this.minLength} characters.`
      } else if (this.password.length > this.maxLength) {
        return `Password should not exceed ${this.maxLength} characters.`          
      }
      return
    }
  }
}
</script>
