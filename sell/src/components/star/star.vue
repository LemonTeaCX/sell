<template>
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" class="star-item" :class="itemClass"></span>
  </div>
</template>

<script>
const LEN = 5
const STAR_ON = 'on'
const STAR_HALF = 'half'
const STAR_OFF = 'off'
export default {
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType() {
      return 'star-' + this.size
    },
    itemClasses() {
      let stars = []
      let onNum = Math.floor(this.score)
      let halfNum = (this.score - onNum) >= 0.5 ? 1 : 0
      for (let i = 0; i < onNum; i++) {
        stars.push(STAR_ON)
      }
      if (halfNum === 1) stars.push(STAR_HALF)
      for (let i = 0; i < (LEN - onNum - halfNum); i++) {
        stars.push(STAR_OFF)
      }
      return stars
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/sass/mixin.scss';
.star {
  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }
  &.star-48 {
    .star-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 100% 100%;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        @include bg-img('star48_on');
      }
      &.half {
        @include bg-img('star48_half');
      }
      &.off {
        @include bg-img('star48_off');
      }
    }
  }
  &.star-36 {
    .star-item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 100% 100%;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        @include bg-img('star36_on');
      }
      &.half {
        @include bg-img('star36_half');
      }
      &.off {
        @include bg-img('star36_off');
      }
    }
  }
  &.star-24 {
    .star-item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 100% 100%;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        @include bg-img('star24_on');
      }
      &.half {
        @include bg-img('star24_half');
      }
      &.off {
        @include bg-img('star24_off');
      }
    }
  }
}
</style>
