<template>
  <div class="mainNav">
    <nav>
      <ul class="mainNav__list">
        <li class="mainNav__item">
          <nuxt-link to="/">TOP</nuxt-link>
          <span class="mainNav__description">トップ</span>
        </li>
        <li class="mainNav__item">
          <nuxt-link to="/about">ABOUT</nuxt-link>
          <span class="mainNav__description">デザイン思想</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default{
    name:"MainNav",
    watch:{
      '$route'(){
        this.$store.dispatch('toggleMenu',false)
      },
    }
  }
</script>

<style media="screen" lang="scss" scoped>
.mainNav{
  position: fixed;
  top:0;
  right: -110%;
  height: 100vh;
  z-index: 110;
  padding: 10rem 5rem 0 0;
  background: $color-ui01;
  transition: all 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);

  &__item{
    padding: 1rem;
    a{
      font-size: 4rem;
      font-weight: bold;
      color:$color-text01;
      text-decoration: none;
      transition: all 200ms ease-out;
      &:hover{
        color: $color-key01;
        letter-spacing: 1px;
        transition: all 350ms ease-out;
      }
    }
  }
  
  &__description{
    display: block;
    font-size:0.75rem;
    color:$color-ui02;
  }

  .is-open &{
    right:0;
    transition: all 200ms cubic-bezier(0.785, 0.135, 0.15, 0.86)
  }
}

.nav__item--current{
  color: $color-key01!important;
  letter-spacing: 1px;
}
</style>
