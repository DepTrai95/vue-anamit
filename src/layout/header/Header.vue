<template>
   <header class="header">
      <the-navbar></the-navbar>
   </header>
   <the-stage 
      :headerHeightMax="headerHeightMax"
      :headline="headline" 
      :showSubHeader="showSubHeader" 
      :showBackground="showBackground"
   >
   </the-stage>
</template>

<script>
import TheNavbar from '@/layout/navbar/Navbar.vue';
import TheStage from '@/layout/stage/Stage.vue';

export default {
   components: {
      TheNavbar,
      TheStage,
   },
   data() {
      return {
         isMobile: "",
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
      },
      throttledCheckIsMobile() {
         if (!this.throttleTimeout) {
            this.throttleTimeout = setTimeout(() => {
               this.checkIsMobile();
               this.throttleTimeout = null;
            }, 250);
         }
      },
      checkIsMobile() {
         this.isMobile = window.innerWidth <= 599;
      },
      handleHeaderVisibility(currentScrollPos) {
         const navbar = document.querySelector(".header");
         let prevScrollPos = window.pageYOffset;

         if (currentScrollPos < 300) {
            navbar.classList.remove('header--inverted');
            this.isInverted = false;
            return;
         }

         if (prevScrollPos > currentScrollPos) {
            navbar.classList.remove('header--inverted');
            this.isInverted = false;
         } else {
            navbar.classList.add('header--inverted');
            this.isInverted = true;
         }

         prevScrollPos = currentScrollPos;
      },
   },
   mounted() {
      //loading page check size
      this.checkIsMobile();
      window.addEventListener("scroll", () => {
         if (!this.isMobile) {
            let currentScrollPos = window.pageYOffset;
            this.handleHeaderVisibility(currentScrollPos);
         }
      });
   },
}
</script>

<style lang="scss" scoped>
.header {
   background-color: transparent;
   color: $color-white;
   height: 85px;
   inset-inline: 0;
   position: absolute;
   transition: background-color 0.25s ease-in-out;
   z-index: 101;

   @include for-tablet-portrait-up {
      position: fixed;
   }
}

.header--inverted {
   background-color: $color-white;
   box-shadow: 0 15px 20px rgba(90, 90, 90, 0.1);
   color: $color-header;
}
</style>
