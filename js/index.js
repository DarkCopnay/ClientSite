let sliderphoto = document.getElementById("sliderphoto");
let button_left = document.getElementById("button_left");
let button_right = document.getElementById("button_right");
let list_position = 0;

let sliderInterval = setInterval(function() {
  sliderphoto.style.transform = `translateX(-${list_position += 600}px)`;
  
  if (list_position == 1200){
    list_position -= 2400;
  }
}, 4500);
