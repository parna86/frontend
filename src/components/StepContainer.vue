<template>
  <div class = "pipeline-step-container">
    <div class="top">
      <h3>{{ title }}</h3>
      <button @click="showModal = !showModal">Add element</button>
    </div>
    <div v-if="showModal">
      <ChooseStep :whichStep="title" />
    </div>
    
  </div>
</template>

<script>
import ChooseStep from '@/components/ChooseStep.vue'

export default {
  name: 'StepContainer',
  props: {
    title: String
  },
  data () {
    return {
      listOfComponents: {},
      showModal: false
    }
  },
  components: {
    ChooseStep
  }
}
</script>

<style scoped lang="scss">
  .pipeline-step-container{
    border: 2px solid black;
    overflow-y: scroll;
    height: 100px;
  }

  .top{
    display: grid;
    grid-template-columns: 2fr 1fr;
    button{
      width: 70%;
      height: 80%;
      align-self: center;
    }
  }

</style>
