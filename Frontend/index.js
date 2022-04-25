var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    effect: 'cube',
    // And if we need scrollbar
  })

  $( function() {
    $( "#accordion" ).accordion({
      active: true,
      collapsible: true,
  });
});

     window.addEventListener('DOMContentLoaded', function() {
       document.querySelectorAll('.our-work-tab-button').forEach(function(tabsBtn) {  
         tabsBtn.addEventListener('click', function(event) {
           const path = event.currentTarget.dataset.path

           document.querySelectorAll('.our-work-tab-content').forEach(function(tabContent) {
             tabContent.classList.remove('our-work-tab-content-active')
           });
           document.querySelector(`[data-target="${path}"]`).classList.add('our-work-tab-content-active')  
         });
        });
      });
  

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#burger-menu').classList.toggle('is-active')
  });
});



         
   
  