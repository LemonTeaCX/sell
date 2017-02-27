<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul class="menu">
        <li class="menu-item" :class="{'current':currentIndex===index}" v-for="(goodsItem,index) in goods" @click="menuClick(index,$event)">
          <span class="text">
            <icon v-if="goodsItem.type !== -1" class="icon" :type="goodsItem.type" :num="3"></icon>
            {{goodsItem.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li class="foods-list foods-list-hook" v-for="list in goods">
          <h1>{{list.name}}</h1>
          <ul>
            <li class="foods-item" v-for="foods in list.foods">
              <div class="foods-icon">
                <img :src="foods.icon" width="57" height="57">
              </div>
              <div class="content">
                <h2>{{foods.name}}</h2>
                <p class="foods-description" v-show="foods.description">{{foods.description}}</p>
                <div class="sell-info">
                  <span class="sellCount">月售{{foods.sellCount}}份</span>
                  <span class="rating">好评率{{foods.rating}}</span>
                </div>
                <div class="sell-price">
                  <span class="price">￥<span class="num">{{foods.price}}</span></span>
                  <span v-show="foods.oldPrice" class="oldPrice">￥{{foods.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import icon from 'components/icon/icon'
import BScroll from 'better-scroll'

const ERR_OK = 0
export default {
  data() {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0
    }
  },
  created() {
    this.$http.get('/api/goods').then(response => {
      response = response.body
      if (response.errno !== ERR_OK) return
      this.goods = response.data
      console.log(this.goods)
      this.$nextTick(() => {
        this._initScroll()
        this._calculateHeight()
      })
    }, response => {
      console.log('请求goods数据失败')
    })
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  components: {
    icon
  },
  methods: {
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        probeType: 3
      })
      this.foodsScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _calculateHeight() {
      let foodsList = this.$refs.foodsWrapper.getElementsByClassName('foods-list-hook')
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < foodsList.length; i++) {
        height += foodsList[i].clientHeight
        this.listHeight.push(height)
      }
    },
    menuClick(index, event) {
      if (!event._constructed) {
        return
      }
      this.foodsScroll.scrollTo(0, -this.listHeight[index], 300)
    }
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        if (!this.listHeight[i + 1] || (this.scrollY >= this.listHeight[i] && this.scrollY < this.listHeight[i + 1])) {
          return i
        }
      }
      return 0
    }
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
  overflow: hidden;
  .menu-wrapper {
    flex: 0 0 80px;
    font-size: 12px;
    .menu-item {
      display: table;
      width: 56px;
      height: 54px;
      padding: 0 12px;
      background: #f3f5f7;
      &.current {
        position: relative;
        z-index: 10;
        margin-top: -1px;
        background: #fff;
        font-weight: 700;
      }
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
    h1 {
      height: 26px;
      padding-left: 12px;
      background: #f3f5f7;
      border-left: 2px solid #d9dde1;
      line-height: 26px;
      font-size: 12px;
      color: rgb(147,153,159);
    }
    .foods-item {
      background: #fff;
      padding: 18px 0;
      margin: 0 18px;
      display: flex;
      border-bottom: 1px solid rgba(7,17,27,0.1);
      &:last-child {
        border: none;
      }
      .foods-icon {
        flex: 0,0,57px;
      }
      .content {
        flex: 1;
        padding-left: 10px;
        font-size: 10px;
        line-height: 10px;
        color: rgb(147,153,159);
        h2 {
          margin-top: 2px;
          font-size: 14px;
          line-height: 14px;
          color: rgb(7,17,27);
        }
        .foods-description {
          margin-top: 8px;
        }
        .sell-info {
          margin-top: 8px;
        }
        .sell-price {
          margin-top: 8px;
          line-height: 24px;
          font-weight: normal/700;
          .price {
            color: red;
            .num {
              font-size: 14px;
            }
          }
          .oldPrice {
            text-decoration: line-through;
          }
        }
      }
    }
  }
}
</style>
