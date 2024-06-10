
<script lang="ts">
    import "../global.css";
    import Navbar from "../components/Navbar.svelte";
    import ProjectCard from "../components/ProjectCard.svelte";
    import BlogCard from "../components/BlogCard.svelte";

    let projects: HTMLElement;

    function scrollToProjects() {
      projects.scrollIntoView({behavior: "smooth"});
    }

</script>

<!--  -->
<Navbar Y_SWITCH=300/>
<div class="w-full h-[64px] bg-black absolute top-0"></div>
<div class="w-full h-[calc(96vh-64px)] bg-black">
  <img src="DSCF2919.JPG" alt="highway in orvietto" class="object-cover w-full h-[96vh] -translate-y-[64px]  bg-black blur-sm "/>
  <div class="h-[calc(96vh)] absolute inset-0 flex flex-col items-center justify-center">
    <h1 class="text-4xl font-bold text-white">Nathan Todzy</h1>
    <p class="text-lg text-white mt-10">Computer Science and Mathematics Student</p>
    <p class="text-lg text-white">University of Wisconsin-Madison</p>

    <div class="flex flex-row mt-5">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded">
      Resume
      </button>
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-2 rounded" on:click={() => scrollToProjects()}>
      Projects
      </button>
    </div>
  </div>
</div>
<div class="w-full">
  <div class="flex flex-col md:flex-row">
    <div class="md:w-1/2 bg-zinc-600 p-5">
      <h1 class="text-4xl md:text-center font-bold text-white">About Me</h1>
      <p class="lg:text-xl text-lg text-white pt-3">I am a Junior dual majoring in Computer Sciences and Mathematics at the University-Wisconsin Madison. I intend to graduate in December 2025, and hope to work in Software Optimizations in the Aerospace Industry.</p>
      <p class="lg:text-xl text-lg text-white pt-5">I have extensive expierence with working in Python Full Stack Web Development. Though I am trying to branch further into low-level computing. Most recently I've taken <a href="">CS354</a> which focuses on C and System Fundementals and <a href="">CS536</a> which is an Introductory Course on Compilers</p>
      <p class="lg:text-xl text-lg  text-white pt-5" >Currently I am employed at the <a href="https://csl.cs.wisc.edu/docs/csl/2012-06-28-about/">Computer Systems Laboratory</a> at UW-Madison as a Student System Administrator and am on the DevOps Team</p>
      <p class="lg:text-xl text-lg  text-white pt-5" >Outside of work and school, you'll typically find me playing Euphonium in the UW Marching Band, Taking Pictures, or Cooking</p>

      <div class="flex justify-center pt-5">
        <!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded">
          View Cookbook
        </button> -->
        <!-- <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-2 rounded">
          View Photography
        </button> -->
      </div>
    </div>
    <div class="md:w-1/2 md:w-[50vw] md:bg-white bg-zinc-500 p-10 flex items-center justify-center">
      <img src="https://media.licdn.com/dms/image/C5603AQFIsoqKSeNwmQ/profile-displayphoto-shrink_800_800/0/1641528601591?e=1723075200&v=beta&t=qASq4oju5DJ43u-mtK9H3dZBQGpAT0vb7TZJCTUC9_Q" alt="Picture of Me" class="object-cover lg:w-80 w-[80%]  mx-auto rounded-xl"/>
    </div>
  </div>
</div>
<!--  -->
<div bind:this={projects} id="projects" class="w-full bg-white pt-5">
  <h1 class="text-4xl font-bold text-center">Highlighted Projects</h1>

  <div class="flex flex-col md:flex-row p-5 items-center justify-center">
    <ProjectCard title="Contravail" text="An Unlaunched Digital Planner that used Flask to aggregate assignment data from multiple Learning Management Systems with auto-integration into calendar apps" image="" url="!"/>
    <ProjectCard title="CS400: Modified RBT" text="Modified a Red-Black Tree data structure to allow for multiple sorting algorithms to be implmented at once while reducing space-complexity." image="" url="asd"/>
  </div>
</div>
<div class="w-full bg-zinc-600  pt-5">
  <h1 class="text-4xl text-white font-bold text-center">What I've Been Up To</h1>

  <div class="flex flex-col md:flex-row p-5 items-center justify-center">
    <BlogCard title="Title1" text="Lorem ipsum dolor sit admit" url="!"/>
    <BlogCard title="Title2" text="asd" url="asd"/>
    <BlogCard title="Title3" text="Lorem ipsum dolor sit admit" url="!"/>
    
    <!-- Arrow to read More-->
     <a href="/blog">
      <div class="project-card w-[400px] h-[400px] p-2 flex flex-col items-center justify-center bg-white m-2 rounded-lg transition hover:scale-95">
        <h1 class="text-2xl font-bold text-black text-center">View More</h1>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-black" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-1a7 7 0 100-14 7 7 0 000 14zm-1-7a.5.5 0 01.5-.5h3.793l-2.147-2.146a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L14.293 10.5H10.5a.5.5 0 01-.5-.5z" clip-rule="evenodd" />
        </svg>
      </div>
     </a>
    </div>
</div>


<!--  -->
<style lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>