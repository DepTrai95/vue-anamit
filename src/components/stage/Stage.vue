<template>
   <div class="stage" :class="{ 'stage__half-height': !headerHeightMax }">
      <div class="stage__background">
         <picture v-if="showBackground">
            <source 
               type="image/webp" 
               srcset="
                  /img/stage-background-small.webp 400w,
                  /img/stage-background-medium.webp 600w,
                  /img/stage-background-large.webp 1200w
               " 
               sizes="(max-width: 599px) 400px, (max-width: 899px) 600px, 1200px" />
            <img src="/img/stage-background-large.webp" width="1200" height="600" alt=""/>
         </picture>
      </div>
      <hgroup class="stage__headline">
         <h1>{{ headline }}</h1>
         <h2 v-if="showSubHeader">Welcome - Xin chào</h2>
      </hgroup>
   </div>
</template>

<script>
   export default {
      props: {
         headerHeightMax: {
            type: Boolean,
            default: false,
         },
         headline: {
            type: String,
            required: true,
         },
         showSubHeader: {
            type: Boolean,
            default: false,
         },
         showBackground: {
            type: Boolean,
            default: false,
         },
      },
      
   }
</script>

<style lang="scss" scoped>
.stage {
   min-height: 100vh;
   position: relative;
}

.stage__half-height {
   min-height: 50vh;
}

.stage__background {
   background-color: #333;
   inset: 0;
   position: absolute;

   img {
      height: 100%;
      object-fit: cover;
      width: 100%;
   }
}

.stage__headline {
   display: flex;
   flex-direction: column-reverse;
   inset: 0;
   justify-content: center;
   padding-inline: 1.8rem;
   position: absolute;

   h1 {
      color: $color-white;
      margin: 0;
      margin-block-start: -3rem;

      @include for-tablet-landscape-up {
         @include responsive-font-size(4.5rem, 4.8rem);
      }
   }

   h2 {
     @include responsive-font-size(8.5rem, 9rem);
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