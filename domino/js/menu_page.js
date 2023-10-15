
const tabMenus = document.querySelectorAll('.tab_menu');
const tabName = document.querySelector('#tab_name');
const menuNav = document.querySelector('.half_menu2');
const contents = document.querySelectorAll('.menusection');//section id

menuNav.addEventListener('click', function(e){
    // e.currentTarget 자기자신
     let id = e.target.closest('li').dataset.id;
     console.log(id);
     contents.forEach(function(content){
         content.classList.remove('active');
     })
     let secId = document.getElementById(id);
     secId.classList.add('active');
 })
 tabMenus.forEach(function(tabMenu){ //클래스 각각 호출
    tabMenu.addEventListener('click',function(){// 하나의 클래스를 클릭
        //console.log(tabMenu.dataset.text) //data-text의 값을 찾는 방법
        tabName.innerHTML = tabMenu.dataset.text;})
    })
 

 /*tabMenus.forEach(function(tabMenu){ //클래스 각각 호출
     tabMenu.addEventListener('click',function(){// 하나의 클래스를 클릭
         //console.log(tabMenu.dataset.text) //data-text의 값을 찾는 방법
         tabName.innerHTML = tabMenu.dataset.text;
         //console.log(tabMenu.dataset.id);
         let id = tabMenu.dataset.id;
         if(id){
             document.getElementById(id).style.display='block';
         }
     })
 })*/
/************************************************** */


let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let number = document.getElementById('number');

let changeNumber = 0;

minus.addEventListener('click',function(){
    number.innerHTML = changeNumber;
    if(number.innerHTML > 0){
        changeNumber--;
        number.innerHTML = changeNumber;
    }
})
plus.addEventListener('click',function(){

    if(number.innerHTML < 9){
        changeNumber++;
        number.innerHTML = changeNumber;
    }else if(number.innerHTML == 9){
        alert('피자는 9판만 주문 가능합니다.')
    }
})
/***************************************************/


/*
const amounts = document.querySelectorAll('.amount_box');
const minuses = document.querySelectorAll('.minus');
const pluses = document.querySelectorAll('.plus');

amounts.forEach(function(amount){
    amount.addEventListener('click',function(e){
        let t = e.target;
        let f = amount.firstElementChild;
        let l = amount.lastElementChild;
        if ( t == f ){
            minusFunc(t);
        }else if( t == l ){
            plusFunc(t)
        }
    })
})


function minusFunc(t){
    const next = t.nextElementSibling;
    if(next.value > 0){
        next.value--;
    }
}
function plusFunc(t){
    const prev = t.previousElementSibling;
    if(prev.value >= 0){
        prev.value++;
    }
}
*/

const btns = document.querySelectorAll('.s_btn');
const minusBtns = document.querySelectorAll('.s_minus_btn');
const plusBtns = document.querySelectorAll('.s_plus_btn');
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        console.log(e.target);
        let t = e.target;
        let f = btn.firstElementChild;
        let l = btn.lastElementChild;
        if ( t == f ){
            minusFunc(t);
        }else if( t == l ){
            plusFunc(t)
        }
    })
})
function minusFunc(t){
    const next = t.nextElementSibling;
    if(next.value > 0){
        next.value--;
    }
}
function plusFunc(t){
    const prev = t.previousElementSibling;
    if(prev.value >= 0){
        prev.value++;
    }
}

const btns1 = document.querySelectorAll('.btn1');
const minusBtns1 = document.querySelectorAll('.minus_btn1');
const plusBtns1 = document.querySelectorAll('.plus_btn1');
btns1.forEach(function(btn1){
    btn1.addEventListener('click',function(e){
        console.log(e.target);
        let t = e.target;
        let f = btn1.firstElementChild;
        let l = btn1.lastElementChild;
        if ( t == f ){
            minusFunc1(t);
        }else if( t == l ){
            plusFunc1(t)
        }
    })
})
function minusFunc1(t){
    const next1 = t.nextElementSibling;
    if(next1.value > 0){
        next1.value--;
    }
}
function plusFunc1(t){
    const prev1 = t.previousElementSibling;
    if(prev1.value >= 0){
        prev1.value++;
    }
}

/***************************************************** */
const leftPizza = document.querySelector('.left_pizza');
const rightPizza = document.querySelector('.right_pizza');
const selectPizza = document.querySelectorAll('select');
const select1Pizza = document.querySelector('.select_1');
const select2Pizza = document.querySelector('.select_2');
const selects = document.querySelectorAll('.select_pizza>select')
let array = [' ','half1.png','half2.png','half3.png','half4.png','half5.png','half6.png','half7.png','halfwild.png','half8.png','half9.png','half10.png','half11.png']
// select1Pizza.addEventListener('change',function(){
//      alert('hi');
//  });
selectPizza.forEach(function(selected){
    selected.addEventListener('change',function(){
        let num = selected.options.selectedIndex;
        console.log(selected.options.selectedIndex);

        if(selected == select1Pizza){
            leftPizza.innerHTML = '<img src="./img/'+array[num]+'" alt="">'
        }else if(leftPizza.children.length == 0){
            alert('첫번째 피자부터 선택하세요');
        }
        else if(selected == select2Pizza){
            rightPizza.innerHTML = '<img src="./img/'+array[num]+'" alt="">'
        }
    })
})


/**************************************************** */
let redSelect = document.querySelector('.red_select')
let redSelectBoxs = document.querySelectorAll('.red_select>div');

redSelect.addEventListener('click',function(e){
    let tar = e.target;
    redSelectBoxs.forEach(function(redSelectBox){
        redSelectBox.classList.remove('backcolor_red');
        if(tar == redSelectBox){
            tar.classList.add('backcolor_red');
        }
    })
})






/*
내가 만든거 redbox
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');

 box1.addEventListener('click',function(){
    box1.classList.add('backcolor_red');
     box2.classList.remove('backcolor_red');
})
 box2.addEventListener('click',function(){
     box2.classList.add('backcolor_red');
     box1.classList.remove('backcolor_red');
 })
*/



// let number = document.querySelector('.number');
// function number(){for(i=0; i<=100; i++){
//     document.write(i)
// }}


 function ale(){
     alert('음료는 피자 1판당 최대 2개까지, 사이드디시 1개당 최대 1개까지 주문이 가능합니다.');
 }

// v.addEventListener('click',function(){
//     //hide.classList.add('active');
//     alert('hi');
// })
let v = document.querySelector('.v');
let hidden = document.querySelector('.hidden');
function hiding(){
    hidden.classList.add('non_hidden')
    v.style.transform = 'rotate(225deg)'
}

// let tMain = document.querySelector('.topping_main');
// let tCheese = document.querySelector('.topping_cheese');
// let tAfter = document.querySelector('.topping_after');

function tabChange(a){
    let tabLink= document.getElementsByClassName('tabLink');
    let tabCont = document.getElementsByClassName('tabcont');
    for(i=0; i<tabCont.length; i++){
        console.log(tabCont[i])
        tabCont[i].style.display='none';

        tabLink[i].style.background='none';
        tabLink[i].style.color="black";
    }
    tabCont[a].style.display="block";
    
    tabLink[a].style.color="white";
    tabLink[a].style.backgroundColor="black";
}