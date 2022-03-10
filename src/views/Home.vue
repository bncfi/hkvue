<template>
  <div class="home">
    <img class="frontpage-image" src="/images/others/frontpage.jpg"/>
    <br/><br/>
    Contact: hermanni.keko at gmail.com
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
.frontpage-image {
  margin-top: 2%;
  height: 80vh;
}

/* tablet */
@media screen and (max-width: 1024px) and (orientation: portrait) {
    .frontpage-image {
      margin-top: 20%;
      width: 100vw;
      height: auto;
    }
}

@media screen and (max-width: 1024px) and (orientation: landscape) {
.frontpage-image {
  height: 80vh;
}
}

/*mobile */
@media screen and (max-width: 390px) and (orientation: portrait) {
  .frontpage-image {
    margin-top: 40%;
    width: 100vw;
    height: auto;
  }
}

@media screen and (max-width: 850px) and (orientation: landscape) {
.frontpage-image {
  height: 80vh;
}
}
</style>
