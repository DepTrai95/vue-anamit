<template>
  <form @submit.prevent="submitForm" class="form">
    <!-- NAME -->
    <div class="form-group" :class="{ invalid: !name.isValid }">
      <label for="name"> Name <abbr title="Pflichtfeld">*</abbr> </label>
      <input
        class="form-control"
        type="text"
        id="name"
        v-model.trim="name.val"
        @blur="clearValidity('name')"
        placeholder="Name"
      />
      <p v-if="!name.isValid" :class="{ invalid: !message.isValid }">
        Bitte geben Sie Ihren Namen an.
      </p>
    </div>
    <!-- EMAIL -->
    <div class="form-group" :class="{ invalid: !email.isValid }">
      <label for="email"> E-Mail <abbr title="Pflichtfeld">*</abbr> </label>
      <input
        class="form-control"
        type="email"
        id="email"
        v-model.trim="email.val"
        @blur="clearValidity('email')"
        placeholder="E-Mail"
      />
      <p v-if="!email.isValid" :class="{ invalid: !message.isValid }">
        Das E-Mail Feld darf nicht leer sein!
      </p>
    </div>
    <!-- DATEPICKER -->
    <div class="form-group" :class="{ invalid: !selectedDate.isValid }">
      <label for="selectedDate">
        Datum und Zeit <abbr title="Pflichtfeld">*</abbr>
      </label>
      <Calendar
        v-model="selectedDate.val"
        showIcon
        inputId="selectedDate"
        iconDisplay="input"
        dateFormat="dd.mm.yy"
        showTime
        hourFormat="24"
        :minDate="minDate"
        :maxDate="maxDate"
        :manualInput="false"
        class="customCalendarStyle"
        @blur="clearValidity('selectedDate')"
        placeholder="DD/MM/YYYY - HH:MM"
      />
      <p
        v-if="!selectedDate.isValid"
        :class="{ invalid: !selectedDate.isValid }"
      >
        Es muss ein Datum ausgewählt sein
      </p>
    </div>
    <!-- MESSAGE -->
    <div class="form-group" :class="{ invalid: !message.isValid }">
      <label for="message">
        Nachricht <abbr title="Pflichtfeld">*</abbr>
      </label>
      <textarea
        class="form-control"
        id="message"
        rows="7"
        v-model.trim="message.val"
        @blur="clearValidity('message')"
        placeholder="Ihre Nachricht"
      ></textarea>
      <p v-if="!message.isValid" :class="{ invalid: !message.isValid }">
        Nachricht darf nicht leer sein
      </p>
    </div>
    <!-- RECHENAUFGABE -->
    <div class="form-group" :class="{ invalid: !mathProblem.isValid }">
      <label for="mathProblem">Rechenaufgabe: {{ mathProblem.example }} <abbr title="Pflichtfeld">*</abbr></label>
      <input
        class="form-control"
        type="number"
        id="mathProblem"
        v-model.trim="mathProblem.val"
        @blur="clearValidity('mathProblem')"
        placeholder="Lösen Sie die Rechenaufgabe"
      />
      <p v-if="!mathProblem.isValid" :class="{ invalid: !mathProblem.isValid }">
        Bitte lösen Sie die Rechenaufgabe korrekt.
      </p>
    </div>
    <p v-if="!formIsValid">Bitte überprüfen Sie noch einmal ihre Angaben.</p>
    <base-button mode="btn--primary">Nachricht abschicken</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: {
        val: "",
        isValid: true,
      },
      email: {
        val: "",
        isValid: true,
      },
      message: {
        val: "",
        isValid: true,
      },
      selectedDate: {
        val: "",
        isValid: true,
      },
      mathProblem: { val: '', isValid: true, example: generateRandomMathProblem() },
      formIsValid: true,
      minDate: null,
      maxDate: null,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.name.val === "") {
        this.name.isValid = false;
        this.formIsValid = false;
      }
      if (
        this.email.val === "" ||
        !this.email.val.includes("@") ||
        this.email.val < 8
      ) {
        this.email.isValid = false;
        this.formIsValid = false;
      }

      if (this.selectedDate.val === "") {
        this.selectedDate.isValid = false;
        this.formIsValid = false;
      }
      const correctAnswer = eval(this.mathProblem.example);
      if (parseInt(this.mathProblem.val, 10) !== correctAnswer) {
        this.mathProblem.isValid = false;
        this.formIsValid = false;
      }
      if (this.message.val === "") {
        this.message.isValid = false;
        this.formIsValid = false;
      }
    },
    formatDate(string) {
      const curDateString = string.toString().substring(4, 21).split(" ");

      const monthNames = {
        Jan: "01",
        Feb: "02",
        Mar: "03",
        Apr: "04",
        May: "05",
        Jun: "06",
        Jul: "07",
        Aug: "08",
        Sep: "09",
        Oct: "10",
        Nov: "11",
        Dec: "12",
      };

      const day = curDateString[1];
      const month = monthNames[curDateString[0]];
      const year = curDateString[2];
      const time = curDateString[3];

      const formattedDate = `${day}.${month}.${year} - ${time} Uhr`;
      return formattedDate;
    },
    async submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        console.log("Form validation failed!");
        return;
      } else {
        const formData = {
          name: this.name.val,
          email: this.email.val,
          message: this.message.val,
          date: this.formatDate(this.selectedDate.val),
        };

        try {
          const response = await fetch("/.netlify/functions/sendEmail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              to: "info@aroi-thaicuisine.de", // set email of receiver
              name: formData.name,
              email: formData.email,
              text: formData.message,
              date: formData.date,
            }),
          });

          // console.log(response.body);
        } catch (error) {
          console.error("Fehler beim Abschicken des Kontaktformulars:", error);
        }

        this.$router.push("/success");
      }
    },
  },
  mounted() {
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + 1);
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 12);

    this.minDate = currentDate;
    this.maxDate = maxDate;
  },
};

function generateRandomMathProblem() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operator = '+';
  return `${num1} ${operator} ${num2}`;
}
</script>

<style lang="scss" scoped>

.form {
  background-color: $color-primary-lightest;
  border-radius: 4px;
  padding: 2rem;

  @include for-tablet-portrait-up {
    padding: 3.5rem;
  }

  @include for-tablet-landscape-up {
    margin: -3rem;
  }
}

.form-group {
  margin-bottom: 2rem;
}

.form-control {
  @include responsive-font-size(1.6rem, 1.8rem);
  border: 2px solid transparent;
  border-radius: 4px;
  display: block;
  color: $color-body;
  font-family: inherit;
  line-height: 1.3;
  min-height: 5rem;
  outline: none;
  padding: 1rem 2rem;
  transition: border 0.3s;
  width: 100%;

  &:hover,
  &:focus,
  &:focus-visible {
    border: 2px solid $color-primary;
  }
}

label {
  @include responsive-font-size(1.6rem, 1.8rem);
  color: $color-body;
  display: block;
  font-weight: 500;
  margin-bottom: 1rem;
}

textarea {
  resize: vertical;
}

.invalid {
  label,
  p {
    @include responsive-font-size(1.6rem, 1.8rem);
    color: $color-error;
    margin-top: 0.5rem;
  }

  input,
  textarea {
    border: 1px solid $color-error;
  }
}
</style>

<style lang="scss">
.p-calendar {
  border-radius: 4px;
  color: $color-body;
  min-height: 5rem;
  width: 100%;
}

.p-inputtext {
  @include responsive-font-size(1.6rem, 1.8rem);
  border: 2px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  color: $color-body;
  padding: 1rem 2rem;
  transition: background-color 0.3s, border-color 0.3s;

  &:hover,
  &:focus,
  &:focus-within,
  &:focus-visible {
    border: 2px solid $color-primary;
  }

  &:focus {
    background-color: $color-background;
  }
}
.p-datepicker-month,
.p-datepicker-year,
.p-hour-picker > span,
.p-minute-picker > span {
  @include responsive-font-size(1.8rem, 2rem);
  padding: 1.5rem 0;
}

.p-datepicker td > span {
  padding: 2rem;
}

.p-datepicker-trigger-icon {
  height: 2rem;
  margin-top: -1rem;
  width: 2rem;
}

.p-component,
.p-datepicker-calendar {
  @include responsive-font-size(1.6rem, 1.8rem);
}

.p-datepicker .p-monthpicker .p-monthpicker-month {
  padding: 1rem;
}
</style>
