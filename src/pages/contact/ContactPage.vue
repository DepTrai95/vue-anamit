<template>
   <section class="contact" id="contact-page">
      <div class="inner">
         <section class="contact-us" id="contact-us">
            <div class="grid--default grid-2--tablet-landscape-up">
               <div class="grid-item">
                  <div class="reservation-info">
                     <p class="text-center">
                        Wir nehmen jeden Tag gerne Reservierungen entgegen und sind zu
                        folgenden Öffnungszeiten telefonisch erreichbar:
                        <span>{{ lunchTime }}</span>
                        <span>{{ dinnerTime }}</span>
                     </p>
                     <p>Anamit – Vietnamese Authentic</p>
                     <p>Louisenstraße 30, 01099 Dresden</p>
                     <p>Tel.: <a :href="`tel:`+numberNeustadt">{{ numberNeustadt }}</a></p>
                     <p>ODER</p>
                     <p>Tolkewitzer Str. 2, 01277 Dresden</p>
                     <p>Tel.: <a :href="`tel:` + numberBlauesWunder">{{ numberBlauesWunder }}</a></p>
                     <p>E-Mail: <a :href="`mailto:` + mailTo">info@anamit.de</a></p>
                     <p>
                        Wir freuen uns auf Ihre Kontaktaufnahme. Schreiben Sie uns und wir melden uns so schnell wie
                        möglich zurück. Vielen Dank!
                     </p>
                  </div>
               </div>
               <div class=" grid-item">
                  <contact-form></contact-form>
               </div>
            </div>
         </section>
      </div>
   </section>
</template>

<script>
import ContactForm from "../../components/form/ContactForm.vue";

export default {
   components: {
      ContactForm,
   },
   data() {
      return {
         numberNeustadt: "0351 65677999",
         numberBlauesWunder: "0351 31269988",
         lunchTime: "12:00 - 14:30",
         dinnerTime: "17:00 - 22:00",
         mailTo: "info@anamit.de"
      };
   },
};
</script>

<style lang="scss" scoped>
#contact-page {

}

.contact-us {
   padding: 5rem 0;
}

.reservation-info {
   align-items: center;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;

   span {
      display: block;
      margin-block: .5rem;
   }
}

a {
   color: $color-primary;
}

p {
   margin-block: 0 1.5rem;
} 
</style>