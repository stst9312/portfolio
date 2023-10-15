const leftPizza = document.querySelector('.left_pizza');
const rightPizza = document.querySelector('.right_pizza');
const selectPizza = document.querySelectorAll('select');
const select1Pizza = document.querySelector('.select_1');
const select2Pizza = document.querySelector('.select_2');
const selects = document.querySelectorAll('.select_pizza>select'); 
let array = [' ','half1.png','half2.png','half3.png','half4.png','half5.png'];
/*select1Pizza.addEventListener('change',function(){
    console.log(select1Pizza.options.selectedIndex);
    let num = select1Pizza.options.selectedIndex;
    console.log(array[num]);
    leftPizza.innerHTML = '<img src="./img/'+array[num]+'" alt="">'
})
select2Pizza.addEventListener('change',function(){
    console.log(select2Pizza.options.selectedIndex);
    let num = select2Pizza.options.selectedIndex;
    console.log(array[num]);
    rightPizza.innerHTML = '<img src="./img/'+array[num]+'" alt="">'
})*/

selects.forEach(function(selected){
    selected.addEventListener('change',function(){
        let num = selected.options.selectedIndex;
        console.log(selected.options.selectedIndex);
        //선택한 옵션의 index를 찾는 방법
        //console.log(selected.options) 까지치면 이것저것 많이나옴
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

/**************************************************************** */
const sizeCheck = document.querySelector('.btn_size');
const sizeChoices = document.querySelectorAll('.btn_size>div');

sizeCheck.addEventListener('click',function(e){
    let tar = e.target;
    sizeChoices.forEach(function(sizeChoice){
        sizeChoice.classList.remove('active');
        if(tar == sizeChoice){
            tar.classList.add('active');
        }
        
    })
})
/********************************************************** */
const btns = document.querySelectorAll('.btn');
const minusBtns = document.querySelectorAll('.minus_btn');
const plusBtns = document.querySelectorAll('.plus_btn');

// btns.forEach(function(btn,i){
//     btn.addEventListener('click',function(e){
//         console.log(e.target);
//         let t = e.target;
//         if(t == minusBtns[i]){
//             minusFunc(t)
//         }else if(t == plusBtns[i]){
//             plusFunc(t)
//         }
//     })
// })
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
//방법2
//minusBtns.forEach(function(minusBtn){
//   minusBtn.addEventListener('click',minusFunc)
//})
// function minusFunc(e){
//     const next = e.currentTarget.nextElementSibling;
//     if(next.value > 0){
//         next.value--;
//     }
// }
//plusBtns.forEach(function(plusBtn){
//    plusBtn.addEventListener('click',plusFunc)
//})
// function plusFunc(e){
//     const prev = e.currentTarget.previousElementSibling;
//     if(prev.value >= 0){
//         prev.value++;
//     }
// }

/* 방법3
minusBtns.forEach(function(minusBtn){
    minusBtn.addEventListener('click',function(){
        console.log(minusBtn.nextElementSibling.value);
        const next =minusBtn.nextElementSibling;
        //다음에 오는 태그 찾는 방법
        //minusBtn.nextElementSibling.value--;
        if(next.value > 0){
            next.value--;
        }
    })
})*/


/*sizeCheck.addEventListener('click',function(e){
   if(e.target == sizeCheck.firstElementChild){
    sizeCheck.firstElementChild.classList.add('active');
    sizeCheck.lastElementChild.classList.remove('active');
   }else if(e.target == sizeCheck.lastElementChild){
    sizeCheck.lastElementChild.classList.add('active');
    sizeCheck.firstElementChild.classList.remove('active');
   }
})*/