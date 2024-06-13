<template>
    <div id="carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div
                v-for="(slide, index) in carouselImages"
                :key="index"
                :class="['carousel-item', { active: index === currentSlide }]"
            >
                <img alt="" class="d-block w-100" :src="slide" />
            </div>
        </div>
        <button
            class="carousel-control-prev"
            data-bs-target="#carousel"
            type="button"
            data-bs-slide="prev"
            @click="prevSlide"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            data-bs-target="#carousel"
            type="button"
            data-bs-slide="next"
            @click="nextSlide"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'CarouselComponent',
    data() {
        return {
            carouselImages: slideImages,
            currentSlide: 0
        }
    },

    computed: {
        slideImages() {
            return getSlides()
        }
    },

    methods: {
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.carouselImages.length
        },
        prevSlide() {
            this.currentSlide =
                (this.currentSlide - 1 + this.carouselImages.length) % this.carouselImages.length
        },
        getSlides() {
            return [
                new URL('@/assets/first.webp', import.meta.url).href,
                new URL('@/assets/second.webp', import.meta.url).href,
                new URL('@/assets/third.webp', import.meta.url).href
            ]
        }
    }
}
</script>

<style scoped>
#carousel {
    max-width: 100%;
    max-height: 100vh;
    overflow: hidden;
}

.carousel-inner img {
    object-fit: cover;
    max-height: 100vh;
}
</style>
