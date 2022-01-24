<template>
  <div class="choose-step-wrapper" v-if="whichStep == 'Preprocessing'">
      <select v-model="name">
        <option v-for="(value, name) in listOfPreprocessingSteps" :key="name">{{ name }}</option>
      </select>
  <div v-show="name">
    <form>
        <div v-for="(v,n) in params" :key="n">
          <label>{{ n }}</label>
          <input type="number" value="v">
        </div>
        <input type="submit" value="Submit">
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
    }
  },
  computed: {
    params () {
      return this.listOfPreprocessingSteps[this.name] ? this.listOfPreprocessingSteps[this.name].paramset : {};
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
