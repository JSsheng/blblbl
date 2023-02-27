<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="app">
      <div class="son_1"></div>
      <div class="son_2"></div>
      <div class="son_3"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.app {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: stretch;
  .son_1 {
    flex: 1;
    width: 100px;
    height: auto;
    background-color: blue;
  }

  .son_2 {
    flex: 1;
    width: 100px;
    height: auto;
    background-color: red;
  }

  .son_3 {
    flex: 1;
    width: 100px;
    height: 400px;
    background-color: pink;
  }
}
</style>
