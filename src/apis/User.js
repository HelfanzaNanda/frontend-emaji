import Api from './Api.js'

export default {
    login(form) {
        return Api().post("login", form)
    },

    logout() {
        return Api().post("logout")
    },

    auth(){
        return Api().get("/user")
    },

    getUsers(){
        return Api().get("admin/user")
    },

    createUser(form){
        return Api().post("admin/user", form)
    },

    edit(id){
        return Api().get(`admin/user/${id}`)
    },

    update(id, form){
        return Api().put(`admin/user/${id}`, form)
    },

    deleteUser(id){
        return Api().delete(`admin/user/${id}`)
    }
}