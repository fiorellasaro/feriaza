<template>
  <footer class="footer mt-6">
    <section class="footer__copyright bg-teal-dark py-4 text-white">
      <div class="container">© ATIERRA 2020</div>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'FooterPartial',
};
</script>

<style>
  .footer .grid-container {
    grid-template-columns: 2fr 1fr 1fr;
  }

  @media(max-width: 576px) {
    .footer .grid-container {
      grid-template-columns: 1fr;
    }
    .footer {
      @apply text-center;
    }
  }
</style>
