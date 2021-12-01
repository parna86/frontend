<template>
  <div class="home">
    <TopBar />
    <div class="content">
      <div class="steps-wrapper" >
        <StepContainer v-for="one in currentSteps" :key="one.id" class="step-container" :title="one.step" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from '@/components/TopBar.vue'
import StepContainer from '@/components/SpikeSortingStepContainer'
export default {
  name: 'Pipeline',
  data () {
    return {
      currentSteps: [
        { id: '1', step: 'Preprocessing' },
        { id: '3', step: 'Spike sorting' },
        { id: '2', step: 'Postprocessing' }
      ]
    }
  },
  components: {
    TopBar,
    StepContainer
  }
}
</script>

<style scoped lang="scss">
  .home{
    display: grid;
    grid-template-rows: 10vh 90vh;
    grid-template-areas: 'top-bar' 'content';
  }

  .content{
    grid-area: content;
    display: grid;
    grid-template-rows: 4fr 1fr;
    grid-template-areas: 'steps' 'buttons';
  }

  .steps-wrapper{
    grid-area: steps;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-flow: column;
    justify-content: center;
  }

  .step-container{

  }

</style>
