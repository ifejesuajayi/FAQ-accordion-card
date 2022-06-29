let hiddenOne = document.querySelector(".hide-1");
let hiddenTwo = document.querySelector(".hide-2");
let hiddenThree = document.querySelector(".hide-3");
let hiddenFour = document.querySelector(".hide-4");
let hiddenFive = document.querySelector(".hide-5");

let buttonDownOne = document.querySelector('.arrow-1');
let buttonDownTwo = document.querySelector('.arrow-2');
let buttonDownThree = document.querySelector('.arrow-3');
let buttonDownFour = document.querySelector('.arrow-4');
let buttonDownFive = document.querySelector('.arrow-5');

let questionOne = document.querySelector('.question-1');
let questionTwo = document.querySelector('.question-2');
let questionThree = document.querySelector('.question-3');
let questionFour = document.querySelector('.question-4');
let questionFive = document.querySelector('.question-5');


buttonDownOne.addEventListener('click', downBtnOne);

function downBtnOne(){
    let down = buttonDownOne.classList.toggle('arrow-up');

    if(down === true){
        questionOne.style.fontWeight = '600';
        questionOne.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif'
        questionOne.style.paddingBottom = '1rem'
        hiddenOne.innerHTML = `<p> You can have to 5 team members.</p>`
    } else {
        questionOne.style.fontWeight = '300';
        hiddenOne.innerHTML = ``
    }
}

buttonDownTwo.addEventListener('click', downBtnTwo);

function downBtnTwo(){
    let down = buttonDownTwo.classList.toggle('arrow-up');

    if(down === true){
        questionTwo.style.fontWeight = '600';
        questionTwo.style.paddingBottom = '1rem'
        questionTwo.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif'
        hiddenTwo.innerHTML = `<p> Not more than 2gb. All files in your account must </br> fit your alloted storage space.</p>`
    } else {
        questionTwo.style.fontWeight = '300';
        hiddenTwo.innerHTML = ``
    }
}

buttonDownThree.addEventListener('click', downBtnThree);

function downBtnThree(){
    let down = buttonDownThree.classList.toggle('arrow-up');

    if(down === true){
        questionThree.style.fontWeight = '700';
        questionThree.style.paddingBottom = '1rem'
        questionThree.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif'
        hiddenThree.innerHTML = `<p> Click on settings and reset my password.</p>`
    } else {
        questionThree.style.fontWeight = '300';
        hiddenThree.innerHTML = ``
    }
}

buttonDownFour.addEventListener('click', downBtnFour);

function downBtnFour(){
    let down = buttonDownFour.classList.toggle('arrow-up');

    if(down === true){
        questionFour.style.fontWeight = '700';
        questionFour.style.paddingBottom = '1rem'
        questionFour.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif'
        hiddenFour.innerHTML = `<p> To cancel a subscription send us a mail about </br> cancelation of subscription.</p>`
    } else {
        questionFour.style.fontWeight = '300';
        hiddenFour.innerHTML = ``
    }
}

buttonDownFive.addEventListener('click', downBtnFive);

function downBtnFive(){
    let down = buttonDownFive.classList.toggle('arrow-up');

    if(down === true){
        questionFive.style.fontWeight = '700';
        questionFive.style.paddingBottom = '1rem'
        questionFive.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif'
        hiddenFive.innerHTML = `<p> We encourage you to call us if having issues with </br> the app.</p>`
    } else {
        questionFive.style.fontWeight = '300';
        hiddenFive.innerHTML = ``
    }
}

