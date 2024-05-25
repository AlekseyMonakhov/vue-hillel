<template>
    <div className="card">
        <div className="card-body">
            <h4 className="card-title" v-if="title">{{ title }}</h4>
            <p className="card-text" v-if="text">{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseCard',
    props: {
        title: String,
        text: String
    }
}
</script>
