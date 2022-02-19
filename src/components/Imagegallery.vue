<template>
    <div>
        <Workinfo v-bind:works="this.works" v-bind:workinfo="this.works[this.$route.params.id]" />  
        <div class="image-reel">    
            <div v-for="work in works" v-bind:key="work.id">
                <router-link v-bind:to="{name:'Works', params: {id: work.id}}"> <img v-bind:src="work.imgsrc"/> </router-link>
            </div>
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

.image-reel {
    display: flex;
    text-align: center;
    width:100%;
}

.image-reel img {
    width:100%;
    height: 100%;
    object-fit: contain;
}

.image-reel > div {
    max-width: 10%;
    max-height: 10%;
    padding: 5px;
}

</style>
