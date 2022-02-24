<template>
  <div class="choose-step-wrapper" v-if="whichStep == 'preprocessing'">
      <select v-model="name">
        <option v-for="(value, name) in listOfPreprocessingSteps" :key="name">{{ name }}</option>
      </select>
  <div v-show="name">
    <form ref="form">
      <div v-for="(val, n) in params" :key="n">
        <label>{{ n }}</label>
        <input type="number">
      </div>
      <input type="submit" value="Submit" @submit.prevent="addInfo()">
    </form>
  </div>
  </div>
</template>
<script>
import preprocessingSteps from '../assets/listOfPreprocessing.json'
import spikeSorters from '../assets/listOfSpikeSorters.json'

export default {
  name: 'ChooseStep',
  data () {
    return {
      listOfPreprocessingSteps: preprocessingSteps.listForm,
      listOfSpikeSorters: spikeSorters.listForm,
      name: ''
    }
  },
  props: {
    whichStep: String
  },
  methods: {
    addElement (key, value) {
      this.$parent.addElement(key, value)
    },
    addInfo (e) {
      var a = new FormData(e.target)
      console.log(Object.fromEntries(a.entries()))
    },
    params () {
      return this.listOfPreprocessingSteps[this.name] ? this.listOfPreprocessingSteps[this.name].paramset : {}
    }
  }
}
</script>
<style scoped>
  .choose-step-wrapper{
    height: 100%;
    width: 80%;
    background: beige;
    justify-self: center;
  }
</style>
