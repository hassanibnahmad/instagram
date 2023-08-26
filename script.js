const image = document.querySelector('.photo');
const heart = document.querySelector('.heart');

// event ===> double click

image.addEventListener("dblclick", (e) => {
    var heart1 = document.getElementById('heart1');
    var blackHeart = document.getElementById('blackHeart');
    heart1.classList.toggle('fa-solid');
    heart1.style.color="red"
    
    // N7asbo les cordonées dyal fin clikiti 3la tswira
    let xvalue = e.clientX - e.target.offsetLeft;
    let yvalue = e.clientY - e.target.offsetTop;
    // console.log(xvalue, yvalue)

    // N7Ato l9alb f dok les cordonées x, y

    // heart.style.left = `${xvalue}px`
    // heart.style.top = `${yvalue}px`

    // active class ==> class heart
    heart.classList.add("active");

    // thayed active ba3d 1s
    setTimeout(() => {
    heart.classList.remove("active");
}, 1000)

    

});

function change() {
    // var btn = document.getElementById('btn');
    var div = document.getElementById('photo');
    div.style.backgroundImage = "url('Art2.jpg')";

}
function reChange() {
    // var btn = document.getElementById('btn');
    var div = document.getElementById('photo');
    div.style.backgroundImage = "url('Art.jpg')";

}

function heartIconChange(){
    var heart2 = document.getElementById('heart1');
    heart1.classList.toggle('fa-solid');
    heart1.style.color="red";  
}

function saveIconChange(){
    var save = document.getElementById('save');
    save.classList.toggle('fa-solid');
    heart1.style.color="red"   
}
