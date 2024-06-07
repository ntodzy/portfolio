
<script lang="ts">
    import "../global.css";
    import Landing from "../components/Landing.svelte";
    import Navbar from "../components/Navbar.svelte";
    import ProjectCard from "../components/ProjectCard.svelte";
    import Footer from "../components/Footer.svelte";

    let x = 1;

    
    function foo(val: number) {
        x = x * val;
    }

</script>

<!--  -->
<Navbar />
<div class="w-full h-[calc(96vh-64px)] -translate-y-[64px]">
  <img src="/DSCF2919.JPG" alt="highway in orvietto" class="object-cover w-full h-[96vh]"/>
  <div class="h-[calc(96vh)] absolute inset-0 flex flex-col items-center justify-center">
    <h1 class="text-4xl font-bold text-white">Nathan Todzy</h1>
    <p class="text-lg text-white mt-10">Computer Science and Mathematics Student</p>
  </div>
</div>

<div class="w-full">
  <div class="flex flex-col md:flex-row">
    <div class="md:w-1/2 bg-zinc-600 p-5">
      <h1 class="text-4xl md:text-center font-bold text-white">About Me</h1>
      <p class="text-lg md:text-center pt-2 text-white pt-3">I am a Junior dual majoring in Computer Sciences and Mathematics at the University-Wisconsin Madison. I intend to graduate in December 2025, and hope to work in Software Optimizations in the Aerospace Industry.</p>
      <p class="text-lg md:text-center pt-2 text-white pt-5">I have extensive expierence with working in Python Full Stack Web Development. Though I am trying to branch further into low-level computing. Most recently I've taken <a href="">CS354</a> which focuses on C and System Fundementals and <a href="">CS536</a> which is an Introductory Course on Compilers</p>
      <p class="text-lg md:text-center pt-2 text-white pt-5" >Currently I am employed at the <a href="https://csl.cs.wisc.edu/docs/csl/2012-06-28-about/">Computer Systems Laboratory</a> at UW-Madison as a Student System Administrator and am on the DevOps Team</p>
      <p class="text-lg md:text-center pt-2 text-white pt-5" >Outside of work and school, you'll typically find me playing Euphonium in the UW Marching Band, Taking Pictures, or Cooking</p>
    </div>
    <div class="md:w-1/2 md:w-[50vw] md:bg-white bg-zinc-500 p-10 flex items-center justify-center">
      <img src="https://media.licdn.com/dms/image/C5603AQFIsoqKSeNwmQ/profile-displayphoto-shrink_800_800/0/1641528601591?e=1723075200&v=beta&t=qASq4oju5DJ43u-mtK9H3dZBQGpAT0vb7TZJCTUC9_Q" alt="Picture of Me" class="object-cover w-[80%] mx-auto rounded-xl"/>
    </div>
  </div>
</div>
<!-- 
<div class="w-full bg-white pt-5">
  <h1 class="text-4xl font-bold text-center">Highlighted Projects</h1>

  <div class="flex flex-col md:flex-row p-5 items-center justify-center">
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
  </div>
</div>

<div class="w-full h-[30vh] bg-gray-400 pt-5">
  <h1 class="text-4xl font-bold text-center">What I'm Up To</h1>
  <p class="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
</div> -->

<Footer />

<!--  -->
<style lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

  .cover-image {

    background-image: url('/DSCF2919.JPG');
    background-size: cover;
    background-position: center;
  }


</style>