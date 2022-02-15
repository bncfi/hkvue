<template>
    <div>
        <Workinfo v-bind:works="this.works" v-bind:workinfo="this.works[this.$route.params.id]" />      
        <div v-for="work in works" v-bind:key="work.id" class="image-reel">
            <router-link v-bind:to="{name:'Works', params: {id: work.id}}"> <img v-bind:src="work.imgsrc"/> </router-link>
        </div>
    </div>
</template>

<script>
import Workinfo from '@/components/Workinfo.vue'


export default({
    name: 'Imagegallery',
    props: ['works','workinfo'],
    components: {
        Workinfo
    },   
    data() {       
        return {
        }
    },
    computed: {
        console: () => console,
        window: () => window,   
    },
})
</script>

<style scoped>
p {
    color:black;
    }

.gallery-container {
    border: 1px solid black;    
}

.image-reel img {
    max-width: 5%;
}

</style>
