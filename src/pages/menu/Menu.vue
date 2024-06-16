<template>
   <section class="page__content">
      <h2>
         <a href="#">Speisekarte / Menu (PDF)</a>
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
   color: $color-primary; 
   letter-spacing: 2px;
   margin: 0;
   text-align: center;
   text-transform: uppercase;
}

a {
   text-decoration: underline;

   &:hover::before {
      transform: scale3d(0, 1, 1);
   }
}
</style>