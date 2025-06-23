<template>
    <div class="p-2 justify-content-center d-flex align-items-center min-vh-100">
        <div>
            <div class="p-4 text-center">
                <h1 class="text-center py-2 my-2">
                    Countdown Finished!
                </h1>
                <button class="btn btn-primary" @click.once="complete">
                    Go to Home Screen
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useCountdownStore } from '../../stores/useCountdown';

let countStore = useCountdownStore();

const complete = ()=>{
    countStore.resetCountdown();
    countStore.setSiteLink('intro');  
}

</script>