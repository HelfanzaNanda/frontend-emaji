<template>
    <div id="app" class="md:h-screen bg-gray-200 flex flex-col">
        <navbar/>
        <div class="md:flex h-full">
            <sidebar/>
            <bottom-nav/>
            <div class="p-4 w-full">
                <div class="container"><router-view></router-view></div>
            </div>
            
        </div>
        
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