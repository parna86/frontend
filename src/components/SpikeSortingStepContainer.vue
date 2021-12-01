<template>
  <div class = "pipeline-step-container">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  name: 'StepContainer',
  props:{
    title: String
  }
}
</script>

<style scoped lang="scss">
  .pipeline-step-container{
    border: 2px solid black;
    border-radius: 10%;
  }
</style>
