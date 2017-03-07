<template>
  <div class="cartball">
    <div class="decrease" v-show="food.count > 0" @click="decrease">
      <i class="iconfont">&#xe615;</i>
    </div>
    <div class="count" v-show="food.count > 0">{{food.count}}</div>
    <div class="add" @click="add">
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
    add() {
      if (!this.food.count) {
        // this.food.count = 0
        Vue.set(this.food, 'count', 0)
      }
      this.food.count ++
      console.log(this.food.count)
    },
    decrease() {
      this.food.count --
      console.log(this.food.count)
    }
  }
}
</script>

<style lang="scss" scoped>
.cartball {
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
