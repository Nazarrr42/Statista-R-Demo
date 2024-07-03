<script setup lang="ts">
import MenuHeader from "../uiElements/MenuHeader.vue";
import DetailsSection from "../uiElements/DetailsSection.vue";
import RankingTable from "../uiElements/RankingTable.vue";
import AboutSection from "../uiElements/AboutSection.vue";
import MethodologySection from "../uiElements/MethodologySection.vue";
import ContactForm from "../uiElements/ContactForm.vue";
import MenuFooter from "../uiElements/MenuFooter.vue";

defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <MenuHeader />
  <DetailsSection />
  <RankingTable />
  <AboutSection />
  <MethodologySection />
  <ContactForm />
  <MenuFooter />
</template>
