<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrap">
          <div class="logo" :class="{'has-food':totalCount}" @click="shopcartDetail">
            <i class="iconfont">&#xe611;</i>
          </div>
          <div class="count" v-show="totalCount">{{totalCount}}</div>
        </div>
        <div class="price" :class="{'light-price':totalPrice > 0}">￥{{totalPrice}}</div>
        <div class="line"></div>
        <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
      </div>
      <div class="content-right">
        <span class="distribution" :class="{'payment':(minPrice - totalPrice) <= 0}">{{payText}}</span>
      </div>
    </div>
    <transition name="shoplist-fade">
      <div class="shoplist" v-show="showList">
        <div class="list-header">
          <span class="cart">购物车</span>
          <span class="clear" @click="clear">清空</span>
        </div>
        <div class="list-content" ref="listWrapper">
          <ul>
            <li class="list-item" v-for="selectFood in selectFoods">
              <span class="food-name">{{selectFood.name}}</span>
              <span class="food-price">￥{{selectFood.price * selectFood.count}}</span>
              <cartball :food="selectFood" class="cartball"></cartball>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <transition name="backdrop-fade">
      <div class="backdrop" v-show="showList" @click="shopcartDetail"></div>
    </transition>
  </div>
</template>

<script>
import cartball from 'components/cartball/cartball'
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      showList: false
    }
  },
  components: {
    cartball
  },
  created() {
    this.$parent.$on('ball-click', this.drop)
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  methods: {
    shopcartDetail() {
      if (this.totalCount === 0) return
      this.showList = !this.showList
    },
    drop(target) {
      console.log(target)
    },
    _initScroll() {
      this.listScroll = new BScroll(this.$refs.listWrapper, {
        click: true
      })
    },
    clear() {
      this.selectFoods.forEach(food => {
        food.count = 0
      })
      this.showList = false
    }
  },
  props: {
    selectFoods: {
      type: Array,
      default() {
        return []
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  computed: {
    totalPrice() {
      let total = 0
      this.selectFoods.forEach((food) => {
        total += food.price * food.count
      })
      return total
    },
    totalCount() {
      let count = 0
      this.selectFoods.forEach((food) => {
        count += food.count
      })
      return count
    },
    payText() {
      if (this.totalCount === 0) {
        return `￥${this.minPrice}元起送`
      } else if ((this.minPrice - this.totalPrice) > 0) {
        return `还差￥${this.minPrice - this.totalPrice}元`
      } else {
        return '去结算'
      }
    }
  }
}
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
    line-height: 48px;
    position: relative;
    z-index: 200;
    .content-left {
      flex: 1;
      background: #141d27;
      .logo-wrap {
        float: left;
        width: 56px;
        height: 56px;
        background: #141d27;
        border-radius: 50%;
        position: relative;
        top: -8px;
        left: 12px;
        .logo {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #2b343c;
          text-align: center;
          line-height: 44px;
          &.has-food {
            background: rgb(0,160,220);
            .iconfont {
              color: #fff;
            }
          }
          .iconfont {
            font-size: 24px;
          }
        }
        .count {
          position: absolute;
          right: 0;
          top: 0;
          width: 24px;
          height: 16px;
          background: rgb(240,20,20);
          color: #fff;
          font-size: 12px;
          line-height: 16px;
          text-align: center;
          border-radius: 8px;
        }
      }
      .price {
        float: left;
        margin-left: 12px;
        font-size: 16px;
        color: rgba(255,255,255,0.4);
        &.light-price {
          color: #fff;
          font-weight: bold;
        }
      }
      .line {
        float: left;
        margin: 0 12px;
        width: 1px;
        height: 24px;
        background: rgba(255,255,255,0.1);
        margin-top: 12px;
      }
      .desc {
        float: left;
        font-size: 12px;
      }
    }
    .content-right {
      flex: 0 0 105px;
      background: #2b343c;
      font-size: 12px;
      text-align: center;
      .distribution {
        display: block;
        width: 100%;
        height: 100%;
        &.payment {
          background: #00b43c;
          color: #fff;
        }
      }
    }
  }
  .shoplist-fade-enter-active, .shoplist-fade-leave-active {
    transition: all .5s
  }
  .shoplist-fade-enter, .shoplist-fade-leave-active {
    opacity: 0;
    transform: translate(0, 100%);
  }
  .shoplist {
    z-index: 100;
    width: 100%;
    position: fixed;
    bottom: 48px;
    color: rgb(7,17,27);
    .list-header {
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      background: #f3f5f7;
      padding: 0 18px;
      font-size: 14px;
      line-height: 40px;
      border-bottom: 1px solid rgba(7,17,27,0.1);
      position: relative;
      .clear {
        position: absolute;
        right: 18px;
        top: 0;
        font-size: 12px;
        color: rgb(0,160,200)
      }
    }
    .list-item {
      box-sizing: border-box;
      width: 100%;
      height: 48px;
      background: #fff;
      padding: 0 18px;
      line-height: 48px;
      position: relative;
      border-bottom: 1px solid rgba(7,17,27,0.1);
      .food-name {
        display: inline-block;
        font-size: 14px;
      }
      .food-price {
        position: absolute;
        right: 100px;
        display: inline-block;
        font-size: 14px;
        color: rgb(240,20,20);
      }
      .cartball {
        position: absolute;
        right: 18px;
        display: inline-block;
        line-height: 48px;
      }
    }
  }
  .backdrop-fade-enter-active, .backdrop-fade-leave-active {
    transition: all .5s
  }
  .backdrop-fade-enter, .backdrop-fade-leave-active {
    opacity: 0;
    // transform: translate(0, 100%);
  }
  .backdrop {
    position: fixed;
    z-index: 50;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(7,17,27,0.6);
  }
}
</style>
