<template>
   <header class="header">
      <the-navbar></the-navbar>
      <the-stage 
         :headerHeightMax="headerHeightMax"
         :headline="headline" 
         :showSubHeader="showSubHeader" 
         :showBackground="showBackground"
      >
      </the-stage>
   </header>
</template>

<script>
import TheNavbar from '../navbar/Navbar.vue';
import TheStage from '../stage/Stage.vue';

export default {
   components: {
      TheNavbar,
      TheStage,
   },
   data() {
      return {
         headerHeightMax: false,
         headline: 'Anamit',
         showSubHeader: false,
         showBackground: false,
      };
   },
   watch: {
      '$route': {
         immediate: true,
         handler(to) {
            this.updateHeaderProps(to);
         }
      }
   },
   methods: {
      updateHeaderProps(route) {
         this.headerHeightMax = route.meta.headerHeightMax !== undefined ? route.meta.headerHeightMax : false;
         this.headline = route.meta.headline || 'Anamit';
         this.showSubHeader = route.meta.showSubHeader !== undefined ? route.meta.showSubHeader : false;
         this.showBackground = route.meta.showBackground !== undefined ? route.meta.showBackground : false;
      }
   },
}
</script>

<style lang="scss" scoped>
</style>
