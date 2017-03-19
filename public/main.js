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

  //On scroll event Change navbar background-color 
  $(window).scroll(function(){
    let nav = $('nav');
    let scrollPosition = $(window).scrollTop();
    if(scrollPosition > 80){
      nav.css({'backgroundColor':'black', 'height':'70px', 'padding': '20px 0 5px 0'})
    }else{
      nav.css('backgroundColor', 'transparent');
    }
  })

  //on Scroll nav list color active
  $(document).scroll(function() {
     let scroll_top = $(document).scrollTop();
     let aboutPage = $('#about').position().top;
     let projectsPage = $('#projects').offset();
     let skillsPage = $('#skills').offset();

     
      if(scroll_top > aboutPage) {
        $('.nav-list a').removeClass('active');
        $('#aboutLink').addClass('active');
      }else{
         $('.nav-list a').removeClass('active');
         $('#homeLink').addClass('active')
      }
    

  });

});