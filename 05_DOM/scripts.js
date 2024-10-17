console.dir(document.all);
//find elemts
console.dir(document.getElementsByTagName("ul")[0]);
const var_head1 = document.getElementById("head1"); //by ID
console.dir(var_head1)
console.dir(head1)
const elem_span = document.getElementsByClassName("colorspan") //by class
console.dir(elem_span)
console.dir(elem_span[0].innerText)

const elem_h2 = document.getElementsByTagName("h2");
console.dir(elem_h2[0].innerText)
console.dir(elem_h2[0].innerHTML)
console.dir(elem_h2[0].textContent)

let li_span_colorspan = document.querySelectorAll("ul li span.colorspan")
console.dir(li_span_colorspan)
console.dir(li_span_colorspan[0])

// li_span_colorspan[0].style.background = "yellow";
for (const li_elem of li_span_colorspan) {
    li_elem.style.color = "green";
    li_elem.style.fontSize = "26px";
} 

let li_elem = document.querySelectorAll("ul li")
console.log(li_elem.length)
for(let i=0; i<li_elem.length; i+=2){
    li_elem[i].style.background="yellow";
}


let ul=document.getElementsByTagName("ul"); //return collection 
console.dir(ul);
let spans=ul[0].getElementsByTagName("span");
console.dir(spans);
console.log(spans[0].getAttribute("class"));

//setAttr class="colorspan" lastElemnt in ul

console.dir(ul[0].lastElementChild)
ul[0].lastElementChild.setAttribute("class","colorspan")
ul[0].firstElementChild.className="colorspan"
let items=ul[0].children //get all li in ul

console.dir(items[6].classList.toggle("colorspan"))
console.dir(items[6].classList)
// alert("Continue")
// console.dir(items[6].classList.toggle("colorspan"))
// console.dir(items[6].classList)
let new_li=document.createElement("li");
new_li.style.color="red";
// new_li.innerText="Item9"
new_li.innerHTML='<span><a href="#">item9</a><span>'
console.dir(new_li);

let ul_new=document.getElementById("our_list");
ul_new.append(new_li);