<template>
    <div>
        <form @submit.prevent="login">
            <div> <input type="text" name="" id="" placeholder="username" v-model="login_form.username"> </div>
            <div> <input type="text" name="" id="" placeholder="password" v-model="login_form.password"> </div>
            <input type="submit" value="Login">
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axiosInstance from '@/composables/axiosInstance';
import router from '@/router';

let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:6022/api/Authenticate/loginMember',
    headers: {
        'Content-Type': 'application/json'
    },
    data: {
        iPAddress: "192.168.100.17",
        browser: "Chrome",
        loginName: "",
        password: "",
        isActive: true
    }
};

const login_form = ref({
    username: "aff_test_child",
    password: "12345678"
})
const login = () => {
    console.log(login_form.value)
    config.data.loginName = login_form.value.username
    config.data.password = login_form.value.password
    axiosInstance.request(config)
        .then((response) => {
            console.log(response.data);
            localStorage.setItem("j2token", response.data.data.token)
            router.push({ path: '/' })
        })
        .catch((error) => {
            console.log(error);
        });
}
</script>