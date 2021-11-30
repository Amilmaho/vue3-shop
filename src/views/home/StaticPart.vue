<template>
  <div class="position">
    <span class="iconfont position_icon">&#xe619;</span>
    广州大学城南
    <span class="iconfont position_notice">&#xe811;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe699;</span>
    <span class="search_text"></span>
    啦啦啦啦
  </div>
  <div class="banner">
    <img class="banner_img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" />
  </div>

  <div class="icons">
    <div class="icons_item" v-for="item in staticPartList" :key="item.title">
      <img class="icons_item_img" :src="`http://www.dell-lee.com/imgs/vue3/${item.imgUrl}.png`" />
      <p class="icons_item_desc">{{ item.title }}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const staticPartList = [
      { imgUrl: '菜市场', title: '菜市场' },
      { imgUrl: '超市', title: '超市便利' },
      { imgUrl: '水果店', title: '水果店' },
      { imgUrl: '鲜花', title: '鲜花绿植' },
      { imgUrl: '医药健康', title: '医药健康' },
      { imgUrl: '家居', title: '家居时尚' },
      { imgUrl: '蛋糕', title: '烘焙蛋糕' },
      { imgUrl: '签到', title: '签到' },
      { imgUrl: '大牌免运', title: '大牌免运' },
      { imgUrl: '红包', title: '红包套餐' }
    ]
    return { staticPartList }
  }
}
</script>

<style lang="scss">
@import '../../style/viriables.scss';
@import '../../style/mixin.scss';

.position {
  overflow: hidden;
  position: relative;
  // margin-right: 0.24rem;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  .position_icon {
    position: relative;
    top: 0.01rem;
    // margin-right: 0.08rem;
    font-size: 0.2rem;
  }
  .position_notice {
    position: absolute;
    right: 0;
    top: 0.17rem;
    font-size: 0.2rem;
  }
  color: $content-fontcolor;
}
.search {
  margin-bottom: 0.12rem;
  line-height: 0.32rem;
  background: $search-bgColor;
  color: $search-fontColor;
  border-radius: 0.16rem;
  font-size: 0.14rem;
  .iconfont {
    position: relative;
    top: 0.03rem;
    padding: 0 0.18rem 0 0.16rem;
    display: inline-block;
    font-size: 0.2rem;
  }
  &_text {
    display: inline-block;
    font-size: 0.14rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &_img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &_item {
    width: 20%;
    &_img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &_desc {
      margin: 0.06rem 0 0.16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap {
  margin: 0 -0.18rem;
  height: 0.1rem;
  background-color: $content-bgColor;
}
</style>
