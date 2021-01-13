<template>
    <div class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
        <div class="md:hidden  block bg-gray-700 text-gray-300">
            <div class="flex justify-between">
                <router-link :to="{ name : 'dashboard' }" class="w-full focus:bg-gray-600 hover:bg-gray-600 justify-center inline-block text-center pt-2 pb-1">
                    <svg class="w-6 h-6 inline-block mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /> </svg>
                </router-link>

                <router-link :to="{ name : 'tool' }" class="w-full focus:bg-gray-600 hover:bg-gray-600 justify-center inline-block text-center pt-2 pb-1">
                    <svg class="w-6 h-6 inline-block mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /> </svg>
                </router-link>

                <router-link :to="{ name : 'user' }" class="w-full focus:bg-gray-600 hover:bg-gray-600 justify-center inline-block text-center pt-2 pb-1">
                    <svg class="w-6 h-6 inline-block mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /> </svg>
                </router-link>

                <router-link :to="{ name : 'profile' }" class="w-full focus:bg-gray-600 hover:bg-gray-600 justify-center inline-block text-center pt-2 pb-1">
                    <svg class="w-6 h-6 inline-block mb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> </svg>
                </router-link>
            </div>
        </div>
    </div>
</template>