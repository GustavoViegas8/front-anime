<template>
  <form class="form-signin mt-5" @submit.prevent="logar">
    <div class="text-center mb-4">
      <h1 class="h3 mb-3 font-weight-normal">Faça seu login</h1>
    </div>

    <div class="form-label-group">
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
        v-model="email"
      />
      <label for="inputEmail">Email</label>
    </div>

    <div class="form-label-group">
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
        v-model="senha"
      />
      <label for="inputPassword">Senha</label>
    </div>

    <p style="text-align: center">
      Ou crie sua <router-link to="/">conta</router-link>.
    </p>

    <button @click.prevent="logar()" class="btn btn-success btn-block" type="submit">Entrar</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: null,
      senha: null,
    };
  },

  methods: {
    logar() {
      axios
        .post(this.$urlAPI + "/login", { email: this.email, senha: this.senha })
        .then(response => {
          if (response.data.user == null) {
            console.error(response.data.error);
          } else {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", response.data.user.name);
            this.$router.push("/main");
          }
        });
    },
  },
};
</script>

<style scoped>
template {
  height: 100%;
}

template {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: auto;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group > input,
.form-label-group > label {
  height: 3.125rem;
  padding: 0.75rem;
}

.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0; /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  pointer-events: none;
  cursor: text; /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: 0.25rem;
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 12px;
  color: #777;
}

@supports (-ms-ime-align: auto) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}
</style>