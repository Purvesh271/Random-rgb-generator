let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let h1 = document.querySelector("h1");
    let rnd = random();
    h1.innerText = rnd;

    let div = document.querySelector("div");
    div.style.backgroundColor = rnd;

    console.log("Color changed");
});

function random(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
};