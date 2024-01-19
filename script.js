const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const password=document.getElementById('password');
const cpassword=document.getElementById('cpassword');

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    validate();
});

const sendData=(username,sRate,count)=>{
    if(count===sRate){
        alert("Registration Successfully");
        Swal.fire({
            title: "Welcome ! "+username,
            text: "Registration Successfully !!",
            icon: "success"
          });
    }
}

const successMsg=(username)=>{
    let formCon=document.getElementsByClassName('form-control');
    var count=formCon.length-1;
    for(var i=0;i<formCon.length;i++){
        if(formCon[i].className==="form-control success"){
            var sRate=0+i;
            sendData(username,sRate,count);
        }else {
            return false;
        }
    }
}

const isEmail=(emailVal)=>{
    var atSymbol=emailVal.indexOf("@");
    if(atSymbol<1) return false;
    var dot=emailVal.lastIndexOf('.');
    if(dot<=atSymbol+2) return false;
    if(dot===emailVal.length-1) return false;
    return true;
}

const validate=()=>{
        
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const phoneVal=phone.value.trim();
    const passwordVal=password.value.trim();
    const cpasswordVal=cpassword.value.trim();

    if(usernameVal===""){
        setErrorMsg(username,'UserName cannot be blank');
    }else if(usernameVal.length<=2){
        setErrorMsg(username,'UserName min 3 char');
    }else{
        setSuccessMsg(username);
    }


    if(emailVal===""){
        setErrorMsg(email,'Email cannot be blank');
    }else if(isEmail(emailVal)){
        setErrorMsg(email,'Not a valid email');
    }else{
        setSuccessMsg(email);
    }

    if(phoneVal===""){
        setErrorMsg(phone,'Phone cannot be blank');
    }else if(phoneVal.length!==10){
        setErrorMsg(phone,'Not a valid phone number');
    }else{
        setSuccessMsg(phone);
    }

    if(passwordVal===""){
        setErrorMsg(password,'Password cannot be blank');
    }else if(passwordVal.length<=5){
        setErrorMsg(password,'Min 6 char');
    }else{
        setSuccessMsg(password);
    }

    if(cpasswordVal===""){
        setErrorMsg(cpassword,'Password cannot be blank');
    }else if(cpasswordVal!==passwordVal){
        setErrorMsg(cpassword,'Password do not match');
    }else{
        setSuccessMsg(cpassword);
    }

    successMsg(usernameVal);
}

function setErrorMsg(input,errormsg){
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');
    formControl.className="form-control error";
    small.innerText=errormsg;
}

function setSuccessMsg(input){
    const formControl=input.parentElement;
    formControl.className="form-control success";
}