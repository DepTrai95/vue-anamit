<template>
   <div>
      <div class="logo__container">
         <div class="logo">
            <router-link to="/">
               <img src="/img/anamit.png" alt="zur Startseite" height="80" width="80" />
            </router-link>
         </div>
      </div>
      <div class="nav-main__wrapper" v-if="!isMobile">
         <nav class="nav-main">
            <ul class="list--unstyled">
               <LinkRouter link="/" label="Home" />
               <LinkRouter link="/menu" label="Menu" />
               <LinkRouter link="/contact" label="Contact" />
            </ul>
         </nav>
      </div>

      <div class="mobile-navigation" v-if="isMobile">
         <button id="mobile-navigation-button" type="button" class="navigation__button--mobile menu-toggle"
            :aria-expanded="isMenuExpanded ? 'true' : 'false'" aria-haspopup="true" aria-controls="mobile-navigation"
            @click="toggleMenu">
            <span class="sr-only">Hauptnavigation</span>
            <span class="hamburger" :class="{ 'is-open': isMenuExpanded }">
               <span></span>
               <span></span>
               <span></span>
            </span>
         </button>

         <div class="nav-main__wrapper" v-if="isMenuExpanded" @click="toggleMenu">
            <nav class="nav-main">
               <ul class="list--unstyled">
                  <LinkRouter link="/" label="Home" />
                  <LinkRouter link="/menu" label="Menu" />
                  <LinkRouter link="/contact" label="Contact" />
               </ul>
            </nav>
         </div>
      </div>
   </div>
</template>

<script>
import LinkRouter from "../link/LinkRouter.vue";

export default {
   components: {
      LinkRouter,
   },
   data() {
      return {
         isMobile: "",
         isMenuExpanded: false,
         throttleTimeout: null,
      };
   },
   methods: {
      toggleMenu() {
         this.isMenuExpanded = !this.isMenuExpanded;
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
   },
   mounted() {
      //loading page check size
      this.checkIsMobile();
      window.addEventListener("resize", this.checkIsMobile);
   },
   destroyed() {
      window.removeEventListener("resize", this.throttledCheckIsMobile);
   },
};
</script>

<style lang="scss" scoped>
.header {
   padding: 1rem;

   @include for-phone-only {
      height: $header-height-mobile;
   }

   .inner {
      display: flex;
      justify-content: space-between;
   }
}

.header-is-open {
   background-color: $color-background;
   bottom: 0;
   left: 0;
   position: fixed;
   right: 0;
   top: 0;
   z-index: 1001;
}

.logo__container {
   width: auto;

   @include for-phone-only {
      z-index: 1000;
   }

   .logo {
      a {
         display: block;
      }

      img {
         @include for-phone-only {
            height: 60px;
            width: 60px;
         }
      }
   }
}

.mobile-navigation {
   @include for-phone-only {
      align-items: center;
      display: flex;
      flex: 1 1 0;
      justify-content: flex-end;
      position: relative;
   }

   .nav-main__wrapper {
      display: flex;

      @include for-phone-only {
         align-items: center;
         background: $color-background;
         display: flex;
         height: 100%;
         justify-content: center;
         left: 0;
         position: fixed;
         top: 0;
         width: 100%;
         z-index: 900;
      }
   }

   .nav-main li {
      @include responsive-font-size(2rem, 2.4rem);
      justify-content: center;
      padding: 20px;
      width: 100%;
   }
}

.menu-toggle {
   background-color: transparent;
   border: 0;
   cursor: pointer;
   height: 4rem;
   padding: 10px;
   width: 4rem;

   @include for-phone-only {
      z-index: 1000;
   }
}

.hamburger {
   display: flex;
   height: 100%;
   position: relative;
   width: 100%;

   span {
      background-color: currentColor;
      border: 1px solid currentColor;
      position: absolute;
      transition: all 0.3s;

      &:first-child {
         top: 0;
         width: 20px;
      }

      &:nth-child(2) {
         top: 50%;
         width: 12px;
      }

      &:nth-child(3) {
         top: 100%;
         width: 20px;
      }
   }
}

.hamburger.is-open span:nth-child(1) {
   transform: translateY(10px) rotate(-45deg);
   width: 22px;
}

.hamburger.is-open span:nth-child(2) {
   opacity: 0;
}

.hamburger.is-open span:nth-child(3) {
   transform: translateY(-10px) rotate(45deg);
   width: 22px;
}

.nav-main__wrapper {
   align-items: center;
   display: flex;
   justify-content: flex-end;
}

.nav-main {
   li {
      padding-inline: 2rem;
      text-align: center;
   }
}
</style>
