<template>
  <div class="wrapper">
    <TopArea />
    <ProductList />
    <Order/>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'
import TopArea from './TopArea'
import ProductList from './ProductList'
import Order from './Order'
export default {
  name: 'OrderConfirmation',
  components: { TopArea, ProductList, Order },
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { shopName, calculations, productList } = useCommonCartEffect(shopId)
    return { shopName, calculations, productList }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixin.scss";
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #eee;
  overflow-y: scroll;
}
</style>
