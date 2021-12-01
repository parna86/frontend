<template>
  <button>Login {{ username }}</button>
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
<style scoped lang="scss">
button{
  background-color: green;
  justify-self: flex-end;
}
</style>
