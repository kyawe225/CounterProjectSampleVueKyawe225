<template>
    <IntroComponent v-if="siteLink == 'intro'" />
    <CountDownComponent v-if="siteLink == 'countdown'" ></CountDownComponent>
    <CompletedComponent v-if="siteLink == 'completed'"  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const { siteLink } = storeToRefs(useCountdownStore());


import IntroComponent from '../../components/countdown/IntroComponent.vue';
import CountDownComponent from '../../components/countdown/CountDownComponent.vue';
import CompletedComponent from '../../components/countdown/CompletedComponent.vue';
import { storeToRefs } from 'pinia';
import { useCountdownStore } from '../../stores/useCountdown';

// const startCountdown = () => {
//     currentScreen.value = 'countdown';
//     start.value = true;
// }

// const completeCountdown = () => {
//     currentScreen.value = 'completed';
//     start.value = false;
// }

// const resetCountdown = () => {
//     currentScreen.value = 'intro';
//     start.value = false;
// }
</script>