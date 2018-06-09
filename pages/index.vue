<template>
  <div>
    <Hero/>
    <WorksList :entries="$store.state.worksEntries"/>
  </div>
</template>

<script>
  import contentful from '~/plugins/contentful.js'
  const client = contentful.createClient()

  import Hero from '~/components/Hero'
  import WorksList from '~/components/WorksList'
  import ArticleList from '~/components/ArticleList'


  export default{
    components:{
      Hero,
      WorksList,
      ArticleList,
    },
  }
</script>
