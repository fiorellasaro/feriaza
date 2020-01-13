<template>
  <default-layout>
    <section class="py-6 container-center">
      <h1 class="text-3xl font-light text-grey-darkest mb-3">Próximas ferias</h1>

      <div class="card">
        <img
          class="img-card"
          src="../assets/caldoncito xolor.png"
          alt="Avatar"
          style="width:100%"
        />
        <div class="container-card">
          <h3 class="mt-3" style="color:#38a89d"><b>Festival Caldoncito</b></h3>
          <h4 class="font-light text-grey-darkest">Sábado 22 de febrero 12 - 9 pm</h4>
          <h5 class="text-grey-darkest mb-3">Magdalena, Lima - Jirón Ayacucho 368</h5>
          <p class="text-justify">
            ¡El evento informal del verano! Festival Caldoncito es el lugar donde encontrar el
            trabajo de ilustradores de todos los estilos y realidades, todos sobrevivientes de la
            autoproducción. Encuentra desde stickers pop hasta fanzines underground. Ven y celebra
            junto a nosotros, de paso ayuda a hacer crecer la escena local ♥
          </p>
          <p class="mb-3">(zines, stickers, postres, ropa, tatuajes, etc)</p>

          <button class="btn__outline btn__outline--teal rounded mr-2 mb-3">POSTULAR</button>
        </div>
      </div>
    </section>

    <!-- <section class="container py-6">
      <h1 class="text-3xl font-light text-grey-darkest mb-3">Explore</h1>
      <div class="section__explore grid-container mb-8">
        <div class="house__card mb-3" v-for="room in rooms" :key="room['.key']">
          <div class="house__thumbnail relative overflow-hidden">
            <img class="house__image absolute w-full" width="250" :src="room.featured_image">
          </div>
          <div class="house__content bg-white p-3 border rounded">
            <div class="house__type font-semibold text-xs uppercase text-teal-dark mb-1">
              {{ room.type }}
            </div>
            <div class="house__title font-bold mb-2">{{ room.title }}</div>
            <div class="house__price text-xs">
              <span class="font-bold">${{ room.price }} MXN</span> per night
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <router-link
          :to="{ name: 'SearchPage' }"
          class="py-3 px-12 bg-yellow-dark no-underline text-yellow-darker text-lg rounded">
          Show all
        </router-link>
      </div>
    </section> -->
  </default-layout>
</template>

<script>
import { mapGetters } from "vuex";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import TinySlider from "@/components/TinySlider.vue";

export default {
  name: "HomePage",
  beforeCreate() {
    this.$store.dispatch("FETCH_ROOMS", 12);
  },
  computed: {
    ...mapGetters(["rooms"])
  },
  components: {
    DefaultLayout,
    TinySlider
  }
};
</script>

<style lang="css">
.section__explore {
  grid-template-columns: repeat(4, 1fr);
}

.house__card > .house__thumbnail {
  height: 170px;
}

.house__thumbnail > .house__image {
  width: 100%;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

.container-center {
  display: flex;
  justify-content: center !important;
  flex-direction: column;
  align-items: center;
  min-height: 30vh;
}

.text-justify{
  text-align: justify !important;
}

@media screen and (max-width: 540px) {
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 80vw;
    border-radius: 5px;
    text-align: center;
  }
}

@media screen and (max-width: 769px) and (min-width: 541px) {
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 40vw;
    border-radius: 5px;
    text-align: center;
  }
}

@media screen and (min-width: 769px) {
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 25vw;
    border-radius: 5px;
    text-align: center;
  }
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.img-card {
  border-radius: 5px 5px 0 0;
}

.container-card {
  padding: 2px 16px;
}

@media (max-width: 992px) {
  .house__card > .house__thumbnail {
    height: 150px;
  }
  .section__explore {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 576px) {
  .section__explore {
    grid-template-columns: repeat(1, 1fr);
  }

  .house__card > .house__thumbnail {
    height: 120px;
  }
}
</style>
