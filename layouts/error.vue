<template>
  <div class="layout-error container">
    <div v-if="error.statusCode === 404" class="error">
      <p class="error__code">
        <IonIcon name="sad"></IonIcon>
      </p>
      <p class="error__status">404 Page Not Found</p>
    </div>
    <div v-else>
      <IonIcon name="sad"></IonIcon>
      <p class="error__status">Error...</p>
    </div>

    <SectionHeading>こちらも</SectionHeading>
    <WorksList :entries="filteredWorks"/>

    <p class="topLink">
      <nuxt-link to="/">
        TOPに戻る
      </nuxt-link>
    </p>
  </div>
</template>

<script>
  import IonIcon from '~/components/IonIcon'
  import SectionHeading from '~/components/SectionHeading';
  import WorksList from '~/components/WorksList'
  export default {
    props: ['error'],
    components:{
      IonIcon,
      SectionHeading,
      WorksList
    },
    computed:{
      filteredWorks:function(){
        return this.$store.state.worksEntries.slice(1,4)
      }
    }
  }
</script>


<style lang="scss">
  .error{
    padding: 3rem 0;
    color:$color-ui02;
    text-align: center;
    letter-spacing: 3px;
    &__code{
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }
    &__status{
      font-size: 0.75rem;
    }
  }
  .works .sectionHeading{
    display: none;
  }

  .topLink{
    padding-top: 3rem;
    text-align: center;
  }

  @media (max-width: 1064px) {
    .content{
      width: 762px;
      transition:all 0.5s ease-in-out;
    }
    .works__item{
      &:nth-child(n+3){
        display: none;
      }
    }
  }
  @media (max-width: 719px) {
    .content{
      width: 100%;
      transition:all 0.5s ease-in-out;
    }
    .works__item{
      &:nth-child(n+2){
        display: none;
      }
    }
  }
</style>
