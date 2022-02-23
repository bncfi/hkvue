<template>
    <div v-if="works.length">
        <div class="gallery-container">
            <div class="prev-container">
                <a @keyup.enter="changeWork(-1)" class="prev" @click="changeWork(-1)">&#10094;</a>
            </div>
            <div class="image-container">
                <!--{{console.log("params: ", $route.params.id, " workinfo: ", this.workinfo, " works: ", this.works)}}-->
                <img class="animate-opacity" @touchstart="swipeStart" @touchend="swipeEnd" v-bind:src="works[currentWork].imgsrc"/> <!--- :key="currentWork" -->
            </div>
            <div class="next-container">
                <a @keyup.right="changeWork(1)" class="next" @click="changeWork(1)">&#10095;</a>
            </div>
        </div>
        <div class="work-info">
                <h5>"{{works[currentWork].name}}", {{works[currentWork].media}}, {{works[currentWork].size}}, {{works[currentWork].year}}, {{works[currentWork].size}}, photo: {{works[currentWork].photo}} </h5>
        </div>
        <div class="image-reel">    
            <div v-for="work in works" v-bind:key="work.id" ref="workrefs">
                <router-link v-bind:to="{name:'Works', params: {id: work.id}}"> <img @click="changeWorkById(work.id)" :class="{'image-reel-active': currentWork === work.id, 'image-reel-opacity': currentWork != work.id}" v-bind:src="work.imgsrc"/> </router-link>
            </div>
        </div>
    </div>
    <div v-else>
        <h3>Could not load works!</h3>
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
            currentWork: 0,
            touchStartX: 0,
            touchEndX: 0,
        }
    },
    computed: {
        console: () => console,
        window: () => window,
    },
    created() {
	    window.addEventListener('keydown', this.keyHandler);
        window.addEventListener('ontouchstart', this.swipeStart)
        window.addEventListener('ontouchend', this.swipeEnd)
    },
    destroyed() {
	    window.removeEventListener('keydown', this.keyHandler)
        window.removeEventListener('ontouchstart', this.swipeStart)
        window.removeEventListener('ontouchend', this.swipeEnd)
    },
    methods: {
        async changeWork(nextWork) {
            const newWork = nextWork+this.currentWork            
            if(0 <= newWork && newWork < this.works.length) {
                this.currentWork = newWork;
            } else if (newWork < 0){
                this.currentWork = this.works.length-1
            }else{
                this.currentWork = 0
            }
            //console.log(this.$refs.workrefs[this.currentWork])
            const elem = await this.$refs.workrefs[this.currentWork]
            elem.scrollIntoView({ behavior: "smooth" })
        },
        changeWorkById(id) {
            this.currentWork = id
            //this.$refs.workrefs[this.currentWork].scrollIntoView({ behavior: 'smooth' })
        },
        keyHandler(e) {
            switch (e.keyCode) {
                case 39:
                    e.preventDefault()
                    this.changeWork(1)
                    break;
                case 37:
                    e.preventDefault()
                    this.changeWork(-1)
                    break;
            }
	    },
        swipeHandler() {
            if(this.touchStartX < this.touchEndX) {
                this.changeWork(-1)
            }if(this.touchStartX > this.touchEndX) {
                this.changeWork(1)
            }
        },
        swipeStart(e) {
            //console.log("start ", e.changedTouches[0].screenX)
            this.touchStartX = e.changedTouches[0].screenX
        },
        swipeEnd(e) {
            //console.log("stop ", e.changedTouches[0].screenX)
            this.touchEndX = e.changedTouches[0].screenX
            this.swipeHandler()
        }
    }
})
</script>

<style scoped>

@keyframes opac {
    from {opacity:0} 
    to {opacity:1}
}

.animate-opacity {
    animation-name: opac;
    animation-duration: 0.8s;
}

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
    vertical-align:bottom; 
}

.prev-container, .next-container {
    border: 1px solid red;
    width: 5%;
    height: 100%;
}
/*
.next-container {
    float: right;
}

.prev-container {
    float: left;
}
*/

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

.image-reel {
    display: flex;
    text-align: center;
    border: 1px solid violet;
    overflow-x: auto;
    overflow-y: hidden;
    align-items: center;
}

.image-reel > div {
    padding: 5px;
    height: 15vh;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    /*box-sizing: border-box;*/
}

.image-reel img {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
}

.image-reel-opacity {
    opacity: 0.6;
}

.image-reel-active {
    opacity: 1.0;
}

.image-reel img:hover {
    opacity: 1.0;
}
</style>
