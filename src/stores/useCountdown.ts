import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useCountdownStore = defineStore('countdown',()=>{
    const countdown = ref(0);
    const siteLink = ref("intro");

    const setCountdown =(value : number)=>{
        return countdown.value = value;
    }

    const resetCountdown = () =>{
        countdown.value = 0;
    }

    const setSiteLink = (link: string) => {
        siteLink.value = link;
    }

    return { countdown, setCountdown , resetCountdown , setSiteLink, siteLink };
});