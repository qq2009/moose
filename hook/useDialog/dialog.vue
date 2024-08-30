<script setup>
import { ref, onMounted, defineExpose } from 'vue';
import { ElDialog } from 'element-plus';

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
    <ElDialog v-model="visible" v-bind="$attrs">
        <slot />
    </ElDialog>
</template>
