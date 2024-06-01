<template>
    <div :class="'alert alert-' + type" role="alert">{{ text }}</div>
</template>

<script>
export default {
    name: 'AlertComponent',
    props: {
        type: {
            type: String,
            required: true,
            validator: function (value) {
                return [
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'light',
                    'dark'
                ].includes(value)
            }
        },
        text: String
    }
}
</script>
