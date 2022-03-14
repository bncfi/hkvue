<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/works">Works</router-link> |
        <router-link to="/cv">CV</router-link>      
    </div>
  <router-view/>
</template>

<script>

export default ({
    name: 'Header',
    setup() {
        
    },
})
</script>

<style scoped>
    #nav {
    margin-top: 0.5%;
    height: 5vh;
    line-height:5vh;
    vertical-align: middle;
    font-size: 1.3vw;
    }

    #nav a {
    font-weight: bold;
    color: black;
    text-decoration: none;
    }

    #nav a.router-link-exact-active {
    color:black;
    }

/* tablet */
@media screen and (max-width: 1024px) and (orientation: portrait) {
    #nav {
        font-size: 25px;
    }
}

@media screen and (max-width: 1024px) and (orientation: landscape) {
    #nav {
        font-size: 25px;
    }
}

/*samsung*/
@media screen and (max-width: 415px) and (orientation: portrait) {
    #nav {
        font-size: 20px;
    }    
}

@media screen and (max-width: 750px) and (orientation: landscape) {
    #nav {
        font-size: 20px;
    }
}

/*mobile */
@media screen and (max-width: 390px) and (orientation: portrait) {
    #nav {
        font-size: 17px;
    }
}

@media screen and (max-width: 850px) and (orientation: landscape) {
    #nav {
        font-size: 17px;
    }
}


</style>
