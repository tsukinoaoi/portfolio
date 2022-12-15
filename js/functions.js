
function sect1background() {
   console.log("presionado");
   document.body.style.backgroundColor = "#1e3266";
  }

  function sect2background() {
    console.log("presionado");
    document.body.style.backgroundColor = "#d774a0";
   }
   function sect3background() {
    console.log("presionado");
    document.body.style.backgroundColor = "#6a3793";
   }
 
   //load page 
var myVar;

function waitpage() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  window.scroll(0, 0); 
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display= "block";
}