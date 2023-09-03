const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

let name = document.querySelector('#name')
let mail = document.querySelector('#mail')
let password = document.querySelector('#password')
let submit = document.querySelector('#submit')

let users = {};

function User(name, mail, password){
    this.name = name;
    this.mail = mail;
    this.password = password;
}
function createId(users){
    return Object.keys(users).length;
}
submit.addEventListener('click',()=>{
    const nameUser = name.value;
    const mailUser = mail.value;
    const passwordUser = password.value;

    const user = new User(nameUser, mailUser, passwordUser);
    const userId = 'User' + createId(users);
    users[userId] = user;
})



    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })


    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

