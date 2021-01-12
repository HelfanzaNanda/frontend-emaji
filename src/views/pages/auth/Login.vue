<template>
    <div class="bg-gray-500 flex h-screen items-center justify-center">
         <div v-if="loading" class="absolute left-1/2">
            <div class="relative -left-1/2">
                <svg class="text-center w-1/2 h-1/2 md:w-full md:h-full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"> <circle cx="50" cy="50" r="32" stroke-width="8" stroke="#6a6a6a" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round"> <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform> </circle> <circle cx="50" cy="50" r="23" stroke-width="8" stroke="#979797" stroke-dasharray="36.12831551628262 36.12831551628262" stroke-dashoffset="36.12831551628262" fill="none" stroke-linecap="round"> <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform> </circle> </svg>
            </div>
        </div>
        <div class=" bg-gray-200 shadow-sm w-1/2 md:w-1/3 p-3 rounded-md">
            <div class="capitalize text-center font-bold text-gray-800 text-2xl my-5">login</div>
            <form method="POST" @submit.prevent="login">
                <div class="mx-5 md:mx-16">
                    <div class="mb-3">
                        <label for="email" class="block mb-1">Email</label>
                        <input type="text" v-model="form.email" id="email" class="bg-gray-300 hover:bg-gray-100 outline-none py-1 px-4 rounded-lg w-full">
                        <span class="text-rose-600 font-semibold" v-if="errors.email">{{ errors.email[0] }}</span>
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block mb-1">Passowrd</label>
                        <div class="flex items-center"> 
                            <input :type="isPassword" v-model="form.password" id="password" class="bg-gray-300 hover:bg-gray-100 outline-none py-1 px-4 rounded-l-lg w-full">
                            <a href="#" @click.prevent="setIsPassword(!password)" class="bg-gray-300 py-1 px-2 rounded-r-lg text-gray-700 hover:bg-gray-400">
                                <svg class="w-6 h-6" :class="iconPasswordVisible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /> </svg>
                                <svg class="w-6 h-6" :class="iconTextVisible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /> </svg>
                            </a>
                        </div>
                        <span class="text-rose-600 font-semibold" v-if="errors.password">{{ errors.password[0] }}</span>
                        
                    </div>

                    <button type="submit" class="focus:outline-none focus:ring-1 focus:border-0 capitalize bg-gray-700 mb-3 hover:bg-gray-800 py-1 px-5 text-gray-100 rounded-md"> login </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import UserApi from '@/apis/User.js'
export default {
    data: () => ({
        password: true,
        form : { email: "", password: "", device_name: "browser" },
        errors: [],
        loading : false,
    }),

    computed : {
        isPassword : function(){
            return this.password ? 'password' : 'text'
        },

        iconPasswordVisible : function(){
            return this.password ? 'block' : 'hidden'
        },

        iconTextVisible : function(){
            return !this.password ? 'block' : 'hidden'
        }
    },

    methods: {
        setIsPassword(b){
            this.password = b
        },

        async login(){
            this.loading = true
            try{
                let response = await UserApi.login(this.form)
                if (response.status === 200) {
                    localStorage.setItem("token", response.data.data.token)
                    this.toastSuccess(response.data.message)
                    this.loading = false
                    this.$router.push({ name: 'dashboard' })
                }
            }catch(e){
                this.toastErrors("Oops.. Something Went Wrong..")
                this.errors = e.response.data.errors
                this.loading = false
            }
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
}
</script>