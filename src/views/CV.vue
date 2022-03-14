<template>
  <div class="container">
    <div class="cv">
      <b>CV</b><br/>
      Hermanni Keko<br/>
      b. 1987<br/>
      hermanni.keko@gmail.com
      <br/>
      <br/>
      <b>Art studies</b><br/><br/>
      2015-2019 Master of Arts, Aalto University<br/>
      2008-2012 Bachelor of Fine Arts, Lahti university of applied sciences<br/>
      <br/>
      <b>Selected solo exhibitions</b><br/><br/>
      2021    Galerie Forsblom, Helsinki<br/>
      2019    Galerie Forsblom, Helsinki<br/>
      2018    TM-Galleria, Helsinki<br/>
      2015    Galleria 3H+K, Pori<br/>
      2011    Galleria OyOy, Lahti<br/>
      <br/>
      <b>Selected group exhibitions</b><br/><br/>

      2020	  More news from nowhere, Korkeavuorenkatu 7, Helsinki<br/>
      2020	  Nastola summer exhibition, Nastola<br/>
      2019		Kunsthalle, Helsinki (Young artists exhibition)<br/>
      2019    Flora/Fauna, Stavanger Art Museum, Norway (Band of Weeds)<br/>
      2018    Akademie der Kunste der Welt, Koln, Germany (Band of Weeds)<br/>
      2018    Galleria Turpeinen, Helsinki<br/>
      2018    Third space, Helsinki (with Joonas Siren)<br/>
      2017    Kvit Gallery, Copenhagen, Denmark<br/>
      2016    Oksasenkatu 11, Helsinki (with Joonas Siren)<br/>
      2015    Kappeli Betsda, Sipyy (with Joonas Siren)<br/>
      2014    Huuto Galleria, Helsinki (with Joona Pakkanen and Tuukka Tammisaari)<br/>
      2012    Imatran taidemuseo, Imatra<br/>
      2012    Cabel Factory, Helsinki<br/>
      2012    Lahti Kiosk of Contemporary Art, Lahti<br/>
      <br/>
      <b>Grants and scholarships</b><br/>
      <br/>
      2021	  KONE Foundation, Working grant<br/>
      2021    Arts Promotion Centre Finland, Working grant<br/>
      2018		Finnish art society<br/>
      2018    Arts promotion centre Finland (Taike)<br/>
      2018    Kone foundation<br/>
      2012    Painting scholarship, Mint of Finland<br/>
      <br/>
      <b>Other projects</b><br/>
      <br/>
      2016-   Band of Weeds (with Kalle Hamm, Lauri Ainala and Olli Aarni)<br/>
      <br/>
      <b>Memberships</b><br/>
      <br/>
      Painters' union of Finland
      <br/>
    </div>
  </div>
</template>

<style scoped>
  .container {
    margin:auto;
    width:80%;
    padding-top: 20px;
    text-align:center;
    color: black;
  }
  .cv {
    margin-left:25%;
    width:60%;
    margin-bottom: 10px;
    padding-top: 20px;
    text-align:justify;
    color: black;
  }

  /* tablet */
@media screen and (max-width: 1024px) and (orientation: portrait) {
    .container{
      width: 100vw;
    }
    .cv {
      margin-left:5%;
      width: 80vw;
      font-size: 2vw;
      text-align:left;
    }
}

@media screen and (max-width: 1024px) and (orientation: landscape) {
    .cv {
      font-size: 2vw;
    }
}

/*mobile */
@media screen and (max-width: 390px) and (orientation: portrait) {
    .container {
      width:100vw;
    }
    .cv {
      margin-left:1%;
      width:100%;
      font-size: 3vw;
      text-align:left;
    }
}

@media screen and (max-width: 850px) and (orientation: landscape) {
    .cv {
        font-size: 1.7vw;
    }
}
</style>