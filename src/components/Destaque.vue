<template>
  <div class="container-fluid">
        <h1 id='title'>Titulos em Destaque</h1>
    <div class="row m-4">
      <div class="col-md-3" v-for="anime in animes" :key="anime.id">
        <div id='card-body'>
          <div class="card mb-4 shadow-lg" style="margin-left: 60px">
            <img
              class="card-img-top"
              :src="anime.LinkFoto"
              alt="Card image cap"
              id='img'
            />
            <div
              class="card-body"
            >
                <h2 style="text-align: center">{{ anime.titulo }}</h2>
                <div style="text-align: center">
                <hr>
                <large class="text-muted">Gênero: {{ anime.genero }}</large>
                <br>
                <large class="text-muted ">Lançamento: {{ anime.ano }}</large>
                <br>
                <large class="text-muted">Estudio: {{ anime.estudio}}</large>
                <br>
                <large class="text-muted">Temporada: {{ anime.temporada }}</large>
                <br>
                <large class="text-muted">Episódios: {{ anime.episodios }}</large>
                <hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      animes: null,
    };
  },
  mounted() {
    axios
      .get(`${this.$urlAPI}/destaques`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => (this.animes = response.data.lista));
  },
};
</script>

<style scoped>
#img{
    height: 450px;
    width: 300px;
}
#card-body{
    height: 500px;
    width: 362px;
}
#title{
    text-align: center;
}
</style>
