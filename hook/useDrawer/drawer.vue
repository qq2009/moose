<script setup>
import { ref, onMounted, defineExpose } from 'vue';
import { ElDrawer } from 'element-plus';

const visible = ref(false);

function show() {
    visible.value = true;
}

function hide() {
    visible.value = false;
}

onMounted(() => {
    show();
})

defineExpose({
    show,
    hide
})
</script>

<template>
    <ElDrawer v-model="visible" v-bind="$attrs">
        <slot />
    </ElDrawer>
</template>
