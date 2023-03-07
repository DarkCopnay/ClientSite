// let sliderphoto = document.getElementById("sliderphoto");
// let list_position = 0;

// let button_left = document.getElementById("button_left");
// let button_right = document.getElementById("button_right");

// let sliderInterval = setInterval(function() {
//   sliderphoto.style.transform = `translateX(-${list_position += 600}px)`;
  
//   if (list_position == 1200){
//     list_position -= 2400;
//   }
// }, 4500);

let button_dropmenu = document.getElementById("button_dropmenu");
let topnav_dropmenu = document.getElementById("topnav_dropmenu");

button_dropmenu.addEventListener("focusin", function() {
  topnav_dropmenu.style.height = "150px";
})

button_dropmenu.addEventListener("focusout", function() {
  topnav_dropmenu.style.height = "0";
})
