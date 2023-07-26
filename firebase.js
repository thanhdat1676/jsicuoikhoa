import Register from "./register.js"
import Login from "./login.js"

class App {
    activeScreen
    container

    constructor(container){
        this.container = container
    }

    changeActiveScreen(screen) {
        if (this.activeScreen !== undefined){
            this.container.innerHTML = ""
        }

        this.activeScreen = screen
        this.activeScreen.initRender(this.container)
    }
}

const container = document.getElementById("app")

const register = new Register()
const login = new Login()

const app = new App(container)
app.changeActiveScreen(login)


//export instant của app chứ ko export class vì App là duy nhất 
export default app;
