<template>
  <header class="navbar" :class="{
    'is-open':$store.state.isMenuOpen,
    'is-scroll':$store.state.isScrolled
  }">
    <div class="navbar__mask" @click="toggleMenu()"></div>
    <div class="navbar__wrapper">
      <h1 class="navbar__heading">
        <nuxt-link to="/">
          TAKAHIRO HAYASHI <span>PORTFOLIO</span>
        </nuxt-link>
      </h1>
      <button class="navbar__toggleMenu" type="button" name="button" @click="toggleMenu()">
        <span aria-hidden>MENU</span>
      </button>
      <MainNav/>
    </div>
  </header>
</template>

<script>
import MainNav from "~/components/MainNav"
export default {
 name: "Navbar",
 components:{
   MainNav
 },

 methods:{
   toggleMenu:function(){
     this.$store.dispatch('toggleMenu',!this.$store.state.isMenuOpen )
   },
   debounce:function(func, wait = 50) {
      let timeout;
      return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          func.apply(this, args);
        }, wait);
      };
   },
 }
}
</script>

<style media="screen" lang="scss" scoped>
.navbar {
  $this:&;
  width: 100%;
  position: fixed;
  z-index: 100;
  transition: all 250ms ease-out;
  background: #fff;
  &__mask{
    background: rgba(255,255,255,0.9);
    position: fixed;
    top:0;
    left:0;
    width: 100vw;
    height: 100vh;
    z-index: 101;
    display: none;
    opacity: 0;
  }

  &__wrapper{
    max-width: $size-container;
    margin:0 auto;
    padding:0 8px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 250ms ease-out;
  }

  &__heading {
    text-align: center;
    a{
      color:$color-text01;
      text-decoration: none;
    }
    span {
      font-weight: bold;
      color: $color-key01;
    }
  }

  &__toggleMenu {
    position: relative;
    border: 3px solid $color-ui01;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    z-index: 120;

    &:before,
    &:after{
      position: absolute;
      overflow: visible;
      display:block;
      left: 50%;
      transform: translateX(-50%);
      content:"";
      width: 16px;
      height: 1px;
      background-color: $color-text01;
      transition: all 200ms ease-in-out;
    }
    &:before{
      top:calc(50%-3px);
    }
    &:after{
      top:calc(50%+3px);
    }
    span {
      display: none;
    }
  }

  &.is-open{
    #{$this}__toggleMenu{
      &:before{
        transform: translateX(-50%) rotate(45deg);
        top:50%;
      }
      &:after{
        transform: translateX(-50%) rotate(-45deg);
        top:50%;
      }
    }
    #{$this}__mask{
      display: block;
      opacity: 1;
      animation: fade-in 200ms ease-out backwards;
    }
  }
}
</style>
