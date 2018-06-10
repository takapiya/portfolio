export default function (context) {
  context.app.router.onReady(() =>{
    context.store.dispatch('fetchWorks',context)
  });
}
