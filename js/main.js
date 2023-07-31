var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");

var registerName = document.getElementById("registerName");
var registerEmail = document.getElementById("registerEmail");
var registerPassword = document.getElementById("registerPassword");


var accountsArray = [];



if(localStorage.getItem("accounts") != null){
    accountsArray = JSON.parse(localStorage.getItem("accounts"));
}


var personName = localStorage.getItem("userName");
document.getElementById("nameHello").innerHTML = personName ;



function isInputsEmpty(){
    if(registerName.value=="" ||  registerEmail.value=="" || registerPassword.value==""){
        return false ;
    }else{
        return true ;
    }
}

function isEmailChoosed(){
    for (var i=0 ; i<accountsArray.length ; i++){
        if(accountsArray[i].email == registerEmail.value){
            return false ;
        }
    }
}


function register(){
    if(isInputsEmpty() == false){
        // alert("please fill all data ");
        swal("please fill all data ");
        return false ;
    }

    var personObject = {
        name :registerName.value,
        email:registerEmail.value,
        password:registerPassword.value,
    };

    if(isEmailChoosed() == false){
        swal("this email already taken !");
    }else{
        accountsArray.push(personObject);
        localStorage.setItem("accounts",JSON.stringify(accountsArray));
        window.location.href = "index.html";
    }
}

// console.log(accountsArray);

/*=========================================================== */



function login(){
    var inEmail = loginEmail.value;
    var inpass = loginPassword.value;

let flag = 0 ;
    for (var i=0 ; i<accountsArray.length ; i++){
        if(accountsArray[i].email.toLowerCase()  == inEmail.toLowerCase()   && accountsArray[i].password.toLowerCase()  == inpass.toLowerCase()){
            // alert("done");
            localStorage.setItem("userName",accountsArray[i].name);
            window.location.href = "name.html";
            flag = 1 ;
          break;
        }   
    }
    if(flag==0){
        swal("error in email or password ");
    }
}


function logOut(){
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            localStorage.removeItem("userName");
            window.location.href = "register.html";
            
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
}














