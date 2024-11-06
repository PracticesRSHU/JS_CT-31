let modelInput=document.getElementById("formModel");
let priceInput=document.getElementById("formPrice");
let inStockInput=document.getElementById("inStock");
//=== set click event handler on submit button==
let listProducts=[];

let listProductsFromLS_json=localStorage.getItem("listProducts");
console.log(listProductsFromLS_json)
if (listProductsFromLS_json !=null){
    let listProductsFromLS=JSON.parse(listProductsFromLS_json)
    for (const product of listProductsFromLS) {
        console.log(product)
        tableProducts.innerHTML+=`<tr id="tr${product.id}">
                                <th scope="row">${product.id}</th>
                                <td>${product.model}</td>
                                <td>${product.price}$</td>
                                <td>${product.inStock ? "In Stock" : "Out of Stock"}</td>
                                <td><button class="btn btn-danger" onclick="removeProduct(tr${product.id},${product.id})">Remove</button></td>
                              </tr>`;   
    }
     
}
// localStorage.setItem("listProducts", JSON.stringify(listProducts));
// console.log(localStorage.getItem("listProducts"));


class Product{
    static count=0;
    constructor(model, price, inStock){
        this.model=model;
        this.price=price;
        this.inStock=inStock;
        this.id=++Product.count;
    }
}

createForm.onsubmit=function(event){
    event.preventDefault();//disable default logic working form
    let newProduct=new Product(modelInput.value, priceInput.value,inStockInput.checked);
    listProducts=JSON.parse(localStorage.getItem("listProducts"));
    if (listProducts!=null){
        console.log(listProducts)
        console.log(listProducts[listProducts.length-1])
        newProduct.id= ++(listProducts[listProducts.length-1].id);
    }
    else{
        newProduct.id=1
    }
    // console.log(listProducts)
    console.log(newProduct);
    addProductToTable(newProduct);
}

function addProductToTable(product){
    // let tableBody=document.getElementById("tableProducts");
    listProducts=JSON.parse(localStorage.getItem("listProducts"));
    // product.id=listProducts[listProducts.lenght-1].id;
    if (listProducts!=null){
        listProducts.push(product);
    }else{
        listProducts=new Array(product);
    }
    localStorage.setItem("listProducts", JSON.stringify(listProducts));
    console.dir(tableProducts);
    tableProducts.innerHTML+=`<tr id="tr${product.id}">
                                <th scope="row">${product.id}</th>
                                <td>${product.model}</td>
                                <td>${product.price}$</td>
                                <td>${product.inStock ? "In Stock" : "Out of Stock"}</td>
                                <td><button class="btn btn-danger" onclick="removeProduct(tr${product.id},${product.id})">Remove</button></td>
                              </tr>`;
}

function removeProduct(trid, id){
    console.log(trid);
    listProducts=JSON.parse(localStorage.getItem("listProducts"))
    listProducts=listProducts.filter(product=>product.id!=id);
    localStorage.setItem("listProducts", JSON.stringify(listProducts));
    trid.remove();
}

// function removeProduct(event){
//     console.dir(event.currentTarget.parentElement.parentElement);
//     event.currentTarget.parentElement.parentElement.remove();
//     // event.currentTarget.remove();
// }