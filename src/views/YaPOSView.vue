<template>
    {{msg}}
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            msg: "Yet another POS"
        }
    }
});
</script>