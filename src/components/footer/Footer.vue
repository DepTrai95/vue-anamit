<template>
   <footer class="footer">
      <div class="restaurant__information">
         <h3>ANAMIT – VIETNAMESE AUTHENTIC</h3>
         <div class="footer__addresses">
            <p>
               Louisenstraße 30<br>
               01099 Dresden
            </p>
            <p>Tolkewitzer Straße 2<br>
               01277 Dresden
            </p>
         </div>
         <div class="footer__opening-hours">
            <h3>ÖFFNUNGSZEITEN:</h3>
            <p>
               Montag - Freitag:<br>
               12:30 - 14:30 Uhr<br>
               17:00 - 22:30 Uhr
            </p>
            <p>Samstage und Feiertage:<br>
               12:00 - 23:00 Uhr
            </p>
            <p>
               Sonntage:<br>
               12:00 - 22:30 Uhr
            </p>
         </div>
      </div>
      <div class="copyright__area">
         <div class="copyright__area__container">
            <ul class="copyright__area__container__list">
               <LinkRouter link="/impressum" label="Impressum" />
               <LinkRouter link="/contact" label="Kontakt" />
               <li>
                  <a href="https://www.facebook.com/anamit.restaurant/">Anamit on Facebook</a>
               </li>
            </ul>
         </div>
      </div>
   </footer>
</template>

<script>
import LinkRouter from '../link/LinkRouter.vue'

export default {
   components: {
      LinkRouter,
   },
   data() {
      return {}
   }
}
</script>

<style lang="scss" scoped>
.footer {
   background-color: $color-background;
   color: $color-white;

   &__addresses,
   &__opening-hours {
      @include responsive-font-size(1.8rem, 2rem);
      margin-block-end: 5rem;
   }
}

.restaurant__information {
   margin-inline: 2rem;
   padding-block: 5rem;

   @include for-tablet-portrait-up {
      margin: 0 auto;
      width: calc(100% / 3);
   }
}

.copyright__area {
   background-color: $color-background-copyright;
   color: $color-body-copyright;
   padding-block: 4rem;

   @include for-tablet-portrait-up {
      padding-block: 6rem 5rem;   
   }
}
.copyright__area__container {

}

.copyright__area__container__list {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
   margin: 0;
   padding-inline: 3rem;
}
</style>

<style lang="scss">
.copyright__area__container__list {
   align-items: center;
   display: flex;

   li {
      @include for-tablet-landscape-up {
         &::after {
            content: "\2022";
            font-size: 2rem;
            margin: 0 0.5rem;
         }
      }

      a {
         @include responsive-font-size(1.2rem, 1.3rem);
         align-items: center;
         display: flex;
         letter-spacing: 1px;
         line-height: 1.2;
         margin-block: 0.25rem;
         margin-inline: 1rem;
         padding: 0.6rem 0;
         text-transform: uppercase;
      }
      
      &:last-child::after {
         content: "";
      }
   }

}
</style>