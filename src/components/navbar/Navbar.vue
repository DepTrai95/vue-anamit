<template>
   <div class="navbar" :class="{'is-open': isMenuExpanded}">
      <div class="logo__container">
         <div class="logo">
            <router-link to="/">
               <img src="/img/anamit.png" alt="zur Startseite" height="50" width="140" />
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
                  <LinkRouter link="/contact" label="Kontakt" />
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
.navbar {
   background: transparent;
   color: $color-white;
   display: flex;
   flex-direction: row-reverse;
   padding: 1rem;
   position: absolute;
   width: 100%;
   z-index: 1000;

   @include for-phone-only {
      height: $header-height-mobile;
   }

   @include for-tablet-landscape-up {
      flex-direction: row;
      justify-content: space-between;
   }

   .inner {
      display: flex;
      justify-content: space-between;
   }
}

.is-open {
   background-color: $color-background;
   bottom: 0;
   left: 0;
   position: fixed;
   right: 0;
   top: 0;
   z-index: 1001;
}

.logo__container {
   align-items: center;
   display: flex;
   
   @include for-phone-only {
      flex-grow: 1;
      z-index: 1000;
   }

   .logo {
      a {
         display: block;
      }

      img {
         @include for-phone-only {
            height: 50px;
            width: 140px;
         }
      }
   }
}

.mobile-navigation {
   @include for-phone-only {
      align-items: center;
      display: flex;
      flex-grow: 1;
      position: relative;
   }

   .nav-main__wrapper {
      display: flex;

      @include for-phone-only {
         align-items: center;
         background: $color-header;
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

   .nav-main {
      li {
         @include responsive-font-size(1.8rem, 2rem);
         color: $color-white;
         justify-content: center;
         padding: 10px;
         text-transform: uppercase;
         width: 100%;
      }
   }
}

.menu-toggle {
   background-color: transparent;
   border: 0;
   color: $color-white;
   cursor: pointer;
   height: 3.6rem;
   padding: 10px;
   width: 3.6rem;

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
         width: 25px;
      }

      &:nth-child(2) {
         top: 50%;
         width: 25px;
      }

      &:nth-child(3) {
         top: 100%;
         width: 25px;
      }
   }
}

.hamburger.is-open span:nth-child(1) {
   transform: translateY(7px) rotate(-45deg);
}

.hamburger.is-open span:nth-child(2) {
   opacity: 0;
}

.hamburger.is-open span:nth-child(3) {
   transform: translateY(-9px) rotate(45deg);
}

.nav-main__wrapper {
   align-items: center;
   display: flex;
   justify-content: flex-end;
}

.nav-main {
   li {
      padding-inline: 1.5rem;
      text-align: center;
   }
}
</style>
