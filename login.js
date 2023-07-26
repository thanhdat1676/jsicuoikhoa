import app from "./firebase.js"
import Register from "./register.js"
// import khi đến đoạn go to Register

class Login{
    $txtEmail
    $txtPassword
    $formLogin
    $btnSubmit
    $txtGotoRegister

    constructor () {
        this.$txtEmail = document.createElement("input")
        this.$txtEmail.type = "email"
        this.$txtEmail.placeholder = "Enter your email ... "

        this.$txtPassword = document.createElement("input")
        this.$txtPassword.type = "password"
        this.$txtPassword.placeholder = "enter your password ..."

        this.$formLogin = document.createElement("form")
        this.$btnSubmit = document.createElement("button")
        this.$btnSubmit.innerHTML = "Login"

        this.$txtGotoRegister = document.createElement("a")
        this.$txtGotoRegister.innerHTML = "Register your new account"

        this.$txtGotoRegister.addEventListener("click", this.gotoRegister)

    }

    initRender = (container) =>{
        const flexContainer = document.createElement("div")
        const title = document.createElement("h2")
        title.innerHTML ="Login"
        flexContainer.classList.add("d-flex", "flex-column", "centering")

        flexContainer.appendChild(title)
        flexContainer.appendChild(this.$txtEmail)
        flexContainer.appendChild(this.$txtPassword)
        flexContainer.appendChild(this.$btnSubmit)
        flexContainer.appendChild(this.$txtGotoRegister)

        
        this.$formLogin.appendChild(flexContainer)
        this.$formLogin.addEventListener("submit",this.login)
        container.appendChild(this.$formLogin)
    }

    //2
    gotoRegister = () => {
        const register = new Register()
        app.changeActiveScreen(register)
    }

    login =(e) => {
        e.preventDefault()
        const email = this.$txtEmail.value
        const password = this.$txtPassword.value
    }
}

export default Login