const hiddenNav = document.querySelector('.hidden_nav');
const menuButton = document.querySelector('.menu_button');
const cancleButton = document.querySelector('.cancle_button');

const btnFirst = document.querySelector('.btn_first');
const btnSecond = document.querySelector('.btn_second');
const btnThird = document.querySelector('.btn_third');


hiddenNav.style.transform = 'translateX(100%)';
menuButton.addEventListener('click', function(){

  if (hiddenNav.style.transform === 'translateX(100%)') {
          hiddenNav.style.transform = 'translateX(0%)';
  }
  else if (hiddenNav.style.transform === 'translateX(0%)') {
          hiddenNav.style.transform = 'translateX(100%)';
  }});


  // let nav = document.querySelector('nav');
  // let navTop = nav.offsetTop;

  // console.dir(nav);
  // window.addEventListener('scroll', function() {
  //   if (navTop <= window.scrollY + 500) {
  //       nav.classList.add('plus');
  //   }
  //   else if(navTop === window.scrollY) {
  //     nav.classList.delete('plus');
  // }
  // }
  //   )


// cancleButton.addEventListener('click', function(){
// if (hiddenNav.style.transform === 'translateX(0%)') {
    
//   hiddenNav.style.transform = 'translateX(100%)';
// }
// });


// function menuBtn{
//   let menuBtnFirst = documen.querySelector('.menu_button_first');
//   let menuBtnSecond = documen.querySelector('.menu_button_second');
//   let menuBtnThird = documen.querySelector('.menu_button_third');
// }



// let beigeBox = document.querySelector('.beige_box');
// let beigeBoxTop = beigeBox.offsetTop;
// window.addEventListener('scroll',function(){
// if(beigeBoxTop <= window.scrollY){
//     beigeBox.classList.add('ani');
// };
// });

// let secondBeigeBox = document.querySelector('.second_beige_box');
// let secondBeigeBoxTop = secondBeigeBox.offsetTop;

// window.addEventListener('scroll',function(){
// if(secondBeigeBoxTop - 300 <= window.scrollY){
//     secondBeigeBox.classList.add('ani');
// }
// })
window.onload = function () { buildCalendar(); }    // 웹 페이지가 로드되면 buildCalendar 실행

let nowMonth = new Date();  // 현재 달을 페이지를 로드한 날의 달로 초기화
let today = new Date();     // 페이지를 로드한 날짜를 저장
today.setHours(0, 0, 0, 0);    // 비교 편의를 위해 today의 시간을 초기화

// 달력 생성 : 해당 달에 맞춰 테이블을 만들고, 날짜를 채워 넣는다.
function buildCalendar() {

    let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);     // 이번달 1일
    let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);  // 이번달 마지막날

    let tbody_Calendar = document.querySelector(".Calendar > tbody");
    document.getElementById("calYear").innerText = nowMonth.getFullYear();             // 연도 숫자 갱신
    document.getElementById("calMonth").innerText = leftPad(nowMonth.getMonth() + 1);  // 월 숫자 갱신

    while (tbody_Calendar.rows.length > 0) {                        // 이전 출력결과가 남아있는 경우 초기화
        tbody_Calendar.deleteRow(tbody_Calendar.rows.length - 1);
    }

    let nowRow = tbody_Calendar.insertRow();        // 첫번째 행 추가           

    for (let j = 0; j < firstDate.getDay(); j++) {  // 이번달 1일의 요일만큼
        let nowColumn = nowRow.insertCell();        // 열 추가
    }

    for (let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) {   // day는 날짜를 저장하는 변수, 이번달 마지막날까지 증가시키며 반복  

        let nowColumn = nowRow.insertCell();        // 새 열을 추가하고


        let newDIV = document.createElement("p");
        newDIV.innerHTML = leftPad(nowDay.getDate());        // 추가한 열에 날짜 입력
        nowColumn.appendChild(newDIV);

        if (nowDay.getDay() == 6) {                 // 토요일인 경우
            nowRow = tbody_Calendar.insertRow();    // 새로운 행 추가
        }

        if (nowDay < today) {                       // 지난날인 경우
            newDIV.className = "pastDay";
        }
        else if (nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()) { // 오늘인 경우           
            newDIV.className = "today";
            newDIV.onclick = function () { choiceDate(this); }
        }
        else {                                      // 미래인 경우
            newDIV.className = "futureDay";
            newDIV.onclick = function () { choiceDate(this); }
        }
    }
}

// 날짜 선택
function choiceDate(newDIV) {
    if (document.getElementsByClassName("choiceDay")[0]) {                              // 기존에 선택한 날짜가 있으면
        document.getElementsByClassName("choiceDay")[0].classList.remove("choiceDay");  // 해당 날짜의 "choiceDay" class 제거
    }
    newDIV.classList.add("choiceDay");           // 선택된 날짜에 "choiceDay" class 추가
}

// 이전달 버튼 클릭
function prevCalendar() {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, nowMonth.getDate());   // 현재 달을 1 감소
    buildCalendar();    // 달력 다시 생성
}
// 다음달 버튼 클릭
function nextCalendar() {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, nowMonth.getDate());   // 현재 달을 1 증가
    buildCalendar();    // 달력 다시 생성
}

// input값이 한자리 숫자인 경우 앞에 '0' 붙혀주는 함수
function leftPad(value) {
    if (value < 10) {
        value = "0" + value;
        return value;
    }
    return value;
}









let beigeBox = document.querySelector('.beige_box');
console.dir(beigeBox.offsetParent.offsetTop);
let beigeBoxTop = beigeBox.offsetParent.offsetTop - 500;
let beigeBoxBottom = beigeBox.offsetParent.offsetTop + 1000;
console.dir(beigeBoxBottom);



let secondBeigeBox = document.querySelector('.second_beige_box');
let secondBeigeBoxTop = secondBeigeBox.offsetParent.offsetTop - 700;
console.dir(secondBeigeBox);

window.addEventListener('scroll', function() {
    if (beigeBoxTop <= window.scrollY) {
        beigeBox.classList.add('ani');
    }
    if (beigeBoxBottom <= window.scrollY) {
        beigeBox.classList.add('rem');
    }

    if (secondBeigeBoxTop <= window.scrollY) {
      // console.log(secondBeigeBox)
        secondBeigeBox.classList.add('ani');
    }
});



var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }


  
const tabMenus = document.querySelectorAll('.tab_menu');
const tabName = document.querySelector('#tab_name');
const facilityList = document.querySelector('.facility_list');
const tabSections = document.querySelectorAll('.tabsection');//section id

facilityList.addEventListener('click', function(e){
    // e.currentTarget 자기자신
     let id = e.target.closest('li').dataset.id;
     console.log(id);
     tabSections.forEach(function(tabSection){
         tabSection.classList.remove('active');
     })
     let secId = document.getElementById(id);
     secId.classList.add('active');
 })
 tabMenus.forEach(function(tabMenu){ //클래스 각각 호출
    tabMenu.addEventListener('click',function(){// 하나의 클래스를 클릭
        //console.log(tabMenu.dataset.text) //data-text의 값을 찾는 방법
        tabName.innerHTML = tabMenu.dataset.text;})
    })