// function enviarRespuesta() {

//   var xmlhttp = new XMLHttpRequest();
//   xmlhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         alert("Hemos recibido tu correo. Contestaremos en la mayor brevedad posible. Muchas gracias.");
//         window.location.reload();
//       }
//   };
  
//   var subject = document.getElementById("input-name").innerText;

//   xmlhttp.open("POST", "contacto.php", true);
//   xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   xmlhttp.send("subject=test");
       
//   }

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

  window.history.replaceState({}, document.title, "/contacto/" + "index.html");

  document.getElementById("popup1").classList.add("show");

  document.getElementById("closepopup").addEventListener("click", function() {
    document.getElementById("popup1").classList.remove("show");
});

}