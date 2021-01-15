class Auth{
    constructor(){
        this.authenticated = false
        //localStorage.setItem("token","")
    }
    login(cb){
        this.authenticated = true
        cb()
    }
    logout(cb){
        this.authenticated = false
        localStorage.setItem("token","")
        cb()
    }
    isAuthenticated(){

        const token = localStorage.getItem("token")
        if(token){
        return true
        }
        else{
        return false
        }
    }
}

export default new  Auth()