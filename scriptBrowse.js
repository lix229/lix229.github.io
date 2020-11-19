$(document).ready(function() {
  
  var slider = $('.slick-slider').bxSlider({
    minSlides: 1,
    maxSlides: 1,
    touchEnabled:false,
    controls: true,
    nextText: '<img src="./assets/right.png" height="70" width="50"/>',
    prevText: '<img src="./assets/left.png" height="70" width="50"/>',
    startSlide: "2"
  });
  
  $( ".explore-button" ).hover(function() {
    $( this ).parent().addClass("hovered-card");
  }, function() {
    $( this ).parent().removeClass("hovered-card");
  }
);

  $('.slider-move').click(function(){
    slider.goToSlide("2");
  });
  

});


var closer = document.getElementsByClassName("close")[0];
var questionModal = document.getElementById("questionModal");

function openQuestionModal() {
  questionModal.style.display = "block";
}

closer.onclick = function() {
  questionModal.style.display = "none";
}
  
window.onclick = function(event) {
  if (event.target == questionModal) {
    questionModal.style.display = "none";
  }
}

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

const slider = document.querySelector('.xx');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});