
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

if (getQueryVariable("gracias")==1) {

  window.history.replaceState({}, document.title, "/contacto-sant-feliu-guixols/" + "index.html");

  document.getElementById("popup1").classList.add("show");

  document.getElementById("closepopup").addEventListener("click", function() {
    document.getElementById("popup1").classList.remove("show");
});

}