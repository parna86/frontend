<template>
  <div class="home">
    <TopBar />
    <div class="content">
      <div class="steps-wrapper">
        <h4>Choose one of the steps below:</h4>
        <div class="checkbox-wrapper-outer" style="margin-top: 30px">
          <div class="checkbox-wrapper" v-for="step in currentSteps" :key="step.id" >
            <input type="radio" class="main-labels" name="steps"  :id="step.id" v-model="pickStep" v-bind:value="step.id">
            <label class="main-labels" :for="step.id">{{ step.something }}</label>
          </div>
        </div>

        <!-- INDIVIDUAL STEP WRAPPERS -->
        <div class="parameters-wrapper" v-if="pickStep == 'preprocessing'">
          <h5>The list of preprocessing steps available are:</h5>
          <hr/>
          <div v-for="(value, name) in listOfPreprocessingSteps" :key="name">
            <input type="radio" :id="name" name="substeps" v-model="pickSubStep" v-bind:value="name">
            <label :for="name" >{{ name }}</label>
          </div>
        </div>

        <div class="parameters-wrapper" v-if="pickStep == 'spikesorting'">
          <h5>The list of spike sorters available are:</h5>
          <hr/>
          <div v-for="(value, name) in listOfSpikeSorters" :key="name" >
            <input type="radio" :id="name" name="substeps" v-model="pickSubStep" v-bind:value="name">
            <label :for="name" >{{ name }}</label>
          </div>
        </div>

        <div class="parameters-wrapper" v-if="pickStep == 'postprocessing'">
          <h5>The list of postprocessors available are:</h5>
          <hr/>
          <div v-for="(value, name) in listOfPostprocessingSteps" :key="name" >
            <input type="radio" :id="name" name="substeps" v-model="pickSubStep" v-bind:value="name">
            <label :for="name" >{{ name }}</label>
          </div>
        </div>

        <!-- PARAMETERS WRAPPER FOR PREPROCESSORS -->
        <form class="params" v-if="pickSubStep != 'none' && pickStep == 'preprocessing'" id="params-form" @submit.prevent="addStep()">
          <label for="ref"><b>Reference</b></label>
          <input name="ref" type="text" />
          <div v-for="(v, k) in listOfPreprocessingSteps[pickSubStep].paramset" :key="k" class="individual-labels">
            <label :for="k">{{ k }}</label>
            <input :type="v[0]" :value="v[1]" :step="v[0] === 'number' ? 1 : 0.01" :id="k" :name="k">
          </div>
          <input type="submit" value="Submit"/>
        </form>

        <form class="params" v-else-if="pickSubStep != 'none' && pickStep == 'spikesorting'" id="params-form" @submit.prevent="addStep()">
          <label for="ref"><b>Reference</b></label>
          <input name="ref" type="text" />
          <div v-for="(v, k) in listOfSpikeSorters[pickSubStep].paramset" :key="k" class="individual-labels">
            <label :for="k">{{ k }}</label>
            <input :type="v[0]" :value="v[1]" :step="v[0] === 'number' ? 1 : 0.01" :id="k" :name="k">
          </div>
          <input :value="listOfSpikeSorters[pickSubStep].filename" name="filename" style="display:none">
          <input type="submit" value="Submit"/>
        </form>

        <form class="params" v-else-if="pickSubStep != 'none' && pickStep == 'postprocessing'" id="params-form" @submit.prevent="addStep()">
          <label for="ref"><b>Reference</b></label>
          <input name="ref" type="text" />
          <div v-for="(v, k) in listOfPostprocessingSteps[pickSubStep].paramset" :key="k" class="individual-labels">
            <label :for="k">{{ k }}</label>
            <input :type="v[0]" :value="v[1]" :step="v[0] === 'number' ? 1 : 0.01" :id="k" :name="k">
          </div>
          <input type="submit" value="Submit"/>
        </form>
      </div>

       <!-- steps-wrapper -->
      <div class="pipeline-structure">
        <button class="btn btn-info" @click="onPickFile">Upload pipeline</button>
        <input
          type="file"
          style="display: none"
          ref="fileInput"
          accept="application/JSON"
          @change="onFilePicked"/>
        <ol>
          <li class="pipeline-structure-one-unit" v-for="oneStep in pipeline" :key="oneStep.nameOfStep">
            {{ oneStep.nameOfStep }}
            <span v-if="oneStep.ref">Ref: {{ oneStep.ref }}</span>
            <CloseIcon class="close" @click="removeStep(oneStep.id)" />
          </li>
        </ol>
        <button @click="runPipeline()">Run pipeline</button>
        <button @click="downloadPipeline()">Download pipeline</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from '@/components/TopBar.vue'
import CloseIcon from 'vue-material-design-icons/Close.vue'
import preprocessingSteps from '@/assets/listOfPreprocessing.json'
import spikeSorters from '@/assets/listOfSpikeSorters.json'
import postprocessing from '@/assets/listOfPostprocessing.json'

export default {
  name: 'HomePage',
  data () {
    return {
      currentSteps: [
        { id: 'preprocessing', something: 'Preprocessing' },
        { id: 'spikesorting', something: 'Spike sorting' },
        { id: 'postprocessing', something: 'Postprocessing' }
      ],
      pickStep: 'none',
      pickSubStep: 'none',
      listOfPreprocessingSteps: preprocessingSteps.listForm,
      listOfSpikeSorters: spikeSorters.listForm,
      listOfPostprocessingSteps: postprocessing.listForm,
      pipeline: [],
      drag: false,
      sorters: []
    }
  },
  components: {
    TopBar,
    CloseIcon
    // draggable
  },
  watch: {
    pickStep: function () {
      this.pickSubStep = 'none'
    }
  },
  computed: {
    thePipeline () {
      return this.pipeline
    }
  },
  methods: {
    addStep () {
      var form = document.getElementById('params-form')
      var formData = new FormData(form)
      var object = { nameOfStep: this.pickSubStep, category: this.pickStep, id: this.pipeline.length }
      formData.forEach(function (value, key) {
        object[key] = value
      })
      console.log(this.pipeline)
      console.log('before pushing informaiton')
      this.pipeline.push(object)
      console.log(JSON.stringify(this.pipeline))
    },
    downloadPipeline () {
      if (this.pipeline.length === 0) {
        console.log('no')
        return
      }
      const d = JSON.stringify(this.pipeline, null, 4)
      var bb = new Blob([d])
      var a = document.createElement('a')
      a.download = 'download.json'
      a.href = window.URL.createObjectURL(bb)
      a.textContent = 'Download ready'
      a.style = 'display:none'
      a.click()
    },
    removeStep (id) {
      this.pipeline = this.pipeline.filter(one => one.id !== id)
      // var count = 0
      // for (var one in this.pipeline) {
      //   one.id = count.toString()
      //   count++
      // }
      // console.log(JSON.stringify(this.pipeline))
    },
    runPipeline () {
      var xhr = new XMLHttpRequest()
      var url = 'http://127.0.0.1:5000/run'
      xhr.open('POST', url, true)
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log('Done')
        }
      }
      var data = JSON.stringify(this.pipeline)
      xhr.send(data)
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const file = document.querySelector('input[type=file]').files[0]
      console.log(file)
      const reader = new FileReader()
      reader.addEventListener('load', function () {
        // convert image file to base64 string
        this.pipeline = JSON.parse(reader.result)
        console.log(JSON.stringify(this.pipeline))
        console.log(typeof this.pipeline)
        console.log('____________________________________________')
      }, false)

      if (file) {
        reader.readAsText(file)
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,400;1,600;1,700;1,900&display=swap');

  .home{
    display: grid;
    grid-template-rows: 15vh 85vh;
    grid-template-areas: 'top-bar' 'content';
    font-family: 'Source Sans Pro', sans-serif;
  }

  .content{
    grid-area: content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
  }

  .steps-wrapper, .pipeline-structure{
    box-sizing: border-box;
    border: 2px solid darkgrey;
    border-top: none;
    width: 100%;
    margin: 0;
  }

  .checkbox-wrapper{
    width: fit-content;
    display: inline;
    margin-left: 5px;
    margin-right: 5px;
  }

  @media (max-width: 960px) {
    .checkbox-wrapper-outer{
      display: flex;
      flex-direction: column;
    }

    .checkbox-wrapper{
      margin: 10px auto;
    }
  }

  label.main-labels{
    font-size: 14pt;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 15px;

    &:hover{
      background-color: rgba($steel-blue, 0.3);
    }
  }

  input[type="radio"].main-labels:checked + label.main-labels{
    background-color: rgba($steel-blue, 0.5);
    box-shadow: 0px 0px 0px 0.5px inset $dark-slate-grey;
  }

  .parameters-wrapper{
    box-sizing: border-box;
    width: 60%;
    padding: 10px;
    border: 2px solid #eee;
    text-align: center;
    margin: 20px auto;

    div{
      display: grid;
      grid-template-columns: max-content max-content;
      justify-content: start;
    }

    h5{
      margin: 2px;
    }

    label{
      text-align: left;
    }
  }

  .params{
    width: 80%;
    border: 2px solid #eee;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    max-height: 40vh;
    overflow-y: scroll;

    .individual-labels{
      padding: 3px;
      display: grid;
      width: 100%;
      box-sizing: border-box;
      grid-template-columns: 1fr 0.5fr;
    }

    label{
      margin-right: 3px;
      justify-self: end;
      font-size: 12pt;
    }

    .input{
      justify-self: start;
    }

    button{
      background: rgba($steel-blue, 0.3);
      color: #333;
      padding: 8px;
      border: none;
      border-radius: 5px;
      font-size: 13pt;
      font-weight: 700;

      &:active{
        background: rgba($steel-blue, 0.7);
      }
    }
  }

  .pipeline-structure{
    ol{
      list-style: none;
      margin: 0 auto;
      text-align: center;
      max-height: 50vh;
      overflow-y: scroll;
    }
    .pipeline-structure-one-unit{
      border: 2px solid $white-smoke;
      padding: 10px;
      width: 80%;
      display: grid;
      grid-auto-flow: column;
      text-align: left;

      .close{
        font-weight: bold;
        border-left: 1px solid black;
        padding: 5px;
        justify-self: right;
        cursor: pointer;
      }
    }
  }

  button, input[type="submit"]{
      box-shadow: 0px 0px 0px 0.2px inset $dark-slate-grey;
      border-radius: 10px;
      background: rgba($steel-blue, 0.3);
      padding: 1vh;
      margin: 10px;
      font-family: 'Source Sans Pro', sans-serif;

      &:hover{
        background: rgba($steel-blue, 0.7);
      }
    }
</style>
