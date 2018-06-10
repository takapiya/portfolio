<template>
  <header class="worksDetail__heading">
    <div class="worksDetail__headingImage">
      <img :src="$store.state.currentEntry.fields.eyecatch.fields.file.url">
      <div class="worksDetail__headingCaption">
        <h1 class="worksDetail__headingTitle">
          {{$store.state.currentEntry.fields.title}}
        </h1>
        <dl class="worksDetail__headingTag">
          <dt aria-hidden="true">カテゴリ</dt>
          <dd>{{$store.state.currentEntry.fields.type}}</dd>
        </dl>
      </div>
    </div>
  </header>
</template>

<script>
</script>


<style media="screen" lang="scss" scoped>
.worksDetail{
  &__heading{
    &Image{
      display: flex;
      align-items:flex-end;
      justify-content: center;
      position: relative;
      overflow: hidden;
      width:100%;
      height:70vh;
      margin-bottom: 2rem;
      transition: all 300ms ease-in-out;
      &:before{
        position: absolute;
        content:"";
        /* top:0; */
        left:0;
        width: 100%;
        height: 100%;
        background: rgba(#000010,0.3);
        z-index: 1;
        transition: all 300ms ease-in-out;
        animation: cover-slide-in 500ms ease-in-out 700ms backwards;
      }
      img{
        width: 100%;
        height: 70vh;
        -o-object-fit: cover;
        object-fit: cover;
        animation: image-zoom-out 1200ms ease-in-out backwards;
      }
    }
    &Caption{
      position: absolute;
      bottom:40px;
      width: $size-container;
      z-index: 2;
      text-shadow: 0 0 5px rgba(#000,0.5);
      animation: fade-in 300ms ease-in-out 1100ms backwards;
    }
    &Title{
      display: inline-block;
      font-size:1.25rem;
      font-weight: bold;
      padding: 0.5rem 0;
      color:$color-inverse;
      box-shadow: 0 0 0  rgba(#000,0.5)
    }
    &Tag{
      display: flex;
      color:$color-ui01;
      font-size: 0.875rem;
      dt{
        display: none;
      }
    }
  }
}

@media (max-width: 1096px){
  .worksDetail{
    &__heading{
      &Caption{
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
  }
}

@media (max-width: 719px){
  .worksDetail{
    &__heading{
      &Image{
        height:50vh;
        transition: all 300ms ease-in-out;
        img{
          height: 50vh;
          transition: all 300ms ease-in-out;
        }
      }
    }
  }
}


</style>
