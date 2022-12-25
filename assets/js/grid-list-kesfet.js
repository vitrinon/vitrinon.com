const mediaQuery = window.matchMedia('(max-width: 768px)')

var col = 1;
var myrow = document.getElementById("magazalarrow");
var magazacont = document.getElementById("magazalarrcont");
var gorunumbutton = document.getElementById("gorunumayarla");
function gridlist() {
if (col == 2){
    col = 1;
    myrow.classList.add("row-cols-1");
    myrow.classList.remove("row-cols-2");
        if (mediaQuery.matches) {
  
  myrow.classList.remove("px-1");
}
    
    gorunumbutton.classList.remove("gridlist");
    gorunumbutton.classList.add("listlist");
  
} else {
  myrow.classList.add("row-cols-2");
  myrow.classList.remove("row-cols-1");
   if (mediaQuery.matches) {
  
  myrow.classList.add("px-1");
}   
  col = 2;
    
  gorunumbutton.classList.remove("listlist");
  gorunumbutton.classList.add("gridlist");
}

}