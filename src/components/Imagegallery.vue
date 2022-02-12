<template>
    <div v-if="works.length" class="gallery-container">
        <div class="image-container">
            {{console.log("params: ", $route.params.id, " workinfo: ", workinfo)}}
        </div>
        <div v-if="workinfo" class="work-info">
            <h3>Upea galleria</h3>
            
            <h4>workinfo: {{workinfo.name}} </h4>
            <!--<Workinfo/>-->
            <h4> </h4>
        </div>
        <div v-for="work in works" v-bind:key="work.id" class="image-reel">
            <router-link v-bind:to="{name:'Works', params: {id: work.id}}"> <img  @click="workinfoSet()" v-bind:src="work.imgsrc"/> </router-link>
        </div>

    </div>
</template>

<script>
import Workinfo from '@/components/Workinfo.vue'


export default({
    name: 'Imagegallery',
    components: {
        Workinfo
    },   
    data() {       
        return {
            works: [],
            workinfo: null,
        }
    },
        computed: {
        console: () => console,
        window: () => window,
    },
    methods: {
       async workinfoSet() {
           this.workinfo = await this.works[this.$route.params.id]
           
           }
    },
    
    mounted() {
        fetch("http://localhost:3000/works")
        .then((res) => res.json())
        .then(data  => {this.works = data})
        .catch(err => console.log(err.message))
        }
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
