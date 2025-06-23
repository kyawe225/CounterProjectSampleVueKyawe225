<template>
    <div class="p-2 justify-content-center d-flex align-items-center min-vh-100">
        <div>
            <h1>
                Welcome From Count Down Application!
            </h1>
            <p>
                This will countdown when you write a number in the input field and press the start button.
            </p>
            <div class="m-2">
                <div class="mb-2">
                    <input type="number" v-model="countdownValue" placeholder="Enter a number"
                        class="border p-2 rounded w-100" />
                    <span class="h6 text-danger" v-if="countdownErrorString">{{ countdownErrorString }}</span>
                </div>
                <button @click="startCountdown" class="btn btn-primary mx-auto d-block">
                    Start Countdown
                </button>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { ref , defineEmits } from 'vue';
const countdownValue = ref<number | null>(null);
const countdownErrorString = ref('');

const events = defineEmits(['startCount']);



const valid=()=>{
    if(countdownValue.value == null || countdownValue.value == 0){
        countdownErrorString.value = "Please enter a valid number";
        return false;
    }
    return true;
}

const startCountdown = () => {
    if(!valid()){
        return ;
    }
    events('startCount', countdownValue.value);
    // let i = setInterval(()=>{
    //     if(Cvalue && Cvalue > 0){
    //         Cvalue--;
    //         if(Cvalue == 0){
    //             console.log("Finished");
    //             clearInterval(i);
    //         }else{
    //             console.log(Cvalue);
    //         }
    //     }else{
    //         console.log("Countdownfinished");
    //         clearInterval(i);
    //     }
    // },1000);
}
</script>