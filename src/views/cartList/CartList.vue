<template>
  <div class="wrapper">
    <div class="title">我的全部购物车{{shopNameList}}</div>
    <div class="products__title">{{ shopName }}</div>
    <div class="products__wrapper">
      <div class="products__list">
          <div class="products__item" v-for="item in productList" :key="item.id">
            <img class="products__item__img" :src="item.imgUrl" />
            <div class="products__item__detail">
              <h4 class="products__item__title">{{ item.name }}</h4>
              <p class="products__item__price">
                <span><span class="products__item__yen">&yen;</span>
                {{ item.price }} x {{ item.count }} </span>
                <span class="products__item__total">
                  <span class="products__item__yen">&yen;</span>
                  {{ (item.price * item.count).toFixed(2) }}
                </span>
              </p>
            </div>
          </div>
      </div>
    </div>
  </div>
  <Docker :currentIndex="1" />
</template>

<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'
import Docker from '../../components/Docker'
export default {
  name: 'CartList',
  components: { Docker },
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { shopName, productList } = useCommonCartEffect(shopId)
    return { shopName, productList }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixin.scss";
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  background: rgb(248, 248, 248);
}
.title {
  line-height: 0.5rem;
  background: $bgColor;
  font-size: 0.16rem;
  color: $content-fontcolor;
  text-align: center;
}
.products {
  margin: 0.16rem 0.18rem 0.1rem 0.18rem;
  background: $bgColor;
  &__title {
    padding: 0.16rem;
    font-size: 0.16rem;
    color: $content-fontcolor;
  }
  &__wrapper{
    overflow-y: scroll;
    margin: 0 .18rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: .6rem;
    top: 2.6rem;
  }
  &__list {
    background: $bgColor;
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0.16rem 0.16rem 0.16rem 0.16rem;
    border-bottom: 1px solid $content-bgColor;
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }
    &__detail {
      flex: 1;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__price {
      display: flex;
      margin: 0.06rem 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $hightlight-fontColor;
    }
    &__total {
      flex: 1;
      text-align: right;
      color: #000;
    }
    &__yen {
      font-size: 0.12rem;
    }
  }
}
</style>
