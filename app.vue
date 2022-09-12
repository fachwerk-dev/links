<script setup lang="ts">
import { useFetch } from "#app";

const transform = (data) => {
  const titles = data.values[0].map((title) => {
    return title.split(" ").join("").toLowerCase();
  });
  return data.values.slice(1).map((row, i) => {
    return Object.fromEntries(row.map((value, i) => [titles[i], value]));
  });
};

const id = "1ZrQ_OwfitB7dvZh4LzUmanbEX6oR3kWI2YVBTkFLZfc";
const key = "AIzaSyAxP7q5yFR1ZikJTVr_gcyECYgbJCEghqc";
const url = `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/links?alt=json&key=${key}&majorDimension=ROWS`;

const { data } = await useFetch(url, {
  transform,
  key: "sheets",
});

const cutoff = 562;
</script>
<template>
  <div class="min-h-screen bg-gray-100 p-8 antialiased">
    <div class="max-w-xl mx-auto">
      <div class="h-16" />
      <h1 class="font-bold text-5xl tracking-tight">▦ Fachwerk link archive</h1>
      <div class="h-12" />
      <div class="flex flex-col gap-4">
        <a
          v-for="(row, i) in data.slice(cutoff)"
          class="bg-white rounded p-6 shadow flex gap-4 hover:bg-gray-50 transition"
          :href="row.inputurl"
          target="_blank"
        >
          <div
            class="bg-red-500 font-medium text-white rounded-full w-10 h-10 gap-8 grid place-content-center"
          >
            {{ 562 + i + 1 }}
          </div>
          <div class="flex flex-col gap-2">
            <div class="font-bold">{{ row.title }}</div>
            <div class="font-serif text-sm">{{ row.metadescription }}</div>
            <div class="text-xs text-sky-500 underline underline-offset-2">
              {{ row.inputurl }}
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
