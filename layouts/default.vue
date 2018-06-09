<template>
  <div class="layout-default container">
    <Navbar/>
    <main class="content">
      <nuxt/>
    </main>
    <stickyContact/>
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar'
  import StickyContact from '~/components/StickyContact'

  export default{
    components:{
      Navbar,
      StickyContact
    },
  }
</script>

<style media="screen" lang="scss">
.layout-default{
	.content{
    width: 100%;
	  max-width: $size-container;
	  margin: 0 auto;
	  padding: 72px 8px 48+32px;
    transition:all 0.5s ease-in-out;
	}
  @media (max-width: 1064px) {
    .content{
      width: 762px;
      transition:all 0.5s ease-in-out;
    }
  }
  @media (max-width: 719px) {
    .content{
      width: 100%;
      transition:all 0.5s ease-in-out;
    }
  }
}
</style>
