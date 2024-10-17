let stepBullet=30;
let isMove=false; // не рухається bullet -  рух зупинено


document.body.onkeydown=function(event){

    if (event.code=='Space' && !isMove){
       console.log("play");
       isMove=true;
       moveBullet();
    }
}

function moveBullet(){
    // console.dir(bullet);
    // console.log(isMove);
    if(isMove===true){
        // console.log(isMove);
        bullet.style.left=(bullet.offsetLeft)+stepBullet+"px";
        // console.dir(bullet);
        if(bullet.offsetLeft>game1.clientWidth-bullet.clientWidth-50){
            // console.dir(bullet);
            bullet.style.left=0+"px";
            isMove=false;
        }
        else{
            setTimeout(moveBullet,10);
        }
    }
}

