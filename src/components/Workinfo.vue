<template>
    <div v-if="works.length" class="gallery-container">
        <div class="image-container">
            {{console.log("params: ", $route.params.id, " workinfo: ", this.workinfo, " works: ", this.works)}}
        </div>
        <div v-if="workinfo" class="work-info">
            <h3>Upea galleria</h3>
            <h4>workinfo: {{workinfo.name}} </h4>
            <h4> </h4>
        </div>
        <div v-else class="work-info">
            <h3>Testi</h3>
            <h4>wokrinfo: {{works[0].name}}</h4>
        </div>
    </div>
</template>
<script>


export default({
    name: 'Workinfo',
    props: ['works','workinfo'],
    components: {
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
