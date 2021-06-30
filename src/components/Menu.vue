<template>
  <nav id='navbar' class="navbar navbar-expand-sm bg-primary navbar-dark mb-5">
      <img
        src="https://pbs.twimg.com/profile_images/1168263403691028480/WK_EzkYC_400x400.png"
        alt="Anime"
        class="mx-3"
        id = 'img'
    />
    <a class="navbar-brand" href="#">SuperAnimes</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/main" class="nav-link">Destaques</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/pesq" class="nav-link">Pesquisa</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/graf" class="nav-link">Estatísticas</router-link>
        </li>
      </ul>
    </div>

    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbardrop"
          data-toggle="dropdown"
        >
          <i class="fas fa-user-plus mr-1"></i>
          <span v-if="user">{{ user }}</span>
          <span v-else>Convidado</span>
        </a>
        <div class="dropdown-menu text-center">
          <a class="dropdown-item btn" @click.prevent="sair()">Sair</a>
        </div>
      </li>
    </ul>
  </nav>

</template>


<script>
export default {
  data() {
    return {
      user: localStorage.getItem("user")
    };
  },
  methods: {
    sair() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.$router.push("/login");
    },
  }
};
</script>

<style scoped>
#img {
  width: 90px;
  height: 80px;
  margin-top: -5px;
}
#navbar {
  height: 92px;
}
</style>