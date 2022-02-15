<template>
    <Imagegallery v-bind:works="this.works" v-bind:workinfo="this.workinfo" />
</template>

<script>
import Imagegallery from '@/components/Imagegallery.vue'
import Workinfo from '@/components/Workinfo.vue'

export default({
    name: 'Works',
    components: {
        Imagegallery, Workinfo
        },
    data() {
        return {
            works: [],
            workinfo: null
        }
    },
    mounted() {
        fetch("http://localhost:3000/works")
        .then((res) => res.json())
        .then(data  => {this.works = data;})
        .catch(err => console.log(err.message))
    },
    computed: {
        console: () => console,
        window: () => window,  
    },

})
</script>

<style scoped>
.image-reel img {
    max-width: 5%;
}
</style>
