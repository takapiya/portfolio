<template>
  <section class="works">
    <SectionHeading>WORKS</SectionHeading>
    <ul class="works__list">
      <li class="works__item" v-for="entry in entries">
        <article>
          <nuxt-link :to="'works/'+entry.fields.slug">
            <figure  class="works__image">
                <img v-if="entry.fields.eyecatch" :src="entry.fields.eyecatch.fields.file.url" alt="">
            </figure>
            <h1 class="works__title">
              {{entry.fields.title}}
            </h1>
            <div class="works__caption">
              <ul>
                <Tag v-for="tag in entry.fields.tag">{{tag}}</Tag>
              </ul>
              <time>{{dateFormat(entry.sys.createdAt,"YYYY/MM/DD")}}</time>
            </div>
          </nuxt-link>
        </article>
      </li>
    </ul>
  </section>
</template>

<script>
  import dateFormat from '~/plugins/dateFormat.js'
  import SectionHeading from '~/components/SectionHeading';
  import ReadMore from '~/components/ReadMore';
  import Tag from '~/components/Tag';
  export default{
    name:"worksList",
    props:{
      entries:{
        type:Array,
        require:true
      }
    },
    components:{
      SectionHeading,
      ReadMore,
      Tag
    },
    methods:{
      dateFormat,
    },
  }
</script>

<style media="screen" lang="scss" scoped>
.works{
  $this:&;

  &__list{
    display: flex;
    flex-wrap: wrap;
    margin:0 -10px;
  }

  &__item{
    flex:1 1 calc(1024px / 3);
    margin-bottom: 1.5rem;
    max-width: 361px;
    padding-right: 10px;
    padding-left: 10px;
    a{
      color: $color-text01;
      text-decoration: none;
      transition: all 250ms ease-in;
    }
    a:hover{
      transition: all 250ms ease-in;
      color: $color-key01;
    }
    &:hover{
      #{$this}__image{
        img{
          transform:scale(1.025);
          transition: all 250ms ease-in;
        }
      }
    }
  }

  &__image{
    position: relative;
    padding-bottom: 0.75rem;

    img{
      width: 100%;
      transition: all 250ms ease-in;
    }
  }

  &__title{
    font-weight:bold;
    letter-spacing: 2px;
    padding-bottom: 0.25rem;
  }

  &__caption{
    font-size:0.75rem;
    color:$color-ui02;

    time{
      display: block;
      margin-top:0.25rem;
    }
  }
}

@media (max-width: 719px) {
  .works{
    &__list{
      margin:0;
    }
    &__item{
      max-width: none;
      padding: 0;
    }
  }
}
</style>
