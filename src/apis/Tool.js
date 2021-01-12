import Api from '@/apis/Api.js'

export default{
    getTools(){
        return Api().get("admin/tool")
    }
}