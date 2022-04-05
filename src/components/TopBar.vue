<template>
  <div class="top-bar">
    <a role="button" class="login">Login</a>
    <div class="wrapper">
       <h1>SpikeWeb</h1>
       <h5>New to this? Click <a href="https://parna86.github.io/spikeinterface-web-docs/" target="_blank" class="docs">here</a> to learn more.</h5>
    </div>
    <Documentation />
  </div>
</template>

<script>
import Documentation from '@/components/Documentation.vue'

export default {
  name: 'TopBar',
  data () {
    return {
      name: 'Matthias'
    }
  },
  components: {
    Documentation
  }
}
</script>

<style scoped lang="scss">
.top-bar {
  width: 100%;
  background-color: $steel-blue;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1;
}

.wrapper{
  display:grid;
  justify-content: center;
  text-align: center;
  width: 100%;
}
h1{
  align-self: center;
  font-size: 3.5em;
  margin: 0.2px;
  font-weight: 300;
  letter-spacing: 5px;
}

a.docs{
  align-self: start;
  font-size: 1.2em;
  width: 40%;
  text-decoration: none;
  align-self:center;
  color: $steel-blue;
  border: 2px solid white;
  background: white;
  transition: border-radius 0.3s;
  &:hover{
    border-radius: 10px;
  }
}

.login {
  width: 40%;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 13pt;
    border: 1px solid $white-smoke;
    border-radius: 20px;
    background: none;
    text-shadow: 1px solid black;
    box-sizing: border-box;
    color: white;
    font-weight: 700;
    padding: 10px;
    margin-left: 20px;
    // box-shadow: 4px 4px 5px 2px white, -4px -4px 5px 2px #444;
    transition: background 0.5s, border 0.4s, color 0.4s;

    &:hover{
      cursor: pointer;
      background-color: rgba(white,0.8);
      color: $steel-blue;
    }
}

h5{
  font-size: 1.1em;
  margin: 0;
}
</style>
