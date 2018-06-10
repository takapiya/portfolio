export default function (context) {
  if(process.client){
    var redirect = sessionStorage.getItem("redirect_path");
    delete sessionStorage.redirect_path;
    if (redirect && redirect != location.pathname.replace( "/portfolio" , "" )) {
      return context.redirect(redirect)
    }
  }
}
