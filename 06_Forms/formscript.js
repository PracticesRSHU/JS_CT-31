// ===========get forms 
const forms = document.forms;
console.dir(forms);
// ===========get form by name

const form = document.forms.registrationForm;
console.dir(form);
//get form control by attr (property) name element

const loginInput = form.elements.login;
const emailInput = form.elements.email;
const phoneInput = form.elements.phone;

//=====get  input value====
console.dir(loginInput)
console.log(loginInput.value);
console.dir(phoneInput)
console.log(phoneInput.value)

templatePhone = /^\+38\(\d\d\d\)-\d\d\d-\d\d-\d\d$/;
templateLogin = /^[A-Z][a-z]*$/;// [U]serName
templatePhone = /^([A-ZА-Я]){1,5}([a-zа-я]{4,8})([0-9_-]){1,6}$/; //Qwerty-1
function checkForm() {
    // event.preventDefault();
    let loginUser = document.getElementById("login").value;
    if (!templateLogin.test(loginUser)) {
        alert("Login not correct... ");
        return false;
    }
    let phoneUser = document.getElementById("phone").value;

    // if (!templatePhone.test(phoneUser)) {
    //     alert("phone not correct... ");
    //     return false;
    // }
    let emailUser = document.getElementById("email").value;
    
    
    
    //1) cookie
    //2) expires => toUTCString =>Thu, 17 Oct 2024 10:02:44 GMT
    //3) path=> path=/ => area accesss cookie
    //4) domain=rshu.edu.ua
    //5) secure  =>SSl => send by http[s]
    
    
    
    document.cookie="registered=User;expires=Thu, 17 Oct 2024 10:15:44 GMT;path=/";
    let expire=new Date();
    expire.setMinutes(expire.getMinutes()+2);
    document.cookie=`loginUser=${loginUser};expires=${expire.toUTCString()};`;
    document.cookie=`email=${emailUser};expires=${expire.toUTCString()};`;
    console.log(document.cookie);
    //==============LocalStorage===
    localStorage.setItem("email",emailUser);
    console.log(localStorage.getItem());
    sessionStorage.setItem("login",loginUser);
    console.log(sessionStorage.getItem("login"));


    return true;
}

// registrationForm.onsubmit=()=>{
//     event.preventDefault();
//     let loginUser = document.getElementById("login").value;
//     if (!templateLogin.test(loginUser)) {
//         alert("Login not correct... ");
//         return false;
//     }
//     let phoneUser = document.getElementById("login").value;

//     if (!templatePhone.test(phoneUser)) {
//         alert("phone not correct... ");
//         return false;
//     }
//     return true
// }
