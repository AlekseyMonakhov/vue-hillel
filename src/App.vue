<template>
    <MyProgress :percentage="40" />
</template>

<script>
import MyProgress from './components/MyProgress.vue'

export default {
    name: 'App',
    components: {
        MyProgress
    }
}
</script>
