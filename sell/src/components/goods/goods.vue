<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul class="menu">
        <li class="menu-item" v-for="goodsItem in goods">
          <span class="text">
            <span class="icon"></span>
            {{goodsItem.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper"></div>
  </div>
</template>

<script>
const ERR_OK = 0
export default {
  data() {
    return {
      goods: ''
    }
  },
  created() {
    this.$http.get('/api/goods').then(response => {
      response = response.body
      if (response.errno !== ERR_OK) return
      this.goods = response.data
      console.log(this.goods)
    }, response => {
      console.log('请求goods数据失败')
    })
  }
}
</script>

<style lang="scss" scoped>
.goods {
  display: flex;
  width: 100%;
  position: absolute;
  top: 174px;
  bottom: 46px;
  .menu-wrapper {
    flex: 0 0 80px;
    font-size: 12px;
    .menu-item {
      height: 54px;
      background: #f3f5f7;
      padding: 0 12px;
      text-align: center;
      color: rgb(77,85,93);
      .text {
        height: 32px;
        padding-top: 20px;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        display: block;
      }
    }
  }
  .foods-wrapper {
    flex: 1;
    background: green;
  }
}
</style>
