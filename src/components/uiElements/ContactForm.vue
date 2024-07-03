<script setup lang="ts">
import { ref } from "vue";

const fullName = ref("");
const company = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");

const submitForm = () => {
  console.log({
    fullName: fullName.value,
    company: company.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
  });
};
</script>

<template>
  <div class="py-8 bg-dark-blue">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      <div class="lg:text-center">
        <h2 class="text-base text-gold font-semibold tracking-wide uppercase">
          Let us talk to you
        </h2>
        <p
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"
        >
          Write us a message
        </p>
      </div>

      <form
        class="mt-10 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        @submit.prevent="submitForm"
      >
        <div class="sm:col-span-1">
          <label for="full-name" class="block text-sm font-medium text-white"
            >Full Name *</label
          >
          <div class="mt-1">
            <input
              id="full-name"
              v-model="fullName"
              type="text"
              name="full-name"
              autocomplete="name"
              class="py-3 px-4 block w-full shadow-sm focus:ring-gold focus:border-gold border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div class="sm:col-span-1">
          <label for="company" class="block text-sm font-medium text-white"
            >Company</label
          >
          <div class="mt-1">
            <input
              id="company"
              v-model="company"
              type="text"
              name="company"
              autocomplete="organization"
              class="py-3 px-4 block w-full shadow-sm focus:ring-gold focus:border-gold border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div class="sm:col-span-1">
          <label for="email" class="block text-sm font-medium text-white"
            >E-Mail *</label
          >
          <div class="mt-1">
            <input
              id="email"
              v-model="email"
              type="email"
              name="email"
              autocomplete="email"
              class="py-3 px-4 block w-full shadow-sm focus:ring-gold focus:border-gold border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div class="sm:col-span-1">
          <label for="phone" class="block text-sm font-medium text-white"
            >Phone (optional)</label
          >
          <div class="mt-1">
            <input
              id="phone"
              v-model="phone"
              type="tel"
              name="phone"
              autocomplete="tel"
              class="py-3 px-4 block w-full shadow-sm focus:ring-gold focus:border-gold border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-medium text-white"
            >Your message</label
          >
          <div class="mt-1">
            <textarea
              id="message"
              v-model="message"
              name="message"
              rows="4"
              class="py-3 px-4 block w-full shadow-sm focus:ring-gold focus:border-gold border-gray-300 rounded-md"
            ></textarea>
          </div>
        </div>

        <div class="sm:col-span-2">
          <p class="text-sm text-white">
            * Mandatory fields. Information about the timing of deleting
            personal data, the countries where we save data (e.g., U.S., EU, UK,
            Singapore), and the companies we collaborate with can be found in
            our
            <a href="#" class="font-medium text-gold hover:underline"
              >privacy statement</a
            >.
          </p>
        </div>

        <div class="sm:col-span-2">
          <button
            type="submit"
            class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-dark-blue bg-gold hover:bg-lightGold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold transition-all"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
@import "tailwindcss/utilities";

.bg-dark-blue {
  background-color: #1a202c;
}

.text-dark-blue {
  color: #1a202c;
}
</style>
