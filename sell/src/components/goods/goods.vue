<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul class="menu">
        <li class="menu-item" v-for="goodsItem in goods">
          <span class="text">
            <icon v-if="goodsItem.type !== -1" class="icon" :type="goodsItem.type" :num="3"></icon>
            {{goodsItem.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper"></div>
  </div>
</template>

<script>
import icon from 'components/icon/icon'

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
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  components: {
    icon
  }
}
</script>

<style lang="scss" scoped>
@import "../../common/sass/mixin.scss";
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
      display: table;
      width: 56px;
      height: 54px;
      padding: 0 12px;
      background: #f3f5f7;
      .text {
        text-align: center;
        vertical-align: middle;
        text-align: center;
        display: table-cell;
        border-bottom: 1px solid rgba(7,17,27,0.1);
      }
    }
  }
  .foods-wrapper {
    flex: 1;
    background: green;
  }
}
</style>
