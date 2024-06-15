<template>
   <article class="article" :id="article.id">
      <section class="article__content">
         <div class="inner">
            <div class="article__content__heading">
               <hgroup>
                  <h1>{{ article.heading }}</h1>
                  <h2>{{ article.headingDescription }}</h2>
               </hgroup>
            </div>
            <div class="article__content__separator">✻</div>
            <div class="article__content__text">
               <p v-for="article in article.content" :key="article.id">
                  {{ article.text }}
               </p>
            </div>
         </div>
      </section>
   </article>
</template>

<script>
export default {
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
   padding-block: 3rem;
}

.article__content__heading {
   text-align: center;
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
}
</style>
