<template>
    <div class="relative">
        <Nav/>
        <NavBurger/>

        <div class="w-full xs:px-4 xl:px-16">
            <div class="flex justify-between">
                <div class="flex flex-col xs:mt-8 xl:mt-48 xl:text-3xl">
                    <div class="flex flex-col">
                        <span class="font-semibold tracking-tighter xl:text-2xl 2xl:text-3xl">First Ever Product of <span class="text-white">Efaestus Software</span></span>
                        <span class="-ml-2 font-black xs:text-4xl xl:text-5xl 2xl:text-8xl text-sky-400 tracking-tighter">Yet another POS</span>
                    </div>

                    <div class="flex justify-center w-full xs:block xl:hidden">
                        <img src="@/assets/cool-min.png" alt="" class="w-fit">
                    </div>

                    <div class="flex flex-col xl:mt-20">
                        <span class="font-semibold tracking-tighter">Simple POS.</span>
                        <span class="font-semibold tracking-tighter">Better Design.</span>
                    </div>

                    <div class="flex flex-col xl:text-xl mt-10">
                        <a href="#footer" class="link font-semibold">Contact Us to Buy</a>
                        <span>for ₱5,999.00</span>
                    </div>
                </div>
                <div class="-mt-20 xs:hidden xl:block">
                    <iframe src='https://my.spline.design/sales-947392897cef9a3748c5bb0e67ed96ac/' frameborder='0' width='988px' height='936px' class="xl:scale-75 2xl:scale-100"></iframe>
                </div>
            </div>

            <div class="text-center">
                <i class="fa-solid fa-chevron-down text-2xl"></i>
            </div>

            <div class="flex flex-col mt-14 items-center xs:gap-36 xl:gap-72 leading-4">
                <!-- FEATURE 1 -->
                <div class="xl:text-2xl flex xs:flex-col xl:flex-row items-center gap-16">
                    <div>
                        <img src="@/assets/home.png" width="800" alt="">
                    </div>
                    <div class="flex flex-col">
                        <div class="flex flex-col">
                            <span class="text-white yapos-header font-black">Home</span>
                            <span class=" font-semibold">All of your data in one place</span>
                        </div>

                        <div class="flex flex-col gap-2 font-semibold mt-8">
                            <span>It shows you your Total Sales for the month and the day. </span>
                            <span>It graphs the performance of your sales.</span>
                            <span>Summarizes the <span class="text-white">Low Stock</span> and <span class="text-white">Top Products</span> for the month.</span>
                        </div>
                    </div>
                </div>

                <!-- FEATURE 2 -->
                <div class="xl:text-2xl flex xs:flex-col xl:flex-row-reverse items-center gap-16">
                    <div>
                        <img src="@/assets/sales1.png" width="1000" alt="">
                    </div>
                    <div class="flex flex-col">
                        <div class="flex flex-col">
                            <span class="text-white yapos-header font-black">Beautiful Sales</span>
                            <span class=" font-semibold">Better Design while still familiarly POS</span>
                        </div>
                    </div>
                </div>

                <!-- FEATURE 3 -->
                <div class="xl:text-2xl flex xs:flex-col xl:flex-row items-center gap-16">
                    <div>
                        <img src="@/assets/sales2.png" width="800" alt="">
                    </div>
                    <div class="flex flex-col">
                        <div class="flex flex-col">
                            <span class="text-white yapos-header font-black">Bills as Inputs</span>
                            <span class=" font-semibold">Why not? <br/> Faster Inputs for the payment</span>
                        </div>
                    </div>
                </div>

                <!-- FEATURE 4 -->
                <div class="xl:text-2xl flex xs:flex-col xl:flex-row-reverse items-center gap-16">
                    <div>
                        <img src="@/assets/invList.png" width="900" alt="">
                    </div>
                    <div class="flex flex-col">
                        <div class="flex flex-col">
                            <span class="text-white yapos-header font-black">Simple Inventory</span>
                            <span class=" font-semibold">Handles Basic Inputs and Deductions</span>
                        </div>
                    </div>
                </div>

                <!-- FEATURE 5 -->
                <div class="xl:text-2xl flex xs:flex-col xl:flex-row items-center gap-16">
                    <div>
                        <img src="@/assets/si.png" width="900" alt="">
                    </div>
                    <div class="flex flex-col">
                        <div class="flex flex-col">
                            <span class="text-white yapos-header font-black">Lists and More Lists</span>
                            <span class=" font-semibold">YaPOS is packed with lists to gather <br/> all the data you need</span>
                        </div>
                    </div>
                </div>

                <!-- FEATURE 6 -->
                <div class="xl:text-2xl flex xs:flex-col xl:flex-row-reverse items-center gap-16">
                    <div>
                        <img src="@/assets/adduser.png" width="900" alt="">
                    </div>
                    <div class="flex flex-col">
                        <div class="flex flex-col">
                            <span class="text-white yapos-header font-black">Multiple Users</span>
                            <span class=" font-semibold">Give limited access to some users</span>
                        </div>
                    </div>
                </div>

                <!-- FEATURE 7 -->
                <div class="xl:text-2xl flex flex-col items-center gap-16">
                    <div>
                        <span class="text-white yapos-header font-black">And More Other Features</span>
                    </div>
                    <div>
                        <img src="@/assets/Group.png" width="1200" alt="">
                    </div>
                </div>
            </div>


            <Footer id="footer"/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
import NavBurger from '@/components/NavBurger.vue';

export default defineComponent({
    components: {
        Nav,
        NavBurger,
        Footer
    },

    data() {
        return {
            msg: "Yet another POS"
        }
    }
});
</script>