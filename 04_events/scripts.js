btn1.onmousedown=()=>console.log("Mouse Down ");
btn1.onmouseup=()=>console.log("Mouse Up ");
btn1.onmouseenter=()=>console.log("Mouse Enter");
btn1.onclick=()=>console.log("MOUSE CLICKED!");


block2.onmouseenter=(event)=>{
    // block2.style.backgroundColor="yellow";
    // // block2.style["background-color"]="yellow";
    // block2.style.width=150+"px";
    // block2.style.height=200+"px";
    // console.dir(block2);
    console.log("ENTER",event.target);
}


block2.onmouseleave=()=>{
    block2.style.backgroundColor="teal";
    // block2.style["backgroundColor"]="yellow";
    block2.style.width=100+"px";
    block2.style.height=100+"px";
    console.dir(block2);
}



block2.onmouseover=(event)=>{
   console.log("over"+event.target.tagName);
}

// e=> event
function keyHandler(e){
    console.log(e);
    if (e.code="Space"){
        console.log("Cliked key Space");
    }
    btn1.style.backgroundColor="red";
}
