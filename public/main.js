$(document).ready(function(){
  $('#menu-bar').click(function(event){
    event.preventDefault();
    $('.nav-list').addClass('overlay'); 
  });
});