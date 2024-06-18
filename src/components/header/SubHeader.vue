<template>
   <div :id="subHeader.id" class="subheader">
      <div class="hero__container two-thirds-height">
         <div class="hero__container__image">
             <picture>
               <source 
                  type="image/webp" 
                  :srcset="generateSrcset(subHeader.imgSrc, 'webp')" 
                  sizes="(max-width: 599px) 400px, (max-width: 899px) 600px, 1200px" />
               <img 
                  :src="subHeader.imgSrc"
                  :width="subHeader.width"
                  class="hero__image"
                  loading="lazy" 
                  alt="" />
            </picture>
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
   methods: {
      generateSrcset(imgSrc, format) {
         const smallSrc = imgSrc.replace(/\.(jpg|png|webp)/, `-small.${format}`);
         const mediumSrc = imgSrc.replace(/\.(jpg|png|webp)/, `-medium.${format}`);
         const largeSrc = imgSrc.replace(/\.(jpg|png|webp)/, `-large.${format}`);
         return `
            ${smallSrc} 400w,
            ${mediumSrc} 600w,
            ${largeSrc} 1200w
         `;
      },
      observeElement(entries, observer) {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               // Beispiel: Eine Klasse hinzufügen, um das Element zu animieren
               entry.target.classList.add('fade-in');
               observer.unobserve(entry.target);
            }
         });
      },
   },
   mounted() {
      const observer = new IntersectionObserver(this.observeElement, {
         threshold: [0.7],
      });

      const headline = this.$el.querySelector("hgroup");
      if (headline) {
         observer.observe(headline);
      }
   }

};
</script>

<style lang="scss" scoped>
.subheader {
   padding-block: 5rem;
}

.two-thirds-height {
   min-height: calc(100vh / 1.5);
   min-height: calc(100dvh / 1.5);
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

   hgroup {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.5s ease-in, transform 0.5s ease-in;

      &.fade-in {
         opacity: 1;
         transform: translate(0);
      }
   }
}
</style>
