<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="(item, index) in $slots.default()" :key="index">
            <component :is="item"></component>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'ListGroup'
}
</script>
