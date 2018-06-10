<template>
  <dl class="worksDetail__description">
    <template v-if="$store.state.currentEntry.fields.tag">
      <dt>Category</dt>
      <dd>
        <ul class="worksDetail__tagList">
          <li v-for="tag in $store.state.currentEntry.fields.tag">
            <Tag>{{tag}}</Tag>
          </li>
        </ul>
      </dd>
    </template>
    <template v-if="$store.state.currentEntry.fields.year">
      <dt>Period</dt>
      <dd>{{$store.state.currentEntry.fields.year}}</dd>
    </template>
    <template v-if="$store.state.currentEntry.fields.url">
      <dt>URL</dt>
      <dd>
        <a :href="$store.state.currentEntry.fields.url">
          {{$store.state.currentEntry.fields.url}}
        </a>
      </dd>
    </template>
  </dl>
</template>

<script>
  import Tag from '~/components/Tag'
  export default{
    name:"WorkDescription",
    components:{
      Tag
    }
  }
</script>

<style media="screen" lang="scss" scoped>
.worksDetail{
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
      display: inline-block;
      margin-bottom: 4px;
      &:not(:last-child){
        margin-right: 0.5rem;
      }
    }
  }
}

@media (max-width: 719px) {
  .worksDetail{
    &__description{
      border-right: 0;
      border-bottom: 1px solid $color-ui01;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
    }
    &__tagList{
      li{

      }
    }
  }
}
</style>
