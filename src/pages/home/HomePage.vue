<template>
   <div class="content">
      <skip-links></skip-links>
      <Article :article="aboutUsText">
         <div class="grid-item">
            <picture>
               <source type="image/webp" srcset="
                     /img/hanoi-street-small.webp 400w,
                     /img/hanoi-street-medium.webp 600w,
                     /img/hanoi-street-large.webp 1200w"
                  sizes="(max-width: 599px) 400px, (max-width: 899px) 600px, 1200px" />
               <img src="/img/hanoi-street-large.webp" width="600" loading="lazy" alt="" />
            </picture>
         </div>
         <div class="grid-item">
            <picture>
               <source type="image/webp" srcset="
                     /img/hanoi-street-seller-small.webp 400w,
                     /img/hanoi-street-seller-medium.webp 600w,
                     /img/hanoi-street-seller-large.webp 1200w"
                  sizes="(max-width: 599px) 400px, (max-width: 899px) 600px, 1200px" />
               <img src="/img/hanoi-street-seller-large.webp" width="600" loading="lazy" alt="" />
            </picture>
         </div>
      </Article>
      <SubHeader :subHeader="subHeaderContent"></SubHeader>
      <Article class="reverse" :article="menuText">
         <picture>
            <source type="image/webp" srcset="
                  /img/cha-gio-re-small.webp 400w,
                  /img/cha-gio-re-medium.webp 600w,
                  /img/cha-gio-re-large.webp 1200w"
               sizes="(max-width: 599px) 400px, (max-width: 899px) 600px, 1200px" />
            <img src="/img/cha-gio-re-large.webp" width="1200" loading="lazy" alt="" />
         </picture>
      </Article>
   </div>
</template>

<script>
import SkipLinks from '@/components/skiplinks/SkipLinks.vue';
import Article from '@/components/article/Article.vue';
import SubHeader from '@/layout/header/SubHeader.vue';

export default {
   components: {
      SkipLinks,
      Article,
      SubHeader,
   },
   data() {
      return {
         aboutUsText: {
            id: 'about-us',
            heading: 'Über uns',
            headingDescription: 'Discover',
            content: [
               { id: '1', text: 'Anamit ist ein rein vietnamesisches Restaurant, welches sich im Herzen von Dresden- Neustadt befindet. Bei uns tauchen Sie in eine komplett andere Welt.'},
               { id: '2', text: 'In einer historischen Atmosphäre aus den 70er und 80er von Vietnam bieten wir Ihnen die Möglichkeit die bekanntesten Street-Food-Gerichte des Landes zu erkunden und genießen.'},
               { id: '3', text: 'Die vietnamesische Küche ist bekannt für ihre Vielfältigkeit und die Anzahl der möglichen Zutaten. Sie gilt auch als eine gesunde Alternative zu anderen Küchen.'},
               { id: '4', text: 'Hier im Anamit Restaurant bereiten wir die Gerichte ganz nach originalen Rezepten frisch und mit viel Liebe zu. Lassen Sie sich durch eine kulinarische Reise verführen, um eine andere Seite Vietnams zu entdecken'},
            ]
         },
         menuText: {
            id: 'menu',
            heading: 'Menu',
            headingDescription: 'Discover',
            content: [
               { id: '1', text: 'Anamit ist ein rein vietnamesisches Restaurant, welches sich im Herzen von Dresden- Neustadt befindet.Bei uns tauchen Sie in eine komplett andere Welt.' },
            ]
         },
         subHeaderContent: {
            id: 'tasteful-recipes',
            heading: 'Recipes',
            headingDescription: 'Tasteful',
            imgSrc: '/img/tasteful-recipes.webp',
         }
      }
   }
}
</script>

<style lang="scss" scoped></style>