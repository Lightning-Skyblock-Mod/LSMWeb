<template>
  <div id="loading">
    <i class="fa-solid fa-circle-notch fa-spin" />
  </div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style>
#loading {
  position: absolute;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  background-color: #181818;
  text-align: center;
  line-height: 100vh;
}
.i {
  position: center;
  margin: 20% auto auto;
  color: lightblue;
}
</style>