<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrap">
          <div class="logo" :class="{'has-food':totalCount}">
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
  </div>
</template>

<script>
export default {
  props: {
    selectFoods: {
      type: Array,
      default() {
        return [
          {
            price: 7,
            count: 3
          }
        ]
      }
    },
    deliveryPrice: {
      type: Number,
      default: 4
    },
    minPrice: {
      type: Number,
      default: 20
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
}
</style>
