<script setup lang="ts">
import LogoIcon from "@/components/icons/LogoIcon.vue";
</script>

<template>
  <footer
    class="bg-white shadow-md py-4 relative bottom-0 border-b-[10px] border-gold"
  >
    <div
      class="container mx-auto flex justify-between items-center flex-col md:flex-row px-6"
    >
      <div class="flex items-center">
        <LogoIcon class="h-10 text-darkBlue" />
      </div>
      <nav class="hidden md:flex">
        <ul class="flex space-x-6">
          <li>
            <a href="#" class="text-darkBlue hover:text-lightBlue">Work</a>
          </li>
          <li>
            <a href="#" class="text-darkBlue hover:text-lightBlue">Health</a>
          </li>
          <li>
            <a href="#" class="text-darkBlue hover:text-lightBlue">Growth</a>
          </li>
          <li>
            <a href="#" class="text-darkBlue hover:text-lightBlue"
              >Top Rankings</a
            >
          </li>
          <li>
            <a href="#" class="text-darkBlue hover:text-lightBlue">About Us</a>
          </li>
        </ul>
      </nav>
      <div class="md:hidden">
        <ul class="flex flex-col items-center space-y-4 py-4">
          <li>
            <a href="#" class="text-darkBlue hover:text-lightBlue">About Us</a>
          </li>
          <li>
            <a href="#" class="text-darkBlue hover:text-lightBlue"
              >Partner overview</a
            >
          </li>
          <li>
            <a href="#" class="text-darkBlue hover:text-lightBlue">Legal</a>
          </li>
          <li>
            <a href="#" class="text-darkBlue hover:text-lightBlue"
              >Privacy statement</a
            >
          </li>
          <li>
            <a href="#" class="text-darkBlue hover:text-lightBlue"
              >Contact Us</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
