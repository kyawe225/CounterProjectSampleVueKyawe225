<template>
    <div class="p-2 justify-content-center d-flex align-items-center min-vh-100">
        <div>
            <div class="p-4 text-center">
                <h1 class="text-center py-2 my-2">
                    Countdown Finished!
                </h1>
                <button class="btn btn-primary" @click.once="emit('completeCountdown')">
                    Go to Home Screen
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';
var emit = defineEmits(['completeCountdown']);

</script>