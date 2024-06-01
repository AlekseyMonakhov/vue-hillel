<template>
    <DefinitionsList :data="definitions" />
</template>

<script>
import DefinitionsList from './components/DefinitionsList.vue'

export default {
    name: 'App',
    components: {
        DefinitionsList
    },
    data() {
        return {
            definitions: [
                { dt: 'one', dd: 'two', id: 1 },
                { dt: 'another term', dd: 'another description', id: 2 },
            ]
        }
    }
}
</script>
