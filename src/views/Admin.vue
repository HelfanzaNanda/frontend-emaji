<template>
    <div id="app" class="h-screen bg-gray-200 overflow-hidden flex flex-col">
        <navbar/>
        <div class="md:flex h-full bg-gray-200">
            <sidebar/>
            <div class="p-4 w-full">
                <div class="container"><router-view></router-view></div>
            </div>
        </div>
        <bottom-nav/>
    </div>
</template>

<script>
import Navbar from "@/components/NavbarComponent.vue";
import Sidebar from '@/components/SidebarComponent.vue'
import BottomNav from '@/components/BottomNavComponent.vue'
export default {
    components: { Navbar, Sidebar, BottomNav },
};
</script>