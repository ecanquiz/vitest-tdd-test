<template>
  <div>
    <input @keydown.meta.c.exact.prevent="captureCopy" v-model="input" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  },
  methods: {
    captureCopy() {
      this.$emit('capture-copy', this.input)
    }
  }
}
</script>
