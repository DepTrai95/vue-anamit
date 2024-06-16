<template>
   <section class="page__content">
      <h2>
         <span class="sr-only">Öffne die Speisekarte als PDF</span>
         <a href="/fileadmin/anamit-menu-14-02-2024.pdf">Speisekarte / Menu (PDF)</a>
      </h2>
   </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.page__content {
   padding: 10rem 3rem;
}

h2 {
   @include responsive-font-size(2.8rem, 3rem);
   letter-spacing: 2px;
   margin: 0;
   text-align: center;
}

a {
   color: $color-primary;
   text-decoration: underline;
   text-transform: uppercase;

   &:hover::before {
      transform: scale3d(0, 1, 1);
   }
}
</style>