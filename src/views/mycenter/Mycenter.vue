<template>
<div class="warpper">
  <div class="top">
    <div class="top__receiver">
      <div class="top__receiver__img"></div>
      <div class="top__receiver__title">热心市民李先生</div>
      <div class="top__receiver__id">ID:1069643013</div>
    </div>
    <div class="top__bottom">
      <div class="top__content"></div>
      <div class="top__content"></div>
      <div class="top__content"></div>
      <div class="top__content"></div>
    </div>
  </div>
  <div class="Mylink">
    <div class="Mylink__wallet">我的钱包</div>
    <div class="Mylink__address">我的地址</div>
    <div class="Mylink__staff">客服与帮助</div>
  </div>
  <Docker :currentIndex="3" />
</div>
</template>

<script>
import Docker from '../../components/Docker'

export default {
  name: 'Mycenter',
  components: { Docker },
  setup () {
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
.top {
  position: relative;
  height: 2.5rem;
  background-image: linear-gradient(239deg, #3A6FF3 0%, #50C7FB 100%);
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
}
</style>
