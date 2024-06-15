<template>
   <div class="stage">
      <div class="stage__background">
         <img src="/img/stage-background.webp" alt="">
      </div>
      <hgroup class="stage__headline">
         <h1>Anamit - Vietnamese Authentic</h1>
         <h2>Welcome - Xin chào</h2>
      </hgroup>
   </div>
</template>

<script>
   export default {
      
   }
</script>

<style lang="scss" scoped>
.stage {
   min-height: 100vh;
   position: relative;
}

.stage__background {
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
   }
}
</style>