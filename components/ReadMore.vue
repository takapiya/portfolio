<template>
	<component :is="checkExternal(href)" :to="href" :href="href" :target="target">
    readmore
  </component>
</template>
<script>
	export default{
		props: ["href","target"],
		methods:{
			checkExternal:function(path){
				// httpを含んでいればaタグ、いなければnuxt-linkを返す
				console.log(path)
      	return path.indexOf('http')!=-1 ? 'a' : 'nuxt-link'
   		}
		}
	}
</script>
<style>
</style>
