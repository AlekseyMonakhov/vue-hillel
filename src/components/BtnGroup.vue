<template>
    <div class="btn-group" role="group">
        <button
            type="button"
            class="btn btn-secondary left"
            :class="{ active: left }"
            @click="toggleLeft"
        >
            Left
        </button>
        <button
            type="button"
            class="btn btn-secondary right"
            :class="{ active: right }"
            @click="toggleRight"
        >
            Right
        </button>
    </div>
</template>
<script>
export default {
    name: 'BtnGroup',
    data() {
        return {
            left: false,
            right: false
        }
    },
    methods: {
        toggleLeft() {
            this.left = !this.left
            this.right = false
        },
        toggleRight() {
            this.right = !this.right
            this.left = false
        }
    }
}
</script>
