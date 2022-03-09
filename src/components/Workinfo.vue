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
               <p> "{{works[currentWork].name}}", {{works[currentWork].size}}, {{works[currentWork].media}}, {{works[currentWork].year}} <br/> photo: {{works[currentWork].photo}}</p>
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
body {
    overflow: hidden;
}


.main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:stretch;
    /*border: 1px solid violet;*/
    height: 95vh;
    width: 100%;
}

.gallery-container {
    /*border: 1px solid black;*/
    align-items: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.image-container {
    height: 69vh;
    margin: auto; /*centeroi elementin flexboxis */
    /*border: 1px solid blue;*/
    width: 90vw;
}

.image-container img {
    height: 100%;
    object-fit: contain;
}

.prev-container, .next-container {
    /*border: 1px solid red;*/
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
    height: 9vh;
    width: 100vw;
    font-size: 1vw;
    line-height: 9vh;
    text-align: center;
    vertical-align:middle;
    /*border: 1px solid coral;*/
}

.work-info p {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
}

.image-reel {
    display: flex;
    text-align: center;
    /*border: 1px solid violet;*/
    overflow-x: auto;
    overflow-y: hidden;
    align-items: center;
    column-gap: 5px;
}

.image-reel > div {
    height: 13vh;
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
@media screen and (max-width: 1024px) and (orientation: portrait) {
    .image-container {
        height: 50vh;
        width: auto;
    }
    .prev-container, .next-container {
        display:visible;
    }    
    .work-info {
        height: 10vh;
        line-height: 10vh;
        font-size: 2vw;
    }
}

@media screen and (max-width: 1024px) and (orientation: landscape) {
    .image-container {
        height: 65vh;
        width: auto;
    }
    .prev-container, .next-container {
        display:visible;
    }
    .work-info {
        height: 10vh;
        line-height: 10vh;
        font-size: 1.7vw;
    }
}
/*samsung*/
@media screen and (max-width: 920px) and (orientation: landscape) {
    .image-container {
        height: 65vh;
        width: auto;
    }
    .prev-container, .next-container {
        display:visible;
    }
    .work-info {
        height: 10vh;
        line-height: 10vh;
        font-size: 1vw;
    }
}

/*mobile */
/*samsung*/
@media screen and (max-width: 415px) and (orientation: portrait) {
    .image-container {
        height: 36vh;
        width: auto;
    }
    .work-info {
        height: 10vh;
        line-height: 10vh;
        font-size: 3vw;
    }
    .prev-container, .next-container {
        display:none;
    }
}

@media screen and (max-width: 750px) and (orientation: landscape) {
    .image-container {
        height: 63vh;
        width: auto;
    }
    .work-info {
        height: 10vh;
        line-height: 10vh;
        font-size: 1.1vw;
    }
    .prev-container, .next-container {
        display:visible;
    }
}

/*iphone*/
@media screen and (max-width: 390px) and (orientation: portrait) {
    .image-container {
        height: 46vh;
        width: auto;
    }
    .work-info {
        height: 10vh;
        line-height: 10vh;
        font-size: 3vw;
    }
    .prev-container, .next-container {
        display:none;
    }
}

@media screen and (max-width: 850px) and (orientation: landscape) {
    .image-container {
        height: 63vh;
        width: auto;
    }
    .work-info {
        height: 11vh;
        line-height: 11vh;
        font-size: 1.2vw;
    }
    .prev-container, .next-container {
        display:visible;
    }
}
/*small screen mobiles*/
@media screen and (max-width: 365px) and (orientation: portrait) {
    .image-container {
        height: 40vh;
        width: auto;
    }
    .work-info {
        height: 10vh;
        line-height: 10vh;
        font-size: 3vw;
    }
    .prev-container, .next-container {
        display:none;
    }
}

@media screen and (max-width: 850px) and (orientation: landscape) {
    .image-container {
        height: 63vh;
        width: auto;
    }
    .work-info {
        height: 11vh;
        line-height: 11vh;
        font-size: 1.2vw;
    }
    .prev-container, .next-container {
        display:visible;
    }
}



</style>
