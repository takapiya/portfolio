<template>
  <span :class="'ion-'+name" aria-hidden="true">
    <span hidden>
      <slot/>
    </span>
  </span>
</template>

<script>
  export default{
    name:"IonIcon",
    props:{
      name:{
        type:String,
        require:true
      }
    }
  }
</script>

<style media="screen" lang="scss" scoped>
</style>
