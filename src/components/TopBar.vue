<template>
  <div class="top-bar">
    <div class="wrapper">
       <h1>SpikeInterface</h1>
       <a>New to this? Click here to learn more.</a>
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
}
a {
  align-self: start;
}
</style>
