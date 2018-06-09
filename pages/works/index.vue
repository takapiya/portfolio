<template>
  <div>
    <WorksList :entries="$store.state.worksEntries"/>
  </div>
</template>

<script>
  import WorksList from '~/components/WorksList'


  export default{
    components:{
      WorksList,
    },
  }
</script>
