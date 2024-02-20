<template>
    <div>
        <h1> Create Paylink </h1>
        <form @submit.prevent="create_paylink">
            <input type="number" placeholder="order_amount" name="order_amount" v-model="form_data.order_amount"> <br>
            <input id="sandbox" type="radio" value="sandbox" v-model="form_data.interface_version" />
            <label for="sandbox">Sandbox</label>
            <input id="live" type="radio" value="live" v-model="form_data.interface_version" />
            <label for="live">Live</label> <br>
            <input type="submit" value="">
        </form>
        <pre>
            {{ response }}
        </pre>
        <a :href="response.link">Redirect Paylink</a>
    </div>
</template>
<script setup lang="ts">
import axiosInstance from '@/composables/axiosInstance';
import { ref } from 'vue';
const form_data = ref({
    order_amount: 0,
    interface_version: "sandbox",
})

const response = ref({
    success: "",
    POST: {},
    link: ""
})

const create_paylink = () => {
    axiosInstance.post('http://localhost:6022/api/SticPay/pay', form_data.value, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('j2token')}`
        }
    }).then((res) => {
        console.log(res.data);
        response.value = res.data
    }).catch((err) => {

    });
}
</script>