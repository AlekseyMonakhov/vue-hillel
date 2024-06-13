<template>
    <div>
        <h1>Приклад компонента Collapse</h1>
        <MyCollapse text="Це прихований текст" :opened="true" />
    </div>
</template>

<script>
import MyCollapse from './components/MyCollapse.vue'

export default {
    name: 'App',
    components: {
        MyCollapse
    }
}
</script>
