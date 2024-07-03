<template>
  <div class="py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      <div class="lg:text-center">
        <h2 class="text-base text-gold font-semibold tracking-wide uppercase">
          Methodology
        </h2>
        <p
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-darkBlue sm:text-4xl"
        >
          How we work
        </p>
      </div>

      <div class="mt-10">
        <dl
          class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-10"
        >
          <div
            v-for="(item, index) in methodologyItems"
            :key="index"
            class="relative"
          >
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gold text-white"
              >
                <p class="h-6 w-6 text-lg">{{ item.icon }}</p>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-darkBlue">
                {{ item.title }}
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-blue-500">
              {{ item.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const methodologyItems = [
  {
    title: "Scoring",
    description:
      "The scoring is based on 4 pillars to increase the comprehensiveness of the ranking. As different data sources were examined in each country, the calculated scores are only comparable on a national level.",
    icon: "💡",
  },
  {
    title: "Concept",
    description:
      "The scoring is based on 4 pillars to increase the comprehensiveness of the ranking. As different data sources were examined in each country, the calculated scores are only comparable on a national level.",
    icon: "🔎",
  },
  {
    title: "Data Collection",
    description:
      "Medical experts were invited by Statista and Newsweek to participate in an online survey to recommend hospitals on a national and international level. Recommendations for own employer were not allowed.",
    icon: "📝",
  },
  {
    title: "Evaluation",
    description:
      "For the evaluation, Statista R applies a scoring model. The scores were calculated for each hospital in each of the 4 pillars and weighted as follows: Recommendations from medical experts (49% national, 5% international), patient experience (14.5%), hospital quality metrics (29%), PROMs implementation (2.5%).",
    icon: "🏆",
  },
];
</script>
