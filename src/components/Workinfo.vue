<template>
    <div v-if="works.length" class="gallery-container">
        <div v-if="workinfo">
            <div class="prev-container">
                <a class="prev" onclick="plusSlides(-1, 0)">&#10094;</a>
            </div>
            <div class="next-container">
                <a class="next" onclick="plusSlides(1, 0)">&#10095;</a>
            </div>
            <div class="image-container">
                {{console.log("params: ", $route.params.id, " workinfo: ", this.workinfo, " works: ", this.works)}}
                <img v-bind:src="this.workinfo.imgsrc"/>
            </div>

            <div class="work-info">
                <h5>"{{workinfo.name}}", {{workinfo.media}}, {{workinfo.size}}, {{workinfo.year}}, {{workinfo.size}}, photo: {{workinfo.photo}} </h5>
            </div>
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
    align-items: center;
    display: flex;
    height: 100%;
}

.image-container {
    max-width: 40%;
    margin: auto; /*centeroi elementin flexboxis */
    border: 1px solid blue;
}

.image-container img {
    width: 100%;
    object-fit: contain;
}

.work-info {
    text-align: center;
    width: 100%;
    border: 1px solid coral;
}

.prev-container, .next-container {
    border: 1px solid red;
    width: 5%;
    height: 100%;
}

.next-container {
    float: right;
}

.prev-container {
    float: left;
}

.prev, .next {
  cursor: pointer;
  color: black;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  user-select: none;
}

.next {
  right: 0;
}
</style>
