<template>
  <div class="layout-article container">
    <Navbar/>
    <main class="content">
      <nuxt/>
    </main>
    <!-- <stickyContact/> -->
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar'
  import StickyContact from '~/components/StickyContact'

  export default{
    scrollToTop: true,
    components:{
      Navbar,
      StickyContact
    },
  }
</script>

<style media="screen" lang="scss">
.layout-article{
	.content{
	  // width: $size-container;
	  margin: 0 auto;
	  padding: 60px 0 48+32px;
	}
}
</style>
