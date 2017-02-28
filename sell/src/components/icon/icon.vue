<template>
  <span class="iconImg" :class="classMap[type]"></span>
</template>

<script>
export default {
  props: {
    type: {
      type: Number
    },
    num: {
      type: Number
    }
  },
  created() {
    this.classMap = ['decrease' + this.num, 'discount' + this.num, 'special' + this.num, 'invoice' + this.num, 'guarantee' + this.num]
  }
}
</script>

<style lang="scss" scoped>
@import "../../common/sass/mixin.scss";

.iconImg {
  float: left;
  width: 12px;
  height: 12px;
  &.decrease1 {
      @include bg-img ('decrease_1')
  }
  &.decrease2 {
      @include bg-img ('decrease_2')
  }
  &.decrease3 {
      @include bg-img ('decrease_3')
  }
  &.discount1 {
      @include bg-img ('discount_1')
  }
  &.discount2 {
      @include bg-img ('discount_2')
  }
  &.discount3 {
      @include bg-img ('discount_3')
  }
  &.guarantee1 {
      @include bg-img ('guarantee_1')
  }
  &.guarantee2 {
      @include bg-img ('guarantee_2')
  }
  &.guarantee3 {
      @include bg-img ('guarantee_3')
  }
  &.invoice1 {
      @include bg-img ('invoice_1')
  }
  &.invoice2 {
      @include bg-img ('invoice_2')
  }
  &.invoice3 {
      @include bg-img ('invoice_3')
  }
  &.special1 {
      @include bg-img ('special_1')
  }
  &.special2 {
      @include bg-img ('special_2')
  }
  &.special3 {
      @include bg-img ('special_3')
  }
  background-size: 12px 12px;
  background-repeat: no-repeat;
}
</style>
