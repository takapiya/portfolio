<template>
  <div class="stickyContact" :class="{'is-open':$store.state.isContactOpen}" >
    <button class="stickyContact__toggle" @click="toggleContact()">
      <IonIcon name="chevron-up">連絡先を確認</IonIcon>
      CONTACT
    </button>
    <dl class="stickyContact__addressList">
      <div>
        <dt>E-MAIL</dt>
        <dd>mail [at] takapiya.com</dd>
      </div>
    </dl>
    <button class="stickyContact__close" @click="toggleContact()">
      <IonIcon name="close-round">閉じる</IonIcon>
    </button>
  </div>
</template>

<script>
  import IonIcon from '~/components/IonIcon'
  export default{
    name:"stickyContact",
    components:{
      IonIcon
    },
    methods:{
      toggleContact:function(){
        this.$store.dispatch('toggleContact',!this.$store.state.isContactOpen )
      }
    }
  }
</script>

<style media="screen" lang="scss" scoped>
.stickyContact{
  $this:&;
  position: fixed;
  top:100%;
  left:5%;
  width: 90%;
  transform: translateY(-48px);
  border-radius: 2px 2px 0 0;
  transition: all 300ms ease-in-out;
  background: #fff;
  box-shadow: 0 -1px 10px rgba($color-ui02,0.05);

  .ion-chevron-up{
    transition: all 300ms ease-in-out;
    transform: rotate(0)
  }

  &__toggle{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 0.5rem 0 0.75rem;
    text-align: center;
    font-weight: bold;
    font-size:0.75rem;
  }

  &__addressList{
    display: flex;
    justify-content: center;
    font-size: 0.75rem;
    padding: 1rem 1rem 100%;
    div{
      display: flex;
      margin-right: 1rem;
    }
    dt{
      margin-right: 0.5rem;
      font-weight: bold;
    }
  }

  &__close{
    display: inline-block;
    width: 1rem;
    height: 1rem;
    opacity: 0;
    position: absolute;
    right:0.5rem;
    top:0.5rem;
    font-size:0.5rem;
    transition: all 200ms ease-in-out;
  }

  &.is-open{
    transform: translateY(-100px);
    #{$this}__close{
      opacity: 1;
      transition: all 200ms ease-in-out 200ms;
    }
    #{$this}__toggle{
      .ion-chevron-up{
        transition: all 300ms ease-in-out;
        transform: rotate(180deg)
      }
    }
  }
}
</style>
