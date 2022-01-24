<template>
  <div class="home">
    <TopBar />
    <div class="content">
      <div class="steps-wrapper" >
        <StepContainer v-for="one in currentSteps" :key="one.id" class="step-container" :title="one.step" />
      </div>
      <div class="set-up-pipeline">
        <ol>
          <li>Hello</li>
          <li>Wolrd</li>
        </ol>
      </div>
      <div>
        <button>Run pipeline</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from '@/components/TopBar.vue'
import StepContainer from '@/components/StepContainer'
export default {
  name: 'HomePage',
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
    grid-template-rows: 15vh 85vh;
    grid-template-areas: 'top-bar' 'content';
  }

  .content{
    grid-area: content;
    display: grid;
    grid-template-rows: 3fr 2fr 1fr;
    grid-template-areas: 'steps' 'buttons';
  }

  .steps-wrapper{
    grid-area: steps;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-flow: column;
    justify-items: center;
    align-items: center;
  }

  .step-container{
    width: 90%;
    height: 80%;
  }

</style>
