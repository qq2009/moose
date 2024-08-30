<script setup>
import { useDialog } from "@moose/hook/useDialog";
import { useDrawer } from "@moose/hook/useDrawer";
import HelloWorld from './components/HelloWorld.vue';

const helloWorldDialog = useDialog(HelloWorld);
const HelloWorldDrawer = useDrawer(HelloWorld);

function dialogShow() {
    helloWorldDialog.show()
}

function drawerShow() {
    HelloWorldDrawer.show()
}

</script>

<template>
    <div class="app-container">
        <button @click="dialogShow">打开对话框</button>
        <button @click="drawerShow">打开抽屉</button>
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
