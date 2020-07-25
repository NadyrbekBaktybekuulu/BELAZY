/*elementary*/

let images = [
    "img/slider_1.jpg",
    "img/slider_2.jpg",
    "img/slider_3.jpg"
]

let prev_btn = $('#prev');
let next_btn = $('#next');
let image = $('#image');

let current_index = 0;

prev_btn.on('click', function(){
    if (current_index > 0) {
        current_index--;
    }else{
        current_index = images.length - 1;
    }
    image.attr('src', images[current_index]);
});

next_btn.on('click', function(){
    if (current_index < images.length - 1){
        current_index++;
    }else{
        current_index = 0;
    }
    image.attr('src', images[current_index]);
});

/**middle*/

let middle_images = [
    "img/middle_slider_1.jpg",
    "img/middle_slider_2.jpg",
    "img/middle_slider_3.jpg",
]

let middle_image = $('#middle-image');

let middle_current_index = 0;

prev_btn.on('click', function(){
    if (middle_current_index > 0) {
        middle_current_index--;
    }else{
        middle_current_index = middle_images.length - 1;
    }
    middle_image.attr('src', middle_images[middle_current_index]);
});

next_btn.on('click', function(){
    if (middle_current_index < middle_images.length - 1){
        middle_current_index++;
    }else{
        middle_current_index = 0;
    }
    middle_image.attr('src', middle_images[middle_current_index]);
});

/**last*/

let last_images = [
    "img/last_slider_1.jpg",
    "img/last_slider_2.jpg",
    "img/last_slider_3.jpg",
]

let last_image = $('#last-image');

let last_current_index = 0;

prev_btn.on('click', function(){
    if (last_current_index > 0) {
        last_current_index--;
    }else{
        last_current_index = last_images.length - 1;
    }
    last_image.attr('src', last_images[last_current_index]);
});

next_btn.on('click', function(){
    if (last_current_index < last_images.length - 1){
        last_current_index++;
    }else{
        last_current_index = 0;
    }
    last_image.attr('src', last_images[last_current_index]);
});