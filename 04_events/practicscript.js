let block4 = document.getElementById("block4");
console.dir(block4);
// let game=document.getElementById("game");
game.onmouseover = (event) => {
    console.dir(event.target);
    // console.log(event.target.id);
    let currentId = event.target.id;
    //отримання інформації про стилі на сторінці браузера
    // window.getComputedStyle(block1).backgroundColor
    let block = document.getElementById(currentId)
    if (currentId == "block1" || currentId == "block2" || currentId == "block3") {
        block4.style.backgroundColor = window.getComputedStyle(block).backgroundColor;
    }else{
        block4.style.backgroundColor="white";
    }
}

