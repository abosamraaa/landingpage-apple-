let iphone1 = document.querySelector('#gold-image');
let iphone2 = document.querySelector('#blue-image');
let iphone3 = document.querySelector('#black-image');
let iphone4 = document.querySelector('#rose-image');
let iphone5 = document.querySelector('#red-image');
let mainImage = document.querySelector('.main-image')
function red(){
    document.body.style.background = "#c82525";
    mainImage.innerHTML = `<img src="/images/4.png">`;
}
function gold(){
    document.body.style.background = "black";
    mainImage.innerHTML = `<img src="/images/0.png">`;
}
function blue(){
    document.body.style.background = "#247ec8";
    mainImage.innerHTML = `<img src="/images/1.png">`;
}
function black(){
    document.body.style.background = "#1e1e1e";
    mainImage.innerHTML = `<img src="/images/2.png">`;
}
function rose(){
    document.body.style.background = "#c79b53";
    mainImage.innerHTML = `<img src="/images/3.png">`;
}
let tlinks = document.querySelector('.t-links');
let menuImage = document.querySelector('.hide');
function showMenu(){
    tlinks.classList.toggle('hidee');
    tlinks.classList.toggle('menu');
};
document.addEventListener('click',function(e){
    if(e.target != menuImage && tlinks){
        if(tlinks.classList.contains('menu')){
            tlinks.classList.toggle('hidee');
            tlinks.classList.toggle('menu');
        }

    } 
});
tlinks.onclick = function(e){
    e.stopPropagation();
}


