<template>
    <AlertComponent :type="'warning'" :text="'what is love?'" />
</template>

<script>
import AlertComponent from './components/AlertComponent.vue'

export default {
    name: 'App',
    components: {
        AlertComponent
    }
}
</script>
