<template>
    <el-form>
        <el-input v-model="input" style="width: 240px" placeholder="Please enter some text" />
        <el-button @click="addTodo">Add</el-button>
    </el-form>
</template>

<script>
import { object, string } from 'yup'

export default {
    name: 'AddTodo',
    data() {
        return {
            input: ''
        }
    },
    methods: {
        addTodo() {
            const schema = object().shape({
                input: string().matches(
                    /^[a-zA-Z0-9]+$/,
                    'Only alphanumeric characters are allowed'
                )
            })
            schema
                .validate({ input: this.input })
                .then(() => {
                    this.$emit('add-todo', {
                        id: Date.now(),
                        title: this.input
                    })
                    this.input = ''
                })
                .catch((error) => {
                    this.$message.error(error.message)
                })
        }
    }
}
</script>

<style scoped>
.el-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>
