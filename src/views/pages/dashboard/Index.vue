<template>
    <div>
        <div v-if="loading" class="absolute left-1/2">
            <div class="relative -left-1/2">
                <svg class="text-center w-1/2 h-1/2 md:w-full md:h-full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"> <circle cx="50" cy="50" r="32" stroke-width="8" stroke="#6a6a6a" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round"> <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform> </circle> <circle cx="50" cy="50" r="23" stroke-width="8" stroke="#979797" stroke-dasharray="36.12831551628262 36.12831551628262" stroke-dashoffset="36.12831551628262" fill="none" stroke-linecap="round"> <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform> </circle> </svg>
            </div>
        </div>
        <div>dashboard</div>
        
    </div>
</template>

<script>
import UserApi from '@/apis/User.js'
export default {
    data(){
        return {
            user : null,
            loading : false,
        }
    },

    mounted(){
        this.getCurrentUser()
    },

    methods: {
        async getCurrentUser(){
            this.loading = true
            let response = await UserApi.auth()
            if (response.status === 200) {
                this.loading = false
                this.user = response.data
            }
        }
    }
}
</script>