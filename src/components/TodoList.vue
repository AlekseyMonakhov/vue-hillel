<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <el-text class="mx-3" size="large">Todo List</el-text>
            </el-header>
            <el-main>
                <AddTodo @add-todo="addTodo" />
                <el-row>
                    <el-col :span="24" v-for="todo in todos" :key="todo.id">
                        <TodoItem :todo="todo" @delete-todo="deleteTodo" />
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import AddTodo from './AddTodo.vue'
import TodoItem from './TodoItem.vue'

export default {
    name: 'TodoList',
    components: {
        AddTodo,
        TodoItem
    },
    data() {
        return {
            todos: []
        }
    },
    methods: {
        addTodo(todo) {
            this.todos.push(todo)
            this.saveTodos()
        },
        deleteTodo(id) {
            this.todos = this.todos.filter((todo) => todo.id !== id)
            this.saveTodos()
        },
        saveTodos() {
            localStorage.setItem('todos', JSON.stringify(this.todos))
        }
    },
    mounted() {
        const savedTodos = JSON.parse(localStorage.getItem('todos'))
        if (savedTodos) {
            this.todos = savedTodos
        }
    }
}
</script>

<style scoped>
.el-row {
    padding: 10px;
    gap: 5px;
}
.el-text {
    font-weight: bold;
    font-size: 24px;
}
.el-header {
    display: flex;
    align-items: center;
}
</style>
