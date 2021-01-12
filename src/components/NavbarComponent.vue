<template>
    <div class="h-12 bg-gray-800 text-gray-300 flex justify-between items-center" >
        <div class="font-semibold flex py-4 pl-4 md:pl-52 items-center">
            <a href="#" @click.prevent="setCollapse(!isCollapse)" class="hidden md:block">
                <svg class="w-5 h-5 mr-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /> </svg>
            </a>
            <div>E-</div>
            <div>MAJI</div>
        </div>
        <router-link to="/logout" class="hidden md:flex hover:bg-gray-700 h-full p-4 items-center" >
            <div class="mr-3 text-sm">Sign Out</div>
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /> </svg>
        </router-link>
    </div>
</template>

<script>
export default {
    data: () => ({
        isCollapse: true,
    }),

    methods: {
        setCollapse(b){
            this.isCollapse = b
        }
    },
};
</script>