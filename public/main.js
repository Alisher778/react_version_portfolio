$(document).ready(function(){

//Dropdown menu on click
  $('#menu-bar').click(function(event){
    event.preventDefault();
    $('.nav-list').addClass('overlay');
    $('.nav-list').slideDown(600); 
  });

//Close button on dropdown menu
  $('i#close-btn').click(function(){
    
    
  
      $('ul.nav-list').removeClass('overlay');
    
  });
});