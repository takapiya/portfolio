<template>
  <ul class="snsList">
    <li class="snsList__item">
      <a href="#">
        <IonIcon name="social-twitter">Twitter</IonIcon>
      </a>
    </li>
    <li class="snsList__item">
      <a href="#">
        <IonIcon name="social-instagram-outline">Twitter</IonIcon>
      </a>
    </li>
    <li class="snsList__item">
      <a href="#">
        <IonIcon name="ios-book-outline">Twitter</IonIcon>
      </a>
    </li>
  </ul>
</template>

<script>
  import IonIcon from '~/components/IonIcon'
  export default{
    name:"SnsList",
    components:{
      IonIcon,
    }
  }
</script>

<style media="screen" lang="scss" scoped>
.snsList{
    display: flex;
  &__item{
    font-size: 1.5rem;
    a{
      display: inline-block;
      padding: 16px;
      color: $color-text01;
      border-radius: 4px;
      &:hover{
        transition: all 200ms ease-in;
        background-color: #F0F3F6;
      }
    }
  }
}
</style>
