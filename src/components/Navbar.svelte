<script lang="ts">
    import "../global.css";
    import { browser } from "$app/environment";
    import { onMount } from "svelte";

    let isOpen = false;
  
    function toggleMenu() {
      isOpen = !isOpen;
    }


    let nav: HTMLElement | null = null;
    let scrollY = 0;
    const NAVBAR_COLOR = 'bg-gray-900';

    onMount(() => {
      console.log(nav);
    }
    );

    $: if (scrollY > 300) {
      nav?.classList.add(NAVBAR_COLOR);
    } else {
      nav?.classList.remove(NAVBAR_COLOR);
    }
  </script>

  <svelte:window bind:scrollY={scrollY} />

  
  <nav bind:this={nav} class="sticky top-0 z-10 h-16">
    <div id="nav" class="{ isOpen ? NAVBAR_COLOR : '' } max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center md:justify-center h-16">
        <div class="flex items-center">
          <!-- <div class="flex-shrink-0"> -->
            <!-- Your logo goes here -->
            <!-- <span class="text-white font-semibold">{scrollY}</span> -->
          <!-- </div> -->
        </div>
        <div class="hidden md:block">
          <div class="">
            <a href="#" class="nav-btn { scrollY < 300 ? 'bg-[rgba(0,0,0,0.4)]' : '' } text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Home</a>
            <!-- <a href="#" class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#" class="text-[#f5d3a1] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a> -->
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="-mr-2 flex md:hidden">
          <button type="button" on:click={() => toggleMenu()} class="bg inline-flex items-center justify-center p-2 rounded-md bg-gray-100 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <!-- Heroicon name: menu -->
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <!-- Icon when menu is open. -->
            <!-- Heroicon name: x -->
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="{isOpen ? 'block' : 'hidden'} md:hidden {NAVBAR_COLOR}">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#" class="text-white-300 hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
        <!-- <a href="#" class="text-white-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
        <a href="#" class="text-white-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a> -->
      </div>
    </div>
  </nav> 
  
  <style lang="postcss">
    @import 'tailwindcss/base';
    @import 'tailwindcss/components';
    @import 'tailwindcss/utilities';
  </style>
