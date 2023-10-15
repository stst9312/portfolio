/*let box = document.querySelector('.box');
let box2 = document.querySelector('.box2');
box.addEventListener('mouseenter',function(){
    box2.style.display = 'block';
    box.style.backgroundColor = 'orange';
})
box.addEventListener('mouseleave',function(){
    box2.style.display = 'none';
    box.style.backgroundColor = 'black';
}) */

let btn_more = document.querySelector('.btn_more');
let more = document.querySelector('.more');


btn_more.addEventListener('click',function(){
    more.style.top='152px';
})
btn_more.addEventListener('',function(){
    more.style.display = 'none';
})

