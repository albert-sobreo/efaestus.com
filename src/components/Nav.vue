<template>
    <div class="sticky select-none top-2 left-24 xs:hidden xl:flex flex flex-row w-fit justify-center items-center gap-14 text-2xl font-bold nav p-4 rounded-lg">
        <div>
            <img src="@/assets/EfaestusLogo.svg" alt="" height="auto" width="150">
        </div>
        <router-link class="nav-link drop-shadow-lg" to="/" id="home">Home</router-link>
        <router-link class="nav-link drop-shadow-lg" to="/yapos/" id="yapos">YaPOS</router-link>
        <router-link class="nav-link drop-shadow-lg" to="/about/" id="about">About Us</router-link>
    </div>
</template>

<style scoped>
.active{
    color: white
}

.nav{
    backdrop-filter: blur(20px)
}

.nav-link{
    transition: 100ms;
}

.nav-link:hover{
    color: white
}

</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    computed: {
        getCurrentRoute(): any{
            return this.$route.name
        }
    },

    methods: {
        onload(){
            try{
                let x = document.getElementById(this.getCurrentRoute)
                if(x){
                    x.classList.add('active')
                }
            }
            catch(err){
                console.log(err)
            }
        }
    },

    mounted(){
        this.onload()
    }
});
</script>