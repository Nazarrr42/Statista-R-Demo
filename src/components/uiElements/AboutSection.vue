<template>
  <section class="bg-white px-12 py-6">
    <div class="text-left mb-8">
      <h2 class="text-lg font-semibold text-gold">THE PROJECT</h2>
      <h1 class="text-3xl font-bold text-darkBlue mt-2">About the project</h1>
      <p class="text-darkblue mt-4">
        The ranking for World’s Best Hospitals 2023 is based on an online survey
        of tens of thousands medical professionals in 28 countries as well as
        publicly available data on hospital quality metrics and patient
        experience.
      </p>
      <p class="text-darkblue mt-4">
        For the first time, this fifth edition of the ranking includes a PROMs
        implementation score based on a voluntary Patient-Reported Outcome
        Measures (PROMs) implementation survey conducted by Statista. For the
        scope of the ranking, more than 50,000 hospitals were identified
        worldwide.
      </p>
    </div>
    <div class="flex flex-col md:flex-row items-center justify-between">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-2/3">
        <div class="bg-gray-100 p-6 rounded-lg text-center shadow-md">
          <p class="text-3xl font-semibold text-gold">50,000+</p>
          <p class="text-darkblue">HOSPITALS EVALUATED</p>
        </div>
        <div class="bg-gray-100 p-6 rounded-lg text-center shadow-md">
          <p class="text-3xl font-semibold text-gold">80,000+</p>
          <p class="text-darkblue">MEDICAL PROFESSIONALS SURVEYED</p>
        </div>
        <div class="bg-gray-100 p-6 rounded-lg text-center shadow-md">
          <p class="text-3xl font-semibold text-gold">2,300</p>
          <p class="text-darkblue">HOSPITALS AWARDED</p>
        </div>
      </div>
      <div class="mb-6 md:mb-0">
        <img
          src="@/assets/Newsweek_WBH2023_Overview.png"
          alt="Awards"
          class="w-40 h-auto mx-auto"
        />
      </div>
    </div>
  </section>
</template>
