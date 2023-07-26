import app from "./firebase.js"
import Login from "./login.js"
// import khi đến đoạn go to Register

class Register {
    $formRegister
    $txtEmail
    $txtUserName
    $txtPassword
    $errorMessage
    $txtConfirmPass
    //2
    $txtGotoLogin
    $btnSubmit

    constructor() {
        this.$txtEmail = document.createElement("input")
        this.$txtEmail.type = "email"
        this.$txtEmail.placeholder = "Enter your email ..."

        this.$txtUserName = document.createElement("input")
        this.$txtUserName.type = "text"
        this.$txtUserName.placeholder = "What's your name?"

        this.$txtPassword = document.createElement("input")
        this.$txtPassword.type = "password"
        this.$txtPassword.placeholder = "Enter your pass"

        this.$txtConfirmPass = document.createElement("input")
        this.$txtConfirmPass.type = "password"
        this.$txtConfirmPass.placeholder = "Confirm your password ..."

        this.$btnSubmit = document.createElement("button")
        this.$btnSubmit.innerHTML = "Register"
        this.$btnSubmit.type = "submit"

        this.$errorMessage = document.createElement("p")
        this.$errorMessage.classList.add("error")

        this.$formRegister = document.createElement("form")

        //2
        this.$txtGotoLogin = document.createElement("a")
        this.$txtGotoLogin.innerHTML = "You already have an account?"
        this.$txtGotoLogin.addEventListener("click", this.gotoLogin)

        this.$formRegister.addEventListener("submit", this.handleSubmit)

    }


    handleSubmit = (e) => {
        //khi có sự kiện được đẩy lên, sẽ đẩy ra một sự kiện và trình duyệt sẽ bắt nó. Tuy nhiên để ngăn cản sự mặc định, mình bắt lại sự kiện đó và ngăn chặn nó.
        e.preventDefault()
        const email = this.$txtEmail.value
        const pass = this.$txtPassword.value
        const userName = this.$txtUserName.value
        const confirmPass = this.$txtConfirmPass.value

        this.setError("")

        if (email === "") {
            this.setError("Email cannot be empty!")
            return
        }
        if (pass === "") {
            this.setError("Pass word cannot be empty!")
            return
        }
        if (userName === "") {
            this.setError("User name cannot be empty!")
            return
        }
        if (confirmPass === "") {
            this.setError("Confirm your password!")
            return
        }
        if (confirmPass !== pass) {
            this.setError("Your password not match")
            return
        }

        let myArr = [email, userName, pass, confirmPass]
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, pass)
            .then((userCredential) => {
                firebase.auth().currentUser.updateProfile({displayName: userName})
                firebase.auth().currentUser.sendEmailVerification()
            })
    }

    setError = (content) => {
        this.$errorMessage.innerHTML = content
        if (content !== "") {
            this.$errorMessage.style.display = "block"
        } else {
            this.$errorMessage.style.display = "none"

        }
    }

    initRender = (container) => {

        const flexContainer = document.createElement("div")
        const title = document.createElement("h2")
        title.innerHTML = " Create your account"
        flexContainer.classList.add("d-flex", "flex-column", "centering")

        flexContainer.appendChild(title)

        flexContainer.appendChild(this.$errorMessage)

        flexContainer.appendChild(this.$txtEmail)

        flexContainer.appendChild(this.$txtUserName)

        flexContainer.appendChild(this.$txtPassword)

        flexContainer.appendChild(this.$txtConfirmPass)

        flexContainer.appendChild(this.$btnSubmit)

        flexContainer.appendChild(this.$txtGotoLogin)

        this.$formRegister.appendChild(flexContainer)
        container.appendChild(this.$formRegister)
    }

    //2
    gotoLogin = () => {
        const login = new Login()
        app.changeActiveScreen(login)
    }
}


export default Register