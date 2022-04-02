<template>
  <div class="top-bar">
    <div class="wrapper">
       <h1>SpikeWeb</h1>
       <h3>New to this? Click <a href="https://parna86.github.io/spikeinterface-web-docs/" target="_blank">here</a> to learn more.</h3>
    </div>
    <LoginButton />
  </div>
</template>

<script>
import LoginButton from '@/components/LoginButton.vue'
export default {
  name: 'TopBar',
  data () {
    return {
      name: 'Matthias'
    }
  },
  components: {
    LoginButton
  }
}
</script>

<style lang="scss">
.top-bar {
  width: 100%;
  background-color: $steel-blue;
  color: $white-smoke;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "left right";
}

body{
    margin: 0;
}

.wrapper{
  display:grid;
  justify-content: center;
  text-align: center;
  width: 100%;
}
h1{
  align-self: center;
  font-size: 3em;
  margin: 0.2px;
}
a {
  align-self: start;
  font-size: 1.2em;
  text-decoration: none;
  color: $steel-blue;
  background: #ddd;
  padding-left: 2px;
  padding-right: 2px;
  transition: border-radius 0.3s;
}

a:hover{
  border-radius: 10px;
}
h3{
  font-size: 1.2em;
  margin: 0;
}
</style>
