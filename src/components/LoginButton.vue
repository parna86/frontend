<template>
  <div class="button">
    <a>Login</a>
    <a target="_blank" href="https://spikeinterface.readthedocs.io/en/latest/overview.html">Official documentation</a>
    <a target="_blank" href="https://github.com/SpikeInterface">GitHub organisation</a>
  </div>
</template>

<script>
export default {
  name: 'LoginButton',
  props: {
    username: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.button{
  background-color: $white-smoke;
  display:grid;
  color: black;
  height: 100%;
  width: 50%;
  justify-self: end;
  align-self: center;
  justify-items: center;
  align-items: center;

  a{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 14pt;
    border: 1px solid rgba(black, 0.2);
    box-sizing: border-box;

    &:hover{
      background-color: #ccc;
      cursor: pointer;
    }
  }
}
</style>
