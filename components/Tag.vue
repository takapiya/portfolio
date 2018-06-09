<template>
  <span class="tag" rel="tag">
    <slot>タグ</slot>
  </span>
</template>

<script>
  export default{
    name:"Tag",
    components:{
    }
  }
</script>

<style media="screen" lang="scss" scoped>
.tag{
  display: inline-block;
  padding: 0 8px;
  line-height: 1.125rem;
  font-size: 0.75rem;
  color: #909399;
  box-sizing: border-box;
  background-color: hsla(220,4%,58%,.05);
  border: 1px solid hsla(220,4%,58%,.2);
  white-space: nowrap;

  &+&{
    margin-left: 0.25rem;
  }
}
</style>
