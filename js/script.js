// console.log('register')

// localStorage.setItem("hackerspace" , 'gomycode')
// localStorage.setItem("age" , '15')
// localStorage.setItem("test" , 'DOMtask')
 
// console.log(localStorage.getItem('hackerspace'));

// DOM needed to display upon submit
let userUl = document.querySelector('#user-info')
let user = document.querySelector('#user')
// DOM needed to hide upon submit
let subscLinks = document.querySelector('#subscription')
let logoutBtn = document.querySelector('#logout')


//check data existence in local storage//
if (localStorage.getItem('username')) {
    let username = localStorage.getItem('username')

    subscLinks.remove()
    userUl.style.display = "flex"
    user.innerHTML = username
    
}
const logoutHandler = function(e){
    e.preventDefault();
    localStorage.clear()
    window.location = 'register.html'

}

logoutBtn.addEventListener('click' , logoutHandler)