<template>
  <article class="worksDetail">
    <ArticleHeader></ArticleHeader>
    <div class="worksDetail__body">
      <dl class="worksDetail__description">
        <dt>Category</dt>
        <dd>
          <ul class="worksDetail__tagList">
            <li v-for="tag in $store.state.currentEntry.fields.tag">
              <Tag>{{tag}}</Tag>
            </li>
          </ul>
        </dd>
        <dt>Period</dt>
        <dd>{{$store.state.currentEntry.fields.year}}</dd>
        <dt>URL</dt>
        <dd>{{$store.state.currentEntry.fields.url}}</dd>
      </dl>
      <vue-markdown  class="worksDetail__text" :source="$store.state.currentEntry.fields.body"></vue-markdown>
    </div>
  </article>
</template>

<script>
  import VueMarkdown from 'vue-markdown'

  import Tag from '~/components/Tag'
  import WorksList from '~/components/WorksList'
  import ArticleHeader from '~/components/ArticleHeader'
  export default{
    layout:"article",
    components:{
      VueMarkdown,
      Tag,
      WorksList,
      ArticleHeader
    },
  }
</script>


<style media="screen" lang="scss" scoped>
.worksDetail{
  &__body{
    display: flex;
    width: $size-container;
    margin: 0 auto;
  }

  &__description{
    flex:0 0 262px;
    border-right: 1px solid $color-ui01;
    dt{
      font-weight: bold;
      padding-bottom: 0.5rem;
      &:not(:first-of-type){
        padding-top:1.5rem;
      }
    }
  }

  &__tagList{
    li{
      margin-bottom: 4px;
    }
  }

  &__text{
    font-size: 14px;
    margin-left: 3rem;
    line-height: 2;
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
