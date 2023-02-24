let sliderphoto = document.getElementById("sliderphoto");
let button_left = document.getElementById("button_left");
let button_right = document.getElementById("button_right");
let list_position = 0;

let sliderInterval = setInterval(function() {
  sliderphoto.style.transform = `translateX(-${list_position += 706}px)`;

  if (list_position == 1412){
    list_position -= 2118;
  }
}, 4000);
