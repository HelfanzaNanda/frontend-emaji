<template>
    <div class="flex flex-col md:flex-row items-center md:items-start md:justify-between">
        <div v-if="loading" class="absolute left-1/2">
            <div class="relative -left-1/2">
                <svg class="text-center w-1/2 h-1/2 md:w-full md:h-full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"> <circle cx="50" cy="50" r="32" stroke-width="8" stroke="#6a6a6a" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round"> <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform> </circle> <circle cx="50" cy="50" r="23" stroke-width="8" stroke="#979797" stroke-dasharray="36.12831551628262 36.12831551628262" stroke-dashoffset="36.12831551628262" fill="none" stroke-linecap="round"> <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform> </circle> </svg>
            </div>
        </div>
        <div class="shadow-md mb-5 md:mb-0 p-4 mr-4 rounded w-1/2 md:w-1/4 divide-y-2 divide-gray-600 divide-solid" >
            <div class="font-semibold">Tambah User</div>
            <form @submit.prevent="store" method="post" class="mt-3" autocomplete="false">
                <div class="mb-2">
                    <label for="name" class="block mb-1">Nama</label>
                    <input type="text" v-model="form.name" id="name" class="bg-gray-400 w-full py-1 px-3 focus:outline-none hover:bg-true-gray-300 rounded-lg" />
                    <span class="text-rose-600 font-semibold"></span>
                </div>

                <div class="mb-2">
                    <label for="email" class="block mb-1">Email</label>
                    <input type="email" v-model="form.email" id="email" class="bg-gray-400 w-full py-1 px-3 focus:outline-none hover:bg-true-gray-300 rounded-lg" />
                    <span class="text-rose-600 font-semibold"></span>
                </div>

                <div class="mb-3">
                    <label for="role" class="block mb-1">Role</label>
                    <select id="role" v-model="form.role" class="bg-gray-400 w-full py-1 px-3 focus:outline-none hover:bg-true-gray-300 rounded-lg" >
                        <option selected disabled>Pilih Role</option>
                        <option value="pengawas">Pengawas</option>
                        <option value="penguji">Penguji</option>
                    </select>
                    <span class="text-rose-600 font-semibold"></span>
                </div>
                <div class="flex justify-self-auto">
                    <button class="focus:outline-none capitalize w-full mr-2 bg-gray-500 hover:bg-gray-600 py-1 px-2 text-white text-sm rounded-md" > 
                        {{ setTextButton }} 
                    </button>
                    <button  class="focus:outline-none capitalize w-full bg-gray-500 hover:bg-gray-600 py-1 px-2 text-white text-sm rounded-md"
                    @click.prevent="resetForm()">
                         clear
                    </button>
                </div>
            </form>
        </div>

        <div class="p-4 w-full md:shadow-md md:text-center">
            <div class="capitalize mb-3 text-md text-center md:ml-32 font-semibold">
                data user
            </div>
            <table class="hidden md:table w-full table-fixed border-collapse border border-gray-800">
                <thead>
                    <tr>
                        <th class="w-20 border border-gray-600">No</th>
                        <th class="border border-gray-600">Nama</th>
                        <th class="border border-gray-600">Email</th>
                        <th class="border border-gray-600">Role</th>
                        <th class="w-1/6 border border-gray-600">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in users" :key="index">
                        <td class="border border-gray-600">{{ index+1 }}</td>
                        <td class="border border-gray-600">{{ user.name }}</td>
                        <td class="border border-gray-600">{{ user.email }}</td>
                        <td class="border border-gray-600">{{ user.role }}</td>
                        <td class="border border-gray-600">
                            <div class="flex items-center justify-center m-1">
                                <a href="#" @click="edit(user.id)" class=" bg-gray-600 p-1 mr-2 rounded-md hover:bg-gray-700 text-gray-200">
                                    <svg class="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /> </svg>
                                </a>
                                <a href="#" @click="deleteUser(user.id)" class="bg-gray-600 p-1 rounded-md hover:bg-gray-700 text-gray-200">
                                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /> </svg>
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="shadow-md mb-2 p-4 block md:hidden" v-for="(user, index) in users" :key="index">
                <div class="flex justify-between mb-1">
                    <div>
                        <div class="text-xs text-gray-400">nama</div>
                        <div>{{ user.name }}</div>
                    </div>
                    <div>
                        <div class="text-xs text-gray-400">role</div>
                        <div>{{ user.role }}</div>
                    </div>
                </div>
                <div class="mb-2">
                    <div class="text-xs text-gray-400">email</div>
                    <div>{{ user.email }}</div>
                </div>
                <div class="flex m-1">
                        <a href="#" @click="edit(user.id)" class=" bg-gray-600 p-1 mr-2 rounded-md hover:bg-gray-700 text-gray-200">
                            <svg class="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /> </svg>
                        </a>
                        <a href="#" @click="deleteUser(user.id)" class="bg-gray-600 p-1 rounded-md hover:bg-gray-700 text-gray-200">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /> </svg>
                        </a>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserApi from '@/apis/User.js'
export default {
    data: () => ({
        form: { name: "", email: "", role: "", },
        users : [],
        errors : [],
        isEdit : false,
        loading : false,
        id: "",
        
    }),

    mounted(){
        this.getUsers()
    },

    computed: {
        setTextButton: function() {
            return this.isEdit ? 'Update' : 'Tambah'
        },

        disabledButtonClear: function(){
            return this.isEdit ? this.loading ? 'disabled' : '' : ''
        },

        disabledButton: function(){
            return this.loading ? 'disabled' : ''
        }
    },

    methods: {
        async getUsers(){
            this.loading = true
            let response = await UserApi.getUsers()
            if (response.status === 200) {
                this.users = response.data.data
                this.loading = false
            }
        },

        submit(){
            this.id ? this.update() : this.store()
        },

        async store() {
            this.loading = true
            try{
                let response = await UserApi.createUser(this.form)
                if (response.status === 201) {
                    this.resetForm()
                    this.getUsers()
                    this.loading = false
                    this.toastSuccess(response.data.message)
                    this.errors = []
                }
            }catch(e) {
                this.errors = e.response.data.errors
                this.loading = false
                this.toastErrors("Oops.. Something Went Wrong..")
            }
        },

        async edit(id) {
            this.id = id
            this.isEdit = true
            this.loading = true
            let response = await UserApi.edit(id)
            if (response.status === 200) {
                this.setFormEdit(response.data.data)
                this.loading = false
            }
        },

        async update(){
            this.loading = true
            try{
                let response = await UserApi.update(this.id, this.form)
                if (response.status === 200) {
                    this.isEdit = false
                    this.resetForm()
                    this.getUsers()
                    this.loading = false
                    this.toastSuccess(response.data.message)
                    this.errors = []
                }
            }catch(e){
                this.loading = false
                this.errors = e.response.data.errors
                this.toastErrors("Oops.. Something Went Wrong..")
            }
        },

        async deleteUser(id){
            this.loading = true
            let response = await UserApi.deleteUser(id)
            if (response.status === 200) {
                this.getUsers()
                this.loading = false
                this.toastSuccess(response.data.message)
            }
        },

        setFormEdit(form){
            this.form.name = form.name
            this.form.email = form.email
            this.form.role = form.role
        },

        resetForm(){
            this.isEdit = false
            this.id = ""
            this.form.name = ""
            this.form.email = ""
            this.form.role = ""
        },

        toastSuccess(message){
            this.$toasted.show(message, { 
                type: "success",
                theme: "bubble", 
                position: "top-center", 
                duration : 3000
            });
        },

        toastErrors(message){
            this.$toasted.show(message, { 
                type: "danger",
                theme: "bubble", 
                position: "top-center", 
                duration : 3000
            });
        }
    }
};
</script>