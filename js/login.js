let email = document.querySelector("#email")
let password = document.querySelector("#password")
let signInBtn = document.querySelector("#signIn")

let getuserEmail = localStorage.getItem('email')
let getuserName = localStorage.getItem('username')

let getpassword = localStorage.getItem('password')

signInBtn.addEventListener('click' , function(e){
    e.preventDefault();

    if (email.value === '' || password.value === '' ) {
        alert('Please fill in your username and password data')
        
    }else if (getuserEmail && getuserEmail === email.value && getpassword) {
        setTimeout( ()=>{
            window.location = 'index.html'

        }, 2000)

        
    }else{
        alert(" wrong credentials !")
    }

})