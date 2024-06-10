<script lang="ts">
    import "../../global.css";
    import Navbar from "../../components/Navbar.svelte";

    let _education = [
        {
            name: "University of Wisconsin - Madison",
            degrees: ["B.S. Computer Sciences", " B.S. Mathematics"],
            minor: ["Cert. Integrated Liberal Studies"],
            grad_date: "December 2025",
            gpa: "3.5",
            courses: [
                "CS252 - Introduction to Machine Architecture", 
                "CS300 - Programming II", 
                "CS354 - Machine Progamming and Orginization", 
                "CS400 - Programming III", 
                "CS536 - Progamming Languages and Compilers", 
                "Math 375 - Theory Based Linear Algebra and Multivariable Calculus I",
                "Math 376 - Theory Based Calculus and Differential Equations II",
                "CS/Math 240 - Discrete Mathematics",
                "CS/Math 514 - Numerical Analysis",
            ],
            color: "#C5050C"
        },
        {
            name: "Appleton North High School",
            degrees: ["High School Diploma"],
            minor: [],
            grad_date: "May 2022",
            gpa: "3.98",
            courses: [
                "AP Computer Science Principles (3)",
                "AP Computer Science A (5)",
                "AP Calculus AB (5)",
                "AP Calculus BC (5)",
                "AP Physics C: Mechanics (5)",
            ],
            color: "3f5277"
        }
    ]

    let i = 0;
</script>

<Navbar Y_SWITCH=0/>
<div class="flex justify-center bg-gray-400">
    <div>
        <h1 class="text-4xl font-bold text-white text-center">Education</h1>
        <div class="w-[100vw] lg:w-[50vw] p-2 flex flex-row">
            <div class="md:w-3/4 bg-red-500 rounded-xl">
                <div class="flex flex-col p-5">
                    <p class="text-2xl font-bold">{_education[i].name}</p>
                    <p class="text-lg"> 
                        {_education[i].degrees.map((degree) => {
                            return degree;
                        })}
                    </p>
                    <p class="text-lg">
                        {_education[i].minor.map((degree) => {
                            return degree;
                        })}
                    </p>

                    <p class="text-lg">{_education[i].grad_date} - {_education[i].gpa} GPA</p>
                    <div class="flex flex-col mt-5">
                        <p class="text-lg font-bold">Courses</p>
                        <ul>
                            {#each _education[i].courses as course}
                                <li class="text-lg">{course}</li>
                            {/each}
                        </ul>
                    </div>
                </div>

                </div>
            <div class="md:block hidden md:w-1/4">
                <p>pp </p>
            </div>
        </div>  
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={() => i = (i + 1) % _education.length}>
            Next Education
        </button>
    </div>
</div>

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