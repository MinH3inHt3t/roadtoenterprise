<template>
  <!-- Navbar goes here -->
  <header>
    <nav
      class="
        flex flex-wrap
        items-center
        justify-between
        w-full
        py-4
        md:py-0
        px-4
        text-lg text-gray-700
        bg-[#202326]
        shadow-lg
      "
    >
      <div class="inline-block">
        <a href="#" class="flex my-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="32"
            viewBox="0 0 24 24"
            fill="#1B6185"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M10.5 17.15l3.98-2.28c.67-.38.67-1.35 0-1.74l-3.98-2.28c-.67-.38-1.5.11-1.5.87v4.55c0 .77.83 1.26 1.5.88zM21 6h-7.59l2.94-2.94c.2-.2.2-.51 0-.71s-.51-.2-.71 0L12 5.99 8.36 2.35c-.2-.2-.51-.2-.71 0s-.2.51 0 .71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm-1 14H4c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z"
            />
          </svg>
          <span class="my-auto -ml-12 h-6 text-[#1B6185]"> MovieCity</span>
        </a>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="menu-button"
        class="h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        @click="showMenuToggle"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div
        class="w-full md:flex md:items-center md:w-auto"
        id="menu "
        :class="{ hidden: toggleMenu }"
      >
        <ul
          class="pt-4 text-left text-white md:flex md:justify-between md:pt-0"
        >
          <li>
            <a class="md:p-4 py-2 block hover:text-purple-400" href="#"
              >Movies</a
            >
          </li>
          <li>
            <a class="md:p-4 py-2 block hover:text-purple-400" href="#"
              >Series</a
            >
          </li>
          <li>
            <a class="md:p-4 py-2 block hover:text-purple-400" href="#">VIP</a>
          </li>
          <li>
            <a class="md:p-4 py-2 block hover:text-purple-400" href="#"
              >Download</a
            >
          </li>
          <li>
            <a class="md:p-4 py-2 block hover:text-purple-400" href="#"
              >About</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

let toggleMenu = ref(false);

function showMenuToggle() {
  toggleMenu.value = !toggleMenu.value;
}
</script>

<style>
</style>
