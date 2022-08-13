<template>
    <div class="xs:flex xl:hidden flex-col sticky top-0 w-full nav p-2">
        <!-- LOGO AND HAMBURGER -->
        <div class="flex items-center justify-between w-full">
            <div>
                <img src="@/assets/EfaestusLogo.svg" alt="" height="auto" width="150"/>
            </div>
            <div class="cursor-pointer mr-3 w-full justify-end flex h-full" @click="toggleMenu">
                <i class="fa-solid fa-bars text-2xl"></i>
            </div>
        </div>

        <!-- THE MENU -->
        <Transition name="list">
            <div class="flex flex-col font-semibold text-white select-none py-2" v-if="showMenu">
                <router-link class="nav-link py-1 px-4 drop-shadow-lg" to="/" id="home">Home</router-link>
                <router-link class="nav-link py-1 px-4 drop-shadow-lg" to="/yapos/" id="yapos">YaPOS</router-link>
                <router-link class="nav-link py-1 px-4 drop-shadow-lg" to="/about/" id="about">About Us</router-link>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.nav{
    backdrop-filter: blur(40px);
    background-color: #1d2125b4;
}
</style>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return {
            showMenu: false
        }
    },

    methods: {
        toggleMenu(){
            this.showMenu = !this.showMenu
        }
    }
});

</script>