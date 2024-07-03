<template>
  <section class="my-6 mx-12 py-4 px-10 rounded-lg shadow-md">
    <div class="flex flex-col sm:flex-row gap-4 mb-4">
      <select
        v-model="selectedCountry"
        class="p-2 border rounded hover:text-white hover:bg-darkBlue bg-gray-200 transition-all cursor-pointer"
      >
        <option value="">Select a country</option>
        <option v-for="country in countries" :key="country" :value="country">
          {{ country }}
        </option>
      </select>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Enter hospital name"
        class="p-2 border rounded flex-grow"
      />
      <button
        @click="searchHospitals"
        class="p-2 bg-gold text-darkBlue rounded hover:bg-lightGold transition-all cursor-pointer"
      >
        Search hospitals
      </button>
    </div>
    <div
      v-if="cities.length"
      class="flex flex-col mb-4 overflow-y-auto max-h-32 border rounded pl-4"
    >
      <label v-for="city in cities" :key="city" class="flex items-center gap-2">
        <input
          type="checkbox"
          v-model="selectedCities"
          :value="city"
          class="form-checkbox h-5 w-5 text-darkBlue"
        />
        {{ city }}
      </label>
    </div>
    <div class="overflow-x-auto">
      <table
        class="min-w-full bg-white text-darkBlue border rounded shadow overflow-x-auto"
      >
        <thead>
          <tr>
            <th
              @click="sortBy('rank')"
              class="p-4 border-b cursor-pointer text-left"
            >
              Rank
            </th>
            <th
              @click="sortBy('name')"
              class="p-4 border-b cursor-pointer text-left"
            >
              Hospital
            </th>
            <th
              @click="sortBy('country')"
              class="p-4 border-b cursor-pointer text-left"
            >
              Country
            </th>
            <th
              @click="sortBy('city')"
              class="p-4 border-b cursor-pointer text-left"
            >
              City
            </th>
            <th
              @click="sortBy('proms')"
              class="p-4 border-b cursor-pointer text-left"
            >
              PROMS Survey
            </th>
            <th class="p-4 border-b"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="hospital in paginatedHospitals"
            :key="hospital.id"
            class="hover:bg-gray-100"
          >
            <td
              class="p-4 border-b border-darkBlue text-gold font-bold text-center"
            >
              {{ hospital.rank }}
            </td>
            <td class="p-4 border-b border-darkBlue text-left">
              {{ hospital.name }}
            </td>
            <td class="p-4 border-b border-darkBlue text-left">
              {{ hospital.country }}
            </td>
            <td class="p-4 border-b border-darkBlue text-left">
              {{ hospital.city }}
            </td>
            <td class="p-4 border-b border-darkBlue text-center">
              {{ hospital.proms > 0 ? "✔" : "" }}
            </td>
            <td class="p-4 border-b border-darkBlue text-center">
              <a
                class="text-darkBlue hover:underline hover:text-lightBlue"
                :href="'https://r.statista.com' + hospital.link"
                >Learn more</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex justify-between items-center mt-4">
      <select
        v-model="rowsPerPage"
        @change="changeRowsPerPage"
        class="p-2 border rounded cursor-pointer bg-gray-200 hover:text-white hover:bg-darkBlue transition-all"
      >
        <option v-for="n in [10, 25, 50, 100]" :key="n" :value="n">
          {{ n }}
        </option>
      </select>
      <div class="flex items-center gap-2">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="p-2 border rounded cursor-pointer bg-gray-200 hover:text-white hover:bg-darkBlue transition-all"
        >
          Previous
        </button>
        <span>{{ currentPage }} / {{ totalPages }}</span>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="p-2 border rounded cursor-pointer bg-gray-200 hover:text-white hover:bg-darkBlue transition-all"
        >
          Next
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, onMounted, computed, watch } from "vue";

interface HospitalsRankList {
  filters: {
    country: Record<string, string>;
  };
  rankingList: RankedHospital[];
}
interface Hospital {
  rank: number;
  name: string;
  country: string;
  city: string;
  proms: 0 | 1;
  score: number;
  link: string;
}

interface RankedHospital {
  rank: number;
  hospital: Hospital;
}

const hospitals = ref<Hospital[]>([]);
const countries = ref<string[]>([]);

const searchQuery = ref<string>("");
const selectedCountry = ref<string>("");
const selectedCities = ref<string[]>([]);
const cities = ref<string[]>([]);
const rowsPerPage = ref<number>(10);
const currentPage = ref<number>(1);

const updateCities = () => {
  const selectedCountryHospitals = hospitals.value.filter(
    (hospital) => hospital.country === selectedCountry.value
  );
  cities.value = [
    ...new Set(selectedCountryHospitals.map((hospital) => hospital.city)),
  ];
  selectedCities.value = [...cities.value];
};

const filteredHospitals = computed(() => {
  return hospitals.value.filter((hospital) => {
    const matchesSearch = hospital.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const matchesCountry =
      !selectedCountry.value || hospital.country === selectedCountry.value;
    const matchesCity =
      !selectedCountry.value || selectedCities.value.includes(hospital.city);
    return matchesSearch && matchesCountry && matchesCity;
  });
});

const sortedHospitals = ref<Hospital[]>([]);
const sortByColumn = ref<string>("rank");
const sortDirection = ref<"down" | "up">("down");

const sortBy = (column: string) => {
  if (sortByColumn.value === column) {
    sortDirection.value = sortDirection.value === "down" ? "up" : "down";
  } else {
    sortByColumn.value = column;
    sortDirection.value = "down";
  }
};

const sortRank = () => {
  sortedHospitals.value = [...filteredHospitals.value].sort((a, b) => {
    return sortDirection.value === "down" ? a.rank - b.rank : b.rank - a.rank;
  });
};

watch(
  [filteredHospitals, sortByColumn, sortDirection],
  () => {
    if (sortByColumn.value !== "rank") {
      sortedHospitals.value = [...filteredHospitals.value].sort((a, b) => {
        let compareA = a[sortByColumn.value as keyof Hospital];
        let compareB = b[sortByColumn.value as keyof Hospital];
        if (typeof compareA === "string" && typeof compareB === "string") {
          compareA = compareA.toLowerCase();
          compareB = compareB.toLowerCase();
        }
        if (compareA < compareB) return sortDirection.value === "down" ? -1 : 1;
        if (compareA > compareB) return sortDirection.value === "down" ? 1 : -1;
        return 0;
      });
    } else {
      sortRank();
    }
    console.log(sortedHospitals.value, sortByColumn.value, sortDirection.value);
  },
  { immediate: true }
);

const paginatedHospitals = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage.value;
  const end = start + rowsPerPage.value;
  return sortedHospitals.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(filteredHospitals.value.length / rowsPerPage.value);
});

const changeRowsPerPage = () => {
  currentPage.value = 1;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const searchHospitals = () => {
  currentPage.value = 1;
};

watch(selectedCountry, updateCities);

const fetchHospitals = async () => {
  try {
    const response = await axios.get<HospitalsRankList[]>("/api");
    const { filters, rankingList } = response.data;
    hospitals.value = Object.entries(rankingList).map((x) => {
      return {
        rank: x[1].rank,
        ...x[1].hospital,
      };
    });
    countries.value = Object.entries(filters.country).map((x) => x[1]);
  } catch (error) {
    console.error("Error fetching hospitals:", error);
  }
};
onMounted(fetchHospitals);
</script>
