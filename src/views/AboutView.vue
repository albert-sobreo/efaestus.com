<template>
    <div class="relative">
        <Nav/>
        <NavBurger/>

        <div class="flex flex-col items-center justify-center gap-8 h-[40rem]">

            <span><i class="fa-solid fa-person-digging text-6xl text-yellow-400"></i></span>
            <span class="font-bold text-2xl">Page under development</span>

        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Nav from '@/components/Nav.vue';
import NavBurger from '@/components/NavBurger.vue';

export default defineComponent({
    components: {
        Nav,
        NavBurger
    }
});

</script>
