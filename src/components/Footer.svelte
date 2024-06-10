<script lang="ts">
    import "../global.css";
    import github from '$lib/Github.svg';
    import linkedin from '$lib/LinkedIn.png';
    import instagram from '$lib/Instagram.svg';

</script>

<div class="bottom-0 w-[100%] bg-zinc-800 text-white text-center py-4">
    <!-- Add Socials -->
    <div class="flex justify-center space-x-4">
        <a href="https://github.com/ntodzy" class="text-white hover:bg-zinc-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            <img src={github} alt="Github" class="w-6 h-6">
        </a>
        <a href="https://www.linkedin.com/in/nathan-todzy" class="text-white hover:bg-zinc-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            <img src={linkedin} alt="LinkedIn" class="w-6 h-6">
        </a>
        <a href="https://www.instagram.com/ntodzy/" class="text-white hover:bg-zinc-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            <img src={instagram} alt="Instagram" class="w-6 h-6">
        </a>
    </div>
    <p class="text-sm mt-2">&copy; 2024 Nathan Todzy</p>
</div>


<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
