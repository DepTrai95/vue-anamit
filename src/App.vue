<template>
  <SVGList></SVGList>
  <div id="skip-links-home"></div>
  <Header></Header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in" @before-enter="beforeEnter">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <Footer></Footer>
</template>

<script>
import SVGList from '@/assets/svg/SVGList.vue';
import Header from '@/layout/header/Header.vue';
import Footer from '@/layout/footer/Footer.vue';

export default {
  components: {
    SVGList,
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
.route-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: opacity 0.15s ease-out, transform 0.15s ease-out;
}

.route-leave-active {
  transition: opacity 0.15s ease-in, transform 0.15s ease-out;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>