//HAM NAV

let state = false

function burgerButton () {
    let nav = document.getElementById('barbar')

    if(state==false){
        nav.style.display = 'flex'
        state = true
    }else if(state == true){
        nav.style.display = 'none'
        state = false
    }
}

// Register 
function validasi(event){
    event.preventDefault();
    let username = document.getElementById('username').value;
    let mail = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirm = document.getElementById('confirmpass').value;
    let check = document.getElementById('checker').checked;

    let error = document.getElementById('error-msg');
    error.innerText = '';

    if(username.length < 8){
        error.innerText = 'Username must be at least 8 character';
    }else if(!validasiEmail(mail, error)){
        
    } else if(!validasiPass(password,error)){

    } else if(confirm != password){
        error.innerText = 'confirmation password invalid';
    }else if(!check){
        error.innerText = 'You Must Agree To Our Term And Services'
    }
    else{
        alert("Registration Succes")
    }
}

function validasiEmail(mail, error){

    error.innerText = "Invalid Email format";
  if (!mail.endsWith("@gmail.com") && (!mail.endsWith("@yahoo.com"))) {
    return false;
  }
  if (!(mail.includes("@") && mail.includes("."))) {
    return false;
  }
  if (mail.startsWith("@") || mail.startsWith(".")) {
    return false;
  }
  error.innerText = " ";
  return true;
}

function validasiPass(password,error){
    if(password.length < 8){
        error.innerText = 'Password must be at least 8 character'
        return false;
    }
    let huruf = false;
    let angka = false;
    let hurufBesar = false;
    let hurufKecil = false;
    for(let i = 0; i<password.length;i++){
        if(password.charCodeAt(i)>= '97' && password.charCodeAt(i)<='123'){
            huruf = true;
            hurufKecil = true;
        }
        if(password.charCodeAt(i)>= '65' && password.charCodeAt(i)<='91'){
            huruf = true;
            hurufBesar = true;
        }
        if(password.charCodeAt(i)>= '48' && password.charCodeAt(i)<='57'){
            angka = true;
        }
    }
    if((huruf&&angka&&hurufBesar&&hurufKecil)==false){
        error.innerText = 'Password Must have 1 alphabet,1 numeric, 1uppercase, 1 lowercase'
    }
    return huruf&&angka&&hurufBesar&&hurufKecil;
}





