<template>
    <Workinfo v-bind:works="this.works"  v-bind:workinfo="this.works[this.$route.params.id]"/>
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
            worksTest: [],
            workinfo: null
        }
    },
    mounted() {
        /*
        fetch("http://localhost:3000/works")
        .then((res) => res.json())
        .then(data  => {this.works = data;console.log(this.works)})
        .catch(err => console.log(err.message)),*/
        fetch("./db/db.json")
        .then((res) => res.json())
        .then(data => {this.works = data.works;})
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
