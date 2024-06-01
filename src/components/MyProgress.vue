<template>
    <div class="progress">
        <div
            class="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="progressbar"
            :aria-valuenow="percentage"
            :style="{ width: percentage + '%' }"
        ></div>
    </div>
</template>

<script>
export default {
    name: 'MyProgress',
    props: {
        percentage: {
            type: Number,
            default: 0
        }
    }
}
</script>
