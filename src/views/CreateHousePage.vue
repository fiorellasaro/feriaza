<template>
  <page-layout>
    <!-- <section class="py-4 bg-teal-dark">
      <div class="container">
        <form class="form">
          <div class="form__field relative">
            <i class="input-icon material-icons absolute text-grey-darker">search</i>
            <input
              class="input__search"
              id="where"
              type="text"
              placeholder="Mexico City, Mexico">
          </div>
        </form>
      </div>
    </section> -->
    <section class="section__create py-6">
      <div class="container">
        <h1 class="text-3xl">Datos de tu marca</h1>
        <form>
          <div class="mb-4">
            <label class="input__label">Nombre de tu marca</label>
            <input
              v-model="publication.title"
              class="input__field"
              type="text"
              placeholder="Mi marca"
            />
          </div>
          <div class="mb-4">
            <label class="input__label" for="doctype">Público objetivo</label>
            <div class="form__field relative">
              <select
                v-model="publication.target"
                placeholder="Seleccionar"
                type="text"
                class="input__field"
                id="docType"
              >
                <option value="Seleccionar">Seleccionar</option>
                <option value="Público general">Público general</option>
                <option value="Infantil">Infantil</option>
                <option value="Juvenil">Juvenil</option>
              </select>
            </div>
          </div>
          <div class="mb-4">
            <label class="input__label" for="doctype">Tipo de producto</label>
            <div class="form__field relative">
              <select
                v-model="publication.typeOfProduct"
                placeholder="Seleccionar"
                type="text"
                class="input__field"
                id="docType"
              >
                <option value="Seleccionar">Seleccionar</option>
                <option value="Juguetes">Juguetes</option>
                <option value="Ropa">Ropa</option>
                <option value="Accesorios">Accesorios</option>
              </select>
            </div>
          </div>
          <div class="mb-4">
            <label class="input__label">Otro tipo de producto</label>
            <input
              v-model="publication.otherType"
              class="input__field"
              type="text"
              placeholder="Otro tipo de producto"
            />
          </div>
          <div class="mb-4">
            <label class="input__label">Url de sitios Web</label>
            <input v-model="publication.url" class="input__field" type="text" placeholder="Url" />
          </div>
          <div class="mb-4">
            <input
              v-model="publication.otherUrl"
              class="input__field"
              type="text"
              placeholder="Url"
            />
          </div>
          <div class="mb-4">
            <label class="input__label">Cuéntanos brevemente sobre tu marca o estilo</label>
            <textarea
              v-model="publication.description"
              class="input__field"
              rows="10"
              placeholder="Descripción"
            ></textarea>
          </div>
          <div class="mb-4">
            <label class="input__label">Logo o imagen de tu marca</label>
            <input
              v-model="publication.featuredImage"
              class="input__field"
              type="text"
              placeholder="https://images.unsplash.com/photo-1432303492674-642e9d0944b"
            />
          </div>
          <div class="mb-4 text-right">
            <button
              @click.prevent="save"
              class="w-full bg-yellow-dark text-yellow-darker font-semibold py-3 px-6 rounded"
            >
              Publicar
            </button>
          </div>
        </form>
      </div>
    </section>
  </page-layout>
</template>

<script>
import PageLayout from "@/layouts/PageLayout.vue";

export default {
  name: "CreateHousePage",
  data() {
    return {
      publication: {
        title: "",
        target: "",
        typeOfProduct: "",
        otherType: "",
        url: "",
        otherUrl: "",
        description: "",
        featuredImage: ""
      }
    };
  },
  methods: {
    save() {
      const {
        title,
        target,
        typeOfProduct,
        otherType,
        url,
        otherUrl,
        description,
        featuredImage
      } = this.publication;
      const room = {
        title,
        target,
        typeOfProduct,
        otherType,
        url,
        otherUrl,
        description,
        featured_image: featuredImage,
        publishedAt: Date.now()
      };

      this.$store.dispatch("CREATE_ROOM", room).then(() => {
        this.$router.push({ name: "SearchPage" });
      });
    }
  },
  components: {
    PageLayout
  }
};
</script>
