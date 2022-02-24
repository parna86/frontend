<template>
  <div class="outer-wrapper">
      <input v-for="step in currentSteps" :key="step.id" type="radio" name="checking" :id="step.id">
      <label v-for="step in currentSteps" :key="step.id" for="checking">{{ step.something }}</label>
  </div>
</template>
<script>
// import ChooseStep from '@/components/ChooseStep.vue'
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
  }
}
</script>

<style scoped lang="scss">

  .checkbox-wrapper{
    width: fit-content;
    display: inline;
  }

  input[type="radio"]{
    display: none;
  }

  label{
    font-size: 14pt;
    padding: 10px;
    border-radius: 15px;
    margin-left: 2px;
    margin-right: 2px;

    &:hover{
      background-color: rgba($steel-blue, 0.3);
    }
  }

  input[type="radio"]:checked + label{
    background-color: rgba($steel-blue, 0.5);
    box-shadow: 0px 0px 0px 0.5px inset $dark-slate-grey;
  }
</style>
