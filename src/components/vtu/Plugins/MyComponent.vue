<template>
  <form class="form-container" data-testid="form">
    <input data-testid="name-input" v-model="name" />
  </form>
</template>

<script>
export default ({
  data() {
    return {
      name: null
    }
  }
})
</script>
