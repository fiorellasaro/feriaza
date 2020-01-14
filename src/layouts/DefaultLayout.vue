<template>
  <div class="default-layout">
    <header-partial></header-partial>
    <section class="section__hero py-6 bg-black bg-cover bg-center">
      <div class="container center-container">
        <div class="section__form bg-white p-4  shadow-md rounded center-feriaza">
          <h1 class="mb-2 text-4xl font-bold text-grey-darkest title-center">FERIAZA</h1>
          <h2 class="mb-6 text-base text-grey-dark font-bold title-about" style="color:#38a89d">
            Encuentra espacios ideales para tu marca
          </h2>
          <current-user>
            <template slot-scope="{ user }">
              <form class="form__search">
                <button
                  v-if="user"
                  class="px-2 py-4 bg-yellow-dark font-semibold w-full rounded text-yellow-darker"
                >
                  ¡Quiero agregar mi marca!
                </button>
                <button
                  v-else
                  @click.prevent="signUp"
                  class="px-2 py-4 bg-yellow-dark font-semibold w-full rounded text-yellow-darker"
                >
                  ¡Quiero ser parte!
                </button>
              </form>
            </template>
          </current-user>
        </div>
      </div>
    </section>
    <main class="main">
      <slot></slot>
    </main>
    <footer-partial></footer-partial>
    <!-- Modals -->
    <modal :show="modals.login" @close-modal="closeModal">
      <p class="title-brand-modal text-center">Feriaza</p>
      <h2 class="text-grey-darkest font-light text-center mb-6">Ingresa a la comunidad</h2>
      <form @submit.prevent="loginHandlerSubmit">
        <div class="mb-4">
          <label class="input__label">Correo</label>
          <div class="form__field relative">
            <input
              v-model="formLogin.email"
              class="input__field"
              type="text"
              placeholder="bruce.wayne@imnotbatman.org"
            />
          </div>
        </div>
        <div class="mb-4">
          <label class="input__label">Contraseña</label>
          <div class="form__field relative">
            <input
              v-model="formLogin.password"
              class="input__field"
              type="password"
              placeholder="*********"
            />
          </div>
        </div>
        <div class="mb-4">
          <toggle-input v-model="formLogin.rememberMe"></toggle-input>
          Recuérdame
        </div>
        <div class="mb-4 align-button">
          <button class="btn__outline btn__outline--teal rounded mr-2">
                    Iniciar sesión
          </button>
        </div>
      </form>
    </modal>
    <modal :show="modals.register" @close-modal="closeModalRegister">
      <p class="title-brand-modal text-center">Feriaza</p>
      <h2 class="text-grey-darkest font-light text-center mb-6">¡Se parte de esta comunidad!</h2>
      <form class="form" @submit.prevent="registerHandlerSubmit">
        <div class="mb-4">
          <label class="input__label" for="name">Nombre</label>
          <div class="form__field relative">
            <input
              class="input__field"
              id="name"
              v-model="formRegister.name"
              type="text"
              placeholder="Mi nombre"
            />
          </div>
        </div>
        <div class="mb-4">
          <label class="input__label" for="lastname">Apellido</label>
          <div class="form__field relative">
            <input
              class="input__field"
              id="lastname"
              v-model="formRegister.lastname"
              type="text"
              placeholder="Mi apellido"
            />
          </div>
        </div>
        <div class="mb-4">
          <label class="input__label" for="doctype">Tipo de documento</label>
          <div class="form__field relative">
            <select
              v-model="formRegister.docType"
              placeholder="Seleccionar"
              type="text"
              class="input__field"
              id="docType"
            >
              <option value="Seleccionar">Seleccionar</option>
              <option value="DNI">DNI</option>
              <option value="CE">CE</option>
              <option value="PASAPORTE">PASAPORTE</option>
            </select>
          </div>
        </div>

        <div class="mb-4">
          <label class="input__label" for="docNumber">Nº de documento</label>
          <div class="form__field relative">
            <input
              class="input__field"
              id="docNumber"
              v-model="formRegister.docNumber"
              type="text"
              placeholder="12345678"
            />
          </div>
        </div>

        <div class="mb-4">
          <label class="input__label" for="contactNumber">Nº de teléfono</label>
          <div class="form__field relative">
            <input
              class="input__field"
              id="contactNumber"
              v-model="formRegister.contactNumber"
              type="text"
              placeholder="920293212"
            />
          </div>
        </div>

        <div class="mb-4">
          <label class="input__label" for="email">Correo</label>
          <div class="form__field relative">
            <input
              class="input__field"
              id="email"
              v-model="formRegister.email"
              type="email"
              placeholder="minombre@mimarca.com"
            />
          </div>
        </div>
        <div class="mb-4">
          <label class="input__label" for="password">Contraseña</label>
          <div class="form__field relative">
            <input
              class="input__field"
              id="password"
              v-model="formRegister.password"
              type="password"
              placeholder="Contraseña"
            />
          </div>
        </div>
        <div class="mb-4 align-button">
          <button class="btn__outline btn__outline--teal rounded mr-2">
                    Crear cuenta
          </button>
          <!-- <button class="btn w-full">Crear cuenta</button> -->
        </div>
      </form>
    </modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HeaderPartial from "@/partials/HeaderPartial.vue";
import FooterPartial from "@/partials/FooterPartial.vue";
import Modal from "@/components/Modal.vue";
import ToggleInput from "@/components/ToggleInput.vue";
import CurrentUser from "@/components/CurrentUser.vue";

export default {
  name: "DefaultLayout",
  data() {
    return {
      formLogin: {
        email: "",
        password: "",
        rememberMe: false
      },
      formRegister: {
        email: "",
        name: "",
        lastname: "",
        docType: "Seleccionar",
        docNumber: "",
        contactNumber: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapGetters(["modals"])
  },
  components: {
    HeaderPartial,
    FooterPartial,
    Modal,
    ToggleInput,
    CurrentUser
  },
  methods: {
    closeModal() {
      this.$store.dispatch("TOGGLE_MODAL_STATE", {
        name: "login",
        value: false
      });
    },
    closeModalRegister() {
      this.$store.dispatch("TOGGLE_MODAL_STATE", {
        name: "register",
        value: false
      });
    },
    registerHandlerSubmit() {
      this.$store.dispatch("CREATE_USER", this.formRegister).then(() => {
        this.$router.push({ name: "CreateHousePage" });
        this.closeModalRegister();
      });
    },
    loginHandlerSubmit() {
      this.$store
        .dispatch("SIGN_IN", {
          email: this.formLogin.email,
          password: this.formLogin.password
        })
        .then(() => {
          this.closeModal();
        });
    },
    signUp() {
      this.$store.dispatch("TOGGLE_MODAL_STATE", {
        name: "register",
        value: true
      });
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap");

.section__hero {
  min-height: 450px;
  background-image: url("../assets/4.png");
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title-center {
  font-size: 5em !important;
  font-family: "Permanent Marker", cursive;
}

.title-brand-modal {
  font-size: 2em !important;
  font-family: "Permanent Marker", cursive;
}

.title-about {
  font-size: 2em !important;
}

.form__field .input-icon {
  top: 7px;
  left: 9px;
}

.form__field > .input__search {
  @apply pl-10;
}

.center-feriaza {
  background-color: rgba(255, 255, 255, 0.85) !important;
  display: flex;
  justify-content: center !important;
  flex-direction: column;
  align-items: center;
}

.center-container {
  width: 50% !important;
}

  .align-button {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center !important;
    display: flex;
  }

@media (max-width: 576px) {
  .section__hero {
    min-height: 250px;
  }

  .title-center {
    font-size: 2em !important;
  }

  .title-about {
    font-size: 1.3em !important;
  }

  .center-container {
    width: 90% !important;
  }

  .section__form {
    @apply w-full;
  }
}

@media (min-width: 576px) {
  /* .center-feriaza{
    width: 350px !important;
  } */
}

@media (min-width: 768px) {
  .ivu-col-span-md-10 {
    display: block;
    width: 80% !important;
  }
}
</style>
