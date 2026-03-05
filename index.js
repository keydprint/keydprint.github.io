function opentab(evt, tabname) {

  var i, tabcontent, scmbtn; // tabcontent will be replacing btncontent and scmbtn replaces navbtn

  // - 1
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";}

    //- 2
  scmbtn = document.getElementsByClassName("scmbtn"); //- originally navbtn
  for (i = 0; i < scmbtn.length; i++) {
    scmbtn[i].className = scmbtn[i].className.replace(" active", "");
  }

  //this code shows the selected code 3
  document.getElementById(tabname).style.display = "block";

  //this code supposedly marks it as active 4
  evt.currentTarget.className += " active";
}

  //this just notes that clicking the navbtn is an event 5
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".scmbtn").click();
  });