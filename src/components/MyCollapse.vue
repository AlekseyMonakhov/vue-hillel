<template>
    <div>
        <p>
            <a
                class="btn btn-primary"
                data-bs-toggle="collapse"
                href="#"
                role="button"
                aria-expanded="false"
                @click.prevent="toggle"
                >Link with href</a
            >
        </p>
        <div :class="['collapse', { show: isOpened }]">
            <div class="card card-body">{{ text }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyCollapse',
    props: {
        text: {
            type: String,
            required: true
        },
        opened: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            isOpened: this.opened
        }
    },

    methods: {
        toggle() {
            this.isOpened = !this.isOpened
        }
    }
}
</script>
