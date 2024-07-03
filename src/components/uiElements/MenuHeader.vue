<script setup lang="ts">
import { ref } from "vue";
import LogoIcon from "@/components/icons/LogoIcon.vue";

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="bg-darkBlue shadow-md py-4">
    <div class="container mx-auto flex justify-between items-center px-6">
      <div class="flex items-center">
        <LogoIcon class="h-10 text-white" />
      </div>
      <nav class="hidden md:flex">
        <ul class="flex space-x-6">
          <li>
            <a href="#" class="text-white hover:text-gold">Work</a>
          </li>
          <li>
            <a href="#" class="text-white hover:text-gold">Health</a>
          </li>
          <li>
            <a href="#" class="text-white hover:text-gold">Growth</a>
          </li>
          <li>
            <a href="#" class="text-white hover:text-gold">Top Rankings</a>
          </li>
          <li>
            <a href="#" class="text-white hover:text-gold">About Us</a>
          </li>
        </ul>
      </nav>
      <div class="md:hidden">
        <button class="focus:outline-none" @click="toggleMenu">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div v-if="isMenuOpen" class="md:hidden">
      <ul class="flex flex-col items-center space-y-4 py-4">
        <li>
          <a href="#" class="text-white hover:text-gold">Work</a>
        </li>
        <li>
          <a href="#" class="text-white hover:text-gold">Health</a>
        </li>
        <li>
          <a href="#" class="text-white hover:text-gold">Growth</a>
        </li>
        <li>
          <a href="#" class="text-white hover:text-gold">Top Rankings</a>
        </li>
        <li>
          <a href="#" class="text-white hover:text-gold">About Us</a>
        </li>
      </ul>
    </div>
  </header>
</template>
