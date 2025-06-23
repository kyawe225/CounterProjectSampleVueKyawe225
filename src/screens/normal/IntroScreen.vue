<template>
    <IntroComponent v-if="currentScreen == 'intro'" @startCount="startCountdown" />
    <CountDownComponent v-if="currentScreen == 'countdown'" :start ="start" :countdownValue="countdownValue"   @endCountdown = "completeCountdown" ></CountDownComponent>
    <CompletedComponent v-if="currentScreen == 'completed'" @completeCountdown = "resetCountdown" />
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    const countdownValue = ref<string | null>(null);
    const currentScreen = ref('intro');
    const start = ref(false);

    import IntroComponent from '../../components/countdown/IntroComponent.vue';
    import CountDownComponent from '../../components/countdown/CountDownComponent.vue';
    import CompletedComponent from '../../components/countdown/CompletedComponent.vue';

    const startCountdown = (value: number | null) => {
        countdownValue.value = value;
        currentScreen.value = 'countdown';
        start.value = true;
    }

    const completeCountdown = () => {
        currentScreen.value = 'completed';
        start.value = false;
    }

    const resetCountdown = () => {
        currentScreen.value = 'intro';
        countdownValue.value = null;
        start.value = false;
    }
</script>