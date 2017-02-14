<template>
  <div class="title">
    <div class="line"></div>
    <div class="text">{{tit}}</div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: {
    tit: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  width: 80%;
  display: flex;
  margin: 28px auto 24px;
  .line {
    flex: 1;
    height: 1px;
    margin-top: 5px;
    background: rgba(255,255,255,0.2);
  }
  .text {
    flex: 1;
    padding: 0 12px;
    text-align: center;
  }
}
</style>
