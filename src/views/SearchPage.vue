<template>
  <page-layout>
    <section class="section__items py-8">
      <div class="container">
        <h1 class="text-3xl font-light mb-3">Postulantes</h1>
        <div class="search__content grid-container mb-8">
          <div class="house__card mb-3" v-for="room in rooms" :key="room['.key']">
            <!-- <div class="house__thumbnail relative overflow-hidden">
              <img class="house__image absolute w-full" width="250" :src="room.featured_image">
            </div> -->
            <div class="house__content bg-white p-3 border rounded">
              <div class="house__title font-bold mb-2">
                Marca:
                {{ room.title }}
              </div>
              <div class="house__type font-semibold text-xs uppercase text-teal-dark mb-1">
                {{ room.target }}
              </div>
              <div v-if="room.typeOfProduct!='Seleccionar'" class="house__type font-semibold text-xs text-grey-dark mb-1">
                {{ room.typeOfProduct }}
              </div>
              <div v-else-if="room.otherType!=''" class="house__type font-semibold text-xs text-grey-dark mb-1">
                {{ room.otherType }}
              </div>
              <div v-else class="house__type font-regular text-xs  mb-1">
                Sin especificar
              </div>
              <div class="house__type font-regular text-xs  mb-1">
                web: {{ room.url }} 
                {{ room.otherUrl }}
              </div>
              <div class="house__type font-regular text-xs  mb-1">
                Descripción: {{ room.description }} 
              </div>


            </div>
          </div>

          <!-- <div class="house__card mb-3" v-for="user in users" :key="user['.key']">
            <div class="house__thumbnail relative overflow-hidden">
              <img class="house__image absolute w-full" width="250" :src="room.featured_image">
            </div> 
            <div class="house__content bg-white p-3 border rounded">
              <div class="house__type font-semibold text-xs uppercase text-teal-dark mb-1">
                hello {{ user.name }}
              </div>
              <div class="house__title font-bold mb-2"> Marca:
                {{ user.email }}
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </section>
  </page-layout>
</template>

<script>
import { mapGetters } from "vuex";
import PageLayout from "@/layouts/PageLayout.vue";

export default {
  name: "SearchPage",
  beforeCreate() {
    this.$store.dispatch("FETCH_ROOMS");
    this.$store.dispatch("FETCH_USER");
  },
  computed: {
    ...mapGetters(["rooms", "users"])
  },
  components: {
    PageLayout
  }
};
</script>

<style>
.section__items .grid-container {
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 992px) {
  .section__items .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 576px) {
  .section__items .grid-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
