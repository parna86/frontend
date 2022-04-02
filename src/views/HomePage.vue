<template>
  <div class="home">
    <TopBar />
    <ErrorModal v-if="runPipelineError"/>
    <div class="content">
      <div class="steps-wrapper">
        <h3>Choose one of the steps below:</h3>
        <div class="checkbox-wrapper-outer" style="margin-top: 30px">
          <div
            class="checkbox-wrapper"
            v-for="step in currentSteps"
            :key="step.id"
          >
            <input
              type="radio"
              class="main-labels"
              name="steps"
              :aria-label="pickStep"
              :id="step.id"
              v-model="pickStep"
              v-bind:value="step.id"
            />
            <label :for="step.id" :class="[step.something === 'Spike sorting'?'spikesorting': step.something === 'Preprocessing' ? 'preprocessing' : 'postprocessing', 'main-labels']">
            {{
              step.something
            }}</label>
          </div>
        </div>

        <!-- INDIVIDUAL STEP WRAPPERS -->
        <div class="parameters-wrapper" v-if="pickStep == 'preprocessing'">
          <h3>The list of preprocessors available are:</h3>
          <hr />
          <div v-for="(value, name) in listOfPreprocessingSteps" :key="name">
            <input
              type="radio"
              :id="name"
              name="substeps"
              :aria-label="pickSubStep"
              v-model="pickSubStep"
              v-bind:value="name"
            />
            <label :for="name">{{ name }} <br> <span class="description"> {{ value["description"] }} </span></label>
          </div>
        </div>

        <div class="parameters-wrapper" v-if="pickStep == 'spikesorting'">
          <h3>The list of spike sorters available are:</h3>
          <hr />
          <div v-for="(value, name) in listOfSpikeSorters" :key="name">
            <input
              type="radio"
              :id="name"
              name="substeps"
              :aria-label="pickSubStep"
              v-model="pickSubStep"
              v-bind:value="name"
            />
            <label :for="name">{{ name }}<br> <span class="description"> {{ value["description"] }} </span></label>
          </div>
        </div>

        <div class="parameters-wrapper" v-if="pickStep == 'postprocessing'">
          <h3>The list of postprocessors available are:</h3>
          <hr />
          <div v-for="(value, name) in listOfPostprocessingSteps" :key="name">
            <input
              type="radio"
              :id="name"
              name="substeps"
              :aria-label="pickSubStep"
              v-model="pickSubStep"
              v-bind:value="name"
            />
            <label :for="name">{{ name }}<br> <span class="description"> {{ value["description"] }} </span></label>
          </div>
        </div>

        <!-- PARAMETERS WRAPPER FOR PREPROCESSORS -->
        <form
          class="params"
          v-if="pickSubStep != 'none' && pickStep == 'preprocessing'"
          id="params-form"
          @submit.prevent="addStep()"
        >
          <label for="ref"><b>Optional - Reference</b></label>
          <input name="ref" aria-label="reference for preprocessing step" type="text" />
          <div
            v-for="(v, k) in listOfPreprocessingSteps[pickSubStep].paramset"
            :key="k"
            class="individual-labels"
          >
            <label :for="k" data-toggle="tooltip" data-placement="top" title="Tooltip on top"><b>{{ k }}</b> <br> {{ v[2] }}</label>
            <input
              :type="v[0]"
              :value="v[1]"
              :step="v[0] === 'number' ? 1 : 0.01"
              :id="k"
              :name="k"
              :aria-label="k"
              required
              aria-required="true"
            />
          </div>
          <input type="submit" aria-label="Add step to pipeline" value="Add step to pipeline" />
        </form>

        <form
          class="params"
          v-else-if="pickSubStep != 'none' && pickStep == 'spikesorting'"
          id="params-form"
          @submit.prevent="addStep()"
        >
          <label for="ref"><b>Optional - Reference</b></label>
          <input name="ref" aria-label="reference for preprocessing step" type="text" />
          <div
            v-for="(v, k) in listOfSpikeSorters[pickSubStep].paramset"
            :key="k"
            class="individual-labels"
          >
            <label :for="k"><b>{{ k }}</b> <br> {{ v[2] }}</label>
            <input
              :type="v[0]"
              :value="v[1]"
              :step="v[0] === 'number' ? 1 : 0.01"
              :id="k"
              :name="k"
              :aria-label="k"
              required
              aria-required="true"
            />
          </div>
          <input
            :value="listOfSpikeSorters[pickSubStep].filename"
            name="filename"
            style="display: none"
          />
          <input type="submit" aria-label="Add step to pipeline" value="Add step to pipeline" />
        </form>

        <form
          class="params"
          v-else-if="pickSubStep != 'none' && pickStep == 'postprocessing'"
          id="params-form"
          @submit.prevent="addStep()"
        >
          <label for="ref"><b>Optional - Reference</b></label>
          <input name="ref" aria-label="reference for postprocessing step" type="text" />
          <div
            v-for="(v, k) in listOfPostprocessingSteps[pickSubStep].paramset"
            :key="k"
            class="individual-labels"
          >
            <label :for="k"><b>{{ k }}</b> <br> {{ v[2] }}</label>
            <input
              :type="v[0]"
              :value="v[1]"
              :step="v[0] === 'number' ? 1 : 0.01"
              :id="k"
              :name="k"
              :aria-label="k"
              required
              aria-required="true"
            />
          </div>
          <input type="submit" aria-label="Add step to pipeline" value="Add step to pipeline" />
        </form>
      </div>

      <!-- steps-wrapper -->
      <div class="pipeline-structure">
        <div>
        <button @click="runPipeline()">Run pipeline</button>
        <input
          type="file"
          style="display: none"
          ref="fileInput"
          accept="application/JSON"
          @change="onFilePicked"
        />
        <ol class="pipeline-body">
          <h3>The pipeline will be built here</h3>
          <li
            v-for="oneStep in thePipeline"
            :key="oneStep.nameOfStep"
            :class="['pipeline-structure-one-unit', oneStep.category]"
          >
            {{ oneStep.nameOfStep }}
            <span v-if="oneStep.params.ref">Ref: {{ oneStep.params.ref }}</span>
            <span class="params-span" style="display: none">
              <span v-for="(k,v) in oneStep.params" :key="k"> {{v}} : {{k}}</span>
            </span>
            <CloseIcon class="close" @click="removeStep(oneStep.id)" />
          </li>
        </ol>
        <button class="btn btn-info" @click="onPickFile">
          Upload pipeline
        </button>
        <button @click="downloadPipeline()">Download pipeline</button>
      </div>
      <div class="error-handling">
        <h3>Status of pipeline</h3>
        <p> {{ info }} </p>
        <p> {{ additionalInfo }}</p>
      </div>
    </div>
  </div>
   <footer>Developed by Aparna Rajeev in the School of Informatics, University of Edinburgh</footer>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from '@/components/TopBar.vue'
import ErrorModal from '@/components/ErrorModal.vue'
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
      availableDatasets: [],
      runPipelineError: false,
      info: 'All good so far!',
      additionalInfo: ''
    }
  },
  components: {
    TopBar,
    CloseIcon,
    ErrorModal
  },
  watch: {
    pickStep: function () {
      this.pickSubStep = 'none'
      if (this.info !== 'Pipeline running') {
        this.info = 'All good so far!'
      }
      this.additionalInfo = ''
    }
  },
  computed: {
    thePipeline () {
      return this.pipeline
    }
  },
  methods: {
    addStep () {
      console.log(this.pipeline)
      var form = document.getElementById('params-form')
      var formData = new FormData(form)
      var paramsDict = {}
      var object = {
        nameOfStep: this.pickSubStep,
        category: this.pickStep,
        id: this.pipeline.length
      }
      formData.forEach(function (value, key) {
        paramsDict[key] = value
      })
      object.params = paramsDict
      console.log(this.pipeline)
      console.log('before pushing informaiton')
      this.pipeline.push(object)
      console.log(JSON.stringify(this.pipeline))
    },
    downloadPipeline () {
      if (this.pipeline.length === 0) {
        this.info = 'The pipeline is currently empty - cannot download!'
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
      this.pipeline = this.pipeline.filter((one) => one.id !== id)
      // var count = 0
      // for (var one in this.pipeline) {
      //   one.id = count.toString()
      //   count++
      // }
      // console.log(JSON.stringify(this.pipeline))
    },
    runPipeline () {
      if (this.pipeline.length === 0) {
        this.info = 'The pipeline is currently empty - cannot run!'
        this.additionalInfo = ''
        return
      }
      if (this.info === 'Pipeline running') {
        this.additionalInfo = 'There is a pipeline already running, please wait'
      }
      var url = 'http://127.0.0.1:5000/run'
      var data = JSON.stringify(this.pipeline)
      console.log(data)
      this.info = 'Pipeline running'
      this.axios.post(url, data, { headers: { 'Content-Type': 'application/json' } })
        .then((response) => {
          this.info = response
          console.log("We've reached here")
          console.log(this.info)
        })
        .catch((error) => {
          console.log(error.response.data)
          this.info = error.response.data.message
        })
      // var xhr = new XMLHttpRequest()
      // xhr.open('POST', url, true)
      // xhr.setRequestHeader('Content-Type', 'application/json')
      // xhr.onreadystatechange = function () {
      //   if (xhr.readyState === 4 && xhr.status === 200) {
      //     console.log('Done')
      //   }
      // }
      // xhr.send(data)
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const file = document.querySelector('input[type=file]').files[0]
      console.log(file)
      const reader = new FileReader()
      reader.addEventListener(
        'load',
        function () {
          // convert image file to base64 string
          this.pipeline = JSON.parse(reader.result)
          console.log(this.pipeline[0].nameOfStep)
          this.info = 'Pipeline uploaded successfully!'
        }.bind(this)
      )

      if (file) {
        reader.readAsText(file)
      }
    }
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,400;1,600;1,700;1,900&display=swap");
body{
    margin: 0;
}

.home {
  display: grid;
  grid-template-rows: 15vh 82vh 3vh;
  grid-template-areas: "top-bar" "content" "footer";
  font-family: "Source Sans Pro", sans-serif;
}

.content {
  grid-area: content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
}

.steps-wrapper,
.pipeline-structure {
  box-sizing: border-box;
  border: 2px solid darkgrey;
  border-top: none;
  width: 100%;
  margin: 0;
  h3{
    margin-top: 10px;
  }
}

.checkbox-wrapper {
  width: fit-content;
  display: inline;
  margin-left: 5px;
  margin-right: 5px;
}

@media (max-width: 960px) {
  .checkbox-wrapper-outer {
    display: flex;
    flex-direction: column;
  }

  .checkbox-wrapper {
    margin: 10px auto;
  }
}

label.main-labels {
  font-size: 14pt;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 15px;
}

.main-labels.spikesorting{
  border: 2px solid rgb(199, 138, 138);
  background-color: rgba(247, 107, 107, 0.1);
  &:hover {
    background-color: rgba(247, 107, 107, 0.2);
  }
}

input[type="radio"].main-labels:checked + .main-labels.spikesorting {
   background-color: rgba(247, 107, 107, 0.3);
  box-shadow: 0px 0px 0px 0.5px inset $dark-slate-grey;
}

.main-labels.preprocessing{
  border: 2px solid rgb(187, 187, 255);
  background-color: rgba(161, 161, 222, 0.1);
  &:hover {
    background-color: rgba(161, 161, 222, 0.2);
  }
}

input[type="radio"].main-labels:checked +.main-labels.preprocessing {
  background-color: rgba(161, 161, 222, 0.3);
  box-shadow: 0px 0px 0px 0.5px inset $dark-slate-grey;
}

.main-labels.postprocessing{
  border: 2px solid rgb(124, 167, 124);
  background-color: rgba(174, 247, 174, 0.1);
  &:hover {
    background-color: rgba(174, 247, 174, 0.2);
  }
}

input[type="radio"].main-labels:checked + .main-labels.postprocessing {
  background-color: rgba(174, 247, 174, 0.3);
  box-shadow: 0px 0px 0px 0.5px inset $dark-slate-grey;
}

.parameters-wrapper {
  box-sizing: border-box;
  width: 40vw;
  max-height: 30vh;
  overflow-y: scroll;
  padding: 10px;
  border: 2px solid #eee;
  text-align: center;
  margin: 20px auto;

  div {
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: start;
  }

  input{
    display: none;
  }

  input:checked + label{
    box-shadow: 0px 0px 0px 2px black;
  }

  label {
    text-align: left;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin: 2px;
    padding: 5px;
    width: 35vw;
  }

  label:hover{
    box-shadow: 0px 0px 0px 1px #777;
  }
  .description{
    color: #888;
  }

}

.params {
  width: 80%;
  border: 2px solid #eee;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  max-height: 30vh;
  overflow-y: scroll;

  .individual-labels {
    padding: 3px;
    display: grid;
    width: 100%;
    box-sizing: border-box;
    grid-template-columns: 1fr 0.5fr;
  }

  label {
    margin-right: 3px;
    justify-self: end;
    font-size: 12pt;
    text-align: right;
  }

  .input {
    justify-self: start;
  }

  button {
    background: rgba($steel-blue, 0.3);
    color: #333;
    padding: 8px;
    border: none;
    border-radius: 5px;
    font-size: 13pt;
    font-weight: 700;

    &:active {
      // background: rgba($steel-blue, 0.7);
      background: rgba($steel-blue, 0.6);
    }
  }
}

.pipeline-structure {
  ol {
    list-style: none;
    margin: 0 auto;
    text-align: center;
    max-height: 50vh;
    overflow-y: scroll;
  }
  .pipeline-structure-one-unit {
    border: 2px solid $white-smoke;
    padding: 10px;
    margin: 2px;
    border-radius: 5px;
    width: 80%;
    display: grid;
    grid-auto-flow: column;
    text-align: left;
    transition: visibility 0.2s;

    .close {
      font-weight: bold;
      border-left: 1px solid black;
      padding: 5px;
      justify-self: right;
      cursor: pointer;
    }
  }
  .pipeline-structure-one-unit.spikesorting{
    border: 2px solid rgb(199, 138, 138);
    background-color: rgba(247, 107, 107, 0.1);
  }
  .pipeline-structure-one-unit.preprocessing{
    border: 2px solid rgb(187, 187, 255);
    background-color: rgba(161, 161, 222, 0.1);
  }
  .pipeline-structure-one-unit.postprocessing{
    border: 2px solid rgb(124, 167, 124);
    background-color: rgba(174, 247, 174, 0.1);
  }
}

button,
input[type="submit"] {
  box-shadow: 0px 0px 0px 0.2px inset $dark-slate-grey;
  border-radius: 10px;
  background: rgba($steel-blue, 0.3);
  padding: 1vh;
  margin: 10px;
  font-size: 1em;
  font-family: "Source Sans Pro", sans-serif;

  &:hover {
    background: rgba($steel-blue, 0.7);
  }
}

.pipeline-body{
  border: 1px solid $dark-slate-grey;
  padding-bottom: 20px;
  width: 80%;
}

footer{
  bottom: 0;
  background-color: $steel-blue;
  font-weight: 700;
  color: $white-smoke;
}
</style>
