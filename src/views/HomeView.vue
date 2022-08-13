<template>
    <div class="relative">
        <Nav/>

        <div class="w-full xs:px-4 xl:px-16">
            <div class="flex justify-between">
                <div class="flex flex-col xs:mt-8 xl:mt-48 xl:text-3xl">
                    <div class="flex flex-col">
                        <span class="font-semibold tracking-tighter">Introducing</span>
                        <span class="font-black xs:text-4xl xl:text-5xl 2xl:text-8xl text-sky-400 tracking-tighter">Yet another POS</span>
                        <span class="font-semibold tracking-tighter xl:text-2xl 2xl:text-3xl">First Ever Product of <span class="text-white">Efaestus Software</span></span>
                    </div>

                    <div class="flex justify-center w-full xs:block xl:hidden">
                        <img src="@/assets/cool.png" alt="" class="w-fit">
                    </div>

                    <div class="flex flex-col xl:mt-20">
                        <span class="font-semibold tracking-tighter">Simple POS.</span>
                        <span class="font-semibold tracking-tighter">Better Design.</span>
                    </div>

                    <div class="flex flex-col mt-10">
                        <router-link to="yapos" class="link cursor-pointer font-semibold tracking-tighter">Learn more <i class="fa-solid fa-arrow-right xs: text-xs xl:text-2xl ml-2"></i></router-link>
                    </div>
                </div>
                <div class="-mt-20 xs:hidden xl:block">
                    <iframe src='https://my.spline.design/sales-947392897cef9a3748c5bb0e67ed96ac/' frameborder='0' width='988px' height='936px' class="xl:scale-75 2xl:scale-100"></iframe>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
    components: {
        Nav,
        Footer
    }

});
</script>
