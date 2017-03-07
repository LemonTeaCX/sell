<template>
  <div class="cartball">
    <transition name="slide-fade">
      <div class="decrease" v-show="food.count > 0" @click="decrease($event)">
        <i class="iconfont">&#xe615;</i>
      </div>
    </transition>
    <div class="count" v-show="food.count > 0">{{food.count}}</div>
    <div class="add" @click="add($event)">
      <i class="iconfont">&#xe748;</i>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    add(event) {
      if (!event._constructed) {
        return
      }
      if (!this.food.count) {
        Vue.set(this.food, 'count', 0)
      }
      this.food.count ++
      this.$parent.$emit('ball-click', event.target)
    },
    decrease(event) {
      if (!event._constructed || !this.food.count) {
        return
      }
      this.food.count --
    }
  }
}
</script>

<style lang="scss" scoped>
.cartball {
  .slide-fade-enter-active {
    transition: all .7s ease;
  }
  .slide-fade-leave-active {
    transition: all .7s ease;
  }
  .slide-fade-enter, .slide-fade-leave-active {
    // transform: translateX(10px);
    opacity: 0;
  }
  width: 64px;
  height: 27px;
  line-height: 20px;
  font-size: 0;
  .iconfont {
    font-size: 20px;
    color: rgb(0,160,220);
  }
  .decrease {
    float: left;
    width: 20px;
  }
  .count {
    width: 24px;
    float: left;
    text-align: center;
    font-size: 12px;
    color: #93999f;
  }
  .add {
    width: 20px;
    float: right;
    margin-top: -2px;
  }
}
</style>
