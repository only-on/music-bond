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
    <div class="content">
      <!-- 用途场景 -->
      <div class="title title1"></div>
      <div class="slider-box1">
        <swiper :options="swiperOption1" ref="mySwiper1">
          <swiper-slide v-for="(item,index) in sliderList" :key="index">
            <div>
              <img :src="item.url" alt="">
              <div class="mask">{{item.title}}</div>
            </div>
          </swiper-slide>
        </swiper>
          <div class="swiper-button-prev swiper-button-prev1" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-next1" slot="button-next"></div>
      </div>
      <div class="title title2"></div>
      <!-- 音乐人 -->
      <div class="musicPeople">
        <div class="title title3"></div>
        <div class="slider-box2">
          <swiper :options="swiperOption2" ref="mySwiper2">
            <swiper-slide v-for="(item,index) in sliderList1" :key="index">
              <div>
                <img :src="item.url" alt="">
                <span>{{item.title}}</span>
                <span>{{item.author}}</span>
              </div>
            </swiper-slide>
          </swiper>
            <div class="swiper-button-prev swiper-button-prev2" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-next2" slot="button-next"></div>
        </div> 
      </div>
      <!-- 音乐合伙人 -->
      <div class="title title4"></div>
      <div class="musicPartner">
        <div class="part1">
          <div class="top"></div>
          <div class="bottom">
            <h3>水星乐队-无名之辈</h3>
            <div>
              <span>演唱：流川</span>
              <span>作曲：小川儿</span>
              <span>作词：江影</span>
              <span>和声：小木乐队</span>
            </div>
            <div>
              <span>发行时间： 2019-06-28</span>
              <div class="labels">
                <span>摇滚</span>
                <span>流行</span>
              </div>
            </div>
            <p>
              简介：“无名之辈/我是谁/忘了谁/也无所谓/继续追/谁的光荣不是伴着眼泪”，宛如一场逐梦少年的热血宣誓。输或赢，被质疑还是被认可，都比不过心怀热爱，因为人生最精彩的不是实现梦想的瞬间，而是坚持梦想的过程。在这个夏天，让我们一起被这群热血少年们点燃。
            </p>
          </div>
        </div>
        <div class="part2">
          <div class="customTitle">乐队成员</div>
          <a-row :gutter="16">
            <a-col :span="13">
              <div class="left">
                <div>
                  <img src="" alt="">
                  <div class="info">
                    <span>MYRCURY</span><br>
                    <span>水星乐队</span>
                  </div>
                </div>
                <h3>陈玉康</h3>
                <div class="position">主唱兼队长</div>
                <pre>音乐邦音乐合伙人之一
从事音乐行业20年之久，
有丰富的乐理知识和
音乐鉴赏能力。</pre>
              </div>
              <div class="right"></div>
            </a-col>
            <a-col :span="11">
                <div class="slider-box3">
                  <swiper :options="swiperOption3" ref="mySwiper3">
                    <swiper-slide v-for="(item,index) in sliderList3" :key="index">
                      <div>
                        <img :src="item.url" alt="">
                        <div class="mask">{{item.title}}</div>
                      </div>
                      <div>
                        <img :src="item.url" alt="">
                        <div class="mask">{{item.title}}</div>
                      </div>
                    </swiper-slide>
                  </swiper>
                    <div class="swiper-button-prev swiper-button-prev3" slot="button-prev"></div>
                    <div class="swiper-button-next swiper-button-next3" slot="button-next"></div>
                    <div class="swiper-pagination" slot="pagination"></div>
                </div> 
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
    <div class="title5"></div>
    <div class="content">
      <div class="title title6"></div>
      <div class="box6">
        <a-row :gutter="24">
          <a-col :span="20">
             <div class="left">
               <span>进入直播间</span>
             </div>
          </a-col>
          <a-col :span="4">
            <div class="right">
              <div v-for="(item,index) in group6Arr" :key="index">
                <img :src="item.url" alt=""></div>
            </div>
          </a-col>
        </a-row>
        <div class="bottom">
          <img src="../../assets/images/home/group64.png" alt="">
          <div>
            <h3>杰森.沃玛</h3>
            <div class="line"></div>
            <p>摇滚乐演唱8年，曾为俄罗斯佩琦合唱团团员，
擅长欧美雷鬼风格摇滚乐表现，</p>
          </div>
          <span>进入直播间</span>
          <div class="all">
            <span>全部</span>
            <span>></span>
          </div>
        </div>
      </div>
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
import slide31 from '@/assets/images/home/slide31.png'
import slide32 from '@/assets/images/home/slide32.png'
import slide33 from '@/assets/images/home/slide33.png'
import slide34 from '@/assets/images/home/slide34.png'
import slide35 from '@/assets/images/home/slide35.png'
import peopleSmall from '@/assets/images/home/peopleSmall.png'
import group62 from '@/assets/images/home/group62.png'
import group63 from '@/assets/images/home/group63.png'
export default {
  data () {
    return {
      bannerList: [banner1,banner2,banner3,banner4],
      swiperOption1: {
        slidesPerView: 5,
        spaceBetween: 30,
        navigation: {
          prevEl: '.swiper-button-prev1',
          nextEl: '.swiper-button-next1'
        }
      },
      swiperOption2: {
        slidesPerView: 5,
        spaceBetween: 30,
        navigation: {
          prevEl: '.swiper-button-prev2',
          nextEl: '.swiper-button-next2'
        }
      },
      swiperOption3: {
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
          prevEl: '.swiper-button-prev3',
          nextEl: '.swiper-button-next3'
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
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
      ],
      sliderList1: [
        {
          url: slide31,
          title: '此刻只有你共我',
          author: 'Hulu Boyz'
        },
        {
          url: slide32,
          title: '芥末WASABI',
          author: '李大奔'
        },
        {
          url: slide33,
          title: '全新的我',
          author: '孔晨羽'
        },
        {
          url: slide34,
          title: '对不起拜拜',
          author: '卢西luci '
        },
        {
          url: slide35,
          title: '你还想他',
          author: '黄韦纶'
        }
      ],
      sliderList3: [
        {
          url: peopleSmall,
          title: '经纪人'
        },
        {
          url: peopleSmall,
          title: '吉他手'
        },
        {
          url: peopleSmall,
          title: '贝斯手'
        }
      ],
      group6Arr: [
        {
          url: group62
        },
        {
          url: group63
        },
        {
          url: group62
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
  .content{
    width: var(--center-width);
    margin: 0 auto;
    .title{
      width: 200px;
      height: 95px;
      margin: 40px auto;
      &.title1{
        background: url(~@/assets/images/home/title1.png) no-repeat;
      }
      &.title2{
        background: url(~@/assets/images/home/title2.png) no-repeat;
      }
      &.title3{
        background: url(~@/assets/images/home/title3.png) no-repeat;
      }
      &.title4{
        background: url(~@/assets/images/home/title4.png) no-repeat;
      }
      &.title6{
        background: url(~@/assets/images/home/title6.png) no-repeat;
      }
    }
    .slider-box1, .slider-box2{
      position: relative;
        .swiper-button-prev{
          left: -100px;
        }
        .swiper-button-next{
          right: -100px;
        }
      }
      .slider-box1 .swiper-container{
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
  .musicPeople{
    margin-bottom: 20px;
    .swiper-container{
      height: 250px;
      .swiper-slide{
        div{
          display: flex;
          flex-direction: column;
          img{
            height: 180px;
            margin-bottom: 10px;
          }
          &>span:first-of-type{
            color: #2B2B2B;
          }
        }
      }
    }
  }
  .musicPartner{

    background: #F6F6F6;
    box-shadow: 0 0 4px 2px rgba(0,0,0,0.1);
    .part1{
      .top{
        width: 100%;
        height: 360px;
        background: url(~@/assets/images/home/group41.png) no-repeat;
        background-size: 100% 100%;
      }
      .bottom{
        background: #fff;
        padding: 20px 30px;
        >div:first-of-type{
          color: var(--shallow-color);
        }
        >div:nth-of-type(2){
          margin: 10px 0;
          .labels{
            display: inline-block;
            margin-left: 100px;
            span{
              padding: 4px 20px;
              border-radius: 20px;
              border: 1px solid var(--primary-color);
              color: var(--primary-color);
              cursor: pointer;
              margin-right: 15px;
              &:hover{
                background: var(--primary-color);
                color: #fff;
              }
            }
          }
        }
      }
    }
    .part2{
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .customTitle{
        display: inline-block;
        text-align: center;
        position: relative;
        color: #505050;
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 20px;
        &::before, &::after{
          display: block;
          content: '';
          width: 180px;
          height: 1px;
          background: #535353;
          position: absolute;
          top:0;
          bottom: 0;
          margin-top: auto;
          margin-bottom: auto;
        }
        &::before{
          left: -190px;
        }
        &::after{
          right: -190px;
        }
      }
      .ant-row{
        width: 100%;
        height: 320px;
        .left{
          width: 35%;
          height: 320px;
          float: left;
          background:#313131;
          color: #FFFCF3;
          padding: 30px 20px;
          >div:first-child{
            display: flex;
            align-items: center;
            img{
              width: 40px;
              height: 40px;
              border-radius: 50%;
              margin-right: 20px;
            }
            .info{
              span:first-child{
                font-size: 22px;
              }
            }
          }
          .position{
            color: #BEBDB6;
            position: relative;
            &::after{
              display: block;
              content: '';
              width: 32px;
              height: 3px;
              background:#D6D3CC;
              position: absolute;
              bottom: -16px;
            }
          }
          h3{
            color: #FFFCF3;
            margin-top: 20px;
          }
          pre{
            margin-top: 30px;
            color: #BEBDB6;
          }
        }
        .right{
          width: 65%;
          height: 320px;
          float: left;
          background: url(~@/assets/images/home/people.png) no-repeat;
          background-size: 100% 100%;
        }
        .slider-box3{
          position: relative;
          .swiper-button-prev{
            top: 110%;
          }
          .swiper-button-next{
            top: 110%;
          }
          .swiper-container{
            height: 260px;
            .swiper-slide{
              display: flex;
              flex-direction: column;
              &>div{
                width: 100%;
                height: 48%;
                position: relative;
                &:first-child{
                  margin-bottom: 2%;
                }
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
          ::v-deep .swiper-pagination{
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            bottom: -40px;
            .swiper-pagination-bullet{
              border-radius: 0;
              margin-right: 4px;
            }
            .swiper-pagination-bullet-active{ 
              background: #7D7D7D;
              width: 40px;
            }
          }
        }
      }
    }
  }
  .title5{
    height: 564px;
    margin-top: 40px;
    background: url(~@/assets/images/home/title5.png) no-repeat;
    background-size: 100% 100%;
  }
  .box6{
    margin-bottom: 60px;
    .left{
      height: 485px;
      background: url(~@/assets/images/home/group61.png) no-repeat;
      background-size: 100% 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      >span{
        padding: 10px 30px;
        border-radius: 30px;
        border: 2px solid var(--primary-color);
        color: var(--primary-color);
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
        &:hover{
          background: #fff;
        }
      }
    }
    .right{
      height: 485px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      >div{
        width: 155px;
        height: 155px;
      }
    }
    .bottom{
      height: 140px;
      display: flex;
      align-items: center;
      position: relative;
      img{
        width: 160px;
        height: 160px;
        border-radius: 50%;
        border: 2px solid #fff;
        box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2);
        position: absolute;
        top: -46px;
      }
      >div:first-of-type{
        margin: 0 20px 0 200px;
        .line{
          width: 100%;
          height: 2px;
          background: #AB8E56;
          margin-bottom: 10px;
        }
      }
      >span{
        padding: 8px 30px;
        background: var(--primary-color);
        color: #fff;
        border-radius: 20px;
        cursor: pointer;
        margin-right: auto;
      }
      .all{
        display: flex;
        align-items: center;
        &>span:first-child{
          color: var(--secondary-color);
          margin-right: 10px;
        }
        &>span:last-child{
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #F2F2F2;
          border-radius: 50%;
          border: 1px solid #DDDDDE;
          cursor: pointer;
        }
      }
    }
  }
}
</style>