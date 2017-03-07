<template>
  <div id="app">
    <v-header :seller='seller'></v-header>
    <div class="tab">
    	<div class="tab-item">
			<router-link to="/goods">商品</router-link>
    	</div>
    	<div class="tab-item">
			<router-link to="/ratings">评论</router-link>
    	</div>
    	<div class="tab-item">
			<router-link to="/seller">商家</router-link>
    	</div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import header from './components/header/header'
const ERR_OK = 0

export default {
  data() {
    return {
      seller: {}
    }
  },
  components: {
    'v-header': header
  },
  created() {
    this.$http.get('/api/seller').then(response => {
      response = response.body
      if (response.errno !== ERR_OK) return
      this.seller = response.data
      console.log(this.seller)
    }, response => {
      console.log('请求seller数据失败')
    })
  }
}
</script>

<style lang="scss" scoped>
@import './common/sass/index';
	#app {
		.tab {
			display: flex;
			width: 100%;
			height: 40px;
			line-height: 40px;
			text-align: center;
			font-size: 14px;
			@include border-1px();
			.tab-item {
				flex: 1;
				a {
					display: block;
					color: rgb(77,85,93);
					&.active {
						color: rgb(240,20,20);
					}
				}
			}
		}
	}
</style>
