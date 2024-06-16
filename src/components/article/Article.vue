<template>
   <article class="article" :id="article.id">
      <section class="article__content">
         <div class="inner">
            <div class="grid-2--tablet-landscape-up">
               <div class="grid-item">
                  <div class="article__content__heading">
                     <hgroup>
                        <h1>{{ article.heading }}</h1>
                        <h2>{{ article.headingDescription }}</h2>
                     </hgroup>
                  </div>
                  <div class="article__content__separator">✻</div>
                  <div v-if="article.content.length > 1" class="article__content__text">
                     <p v-for="article in article.content" :key="article.id">
                        {{ article.text }}
                     </p>
                  </div>
                  <div v-else class="article__content__text">
                     <router-link to="/menu">Speisekarte / Menu</router-link>
                  </div>
               </div>
               <div class="grid-item">
                  <div class="grid-2--tablet-landscape-up grid-image-gallery">
                     <slot id="image-gallery"></slot>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </article>
</template>

<script>
import LinkRouter from '../link/LinkRouter.vue';

export default {
   components: {
      LinkRouter,
   },
   props: {
      article: {
         type: Object,
         required: true
      },
   },
};
</script>

<style lang="scss" scoped>
.article {
   padding-block: 4.5rem;

   &.reverse {
      .grid-2--tablet-landscape-up {
         display: flex;
         flex-direction: column-reverse;

         @include for-tablet-landscape-up {
            flex-direction: row-reverse;
         }
      }
   }

   .grid-2--tablet-landscape-up {
      @include for-tablet-landscape-up {
         gap: 3rem;
      }
   }

   .grid-item:first-child {
      @include for-tablet-landscape-up {
         padding-inline: 2rem;
      }
   }

   .grid-item:nth-child(2) {
      @include for-tablet-landscape-up {
         padding-inline-start: 3rem;
      }
   }

   .grid-image-gallery {
      @include for-tablet-portrait-down {
         display: flex;
         flex-direction: column;
         gap: 3rem;
         margin-block: 3rem;
      }
   }
}

.article__content__heading {
   text-align: center;

   h2 {
     @include responsive-font-size(8.5rem, 10rem);
      color: $color-secondary;
      font-family: "HerrVonMuellerhoff", "Brush Script MT Italic", sans-serif;
      font-weight: 400;
      text-align: center;

      @include for-tablet-portrait-up {
         @include responsive-font-size(10rem, 10.5rem);
      }
   }
}

.article__content__separator {
   @include responsive-font-size(1.7rem, 1.8rem);
   font-family: serif;
   margin-block: 2.4rem;
   opacity: 0.8;
   text-align: center;
}

.article__content__text {
   @include responsive-font-size(1.8rem, 1.9rem);
   text-align: center;

   a {
      @include responsive-font-size(2rem, 2.1rem);
      color: $color-primary-dark;
      text-transform: uppercase;
      overflow: hidden;
      padding-block: 1rem;
      position: relative;
      text-decoration-line: none;
      transition: color 0.2s ease-in;
      width: auto;

      &:hover,
      &:focus {
         color: $color-primary;
      }

      &::before {
         border: 1px solid currentColor;
         bottom: 0;
         content: "";
         left: 0;
         position: absolute;
         transform-origin: center left;
         transform: scale3d(0, 1, 1);
         transition-delay: 3s;
         transition: transform .3s cubic-bezier(.22, .61, .36, 1);
         width: 0;
      }

      &:hover::before,
      &:focus::before {
         transition-delay: 0s;
         transform: scale3d(1, 1, 1);
         width: 100%;
      }
   }
   
}
</style>
