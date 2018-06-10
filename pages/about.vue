<template>
  <div class="about">
    <section class="profile">
      <div class="profile__image">
        <img src="../assets/images/profile.jpg" alt="">
        <p class="profile__name">
          林 貴洋
          <h1 aria-hidden="true">TAKAHIRO Hayashi</h1>
        </p>
      </div>
      <div>
        <div class="profile__detail">
          <section>
            <SectionHeading>EXPERIENCE</SectionHeading>
            <dl class="profile__experience">
              <div>
                <dt>2015/4 - </dt>
                <dd><a href="https://www.yahoo.co.jp/">ヤフー株式会社</a></dd>
                <dd class="profile__position">Designer</dd>
              </div>
              <div>
                <dt>2015/10 - </dt>
                <dd><a href="https://sports.yahoo.co.jp/">ワイズ・スポーツ株式会社</a></dd>
                <dd class="profile__position">Designer</dd>
              </div>
            </dl>
          </section>

          <section>
            <SectionHeading>SNS</SectionHeading>
            <dl class="profile__sns">
              <div>
                <dt>Twitter</dt>
                <dd><a href="https://twitter.com/taka_piya">taka_piya</a></dd>
              </div>
              <div>
                <dt>Facebook</dt>
                <dd><a href="https://www.facebook.com/taka.piya">taka.piya</a></dd>
              </div>
              <div>
                <dt>Instagram</dt>
                <dd><a href="https://www.instagram.com/taka_piya/">taka_piya</a></dd>
              </div>
            </dl>
          </section>
          
          <section>
          <SectionHeading>講義</SectionHeading>
          <dl class="profile__experience">
            <div>
              <dt>2017/8</dt>
              <dd>ヒューマン・インタフェース</dd>
              <dd class="profile__position">公立はこだて未来大学 3学年向け</dd>
            </div>
          </dl>
        </section>
          
        </div>
      </div>
    </section>

    <section class="mind">
      <SectionHeading>プロフィール</SectionHeading>
      <p>
        公立はこだて未来大学を卒業後、2015年4月ヤフー株式会社に入社。
        「<a href="https://sports.yahoo.co.jp/">スポーツナビ</a>」のデザインに携わる。
      </p>
      <p>
        情報設計、ビジュアルデザイン、UIデザイン、フロントエンドコーディングなど考えるところから作るところまで、Web全般。
      </p>
      <section class="mind__text">
        <SectionHeading>デザイン思想</SectionHeading>
        <p>
          なんでもやってみることを信念に、幅広いデザインプロセスに携わってきました。
        </p>
        <p>
          大人数としてユーザーではなく、1人のデザインパートナーとしてデザインを実践することに興味があります。<br>
          その活動の中で得られた知見にデザイナーとしての価値があると考え、それを個人としてだけではなく、<br>
          チームとして力を結集することで1つのプロダクトをより良くすること、また、そのための場作りを行っていきたいと考えています。<br>
        </p>
        <p>
          そのことがプロダクトだけではなく、引いてはブランディングの向上やビジネスにつながること、<br>
          世の中を変えることにもつながっていくのではないかと思い、<br>
          デザインの部分だけではなく、インハウスデザイナーたる理由であるビジネス視点を含めたデザインをしていきたいと考えています。
        </p>
        <img src="~/assets/images/mind.png">
      </section>

      <section class="mind__skill">
        <SectionHeading>領域</SectionHeading>
        <table class="mind__skillTable">
          <thead>
            <tr>
              <th>キーワード</th>
              <th>レベル</th>
              <th>手法・ツール</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">課題発見</th>
              <td>

                <IonIcon name="star" class="ion-star--on"></IonIcon>
                <IonIcon name="star" class="ion-star--off"></IonIcon>
                <IonIcon name="star" class="ion-star--off"></IonIcon>
              </td>
              <td>
                <ul class="mind__skillList">
                  <li>ペルソナ</li>
                  <li>カスタマージャーニーマップ</li>
                  <li>リーンキャンバス</li>
                  <li>数値分析</li>
                </ul>
              </td>
            </tr>

            <tr>
              <th scope="row">情報設計(IA)</th>
              <td>
                <IonIcon name="star" class="ion-star--on"></IonIcon>
                <IonIcon name="star" class="ion-star--on"></IonIcon>
                <IonIcon name="star" class="ion-star--off"></IonIcon>
              </td>
              <td>
                <ul class="mind__skillList">
                  <li>認知心理学</li>
                  <li>Protopie</li>
                </ul>
              </td>
            </tr>

            <tr>
              <th scope="row">インタフェース</th>
              <td>
                <IonIcon name="star" class="ion-star--on"></IonIcon>
                <IonIcon name="star" class="ion-star--on"></IonIcon>
                <IonIcon name="star" class="ion-star--off"></IonIcon>
              </td>
              <td>
                <ul class="mind__skillList">
                  <li>Sketch</li>
                  <li>Illustrator</li>
                </ul>
              </td>
            </tr>

            <tr>
              <th scope="row">ビジュアル</th>
              <td>
                <IonIcon name="star" class="ion-star--on"></IonIcon>
                <IonIcon name="star" class="ion-star--off"></IonIcon>
                <IonIcon name="star" class="ion-star--off"></IonIcon>
              </td>
              <td>
                <ul class="mind__skillList">
                  <li>Photoshop</li>
                </ul>
              </td>
            </tr>

            <tr>
              <th scope="row">フロントエンド</th>
              <td>
                <IonIcon name="star" class="ion-star--on"></IonIcon>
                <IonIcon name="star" class="ion-star--on"></IonIcon>
                <IonIcon name="star" class="ion-star--on"></IonIcon>
              </td>
              <td>
                <ul class="mind__skillList">
                  <li>HTML5</li>
                  <li>Pug</li>
                  <li>CSS3</li>
                  <li>Sass</li>
                  <li>Javascript(ES6+)</li>
                  <li>Vue.js</li>
                  <li>Nuxt</li>
                </ul>
              </td>
            </tr>

            <tr>
              <th scope="row">デザインプロセス</th>
              <td>
                <IonIcon name="star" class="ion-star--on"></IonIcon>
                <IonIcon name="star" class="ion-star--on"></IonIcon>
                <IonIcon name="star" class="ion-star--off"></IonIcon>
              </td>
              <td>
                <ul class="mind__skillList">
                  <li>デザインシステム</li>
                  <li>デザイン批評</li>
                  <li>デザインコミュニケーション</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

    </section>

  </div>

</template>

<script>
  import SectionHeading from "~/components/SectionHeading"
  import SnsList from '~/components/SnsList'
  import IonIcon from '~/components/IonIcon'
  export default{
    components:{
      SectionHeading,
      SnsList,
      IonIcon
    },
  }
</script>


<style media="screen" lang="scss" scoped>
.about{
  margin-top: 48px;
}
.profile{
  &__detail{
    display: flex;
    section{
      flex:1;
    }
  }

  &__image{
    display: flex;
    align-items: center;
    img{
      width:4.5rem;
      height:4.5rem;
      border-radius: 50%;
      margin-right: 1.5rem;
    }
  }
  &__name{
    font-weight: bold;
    letter-spacing: 1px;
    span{
      display: block;
      color:$color-ui02;
      font-weight: normal;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }
  }
  &__experience,
  &__sns{
    font-size:0.75rem;
    line-height: 1.3;
    div{
      margin-bottom: 1rem;
    }
  }
  &__position{
    color:$color-ui02;
    font-size:0.5rem;
  }
}
.mind{
  flex:1 0;
  p{
    font-size: 14px;
    line-height: 1.67;
    letter-spacing: 1px;
  }

  &__text{
    p + p{
      margin-top: 0.5rem;
    }
    img{
      margin-top: 2rem;
    }
  }

  &__skill{
    &Table{
      width: 100%;

      thead,tbody{
        font-size:0.75rem;
      }
      tr{
        border-bottom: 1px solid $color-ui01;
      }
      th,td{
        vertical-align: top;
      }
      th{
        padding: 8px;
        text-align: left;
        color:$color-th;
        letter-spacing: 2px;

      }
      td{
        padding: 8px;
        text-align: left;
        &:nth-child(2){
          min-width: 4rem;
        }
      }
    }

    &List{
      li{
        display: inline-block;
        &:not(:last-child){
          margin-right: 0.5rem;
          margin-bottom: 0.25rem;
        }
      }
    }
  }
}

.ion-star{
  font-size: 1rem;
  &--on{
    color:$color-key02;
  }
  &--off{
    // display: none;
    color:$color-ui01;
  }
}

@media (max-width: 1064px){
  .mind__skill{
    &List{
      li{
        display: block;
        text-align: left;
        &:not(:last-child){
          margin-bottom: 0.5rem;
        }
      }
    }
  }
}

</style>
