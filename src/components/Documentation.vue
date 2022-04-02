<template>
  <div class="button">
    <a target="_blank" href="https://spikeinterface.readthedocs.io/en/latest/overview.html">SpikeInterface docs</a>
    <a target="_blank" href="https://github.com/SpikeInterface">SpikeInterface GitHub</a>
  </div>
</template>

<script>
export default {
  name: 'Documentation',
  props: {
    username: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button{
  display:grid;
  grid-template-rows: 1;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  width: 100%;
  justify-self: end;
  justify-items: center;
  align-items: center;

  a{
    height: 40%;
    width: 80%;
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
    // box-shadow: 4px 4px 5px 2px white, -4px -4px 5px 2px #444;
    transition: background 0.5s, border 0.4s, color 0.4s;

    &:hover{
      cursor: pointer;
      background-color: rgba(white,0.8);
      border: 2px solid $white-smoke;
      color: $steel-blue;
    }
  }
}
</style>
