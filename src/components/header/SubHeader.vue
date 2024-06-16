<template>
   <div :id="subHeader.id" class="subheader">
      <div class="hero__container two-thirds-height">
         <div class="hero__container__image">
            <img :src="subHeader.imgSrc" class="hero__image" loading="lazy" alt="">
         </div>
         <div class="hero__container__heading">
            <hgroup>
               <h2 class="h1">{{ subHeader.heading }}</h2>
               <h3 class="h2">{{ subHeader.headingDescription }}</h3>
            </hgroup>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      subHeader: {
         type: Object,
         required: true
      },
   },
};
</script>

<style lang="scss" scoped>
.subheader {
   padding-block: 5rem;
}

.two-thirds-height {
   min-height: calc(100vh / 1.5);
}

.hero__container {
   overflow: hidden;
   position: relative;
}

.hero__container__image {
   position: absolute;
   inset: 0;

   img {
      height: 100%;
      object-fit: cover;
      width: 100%;
   }
}

.hero__container__heading {
   align-items: center;
   display: flex;
   justify-content: center;
   inset: 0;
   position: absolute;
   text-align: center;

   .h1 {
      color: $color-white;
      margin: 0;
      margin-block-start: -3rem;

      @include for-tablet-landscape-up {
         @include responsive-font-size(4.5rem, 4.8rem);
      }
   }
   
   .h2 {
      @include responsive-font-size(8.5rem, 10rem);
      color: $color-secondary;
      font-family: "HerrVonMuellerhoff", "Brush Script MT Italic", sans-serif;
      font-weight: 400;
      text-align: center;

      @include for-tablet-landscape-up {
         @include responsive-font-size(10rem, 10.5rem);
      }
   }
}
</style>
