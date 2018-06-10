<template>
  <h1 class="sectionHeading">
    <slot></slot>
  </h1>
</template>

<script>
  export default{
    name:"SectionHeading"
  }
</script>

<style media="screen" lang="scss" scoped>
.sectionHeading{
  padding: 3.5rem 0 1rem;
  font-weight: bold;
  letter-spacing: 0.125rem;

  &:first-child{
    /* padding-top: 0; */
  }
}
</style>
