<template>
   <dialog v-if="dialogIsOpen" class="dialog">
      <h2>Kontaktaufnahme wieder möglich</h2>
      <p>Aufgrund eines technischen Problems in unserem System konnten wir zwischen dem 20.06.2024 und 27.07.2024
         keine Nachrichten/Reservierungen empfangen die über E-Mail oder über unser Kontaktformular versendet worden sind.</p>
      <p>Wir entschuldigen uns für etwaige Unannehmlichkeiten und möchten Sie bitten, Ihre Anfrage oder Reservierung
         erneut zu senden, falls Sie in letzter Zeit keine Antwort von uns erhalten haben.</p>
      <p>Das Problem wurde inzwischen behoben und unser System funktioniert wieder wie gewohnt. Vielen Dank für Ihr
         Verständnis.</p>
      <base-button mode="btn--primary" @click="closeDialog">Schließen</base-button>

   </dialog>
</template>

<script>
import BaseButton from '../button/BaseButton.vue';

export default {
   components: {
      BaseButton
   },
   data() {
      return {
         dialogIsOpen: false,
      }
   },
   methods: {
      closeDialog() {
         this.dialogIsOpen = false;
         document.body.removeAttribute('style');
      },
   },
   mounted() {
      const now = new Date();
      const oneWeekLater = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // Add 7 days
      const fixedDate = new Date('2024-08-06T00:00:00Z');

      const hasSeenDialog = localStorage.getItem('hasSeenDialog');

      if (!hasSeenDialog) {
         localStorage.setItem('hasSeenDialog', fixedDate.toISOString());
         this.dialogIsOpen = true;
         setTimeout(() => {
            document.body.style.overflow = 'hidden';
            document.querySelector('.dialog').showModal();
         }, 250);
      } else {
         const storedDate = new Date(hasSeenDialog);
         if (now < storedDate) {
            this.dialogIsOpen = true;
            setTimeout(() => {
               document.body.style.overflow = 'hidden';
               document.querySelector('.dialog').showModal();
            }, 250);
         }
      }

   },
};
</script>

<style lang="scss" scoped>
.dialog {
   border-color: transparent;
   border-radius: 5px;

   @include for-tablet-portrait-up {
      max-width: 750px;
   }

   h2 {
      @include responsive-font-size(2.4rem, 2.6rem);
      border-bottom: 1px solid $color-body;
      margin-block: 2rem;
      padding-block-end: 2rem;

      @include for-tablet-portrait-down {
         @include responsive-font-size(2.2rem, 2.4rem);
      }
   }

   p {
      @include responsive-font-size(1.6rem, 1.8rem);

      @include for-tablet-portrait-down {
         @include responsive-font-size(1.5rem, 1.6rem);
         margin-block: 1rem;
      }
   }
}
</style>