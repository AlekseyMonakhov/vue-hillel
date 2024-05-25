<template>
    <BaseCard title="title" />
    <BaseCard text="some text" />
    <BaseCard title="second title" text="second text" />
</template>

<script>
import BaseCard from './components/BaseCard.vue'

export default {
    name: 'App',
    components: {
        BaseCard
    }
}
</script>
