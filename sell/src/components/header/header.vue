<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description + '/' + seller.deliveryTime + '分钟送达'}}
        </div>
        <div v-if="seller.supports" class="supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="supports-count" v-if="seller.supports" @click="showDetail">
        {{seller.supports.length+'个'}}
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <div class="bulletin-title"></div>
      <div class="bulletin-text" v-if="seller.bulletin">{{seller.bulletin}}</div>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%"/>
    </div>
    <transition name = "fade">
      <div class="detail" v-show="detailShow">
        <div class="detail-wrapper">
          <div class="detail-main">
            <h1>{{seller.name}}</h1>
            <star class="star" :size="48" :score="seller.score"></star>
            <!-- <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div> -->
            <linetitle :tit="sale"></linetitle>
            <ul class="supports" v-if="seller.supports">
              <li class="support-item" v-for="item in seller.supports">
                <span class="icon" :class="classMap[item.type]"></span>
                <span class="text">{{item.description}}</span>
              </li>
            </ul>
            <linetitle :tit="notice"></linetitle>
            <div class="bulletin">{{seller.bulletin}}</div>
          </div>
        </div>
        <div class="detail-close" @click="hideDetail">X</div>
      </div>
    </transition>
  </div>
</template>

<script>
import star from 'components/star/star'
import linetitle from 'components/linetitle/linetitle'

const SALE_MSG = '优惠信息'
const NOTICE = '商家公告'
export default {
  data() {
    return {
      detailShow: false,
      sale: SALE_MSG,
      notice: NOTICE
    }
  },
  components: {
    star,
    linetitle
  },
  methods: {
    showDetail() {
      this.detailShow = true
    },
    hideDetail() {
      this.detailShow = false
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  props: {
    seller: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/sass/index.scss';
.header {
  position: relative;
  color: #fff;
  background: rgba(7,17,27,0.5);
  overflow: hidden;
  .content-wrapper {
    padding: 24px 12px 18px 24px;
    overflow: hidden;
    position: relative;
    .avatar {
      float: left;
      border-radius: 2px;
      overflow: hidden;
      img {
        display: block;
      }
    }
    .content {
      float: left;
      margin-left: 16px;
      line-height: 12px;
      .title {
        overflow: hidden;
        .brand {
          float: left;
          width: 30px;
          height: 18px;
          @include bg-img (brand);
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }
        .name {
          float: left;
          margin-left: 6px;
          font-size: 16px;
          font-weight: bold;
          line-height: 18px;
        }
      }
      .description {
        margin: 8px 0px 10px;
        font-size: 12px;
      }
      .supports {
        overflow: hidden;
        .icon {
          float: left;
          width: 12px;
          height: 12px;
          &.decrease {
              @include bg-img ('decrease_1')
          }
          &.discount {
              @include bg-img ('discount_1')
          }
          &.guarantee {
              @include bg-img ('guarantee_1')
          }
          &.invoice {
              @include bg-img ('invoice_1')
          }
          &.special {
              @include bg-img ('special_1')
          }
          background-size: 12px 12px;
          background-repeat: no-repeat;
        }
        .text {
          float: left;
          margin-left: 8px;
          font-size: 10px;
        }
      }
    }
    .supports-count {
        width: 40px;
        height: 24px;
        background-color: rgba(0,0,0,0.2);
        border-radius: 12px;
        text-align: center;
        font-size: 10px;
        line-height: 24px;
        position: absolute;
        right: 18px;
        bottom: 18px;
      }
  }
  .bulletin-wrapper {
    height: 28px;
    background-color: rgba(7,17,27,0.2);
    padding: 0px 12px;
    line-height: 28px;
    font-size: 10px;
    overflow: hidden;
    .bulletin-title {
      float: left;
      margin-top: 8px;
      width: 22px;
      height: 12px;
      @include bg-img (bulletin);
      background-size: 22px 12px;
      background-repeat: no-repeat;
    }
    .bulletin-text {
      float: left;
      width: 85%;
      margin-left: 8px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(10px);
    z-index: -1;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .detail {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: rgba(7,17,27,0.8);
    backdrop-filter: blur(10px);
    .detail-wrapper {
      min-height: 100%;
      width: 100%;
      .detail-main {
        margin-top: 64px;
        padding-bottom: 64px;
        h1 {
          font-size: 16px;
          font-weight: 700;
          line-height: 16px;
          text-align: center;
        }
        .star {
          margin-top: 12px;
          text-align: center;
        }
        .supports {
          width: 80%;
          margin: 0 auto;
          font-size: 12px;
          line-height: 16px;
          .support-item {
            height: 16px;
            margin-bottom: 12px;
            .icon {
              width: 16px;
              height: 16px;
              float: left;
              background-size: 100% 100%;
              background-repeat: no-repeat;
              &.decrease {
                @include bg-img('decrease_2');
              }
              &.discount {
                @include bg-img('discount_2');
              }
              &.guarantee {
                @include bg-img('guarantee_2');
              }
              &.invoice {
                @include bg-img('invoice_2');
              }
              &.special {
                @include bg-img('special_2');
              }
            }
            .text {
              float: left;
              margin-left: 6px;
            }
          }
        }
        .bulletin {
          width: 80%;
          margin: 28px auto;
          font-size: 12px;
          line-height: 24px;
        }
      }
    }
    .detail-close {
      width: 32px;
      height: 32px;
      margin: -128px auto 0;
      text-align: center;
      line-height: 32px;
      clear: both;
      font-size: 32px;
      color: rgba(255,255,255,0.5);
    }
  }
}
</style>
