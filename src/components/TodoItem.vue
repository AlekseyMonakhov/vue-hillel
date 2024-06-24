<template>
    <div class="todo-item">
        <el-text class="mx-1">{{ todo.title }}</el-text>
        <el-button type="danger" @click="$emit('delete-todo', todo.id)">Delete</el-button>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        todo: {
            type: {
                id: Number,
                title: String
            },
            required: true
        }
    }
}
</script>

<style scoped>
.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>
