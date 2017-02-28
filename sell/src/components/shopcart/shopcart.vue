<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrap">
          <div class="logo">
            <i class="iconfont">&#xe611;</i>
          </div>
        </div>
        <div class="price"></div>
        <div class="desc"></div>
      </div>
      <div class="content-right"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.shopcart {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 48px;
  .content {
    display: flex;
    height: 48px;
    color: rgba(255,255,255,0.4);
    .content-left {
      flex: 1;
      background: #141d27;
    }
    .content-right {
      flex: 0 0 105px;
      background: #2b343c;
    }
  }
}
</style>
