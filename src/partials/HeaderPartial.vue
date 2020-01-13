<template>
  <header class="bg-white py-5 shadow">
    <div class="container">
      <div class="flex items-center align-content flex-wrap">
        <div class="flex items-center flex-no-shrink mr-6">
          <router-link
            :to="{ name: 'HomePage' }"
            class="text-black hover:text-grey-darkest no-underline font-semibold text-lg"
          >
            FERIAZA
          </router-link>
        </div>
        <div class="flex items-center w-auto">
          <current-user>
            <template slot-scope="{ user }">
              <div class="items__controls">
                <div class="flex" v-if="user">
                  <div class="flex items-center mr-4">
                    <div class="text-sm">
                      <p class="text-black leading-none">{{ user.name }}</p>
                    </div>
                  </div>
                  <button
                    class="btn__outline btn__outline--teal rounded mr-2 button-add"
                    @click.prevent="CreateHousePage"
                  >
                    Añadir marca
                    <i class="material-icons">add</i>
                  </button>
                  <!-- <button class="mr-4 flex items-center">
                    <i class="material-icons">notifications</i>
                  </button> -->
                  <button class="flex items-center" @click.prevent="logOut">
                    <i class="material-icons">exit_to_app</i>
                  </button>
                </div>
                <div v-else>
                  <button
                    class="btn__outline btn__outline--teal rounded mr-2"
                    @click.prevent="getLogin"
                  >
                    Iniciar sesión
                  </button>
                  <button
                    @click.prevent="signUp"
                    class="bg-yellow-dark text-yellow-darker font-semibold py-2 px-4 rounded"
                  >
                    Crear cuenta
                  </button>
                </div>
              </div>
            </template>
          </current-user>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import CurrentUser from "@/components/CurrentUser.vue";
export default {
  name: "HeaderPartial",
  methods: {
    getLogin() {
      this.$store.dispatch("TOGGLE_MODAL_STATE", {
        name: "login",
        value: true
      });
    },
    signUp() {
      this.$store.dispatch("TOGGLE_MODAL_STATE", {
        name: "register",
        value: true
      });
    },
    logOut() {
      this.$store.dispatch("LOG_OUT");
    },
    CreateHousePage() {
      this.$router.push({ name: "CreateHousePage" });
    }
  },
  components: {
    CurrentUser
  }
};
</script>

<style lang="css">
.button-add {
  display: flex;
  align-items: center;
}

.align-content {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

@media (max-width: 576px) {
  .button-add {
    font-size: 0.75em !important;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}

@media (max-width: 767px) {
  .align-content {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center !important;
  }
}
</style>
