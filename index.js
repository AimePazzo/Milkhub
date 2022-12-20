let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    nav.classList.remove('active');
    loginForm.classList.remove('active');
}

let loginForm =document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
    nav.classList.remove('active');
    searchForm.classList.remove('active');
}

let loginForm2 = document.querySelector('.login-form2');
document.querySelector('.fa-times').onclick = () =>{
    loginForm2.classList.remove('active');
    nav.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}


let nav =document.querySelector('.nav');
document.querySelector('#menu-btn').onclick = () =>
{
    nav.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>
{
    nav.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    msg.classList.remove("active");
    
    

}
// window.onload = ()=>{
//     (()=>{
//         alert('UserName is Admin and Password is Admin');
//     })()
// }

// validation
let form2 = document.getElementById('form2');
let productName = document.getElementById('productName');
let price = document.getElementById('price');
let milkSupplier = document.getElementById('milkSupplier');
let bars =document.getElementById('bars');
// let cardImage = document.getElementById('card-image');


let fromValidation = () =>{
    
    if (milkSupplier.value==="" || productName.value ==="" || price.value ==="" || cardImage.value==="") {
            milkSupplier.style.borderColor='red';
            productName.style.borderColor='red';
            price.style.borderColor='red';
            cardImage.style.borderColor='red'
        }else{
            productName.style.borderColor='green';
            price.style.borderColor ='green';
            milkSupplier.style.borderColor='green';
            cardImage.style.borderColor='green'
            acceptData();
        }
    };
    let data =[];

    let acceptData = () =>{
    data.push({
    productName: productName.value,
    milkSupplier: milkSupplier.value,
    price: price.value,
    });

    localStorage.setItem("data",JSON.stringify(data));

    createBar();
};

let createBar =() =>{
    bars.innerHTML="";
    data.map((x,y)=>{
        return (bars.innerHTML +=` <div class="cards" data-name="p-1" id=${y} onclick="quickView()"> 
        <i onclick="deletBar(this)" class="fas fa-trash-alt " id="fa"></i>
        <img  src ="./img/51889660.png"alt=""id="output" class="card-image">
        <div class="card-detail">
        <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                   </div>
            <h3 class="card-title">${x.productName}</h3>
            <p class="Milk-supplier">${x.milkSupplier}
            <span>${x.price}</span>
            </p>
         </div>
    </div>`);
    });
    resetForm();
}

let resetForm =()=>{
    productName.value ="";
    milkSupplier.value="";
    price.value ="";
    // cardImage.value="";
}
let msg = document.getElementById('msg');
let deletBar = (e)=>{
 let passD = prompt("Please Enter UserName to perform this action");
 if (passD != 'Admin') {
    alert("you are not allow to Delete Any item")
 }
 else{
    msg.classList.toggle('active');
    e.parentElement.remove();
    data.splice(e.parentElement,1);
    localStorage.setItem("data",JSON.stringify(data));
    
 }
   
}
//Quick view


// getting data from localStorage
(()=>{
    data = JSON.parse(localStorage.getItem("data"))|| [];
    createBar();
})()



// login sample
 let form1 = document.getElementById('form1');
form1.addEventListener('submit',(e) => {
    e.preventDefault();
    login();
    });

let text =document.getElementById('text');
let pass = document.getElementById('password');

let login=()=>{
    if(text.value==="" || pass.value===""){
        text.style.borderColor='red'
        pass.style.borderColor='red'
        alert('Please enter this userName And password\,\
        Admin and Admin');
    }else if(text.value != pass.value){
        text.style.borderColor='red'
        pass.style.borderColor='red'
        alert('Incorrect userName And password');
    }else{
        loginForm2.classList.toggle('active');
        loginForm.classList.remove('active');
        
form2.addEventListener('submit',(e) => {
    e.preventDefault();
    fromValidation();
})
    }
}