function signup(){
    const email = document.getElementById("emailSign");
    const pass = document.getElementById("passwordSign");
    const confir = document.getElementById("confirmSign");
    const username = document.getElementById("usernameSign");
    const emailerr = document.getElementById("emailSignErr");
    const passerr = document.getElementById("confirmSignErr");
    const usererr = document.getElementById("passwordSignErr");
    const confirerr = document.getElementById("usernameSignErr");
    let valid = true;
    emailtest=/\S+@\S+.\S+/;
    if(emailtest.test(email.value)) {
        emailerr.textContent = ""
    }
    else{
        emailerr.textContent = "ex: example@example.com"
        valid = false;
    }
    if(pass.value.length >= 6 && pass.value.length <= 18){
        passerr.textContent = ""
    }
    else{
        passerr.textContent = ""
        valid = false;
    }
    if(confir.value == pass.value){
        confirerr.textContent = ""
    }
    else{
        confirerr.textContent = "not  match"
        valid = false;
    }
    if(username.value.length >= 3){
        usererr.textContent = ""
    }
    else{
        usererr.textContent = " at least 3 char"
        valid = false;
    }
    if(valid){
        var iduser = parseInt(localStorage.getItem("iduser")) || 1;
        let user = {email : email.value , password : pass.value , name : username.value , id : iduser};
        iduser++;
        localStorage.setItem("iduser",iduser);
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "login.html";
    }
}
function login(){
    const emailL = document.getElementById("emailLog").value;
    const passL = document.getElementById("passwordLog").value;
    const emailLerr = document.getElementById("EmailErr");
    const passLerr = document.getElementById("passwordErr");
    let users = JSON.parse(localStorage.getItem("users")) || [];
    emailtest=/\S+@\S+.\S+/;
    if(emailtest.test(emailL)) {
        for(i=0;i<users.length;i++){
            if(emailL == users[i].email){
                if(passL == users[i].password){
                    sessionStorage.setItem("name",users[i].name);
                    sessionStorage.setItem("id",users[i].id);
                    window.location.href = "index.html";
                    
                }
                else{
                    passLerr.textContent = "Wrong password ";
                }
            }
            else{
                emailLerr.textContent = "Email not found"
            }
        }
    }
    else{
        emailLerr.textContent = "ex: example@example.com "
    }
}
function profile (){
            const usernamee= document.getElementById("showName");
            const iduser = document.getElementById("showId");
            let name = sessionStorage.getItem("name");
            let id = sessionStorage.getItem("id");
            usernamee.textContent = `Hello ${name}`;
            iduser.textContent = `you'r id ${id}`;
}