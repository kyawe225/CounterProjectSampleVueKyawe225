<template>
    <div class="p-2 justify-content-center d-flex align-items-center min-vh-100">
        <div>
            <h1 class="p-4 text-center">
                {{ countdownText }}
            </h1>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
const props = defineProps<{
    countdownValue: number | null,
    start: boolean
}>();
const emit = defineEmits(['endCountdown']);
const countdownValueR = ref<number | null>(10);
const countdownText = ref<string>("Start Countdown");
onMounted(() => {
    countdownValueR.value = props.countdownValue ?? 10;
    let i = setInterval(() => {
        if (countdownValueR.value && countdownValueR.value > 0) {
            countdownText.value = `Countdown: ${countdownValueR.value}`;
            countdownValueR.value--;
        } else {
            countdownText.value = "Countdown Finished";
            clearInterval(i);
            emit('endCountdown');
        }
    }, 1000);
})

</script>