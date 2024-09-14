var cursor = document.querySelector('.blur-gradient');

document.addEventListener('mousemove', function(e){
  
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0) `
  document.getElementsByClassName('cursor')[0].style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0) `


  
});

document.getElementsByClassName('logo')[0].addEventListener('mouseenter', function(){
  document.getElementsByClassName('dot')[0].classList.add('drag-pointer');
});

document.getElementsByClassName('logo')[0].addEventListener('mouseleave', function(){
  document.getElementsByClassName('dot')[0].classList.remove('drag-pointer');
});

document.getElementsByClassName('navbar-menu')[0].addEventListener('mouseenter', function(){
  document.getElementsByClassName('dot')[0].classList.add('drag-pointer');
});

document.getElementsByClassName('navbar-menu')[0].addEventListener('mouseleave', function(){
  document.getElementsByClassName('dot')[0].classList.remove('drag-pointer');
});

document.getElementsByClassName('quick-action')[0].addEventListener('mouseenter', function(){
  document.getElementsByClassName('dot')[0].classList.add('drag-pointer');
});

document.getElementsByClassName('quick-action')[0].addEventListener('mouseleave', function(){
  document.getElementsByClassName('dot')[0].classList.remove('drag-pointer');
});




document.getElementsByClassName('project-card')[0].addEventListener('mouseenter', function(){
  document.getElementsByClassName('dot')[0].classList.add('drag-pointer');
});

document.getElementsByClassName('project-card')[0].addEventListener('mouseleave', function(){
  document.getElementsByClassName('dot')[0].classList.remove('drag-pointer');
});

document.getElementsByClassName('project-card')[1].addEventListener('mouseenter', function(){
  document.getElementsByClassName('dot')[0].classList.add('drag-pointer');
});

document.getElementsByClassName('project-card')[1].addEventListener('mouseleave', function(){
  document.getElementsByClassName('dot')[0].classList.remove('drag-pointer');
});

document.getElementsByClassName('project-card')[2].addEventListener('mouseenter', function(){
  document.getElementsByClassName('dot')[0].classList.add('drag-pointer');
});

document.getElementsByClassName('project-card')[2].addEventListener('mouseleave', function(){
  document.getElementsByClassName('dot')[0].classList.remove('drag-pointer');
});

document.getElementsByClassName('project-card')[3].addEventListener('mouseenter', function(){
  document.getElementsByClassName('dot')[0].classList.add('drag-pointer');
});

document.getElementsByClassName('project-card')[3].addEventListener('mouseleave', function(){
  document.getElementsByClassName('dot')[0].classList.remove('drag-pointer');
});

document.getElementsByClassName('project-card')[4].addEventListener('mouseenter', function(){
  document.getElementsByClassName('dot')[0].classList.add('drag-pointer');
});

document.getElementsByClassName('project-card')[4].addEventListener('mouseleave', function(){
  document.getElementsByClassName('dot')[0].classList.remove('drag-pointer');
});


