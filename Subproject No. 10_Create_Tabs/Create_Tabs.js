function openTabslet(evt, name){
   var i, tabcontent, tablinks;
   tabcontent = document.getElementsByClassName("tabcontent");
   for(i= 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "None";
   }

   tablinks = document.getElementsByClassName("tablinks");
   for(i= 0; i < tablinks.length; i++){
    tablinks[i].className = tablinks[i].className.replace("active","") ;
   }

   document.getElementById(name).style.display = "block";
   evt.currentTarget.className += " active";
}