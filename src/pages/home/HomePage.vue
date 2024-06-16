<template>
   <div class="content">
      <Article :article="aboutUsText">
         <div class="grid-item">
            <img src="/img/hanoi-street.webp" loading="lazy" alt="">
         </div>
         <div class="grid-item">
            <img src="/img/hanoi-street-seller.webp" loading="lazy" alt="">
         </div>
      </Article>
      <SubHeader :subHeader="subHeaderContent"></SubHeader>
      <Article class="reverse" :article="menuText">
         <div class="">
            <img src="/img/cha-gio-re.webp" loading="lazy" alt="">
         </div>
      </Article>
   </div>
</template>

<script>
import Article from '../../components/article/Article.vue';
import SubHeader from '../../components/header/SubHeader.vue';

export default {
   components: {
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
               { id: '1', text: 'Anamit ist ein rein vietnamesisches Restaurant, welches sich im Herzen von Dresden- Neustadt befindet.Bei uns tauchen Sie in eine komplett andere Welt.'},
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