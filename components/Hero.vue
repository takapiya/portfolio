<template>
  <section class="hero">
    <h1 class="hero__heading">
      <p class="hero__name">
        <span>TAKAHIRO</span>
        <span>HAYASHI</span>
      </p>
    </h1>
    <span class="hero__separate"></span>
    <p class="hero__caption">
      Web Designer @ Tokyo
    </p>
    <SnsList></SnsList>
  </section>
</template>

<script>
  import SnsList from '~/components/SnsList'
  export default{
    name:"Hero",
    components:{
      SnsList,
    }
  }
</script>

<style media="screen" lang="scss" scoped>
.hero{
  padding: 3.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__heading{
    position: relative;
    padding-bottom:  1.5rem;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.5rem;
  }

  &__separate{
    display: inline-block;
    content:"";
    width: 20px;
    height: 4px;
    background-color: $color-key01;
    border-radius: 2px;
  }

  &__name{
    animation: text-track-in 3s cubic-bezier(0.645, 0.045, 0.355, 1.000) 0.25s backwards;
    span{
      display: inline-block;
      &:last-child{
        margin-left: 8px;
      }
    }
  }

  &__caption{
    color:$color-ui02;
    animation: text-swing-in 1.5s both 2s;
    padding: 1.5rem 0;
    font-size: 0.875rem
  }

  &__linkList{
    display: flex;
  }
  &__linkItem{
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

@media (max-width: 719px) {
  .hero__name{
    span{
      display: block;
      margin-left: 0;
    }
  }
}
</style>
