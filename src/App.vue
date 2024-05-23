<template>
    <Card title="title" />
    <Card text="some text" />
    <Card title="second title" text="second text" />
</template>

<script>
import Card from './components/Card.vue'

export default {
    name: 'App',
    components: {
        Card
    }
}
</script>
