<template>
  <article class="worksDetail" v-if="$store.state.currentEntry">
    <ArticleHeader></ArticleHeader>
    <div class="worksDetail__body">
      <WorkDescription></WorkDescription>
      <WorkText></WorkText>
    </div>
  </article>
</template>

<script>
  import ArticleHeader from '~/components/ArticleHeader'
  import WorksList from '~/components/WorksList'
  import WorkDescription from '~/components/WorkDescription'
  import WorkText from '~/components/WorkText'
  export default{
    middleware: 'seekCurrentEntry',
    layout:"article",
    components:{
      ArticleHeader,
      WorksList,
      WorkDescription,
      WorkText,
    },
  }
</script>


<style media="screen" lang="scss" scoped>
.worksDetail{
  &__body{
    display: flex;
    width: $size-container;
    margin: 0 auto;
    animation: fade-in 300ms ease-in-out 1100ms backwards;
  }
}

@media (max-width: 1096px){
  .worksDetail{
    &__body{
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
}

@media (max-width: 719px) {
  .worksDetail{
    &__description{
      border-right: 0;
      border-bottom: 1px solid $color-ui01;
      padding-bottom: 1rem;
    }
    &__body{
      display: block;
      width:100%;
    }
    &__text{
      margin-left: 0;
    }
  }
}
</style>
