<template>
    <div class="main" v-if="works.length">
        <div class="gallery-container">
            <div class="prev-container">
                <a @keyup.enter="changeWork(-1)" class="prev" @click="changeWork(-1)">&#10094;</a>
            </div>
            <div class="image-container">
                <img class="animate-opacity" @touchstart="swipeStart" @touchend="swipeEnd" v-bind:src="works[currentWork].imgsrc"/> <!--- :key="currentWork" -->
            </div> 
            <div class="next-container">
                <a @keyup.right="changeWork(1)" class="next" @click="changeWork(1)">&#10095;</a>
            </div>
             <div class="work-info">
                "{{works[currentWork].name}}", {{works[currentWork].media}}, {{works[currentWork].size}}, {{works[currentWork].year}}, {{works[currentWork].size}}, photo: {{works[currentWork].photo}}
            </div>
            <div class="image-reel">    
                <div v-for="work in works" v-bind:key="work.id" ref="workrefs">
                    <router-link v-bind:to="{name:'Works', params: {id: work.id}}"> 
                        <img @click="changeWorkById(work.id)" :class="{'image-reel-active': currentWork === work.id, 'image-reel-opacity': currentWork != work.id}" v-bind:src="work.imgsrc"/> 
                    </router-link>
                </div>
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
            //const previousActive = this.$refs.workrefs[this.currentWork].getElementsByClassName("image-reel-active")
            //previousActive.item(0).classList.remove("image-reel-active")

            const newWork = nextWork+this.currentWork            
            if(0 <= newWork && newWork < this.works.length) {
                this.currentWork = newWork;
            } else if (newWork < 0){
                this.currentWork = this.works.length-1
            }else{
                this.currentWork = 0
            }
            
            try {
                const elem = await this.$refs.workrefs[this.currentWork]
                elem.scrollIntoView({ behavior: "smooth" })
            }catch(err) {
                console.log(err.message)
            }
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

.main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:stretch;
    border: 1px solid violet;
    height: 95vh;
    width: 100%;
}

.gallery-container {
    border: 1px solid black;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.image-container {
    height: 70vh;
    margin: auto; /*centeroi elementin flexboxis */
    /*border: 1px solid blue;*/
    width: 90vw;
}

.image-container img {
    height: 100%;
    object-fit: contain;
}

.prev-container, .next-container {
    border: 1px solid red;
    width: 3vw;
}

.prev, .next {
  cursor: pointer;
  color: black;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  user-select: none;
}

.work-info {
    height: 5vh;
    width: 100vw;
    line-height: 5vh;
    text-align: center;
    vertical-align:middle;
    border: 1px solid coral;
}

.image-reel {
    display: flex;
    text-align: center;
    border: 1px solid violet;
    overflow-x: auto;
    overflow-y: hidden;
    align-items: center;
    column-gap: 5px;
}

.image-reel > div {
    height: 15vh;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
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
    transition: 0.25s;
}

.image-reel img:hover {
    opacity: 1.0;
    transition: 0.25s;
}

/* tablet */
@media screen and (max-width: 834x) {
    .image-container {
        height: 70vh;
        margin: auto; 
        border: 1px solid blue;
        width: 50vw;
    }
    .prev-container, .next-container {
        display:none;
    }
}
/*mobile */
@media screen and (max-width: 390px) {
    .image-container {
        height: 43vh;
        margin: auto; /*centeroi elementin flexboxis */
        border: 1px solid blue;
        width: auto;
        overflow:auto;
    }
    .work-info {
        height: 10vh;
        line-height: 10vh;
        font-size: 10px;
    }
    .prev-container, .next-container {
        display:none;
    }
}



</style>
