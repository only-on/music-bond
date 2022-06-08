<template>
  <div class="home">
    <a-carousel arrows>
      <div
        slot="prevArrow"
        style="left: 10px;zIndex: 1"
      >
        <i class="iconfont icon-yonghu" />
      </div>
      <div slot="nextArrow" style="right: 10px">
        <i class="iconfont icon-yonghu" />
      </div>
      <img v-for="(item,index) in bannerList" :key="index" :src="item" alt="">
    </a-carousel>
    <div class="usegaeScenarios">
      <div class="title title1"></div>
      <div class="slider-box">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item,index) in sliderList" :key="index">
            <div>
              <img :src="item.url" alt="">
              <div class="mask">{{item.title}}</div>
            </div>
          </swiper-slide>
        </swiper>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
      </div>
      <div class="title title2"></div>
    </div>
  </div>
</template>
<script>
import banner1 from '@/assets/images/home/banner1.png'
import banner2 from '@/assets/images/home/banner2.png'
import banner3 from '@/assets/images/home/banner3.png'
import banner4 from '@/assets/images/home/banner4.png'
import slide1 from '@/assets/images/home/slide1.png'
import slide2 from '@/assets/images/home/slide2.png'
import slide3 from '@/assets/images/home/slide3.png'
import slide4 from '@/assets/images/home/slide4.png'
import slide5 from '@/assets/images/home/slide5.png'
import slide6 from '@/assets/images/home/slide6.png'
export default {
  data () {
    return {
      bannerList: [banner1,banner2,banner3,banner4],
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 30,
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next'
        }
      },
      sliderList: [
        {
          url: slide1,
          title: '商场'
        },
        {
          url: slide2,
          title: '网咖'
        },
        {
          url: slide3,
          title: '展会'
        },
        {
          url: slide4,
          title: '智能设备'
        },
        {
          url: slide5,
          title: '广告'
        },
        {
          url: slide6,
          title: '会所'
        }
      ]
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {}
}
</script>
<style lang="less" scoped>
.home{
  .ant-carousel{
    height: 413px;
    ::v-deep .slick-slider{
      height: 100%;
       .slick-list, .slick-track{
         height: 100%;
         & div{
           height: 100%;
           img{
             height: 100%;
           }
         }
       }
       .slick-arrow{
         i {
           color: yellow;
         }
       }
    }
  }
  .usegaeScenarios{
    width: var(--center-width);
    margin: 0 auto;
    .title{
      width: 200px;
      height: 80px;
      margin: 40px auto;
      &.title1{
        background: url(~@/assets/images/home/title1.png) no-repeat;
      }
      &.title2{
        background: url(~@/assets/images/home/title2.png) no-repeat;
      }
    }
    .slider-box{
      position: relative;
      .swiper-button-prev{
        left: -100px;
      }
      .swiper-button-next{
        right: -100px;
      }
    }
    .swiper-container{
      height: 240px;
      .swiper-slide{
        position: relative;
        div{
          width: 100%;
          height: 100%;
          img{
            width: 100%;
            height: 100%;
          }
          .mask{
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(0,0,0,0.3);
            padding: 20px;
            color: #fff;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>