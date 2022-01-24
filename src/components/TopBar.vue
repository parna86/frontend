<template>
  <div class="top-bar">
    <h1>SpikeInterface GUI</h1>
    <LoginButton :username='name' />
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
  background-color: aliceblue;
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
