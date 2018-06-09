<template>
  <section class="articles">
    <SectionHeading>Articles</SectionHeading>

    <ul class="articles__list">
      <li class="articles__item">
        <article>
          <a href="#">
            <figure class="articles__image">
                <img src="https://dummyimage.com/600x400/000/fff" alt="">
            </figure>
            <h1 class="articles__title">
              Inside of monochrome
            </h1>
            <div class="articles__caption">
              <small>
                <span rel="tag">Develop</span>,
                <span rel="tag">Web Design</span>
                <time>2017/12/12</time>
              </small>
            </div>
          </a>
        </article>
      </li>
      <li class="articles__item">
        <article>
          <a href="#">
            <figure class="articles__image">
                <img src="https://dummyimage.com/600x400/000/fff" alt="">
            </figure>
            <h1 class="articles__title">
              Inside of monochrome
            </h1>
            <div class="articles__caption">
              <small>
                <time pubdate="2017-05-01">2017</time> /
                <span rel="tag">Develop</span>,
                <span rel="tag">Web Design</span>
              </small>
            </div>
          </a>
        </article>
      </li>
      <li class="articles__item">
        <article>
          <a href="#">
            <figure class="articles__image">
                <img src="https://dummyimage.com/600x400/000/fff" alt="">
            </figure>
            <h1 class="articles__title">
              Inside of monochrome
            </h1>
            <div class="articles__caption">
              <small>
                <time pubdate="2017-05-01">2017</time> /
                <span rel="tag">Develop</span>,
                <span rel="tag">Web Design</span>
              </small>
            </div>
          </a>
        </article>
      </li>
    </ul>
  </section>
</template>

<script>
  import SectionHeading from '~/components/SectionHeading'
  export default{
    name:"articleList",
    components:{
      SectionHeading,
    }
  }
</script>

<style media="screen" lang="scss" scoped>
.articles{
  $this:&;

  &__list{
    display: flex;
    flex-wrap: wrap;
    margin:0 -10px;
  }
  &__item{
    flex:1 1 calc(1024px / 3);
    max-width: calc(1024px / 3);
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
    padding-bottom: 0.75rem;
  }
  &__caption{
    font-size:0.75rem;
    color:$color-ui02;
  }

}
</style>
