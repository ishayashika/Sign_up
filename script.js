let demo1=document.getElementById("demo1");
function validateEmail(){
    let email=document.getElementById("email");
    let emailContent=email.value;
    if(emailContent.length>3 && emailContent.includes("@") && emailContent.includes(".")){
        demo1.textContent="All good to go";
        demo1.style.color="green";
        return true;
    }else{
        demo1.textContent="Make sure email is more than 3 characters and has @ and a ."
        demo1.style.color="red";
        return false;
    }
}
let demo2=document.getElementById("demo2");
function validatePass(){
    let password=document.getElementById("password");
    let passContent=password.value;
    if(passContent.length>8){
        demo2.textContent="All good to go";
        demo2.style.color="green";
        return true;
    }else{
        demo2.textContent="Make sure password is more than 8 characters.";
        demo2.style.color="red";
        return false;
    }
}

document.getElementById("myform").addEventListener("submit",(e)=>{
    e.preventDefault();
    let validEmail=validateEmail();
    let validPassword=validatePass();
    if(validEmail && validPassword){
        let confirmSub=confirm("Are you sure you want to submit this form?");
        if(confirmSub){
            alert("Successfully signup!!");
            document.getElementById("myform").submit();
        }else{
            document.getElementById("myform").reset();
            demo1.textContent="Make sure email is more than 3 characters and has @ and a ."
            demo1.style.color="red";
            demo2.textContent="Make sure password is more than 8 characters.";
            demo2.style.color="red";

        }
    }
});