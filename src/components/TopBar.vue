<template>
  <div class="top-bar">
    <h1>SpikeInterface - the web application</h1>
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
  grid-template-rows: 1fr;
}

body{
    margin: 0;
}

h1{
  align-self: center;
  justify-self: end;
}

</style>
